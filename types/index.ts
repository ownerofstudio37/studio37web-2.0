// Database Types
export interface Profile {
  id: string;
  email: string;
  name: string | null;
  role: 'admin' | 'user' | 'client';
  created_at: string;
  updated_at: string;
}

export interface Gallery {
  id: string;
  user_id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  gallery_id: string;
  image_url: string;
  title: string | null;
  description: string | null;
  order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  user_id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  lead_id: string | null;
  user_id: string;
  event_date: string;
  event_type: string;
  location: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}
