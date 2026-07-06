const activePage = window.location.pathname;
document.querySelectorAll('nav a').forEach(link => {
  // Check if the full link URL ends with your current path
  if (link.href.endsWith(activePage)) {
    link.classList.add('active');
    console.log(link);
  }
});