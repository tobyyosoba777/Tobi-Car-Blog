const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  // change theme of website
  document.body.classList.toggle('dark');
})

