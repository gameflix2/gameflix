/* --- CONTROLE DE ROLAGEM DO TOP 10 --- */
const top10 = document.getElementById('top10');

function scrollLeft() {
    if (top10) {
        // Rola o equivalente a 2 cards para a esquerda
        top10.scrollBy({ left: -500, behavior: "smooth" });
    }
}

function scrollRight() {
    if (top10) {
        // Rola o equivalente a 2 cards para a direita
        top10.scrollBy({ left: 500, behavior: "smooth" });
    }
}

/* --- FUNÇÃO PARA MUDAR O BANNER (JOGOS GRÁTIS) --- */
function mudarBanner(titulo, descricao, videoUrl) {
    const bannerTitle = document.getElementById('banner-title');
    const bannerDesc = document.getElementById('banner-desc');
    const bannerVideo = document.getElementById('banner-video');

    if (bannerTitle && bannerDesc && bannerVideo) {
        // Atualiza os textos
        bannerTitle.textContent = titulo;
        bannerDesc.textContent = descricao;

        // Atualiza o vídeo e inicia o play
        bannerVideo.src = videoUrl;
        bannerVideo.load();
        bannerVideo.play().catch(error => {
            console.log("O autoplay foi bloqueado ou o vídeo falhou:", error);
        });

        // Sobe a página para o topo suavemente para ver o trailer
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/* --- LÓGICA DO MODAL (TRAILERS DO YOUTUBE) --- */
function openModal(title, desc, youtubeId) {
    const modal = document.getElementById("netflixModal");
    const iframe = document.getElementById("modalVideo");
    const bannerVideo = document.getElementById('banner-video');

    // Pausa o vídeo do banner para não ficar dois áudios tocando
    if (bannerVideo) bannerVideo.pause();

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;

    // Link do YouTube com autoplay e mudo (para garantir que inicie)
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&modestbranding=1&rel=0`;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Trava o scroll da página com modal aberto
}

function closeModal() {
    const modal = document.getElementById("netflixModal");
    const iframe = document.getElementById("modalVideo");
    const bannerVideo = document.getElementById('banner-video');

    // Limpa o link do vídeo para parar o som imediatamente
    iframe.src = "";
    
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Libera o scroll da página

    // Volta a tocar o vídeo do banner
    if (bannerVideo) bannerVideo.play().catch(() => {});
}

/* --- EFEITO DO HEADER NO SCROLL --- */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(20, 20, 20, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent)';
        header.style.boxShadow = 'none';
    }
});

/* FECHAR MODAL CLICANDO FORA */
window.onclick = function(event) {
    const modal = document.getElementById("netflixModal");
    if (event.target == modal) {
        closeModal();
    }
};
