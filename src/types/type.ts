export interface Office {
  id: number;
  price: number;
  duration: number;
  name: string;
  slug: string;
  thumbnail: string;
  about: string;
  address: string;
  city: City;
  photos: Photo[];
  benefits: Benefit[];
}

interface Photo {
  id: number;
  photo: string;
}

interface Benefit {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  slug: string;
  photo: string;
  officeSpaces_count: number;
  officeSpaces: Office[];
}

export interface BookingDetail {
  id: number;
  name: string;
  phone_number: string;
  booking_trx_id: string;
  is_paid: boolean;
  duration: number;
  total_amount: number;
  started_at: string;
  ended_at: string;
  office: Office;
}
