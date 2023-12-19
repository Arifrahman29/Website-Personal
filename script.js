// Fungsi untuk menutup loader
function closeLoader() {
  var loaderContainer = document.getElementById('loader-container');
  loaderContainer.style.opacity = '0'; // Mengatur opacity menjadi 0
  loaderContainer.style.pointerEvents = 'none'; // Menonaktifkan interaksi dengan elemen di bawahnya
}

// Menutup loader setelah 3 detik (3000 milidetik)
setTimeout(closeLoader, 4000);
