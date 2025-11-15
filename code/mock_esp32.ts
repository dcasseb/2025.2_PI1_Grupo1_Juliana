// mock_esp32.ts
import { io } from "socket.io-client";
import { WebSocketMessage, TelemetryPayload } from './types';

// Conecta simulando ser o "carrinho"
const socket = io("http://localhost:3000", {
  query: { type: "car" }
});

socket.on("connect", () => {
  console.log("✅ Carrinho Virtual Conectado!");

  // Escuta os comandos de início de missão
  socket.on("mission.start", (data) => {
    console.log("🏁 Comando recebido - Iniciando Missão:", data);
  });
});

// Loop de Telemetria (1 Hz)
setInterval(() => {
  const telemetryData: WebSocketMessage<TelemetryPayload> = {
    event: "telemetry.update",
    timestamp: new Date().toISOString(),
    session_id: "mission_test_001",
    payload: {
      status: "RUNNING",
      motion: {
        distance_cm: Math.random() * 100,
        velocity_cms: 10 + Math.random(),
        acceleration_cms2: 0.5,
        left_wheel_rpm: 120,
        right_wheel_rpm: 121,
        angle_deg: 0
      },
      imu: {
        accel: { x: 0, y: 0, z: 9.8 },
        gyro: { x: 0.1, y: 0, z: 0 },
        mag: { x: 30, y: -20, z: 50 },
        orientation: { roll_deg: 0, pitch_deg: 0, yaw_deg: 0 }
      },
      derived: {
        hall_velocity_cms: 10.1,
        hall_acceleration_cms2: 0.4,
        accel_velocity_cms: 10.2,
        accel_acceleration_cms2: 0.5
      },
      proximity: {
        distance_mm: 500 + Math.random() * 100,
        range_min_mm: 40,
        range_max_mm: 2000
      },
      gps: {
        latitude: -15.763052,
        longitude: -47.870118,
        altitude_m: 1100,
        satellites: 5
      },
      battery: {
        voltage_v: 7.4,
        percentage: 85
      }
    }
  };

  socket.emit("telemetry.update", telemetryData);
  console.log("📡 Telemetria enviada");
}, 1000); // 1 segundo