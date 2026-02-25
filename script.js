/* --- SCROLL INTELIGENTE DO TOP 10 --- */
const top10 = document.getElementById('top10');

function scrollLeft(){
  if(!top10) return;
  const card = top10.querySelector(".card-container");
  if(!card) return;

  const scrollAmount = card.offsetWidth + 45;

  top10.scrollBy({
    left: -scrollAmount * 2,
    behavior: "smooth"
  });
}

function scrollRight(){
  if(!top10) return;
  const card = top10.querySelector(".card-container");
  if(!card) return;

  const scrollAmount = card.offsetWidth + 45;

  top10.scrollBy({
    left: scrollAmount * 2,
    behavior: "smooth"
  });
}

/* --- EFEITO DO HEADER NO SCROLL --- */
window.addEventListener('scroll', ()=>{
  const header = document.getElementById('header');
  if(window.scrollY > 50) {
    header.style.background = 'rgba(20,20,20,0.95)';
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent)';
  }
});

/* --- SOM AUTOMÁTICO DO BANNER PRINCIPAL --- */
window.addEventListener("DOMContentLoaded", ()=>{
  const bannerVideo = document.getElementById("banner-video");
  if(!bannerVideo) return;

  function enableSound(){
    if(bannerVideo.muted){
      bannerVideo.muted = false;
      bannerVideo.volume = 0.5;
      bannerVideo.play().catch(()=>{});
    }
  }

  bannerVideo.addEventListener("mouseenter", enableSound);
  bannerVideo.addEventListener("touchstart", enableSound, {once:true});
  document.addEventListener("click", enableSound, {once:true});
});

/* --- LÓGICA DO MODAL (ESTILO NETFLIX COM YOUTUBE) --- */
function openModal(title, desc, youtubeId) {
  const modal = document.getElementById("netflixModal");
  const iframe = document.getElementById("modalVideo");

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;

  // Monta o link do YouTube escondendo os botões (controls=0) e a logo (modestbranding=1)
  // O mute=1 é obrigatório para o autoplay=1 funcionar nos navegadores modernos
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`;
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = document.getElementById("netflixModal");
  const iframe = document.getElementById("modalVideo");

  // Apaga o link do iframe para o vídeo parar de tocar no fundo
  iframe.src = "";

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* Fecha o modal clicando fora dele (na parte escura) */
document.getElementById("netflixModal").addEventListener("click", e => {
  if(e.target.id === "netflixModal") closeModal();
});
