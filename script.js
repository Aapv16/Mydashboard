const nav = document.getElementById("nav");

// membuat even
window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 500) {
    nav.classList.add("navbar-light");
  } else if (scrollposition <= 100) {
    nav.classList.remove("navbar-light");
  }
});
// .......................
// Ambil semua elemen dengan kelas "nav-link" dan simpan dalam variabel ubahWarna
const ubahWarna = document.querySelectorAll(".nav-link");

// Iterasi melalui setiap elemen "nav-link"
ubahWarna.forEach((link) => {
  // Tambahkan event listener untuk menangkap event "click" pada elemen
  link.addEventListener("click", function (event) {
    // Loop melalui semua elemen "nav-link" untuk menghapus kelas "active"
    ubahWarna.forEach((nav) => nav.classList.remove("active"));

    // Tambahkan kelas "active" ke elemen yang diklik
    this.classList.add("active");
  });
});
