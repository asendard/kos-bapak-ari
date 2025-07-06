// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
// Toggle the dark mode icon
toggle.addEventListener('click', () => {
  const icon = toggle.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Load Testimoni dari JSON
fetch('assets/testimonials.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('testimoniContainer');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'testimoni-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.nama}">
        <h4>${item.nama}</h4>
        <p>"${item.pesan}"</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Gagal memuat testimoni:', error);
  });


// Booking Form
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const nohp = document.getElementById('nohp').value.trim();
  const tanggal = document.getElementById('tanggal').value;

  if (!nama || !nohp || !tanggal) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  const booking = { nama, nohp, tanggal };
  const existing = JSON.parse(localStorage.getItem('bookings')) || [];

  existing.push(booking);
  localStorage.setItem('bookings', JSON.stringify(existing));

  document.getElementById('bookingForm').reset();
  document.getElementById('successMsg').textContent = "Booking berhasil dikirim!";
});

// Toggle Menu Slide
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Auto Close Saat Link Diklik
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('show');
    }
  });
});

