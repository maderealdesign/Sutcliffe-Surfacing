const SUTCLIFFE_GA_MEASUREMENT_ID = '';

if (SUTCLIFFE_GA_MEASUREMENT_ID.startsWith('G-')) {
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(SUTCLIFFE_GA_MEASUREMENT_ID)}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', SUTCLIFFE_GA_MEASUREMENT_ID);
}
