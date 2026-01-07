(function () {
  function getGreeting() {
    const now = new Date();
    const h = now.getHours();


    if (h >= 5 && h <= 11) return 'Selamat Pagi';
    if (h >= 12 && h <= 14) return 'Selamat Siang';
    if (h >= 15 && h <= 17) return 'Selamat Sore';
    return 'Selamat Malam';
  }

  function renderGreeting() {
    const el = document.getElementById('greeting');
    if (!el) return;
    el.textContent = `${getGreeting()} — Selamat datang di ROCKET SUPLLY!`;
  }

  document.addEventListener('DOMContentLoaded', renderGreeting);
})();