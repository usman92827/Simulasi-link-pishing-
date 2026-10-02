const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  /*
    SIMULASI AMAN:
    Tidak ada password yang dikirim ke server,
    tidak disimpan ke localStorage,
    dan tidak dikirim ke internet.
  */

  result.style.display = "block";

  result.innerHTML = `
    <strong>✅ Simulasi selesai!</strong><br><br>
    Kamu baru saja melihat contoh halaman login
    yang dapat digunakan dalam latihan phishing.
    <br><br>
    <strong>Ingat:</strong> selalu periksa alamat website
    sebelum memasukkan informasi penting.
  `;

  // Membersihkan input setelah simulasi.
  form.reset();
});
