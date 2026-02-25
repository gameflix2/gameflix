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

/* --- LÓGICA DO MODAL (ESTILO NETFLIX) --- */
function openModal(title, desc, trailerUrl) {
  const modal = document.getElementById("netflixModal");
  const video = document.getElementById("modalVideo");

  // Preenche os textos dinamicamente
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;

  // Se o jogo tiver trailer, toca ele. Se não tiver, usa o do FarCry como padrão para não ficar tela preta.
  video.src = trailerUrl ? trailerUrl : 'https://res.cloudinary.com/dlt1gqwnc/video/upload/v1771613996/farcry_z2rivm.mp4';
  
  video.currentTime = 0;
  video.play().catch(()=>{});

  // Mostra o modal na tela
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Impede de rolar a página por trás do modal
}

function closeModal(){
  const modal = document.getElementById("netflixModal");
  const video = document.getElementById("modalVideo");

  // Pausa e limpa o vídeo
  video.pause();
  video.src = "";

  // Esconde o modal
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Volta a permitir rolar a página
}

/* Fecha o modal clicando fora dele (na parte escura) */
document.getElementById("netflixModal").addEventListener("click", e => {
  if(e.target.id === "netflixModal") closeModal();
});
