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

/* --- SOM AUTOMÁTICO DO BANNER PRINCIPAL CORRIGIDO --- */
window.addEventListener("DOMContentLoaded", ()=>{
  const bannerSection = document.getElementById("main-banner");
  const bannerVideo = document.getElementById("banner-video");
  if(!bannerVideo || !bannerSection) return;

  function enableSound(){
    if(bannerVideo.muted){
      bannerVideo.muted = false;
      bannerVideo.volume = 0.5;
      bannerVideo.play().catch(()=>{});
    }
  }

  // Agora ele só ativa o som se você interagir COM O BANNER, não com a página toda
  bannerSection.addEventListener("mouseenter", enableSound);
  bannerSection.addEventListener("touchstart", enableSound, {once:true});
  bannerSection.addEventListener("click", enableSound, {once:true});
});

/* --- LÓGICA DO MODAL (ESTILO NETFLIX COM YOUTUBE) --- */
function openModal(title, desc, youtubeId) {
  const modal = document.getElementById("netflixModal");
  const iframe = document.getElementById("modalVideo");
  const bannerVideo = document.getElementById("banner-video");

  // Pausa o vídeo do banner de fundo para não misturar os sons
  if(bannerVideo) {
    bannerVideo.pause();
  }

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;

  // Monta o link do YouTube
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`;
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = document.getElementById("netflixModal");
  const iframe = document.getElementById("modalVideo");
  const bannerVideo = document.getElementById("banner-video");

  // Apaga o link do iframe para o vídeo parar de tocar
  iframe.src = "";

  modal.classList.remove("active");
  document.body.style.overflow = "";

  // Volta a dar play no vídeo do banner lá do fundo
  if(bannerVideo) {
    bannerVideo.play().catch(()=>{});
  }
}

/* Fecha o modal clicando fora dele (na parte escura) */
document.getElementById("netflixModal").addEventListener("click", e => {
  if(e.target.id === "netflixModal") closeModal();
});
