// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import ApiService from "@/core/services/ApiService";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('@/views/beranda/Beranda.vue'),
    meta: {
      pageTitle: 'Beranda',
    }
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('@/views/about/AboutUs.vue'),
    meta: {
      pageTitle: 'Tentang Kami'
    }
  },
  {
    path: '/our-team',
    name: 'Our Team',
    component: () => import('@/views/team/Team.vue'),
    meta: {
      pageTitle: 'Tim Kami'
    }
  },
  {
    path: '/contact',
    name: 'Kontak',
    component: () => import('@/views/contact/Kontak.vue'),
    meta: {
      pageTitle: 'Kontak'
    }
  },
  {
    path: '/member',
    name: 'Join Us',
    component: () => import('@/views/member/JoinUs.vue'),
    meta: {
      pageTitle: 'Bergabung',
      middleware: "auth"
    }
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('@/views/package/Package.vue'),
    meta: {
      pageTitle: 'Paket'
    }
  },
  {
    path: '/jatidiri-sekolah',
    name: 'Jatidiri Sekolah',
    component: () => import('@/views/jatidiriSekolah/JatidiriSekolah.vue'),
    meta: {
      pageTitle: 'Jatidiri Sekolah'
    }
  },
  {
    path: '/jatidiri-corporate',
    name: 'Jatidiri Corporate',
    component: () => import('@/views/jatidiriCorporate/JatidiriCorporate.vue'),
    meta: {
      pageTitle: 'Jatidiri Corporate'
    }
  },
  {
    path: '/jatidiri-keluarga',
    name: 'Jatidiri Keluarga',
    component: () => import('@/views/jatidiriKeluarga/JatidiriKeluarga.vue'),
    meta: {
      pageTitle: 'Jatidiri Keluarga'
    }
  },
  {
    path: '/jatidiri-ku',
    name: 'JatidiriKu',
    component: () => import('@/views/jatidiriKu/JatidiriKu.vue'),
    meta: {
      pageTitle: 'JatidiriKu',
      middleware: "auth"
    }
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('@/views/agenda/Agenda.vue'),
    meta: {
      pageTitle: 'Agenda'
    }
  },
  {
    path: '/agenda/:slug',
    name: 'Agenda Detail',
    component: () => import('@/views/agendaDetail/AgendaDetail.vue'),
    meta: {
      pageTitle: 'Detail Agenda'
    }
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('@/views/berita/Berita.vue'),
    meta: {
      pageTitle: 'Berita'
    }
  },
  {
    path: '/berita/:slug',
    name: 'Berita Detail',
    component: () => import('@/views/beritaDetail/BeritaDetail.vue'),
    meta: {
      pageTitle: 'Detail Berita'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, _) => {
  // Set page title
  const appName = import.meta.env.VITE_APP_NAME || 'Jatidiri.App';
  document.title = to.meta.pageTitle 
    ? `${to.meta.pageTitle} - ${appName}` 
    : appName;

  // Initialize API service headers
  ApiService.setHeader();
});

export default router;