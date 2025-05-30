import type { Testimonial } from "@/core/types/testimoni";
import Lili from '@/assets/testi/lili.jpg'
import Handoko from '@/assets/testi/handoko.jpg'
import Sugiono from '@/assets/testi/sugiono.jpg'

export const dummyTestimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   id_departement: 1,
  //   name: "Budi Santoso",
  //   title: "Orang Tua Siswa",
  //   description: "Platform ini sangat membantu memahami potensi anak saya. Hasil analisisnya akurat dan rekomendasinya praktis untuk diterapkan di rumah.",
  //   home: "home",
  //   yt: "https://youtu.be/contoh1",
  //   image: "https://images.unsplash.com/photo-1598802214065-ea0324806bbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   created_at: "2024-01-10T08:30:00Z",
  //   updated_at: "2025-02-15T10:20:00Z"
  // },
  // {
  //   id: 2,
  //   id_departement: 2,
  //   name: "Anita Wijaya",
  //   title: "Guru BK",
  //   description: "Alat assessmentnya lengkap dan mudah digunakan. Sekarang saya bisa memberikan konseling yang lebih terarah berdasarkan data yang valid.",
  //   home: "home",
  //   yt: "https://youtu.be/contoh2",
  //   image: "https://images.unsplash.com/photo-1584792323921-5b1a9f1b60ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhJTIwc2Nob29scyUyMHBvdGFyaXQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  //   created_at: "2024-03-05T14:15:00Z",
  //   updated_at: "2025-01-22T09:45:00Z"
  // },
  // {
  //   id: 3,
  //   id_departement: 3,
  //   name: "Dr. Ahmad Fauzi",
  //   title: "Kepala Sekolah",
  //   description: "Sistem ini revolusioner! Membantu sekolah kami dalam pengambilan keputusan berbasis data untuk pengembangan kurikulum.",
  //   home: "home",
  //   yt: "https://youtu.be/contoh3",
  //   image: "https://media.istockphoto.com/id/2192454618/photo/asian-man-writing-on-a-book-and-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=hciOYgDiU9NScdyCsigHpicG6n9v9Lj1SLwY4-VzLs4=",
  //   created_at: "2024-02-18T11:20:00Z",
  //   updated_at: "2025-03-10T16:30:00Z"
  // },
  {
    id: 4,
    id_departement: 1,
    name: "Siti Rahmah",
    title: "Siswa Kelas 11",
    description: "Senang bisa tahu gaya belajar saya dan cara meningkatkan konsentrasi. Sekarang belajar jadi lebih efektif!",
    home: "home",
    yt: "https://youtu.be/contoh4",
    image: "https://media.istockphoto.com/id/1199571022/photo/young-happy-and-successful-south-east-asian-islamic-business-woman-with-arms-crossed-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=hIw2KevqA_sdPwncIBlmHRD98ZEYMO8bxW2j1osunaA=",
    created_at: "2024-04-22T09:10:00Z",
    updated_at: "2025-04-05T13:15:00Z"
  },
  {
    id: 5,
    id_departement: 2,
    name: "Dewi Kurnia",
    title: "Psikolog Pendidikan",
    description: "Tools assessmentnya sangat komprehensif. Saya merekomendasikan platform ini kepada rekan-rekan psikolog lainnya.",
    home: "home",
    yt: "https://youtu.be/contoh5",
    image: "https://images.unsplash.com/photo-1621398945253-00498f153e4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhJTIwcGVyc29uJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    created_at: "2024-05-30T16:45:00Z",
    updated_at: "2025-05-18T08:20:00Z"
  },
  {
    id: 6,
    id_departement: 2,
    name: "LILI GARLIAH, M.PSi. Psikolog",
    title: "Wakil Dekan Psikologi Universitas Jendral Ahmad Yani",
    description: "Dengan jatidiri.app, membantu setiap orang mengenali karakter pribadinya, minta dan bakatnya. Memudahkan orang untuk mengetahui kondisi psikologis secara online. Mudah diakses, terjangkau dan dapat diandalkan.",
    home: "home",
    yt: "https://youtu.be/contoh5",
    image: Lili,
    created_at: "2024-05-30T16:45:00Z",
    updated_at: "2025-05-18T08:20:00Z"
  },
  {
    id: 7,
    id_departement: 2,
    name: "HANDOKO RUSIANA ISKANDAR, S.T, M.T",
    title: "Dosen dan Praktisi Industri",
    description: "Saya merasakan sendiri penggunaan jatidiri.app mudah dan mampu menganalisa untuk pengembangan potensi diri",
    home: "home",
    yt: "https://youtu.be/contoh5",
    image: Handoko,
    created_at: "2024-05-30T16:45:00Z",
    updated_at: "2025-05-18T08:20:00Z"
  },
  {
    id: 8,
    id_departement: 2,
    name: "SUGIYONO, S.Pd",
    title: "Waka Humas dan Kemitraan SMKN 46 Jakarta",
    description: "Melalui jatidiri.app, saya bisa menemukan hal-hal baru dalam diri saya. Sehingga saya memiliki kesempatan untuk merubah pola hidup, pandangan hidup, termasuk juga dalam perkembangan karir-karir saya",
    home: "home",
    yt: "https://youtu.be/contoh5",
    image: Sugiono,
    created_at: "2024-05-30T16:45:00Z",
    updated_at: "2025-05-18T08:20:00Z"
  },
];