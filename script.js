/* --- SCROLL DO TOP 10 --- */
const top10 = document.getElementById('top10');

function scrollLeft(){
  top10.scrollBy({ left: -600, behavior: "smooth" });
}

function scrollRight(){
  top10.scrollBy({ left: 600, behavior: "smooth" });
}

/* --- MUDAR BANNER E SUBIR --- */
function mudarBanner(titulo, descricao, videoUrl) {
  const bannerTitle = document.getElementById('banner-title');
  const bannerDesc = document.getElementById('banner-desc');
  const bannerVideo = document.getElementById('banner-video');

  bannerTitle.textContent = titulo;
  bannerDesc.textContent = descricao;
  bannerVideo.src = videoUrl;
  
  bannerVideo.load();
  bannerVideo.play();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* --- HEADER DINÂMICO --- */
window.addEventListener('scroll', ()=>{
  const header = document.getElementById('header');
  header.style.background = window.scrollY > 50 ? 'rgba(20,20,20,0.95)' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent)';
});

/* --- MODAL --- */
function openModal(title, desc, youtubeId) {
  const modal = document.getElementById("netflixModal");
  const iframe = document.getElementById("modalVideo");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`;
  modal.classList.add("active");
}

function closeModal(){
  const modal = document.getElementById("netflixModal");
  document.getElementById("modalVideo").src = "";
  modal.classList.remove("active");
}
