function mudarBanner(titulo, desc, video) {
  document.getElementById('banner-title').textContent = titulo;
  document.getElementById('banner-desc').textContent = desc;
  const vid = document.getElementById('banner-video');
  vid.src = video;
  vid.load();
  vid.play();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function openModal(t, d, id) {
  const m = document.getElementById('netflixModal');
  document.getElementById('modalTitle').textContent = t;
  document.getElementById('modalDesc').textContent = d;
  document.getElementById('modalVideo').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  m.classList.add('active');
}

function closeModal() {
  document.getElementById('netflixModal').classList.remove('active');
  document.getElementById('modalVideo').src = "";
}

function scrollRight() { document.getElementById('top10').scrollBy({left: 400, behavior: 'smooth'}); }
function scrollLeft() { document.getElementById('top10').scrollBy({left: -400, behavior: 'smooth'}); }
