// JavaScript for theme switching
const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  // Check if the selected value is 'dark' or 'light'
  if (themeSelector.value === 'dark') {
    body.classList.add('dark'); // Add the 'dark' class to body
    logo.src = 'byui-logo-white.png'; // Change the logo to the white version
  } else {
    body.classList.remove('dark'); // Remove the 'dark' class
    logo.src = 'byui-logo_blue.webp'; // Revert the logo to the blue version
  }
}

// Add an event listener to the themeSelector
themeSelector.addEventListener('change', changeTheme);
