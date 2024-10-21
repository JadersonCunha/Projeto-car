
function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
}


function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("openBtn").style.display = "none"; 
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("openBtn").style.display = "block"; 
}



let slideIndex = 0;
const slides = document.querySelectorAll('.banner img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.classList.remove('active');
    });
    
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.opacity = '1';
    slides[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000); 
}


document.addEventListener('DOMContentLoaded', showSlides);

function openChat() {
    document.getElementById("chatWindow").style.display = "flex";
}


function closeChat() {
    document.getElementById("chatWindow").style.display = "none";
}


function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("openBtn").style.display = "none"; 
}


function playVideo() {
    const video = document.getElementById('videoPlayer');
    video.play();
}

function pauseVideo() {
    const video = document.getElementById('videoPlayer');
    video.pause();
}

function seek(event) {
    const video = document.getElementById('videoPlayer');
    const progressBar = event.target;
    const percent = event.offsetX / progressBar.offsetWidth;
    video.currentTime = percent * video.duration;
}


const video = document.getElementById('videoPlayer');
video.addEventListener('timeupdate', () => {
    const progress = document.querySelector('.progress');
    const currentTimeDisplay = document.getElementById('currentTime');
    const currentTime = video.currentTime;
    const duration = video.duration;

    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});
function playMusic() {
    var music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

document.addEventListener('DOMContentLoaded', function () {
   
    setTimeout(function () {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            videoContainer.classList.add('show');
        }
    }, 500); 
});

//simulador//
function calcularFinanciamento() {
    const precoCarro = parseFloat(document.getElementById('precoCarro').value);
    const valorEntrada = parseFloat(document.getElementById('valorEntrada').value);
    const numParcelas = parseInt(document.getElementById('numParcelas').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;

    const valorFinanciado = precoCarro - valorEntrada;
    const valorParcela = (valorFinanciado * (taxaJuros * Math.pow(1 + taxaJuros, numParcelas))) / (Math.pow(1 + taxaJuros, numParcelas) - 1);
    const totalFinanciamento = valorParcela * numParcelas;

    document.getElementById('valorParcela').textContent = `Valor da Parcela: R$ ${valorParcela.toFixed(2)}`;
    document.getElementById('valorTotalFinanciamento').textContent = `Total do Financiamento: R$ ${totalFinanciamento.toFixed(2)}`;
}


