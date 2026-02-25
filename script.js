function updateBanner(title, img, desc, trailerLink=null){
  const bannerTitle = document.getElementById('banner-title');
  const bannerDesc = document.getElementById('banner-desc');
  const bannerVideo = document.getElementById('banner-video');

  bannerTitle.textContent = title;
  bannerDesc.textContent = desc;

  if(trailerLink && bannerVideo){
    bannerVideo.src = trailerLink;
    bannerVideo.muted = true;
    bannerVideo.play().catch(()=>{});
  }

  // Sobe a tela suavemente
  window.scrollTo({top:0, behavior:'smooth'});
}

const top10 = document.getElementById('top10');

/* ✅ SCROLL INTELIGENTE (VOLTA FUNCIONA SEMPRE) */
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

/* header efeito scroll */
window.addEventListener('scroll', ()=>{
  const header = document.getElementById('header');
  if(window.scrollY>50) header.style.background = 'rgba(20,20,20,0.95)';
  else header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent)';
});

/* SOM estilo Netflix */
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

function openCombo(title, desc){
  updateBanner(title, null, desc);
}

function openModal(title, desc, trailer){
  const modal = document.getElementById("netflixModal");
  const video = document.getElementById("modalVideo");

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;

  video.src = trailer;
  video.currentTime = 0;
  video.play().catch(()=>{});

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = document.getElementById("netflixModal");
  const video = document.getElementById("modalVideo");

  video.pause();
  video.src = "";

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* fecha clicando fora */
document.getElementById("netflixModal").addEventListener("click", e=>{
  if(e.target.id === "netflixModal") closeModal();
});

/* 🚫 BLOQUEIA updateBanner para cliques em cards */
document.querySelectorAll('.card-container, .game-card').forEach(card => {
  card.onclick = null;
});

/* ✅ TODOS os cards agora abrem o modal Netflix */
document.querySelectorAll('.card-container, .game-card').forEach(card => {
  card.addEventListener('click', () => {
    openModal(
      'Jogo Gameflix',
      'Assista ao trailer completo e veja detalhes deste jogo.',
      'https://res.cloudinary.com/dlt1gqwnc/video/upload/v1771613996/farcry_z2rivm.mp4'
    );
  });
});