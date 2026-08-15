const footer = document.getElementById("footer");

if (footer) {
  const isRoot = !window.location.pathname.includes('/src/page/') && !window.location.pathname.includes('/page/');
  const rootPath = isRoot ? '' : '../../';
  const pagePath = isRoot ? 'src/page/' : '';

  footer.innerHTML = `
    <div class="footer-container">
      <div>
        <h2>PORTOFOLIO</h2>
        <p>Website ini berisi proyek, sertifikat, <br> dan informasi tentang saya sebagai pelajar PPLG.</p>
      </div>

      <div>
        <div>
          <h2>NAVIGASI</h2>
          <ul class="footer-links">
            <li><a href="${rootPath}index.html">Beranda</a></li>
            <li><a href="${pagePath}Project.html">Proyek</a></li>
            <li><a href="${pagePath}Sertivikat.html">Sertivicate</a></li>
            <li><a href="${pagePath}Kontak.html">Kontak</a></li>
          </ul>
        </div>
      </div>

      <div>
        <h2>DEVELOPER</h2>
        <p>Mochammad Hifzhi Syaukani</p>
      </div>

      <p class="footer-copy">&copy; 2026 Portofolio. Semua Hak Dilindungi.</p>
    </div>
  `;
}

