// server.ts
import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { 
  WebSocketMessage, 
  TelemetryPayload, 
  MissionStartPayload, 
  MissionEndPayload, 
  ErrorReportPayload,
  SystemStatusPayload
} from './types';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Restringir para a URL do front-end (Vercel/Hostinger)
    methods: ["GET", "POST"]
  }
});

// Simulação de persistência (Substituir pelo Supabase client real)
const saveToDatabase = async (collection: string, data: any) => {
  // console.log(`[DB] Persistindo em '${collection}':`, JSON.stringify(data).substring(0, 50) + '...');
  // Aqui entraria: await supabase.from(collection).insert(data);
};

io.on('connection', (socket: Socket) => {
  console.log(`[IO] Nova conexão: ${socket.id}`);

  // Identificação do cliente (simples query param na conexão)
  // Ex: ws://localhost:3000?type=car ou ?type=dashboard
  const clientType = socket.handshake.query.type;

  if (clientType === 'car') {
    socket.join('car_room');
    console.log(`[IO] 🚗 Carrinho conectado (ESP32): ${socket.id}`);
  } else {
    socket.join('dashboard_room');
    console.log(`[IO] 🖥️ Dashboard conectado: ${socket.id}`);
  }

  // --- EVENTOS VINDOS DO CARRINHO (ESP32) ---

  // 1. Telemetry Update (1 Hz)
  socket.on('telemetry.update', (msg: WebSocketMessage<TelemetryPayload>) => {
    // 1. Repassar para o front-end em tempo real
    socket.to('dashboard_room').emit('telemetry.update', msg);
    
    // 2. Salvar no banco de dados (para histórico/gráficos)
    saveToDatabase('telemetry_logs', msg);
  });

  // 3. Mission End
  socket.on('mission.end', (msg: WebSocketMessage<MissionEndPayload>) => {
    console.log(`[MISSION] Fim da missão ${msg.session_id}: ${msg.payload.status}`);
    socket.to('dashboard_room').emit('mission.end', msg);
    saveToDatabase('mission_history', msg);
  });

  // 4. Error Report
  socket.on('error.report', (msg: WebSocketMessage<ErrorReportPayload>) => {
    console.error(`[ERROR] Falha no carrinho: ${msg.payload.code}`);
    socket.to('dashboard_room').emit('error.report', msg);
    saveToDatabase('error_logs', msg);
  });

  // 5. System Status (Heartbeat)
  socket.on('system.status', (msg: WebSocketMessage<SystemStatusPayload>) => {
    socket.to('dashboard_room').emit('system.status', msg);
  });

  // --- EVENTOS VINDOS DO DASHBOARD (WEB) ---

  // 2. Mission Start
  socket.on('mission.start', (msg: WebSocketMessage<MissionStartPayload>) => {
    console.log(`[MISSION] Comando de início recebido para: ${msg.session_id}`);
    
    // Envia o comando para o carrinho
    socket.to('car_room').emit('mission.start', msg);
    saveToDatabase('mission_logs', msg);
  });

  socket.on('disconnect', () => {
    console.log(`[IO] Desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor WebSocket rodando na porta ${PORT}`);
});