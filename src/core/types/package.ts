export interface Package {
  id: number;
  title: string;
  description: string;
  category?: string | null;
  created_at?: string;
  updated_at?: string;
}
