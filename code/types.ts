// types.ts

// Estrutura Base da Mensagem (conforme Markdown)
export interface WebSocketMessage<T> {
  event: string;
  timestamp: string;
  session_id: string;
  payload: T;
}

// 1. Telemetry Payload
export interface TelemetryPayload {
  motion: {
    distance_cm: number;
    velocity_cms: number;
    acceleration_cms2: number;
    left_wheel_rpm: number;
    right_wheel_rpm: number;
    angle_deg: number;
  };
  imu: {
    accel: { x: number; y: number; z: number };
    gyro: { x: number; y: number; z: number };
    mag: { x: number; y: number; z: number };
    orientation: { roll_deg: number; pitch_deg: number; yaw_deg: number };
  };
  derived: {
    hall_velocity_cms: number;
    hall_acceleration_cms2: number;
    accel_velocity_cms: number;
    accel_acceleration_cms2: number;
  };
  proximity: {
    distance_mm: number;
    range_min_mm: number;
    range_max_mm: number;
  };
  gps: {
    latitude: number;
    longitude: number;
    altitude_m: number;
    satellites: number;
  };
  battery: {
    voltage_v: number;
    percentage: number;
  };
  status: 'IDLE' | 'RUNNING' | 'PAUSED' | 'ERROR';
}

// 2. Mission Start Payload
export interface MissionStartPayload {
  path_type: 'manual' | 'line_follower' | 'autonomous';
  target_distance_cm: number;
  target_angle_deg: number;
  speed_cms: number;
  operator: string;
}

// 3. Mission End Payload
export interface MissionEndPayload {
  total_distance_cm: number;
  total_time_s: number;
  avg_speed_cms: number;
  avg_left_rpm: number;
  avg_right_rpm: number;
  energy_consumed_mah: number;
  status: 'COMPLETED' | 'ABORTED' | 'FAILED';
}

// 4. Error Report Payload
export interface ErrorReportPayload {
  source: string;
  code: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  recovery_attempted: boolean;
}

// 5. System Status Payload
export interface SystemStatusPayload {
  cpu_temp_c: number;
  heap_free_bytes: number;
  wifi_signal_dbm: number;
  uptime_s: number;
  firmware_version: string;
  mode: string;
}