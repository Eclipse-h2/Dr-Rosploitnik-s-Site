const activePage = window.location.pathname;

document.querySelectorAll('nav a').forEach(link => {
  // 1. Standard check: If the link matches the exact URL path
  if (link.href.endsWith(activePage)) {
    link.classList.add('active');
  } 
  // 2. Initial landing fallback: If we are on the home directory root, 
  // and this specific link is the "index.html" (Home) link, highlight it!
  else if (activePage.endsWith('/') && link.href.endsWith('index.html')) {
    link.classList.add('active');
  }
});
