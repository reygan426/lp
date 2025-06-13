declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    _fbq?: any[];
    fbq?: {
      (...args: any[]): void;
      loaded?: boolean;
      version?: string;
      queue?: any[];
    };
  }
}

export const loadGoogleAnalytics = (trackingId: string) => {
  if (!trackingId || typeof window === 'undefined') return;
  
  // Check if gtag is already initialized (exists and is a function)
  if (window.dataLayer && typeof window.gtag === 'function') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', trackingId);
};

export const loadMetaPixel = (pixelId: string) => {
  if (!pixelId || typeof window === 'undefined') return;

  // Check if Facebook Pixel is already loaded and initialized
  if (window.fbq && window.fbq.loaded) return;

  window._fbq = window._fbq || [];
  window.fbq = function() {
    window._fbq?.push(arguments);
  };
  
  // Only initialize if not already loaded
  if (!window.fbq?.loaded) {
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }
};