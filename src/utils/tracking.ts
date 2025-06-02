// export const loadGoogleAnalytics = (trackingId: string) => {
//   if (!trackingId) return;
  
//   const script = document.createElement('script');
//   script.async = true;
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
//   document.head.appendChild(script);

//   window.dataLayer = window.dataLayer || [];
//   function gtag() {
//     dataLayer.push(arguments);
//   }
//   gtag('js', new Date());
//   gtag('config', trackingId);
// };

// export const loadMetaPixel = (pixelId: string) => {
//   if (!pixelId) return;

//   const script = document.createElement('script');
//   script.innerHTML = `
//     !function(f,b,e,v,n,t,s)
//     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//     n.queue=[];t=b.createElement(e);t.async=!0;
//     t.src=v;s=b.getElementsByTagName(e)[0];
//     s.parentNode.insertBefore(t,s)}(window, document,'script',
//     'https://connect.facebook.net/en_US/fbevents.js');
//     fbq('init', '${pixelId}');
//     fbq('track', 'PageView');
//   `;
//   document.head.appendChild(script);

//   const noscript = document.createElement('noscript');
//   noscript.innerHTML = `
//     <img height="1" width="1" style="display:none" 
//       src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
//     />
//   `;
//   document.body.appendChild(noscript);
// };