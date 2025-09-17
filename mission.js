// JavaScript for theme switching
const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo-white.png';  // white logo file (same dimensions)
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';  // blue logo file (same dimensions)
  }
}

// Add an event listener to the themeSelector
themeSelector.addEventListener('change', changeTheme);
