import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import ApiService from "@/core/services/ApiService";
import Logo from '@/assets/logo/logo-text.png'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('@/views/beranda/Beranda.vue'),
    meta: {
      pageTitle: 'Beranda',
      metaTags: [
        {
          name: 'description',
          content: 'Platform edukasi dan pengembangan diri untuk membangun jatidiri sejati'
        },
        {
          name: 'keywords',
          content: 'jatidiri, pendidikan, karakter, pengembangan diri, sekolah'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('@/views/about/AboutUs.vue'),
    meta: {
      pageTitle: 'Tentang Kami',
      metaTags: [
        {
          name: 'description',
          content: 'Tentang Jatidiri.App - Visi, misi, dan nilai-nilai kami dalam membangun karakter bangsa'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/our-team',
    name: 'Our Team',
    component: () => import('@/views/team/Team.vue'),
    meta: {
      pageTitle: 'Tim Kami',
      metaTags: [
        {
          name: 'description',
          content: 'Tim profesional Jatidiri.App yang berdedikasi untuk pengembangan karakter'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Kontak',
    component: () => import('@/views/contact/Kontak.vue'),
    meta: {
      pageTitle: 'Kontak',
      metaTags: [
        {
          name: 'description',
          content: 'Hubungi tim Jatidiri.App untuk informasi lebih lanjut'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/member',
    name: 'Join Us',
    component: () => import('@/views/member/JoinUs.vue'),
    meta: {
      pageTitle: 'Bergabung',
      middleware: "auth",
      metaTags: [
        {
          name: 'description',
          content: 'Bergabung menjadi bagian dari komunitas Jatidiri.App'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('@/views/package/Package.vue'),
    meta: {
      pageTitle: 'Paket',
      metaTags: [
        {
          name: 'description',
          content: 'Paket program pengembangan karakter dari Jatidiri.App'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/program/jatidiri-sekolah',
    name: 'Jatidiri Sekolah',
    component: () => import('@/views/jatidiriSekolah/JatidiriSekolah.vue'),
    meta: {
      pageTitle: 'Jatidiri Sekolah',
      metaTags: [
        {
          name: 'description',
          content: 'Program pengembangan karakter untuk institusi pendidikan'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/program/jatidiri-corporate',
    name: 'Jatidiri Corporate',
    component: () => import('@/views/soon/ComingSoon.vue'),
    meta: {
      pageTitle: 'Jatidiri Corporate',
      metaTags: [
        {
          name: 'description',
          content: 'Program pengembangan karakter untuk perusahaan dan organisasi'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/program/jatidiri-keluarga',
    name: 'Jatidiri Keluarga',
    component: () => import('@/views/soon/ComingSoon.vue'),
    meta: {
      pageTitle: 'Jatidiri Keluarga',
      metaTags: [
        {
          name: 'description',
          content: 'Program pengembangan karakter untuk keluarga'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/program/jatidiri-ku',
    name: 'JatidiriKu',
    component: () => import('@/views/soon/ComingSoon.vue'),
    meta: {
      pageTitle: 'JatidiriKu',
      metaTags: [
        {
          name: 'description',
          content: 'Program pengembangan karakter personal'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/program/jatidiri-university',
    name: 'Jatidiri University',
    component: () => import('@/views/soon/ComingSoon.vue'),
    meta: {
      pageTitle: 'Jatidiri University',
      metaTags: [
        {
          name: 'description',
          content: 'Program pengembangan karakter untuk perguruan tinggi'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('@/views/agenda/Agenda.vue'),
    meta: {
      pageTitle: 'Agenda',
      metaTags: [
        {
          name: 'description',
          content: 'Agenda dan acara terbaru dari Jatidiri.App'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/agenda/:slug',
    name: 'Agenda Detail',
    component: () => import('@/views/agendaDetail/AgendaDetail.vue'),
    meta: {
      pageTitle: 'Detail Agenda',
      metaTags: [
        {
          name: 'description',
          content: 'Detail agenda dari Jatidiri.App'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('@/views/berita/Berita.vue'),
    meta: {
      pageTitle: 'Berita',
      metaTags: [
        {
          name: 'description',
          content: 'Berita terbaru seputar pengembangan karakter dan pendidikan'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/berita/:slug',
    name: 'Berita Detail',
    component: () => import('@/views/beritaDetail/BeritaDetail.vue'),
    meta: {
      pageTitle: 'Detail Berita',
      metaTags: [
        {
          name: 'description',
          content: 'Detail berita dari Jatidiri.App'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/pelatihan-konselor',
    name: 'Pelatihan Konselor',
    component: () => import('@/views/pelatihan/Pelatihan.vue'),
    meta: {
      pageTitle: 'Pelatihan Konselor',
      metaTags: [
        {
          name: 'description',
          content: 'Program pelatihan konselor karakter dari Jatidiri.App'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/assesment',
    name: 'Assesment',
    component: () => import('@/views/assesments/Assesment.vue'),
    meta: {
      pageTitle: 'Assesment',
      metaTags: [
        {
          name: 'description',
          content: 'Assesment - assesment yang ada di Jatidiri.App'
        },
        {
          property: 'og:image',
          content: Logo
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: {
      pageTitle: 'Halaman Tidak Ditemukan'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

router.beforeEach((to, _, next) => {
  const appName = import.meta.env.VITE_APP_NAME || 'Jatidiri.App';

  document.title = to.meta.pageTitle
    ? `${to.meta.pageTitle} - ${appName}`
    : appName;

  const existingMeta = document.querySelectorAll(
    'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]'
  );
  existingMeta.forEach(meta => meta.remove());

  if (to.meta.metaTags) {
    const metaTags = to.meta.metaTags as Array<{
      name?: string;
      property?: string;
      content: string;
    }>;

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  }

  ApiService.setHeader();

  next();
});

export default router;