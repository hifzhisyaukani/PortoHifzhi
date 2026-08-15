const nav = document.getElementById("nav");

if (nav) {
  const isRoot = !window.location.pathname.includes('/src/page/') && !window.location.pathname.includes('/page/');
  const rootPath = isRoot ? '' : '../../';
  const pagePath = isRoot ? 'src/page/' : '';

  nav.innerHTML = `
    <nav class="navbar">
      <a href="${rootPath}index.html">Beranda</a>
      <a href="${pagePath}Project.html">Proyek</a>
      <a href="${pagePath}Sertivikat.html">Sertivicate</a>
      <a href="${pagePath}Kontak.html">Kontak</a>
    </nav>
  `;
}