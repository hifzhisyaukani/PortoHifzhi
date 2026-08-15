function sendWhatsApp() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const text = `Halo, saya : ${name} , 
  Saya ingin bekerja sama dengan anda.`;
  const url = `https://wa.me/6289517354572?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}