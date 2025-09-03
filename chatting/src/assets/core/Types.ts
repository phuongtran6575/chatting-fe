export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  display_name: string;
  avatar_url: string | null;
  status: 'online' | 'offline' | 'away';
  last_seen: string; // ISO string
  created_at: string; // ISO string
  updated_at: string; // ISO string
}