document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const f = this.getAttribute('data-filter');
      products.forEach(p => {
        if (f === 'all' || p.getAttribute('data-category') === f) {
          p.style.display = '';
          p.classList.add('fade-in');
        } else {
          p.style.display = 'none';
        }
      });
    });
  });

  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget;
      if (!button) return;
      const title = button.getAttribute('data-title') || 'Produk';
      const img = button.getAttribute('data-img') || 'assets/images/product1.jpg';
      const desc = button.getAttribute('data-desc') || '';
      const price = button.getAttribute('data-price') || '';

      document.getElementById('productModalTitle').textContent = title;
      document.getElementById('productModalImg').src = img;
      document.getElementById('productModalDesc').textContent = desc;
      document.getElementById('productModalPrice').textContent = price ? price : '';
    });
  }

  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryModalEl = document.getElementById('galleryModal');
  if (galleryThumbs.length && galleryModalImg && galleryModalEl) {
    galleryThumbs.forEach(t => {
      t.addEventListener('click', function () {
        const src = this.getAttribute('data-img') || this.src;
        galleryModalImg.src = src;
      });
    });
  }

  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('.btn-like').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('liked');
      btn.style.transform = btn.classList.contains('liked') ? 'scale(1.08)' : 'scale(1)';
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const action = contactForm.getAttribute('action') || '';
      if (action.includes('formspree.io/f/your-form-id')) {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';
        if (!name.trim() || !email.trim() || !message.trim()) {
          showFormAlert('Isi semua field sebelum mengirim.', 'danger');
          return;
        }
        const subject = encodeURIComponent('Kontak dari situs ROCKET SUPLLY: ' + name);
        const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
        const mailto = `mailto:info@rocketsuplly.com?subject=${subject}&body=${body}`;
        showFormAlert('Form tidak dikonfigurasi. Menyiapkan email client...', 'success');
        setTimeout(() => window.location.href = mailto, 900);
      } else {
        showFormAlert('Mengirim...', 'info');
      }
    });
  }

  function showFormAlert(msg, type = 'info') {
    const alertBox = document.getElementById('formAlert');
    if (!alertBox) return;
    alertBox.innerHTML = `<div class="alert alert-${type} py-2">${msg}</div>`;
    setTimeout(() => { if (alertBox) alertBox.innerHTML = ''; }, 5000);
  }

  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});