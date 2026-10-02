const form = document.getElementById("simulationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Tidak mengambil atau menyimpan password.
  form.style.display = "none";

  result.style.display = "block";

  result.innerHTML = `
    <div class="reveal">
      <div class="hacker-icon">🕵️</div>

      <h2>⚠️ AKUN ANDA KAMI RETAS!</h2>

      <p class="fake-warning">
        Jangan panik... 😈
      </p>

      <p>
        <strong>Ini hanya simulasi phishing.</strong><br>
        Akun kamu sebenarnya tidak diretas.
        Tidak ada password yang dikirim atau disimpan.
      </p>

      <div class="lesson">
        🔐 <strong>Pelajaran:</strong><br>
        Jangan memasukkan password ke halaman yang
        tidak kamu percaya. Selalu periksa alamat website
        sebelum login.
      </div>

      <button onclick="location.reload()">
        🔄 Coba Lagi
      </button>
    </div>
  `;
});
