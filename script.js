// Simple interactivity
const btn = document.getElementById('magicBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
  const now = new Date();
  msg.textContent = `Nice! You clicked at ${now.toLocaleTimeString()}.`;
  // small visual feedback
  btn.textContent = 'Clicked ✓';
  setTimeout(()=> btn.textContent = 'Click me!', 2000);
});
