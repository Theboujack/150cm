// Ambil elemen HTML
const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const slideshow = document.getElementById("slideshow");
const text = document.getElementById("runningText");

// Gambar untuk slideshow
const images = ["gambar 1.jpg", "gambar 2.jpg", "gambar 3.jpg", "gambar 4.jpg", "gambar 5.jpg", "gambar 6.jpg", "gambar 7.jpg", "gambar 8.jpg", "gambar 9.jpg", "gambar 10.jpg", "gambar 11.jpg", "gambar 12.jpg", "gambar 13.jpg"];
let currentImage = 0;
let audioReady = false;

// Pastikan audio siap diputar dari waktu tertentu
audio.addEventListener("loadedmetadata", () => {
  audioReady = true;
});

playButton.addEventListener("click", () => {
  // Jalankan audio dari detik ke-10 setelah metadata siap
  if (audioReady) {
    audio.currentTime = 10;
    audio.play();
  } else {
    audio.addEventListener("loadedmetadata", () => {
      audio.currentTime = 10;
      audio.play();
    });
  }
  
  // Tampilkan gambar pertama
  slideshow.style.display = "block";
  slideshow.src = images[currentImage];
  
  // Mulai slideshow tiap 3 detik
  const slideshowInterval = setInterval(() => {
    currentImage++;
    
    if (currentImage < images.length) {
      slideshow.src = images[currentImage];
    } else {
      clearInterval(slideshowInterval);
      
      // Hentikan slideshow
      slideshow.style.display = "none";
      
      // Ubah teks & berhentikan animasi jalan
      text.style.animation = "none";
      text.style.position = "relative";
      text.style.whiteSpace = "normal";
      text.style.left = "50%";
      text.style.transform = "translateX(-50%)";
      text.style.top = "13px"
      text.textContent = "Udah ahh, nanti naksir beneran😏";
      text.classList.add("blink");
    }
  }, 2000);
});
