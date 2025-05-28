import type { Partner } from "@/core/types/partner";
import Mitra1 from '@/assets/mitra/1.jpg'
import Mitra2 from '@/assets/mitra/2.jpg'
import Mitra3 from '@/assets/mitra/3.jpg'
import Mitra4 from '@/assets/mitra/4.jpg'
import Mitra5 from '@/assets/mitra/5.jpg'

export const dummyPartners: Partner[] = [
  {
    id: 1,
    id_departement: 1,
    name: "Google",
    url: "https://google.com",
    description: "Perusahaan teknologi multinasional",
    detail: "Spesialisasi dalam layanan dan produk internet",
    image: Mitra1,
    status: "active",
    home: "home",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2025-03-20T14:45:00Z"
  },
  {
    id: 2,
    id_departement: 1,
    name: "Microsoft",
    url: "https://microsoft.com",
    description: "Pengembang perangkat lunak terkemuka",
    detail: "Produsen sistem operasi Windows dan produk Office",
    image: Mitra2,
    status: "active",
    home: "home",
    created_at: "2024-02-10T09:15:00Z",
    updated_at: "2025-04-05T11:20:00Z"
  },
  {
    id: 3,
    id_departement: 2,
    name: "Amazon",
    url: "https://amazon.com",
    description: "Perusahaan e-commerce dan komputasi awan",
    detail: "Penyedia layanan AWS dan marketplace terbesar",
    image: Mitra3,
    status: "active",
    home: "home",
    created_at: "2024-03-05T14:20:00Z",
    updated_at: "2025-01-30T16:10:00Z"
  },
  {
    id: 4,
    id_departement: 3,
    name: "Tesla",
    url: "https://tesla.com",
    description: "Produsen mobil listrik dan energi bersih",
    detail: "Inovator dalam teknologi baterai dan kendaraan otonom",
    image: Mitra4,
    status: "active",
    home: "home",
    created_at: "2024-04-20T11:45:00Z",
    updated_at: "2025-02-15T13:30:00Z"
  },
  {
    id: 5,
    id_departement: 2,
    name: "Samsung",
    url: "https://samsung.com",
    description: "Perusahaan elektronik konsumen global",
    detail: "Produsen smartphone dan perangkat elektronik terkemuka",
    image: Mitra5,
    status: "active",
    home: "home",
    created_at: "2024-05-12T08:10:00Z",
    updated_at: "2025-05-10T10:25:00Z"
  },
];