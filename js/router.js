const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((page) => page.text());
  document.getElementById("main-page").innerHTML = html;
};

const routes = {
  "/": "/pages/home.html",
  "/attractions": "/pages/attractions.html",
  "/about": "/pages/about.html",
  "/redsquare": "/pages/red_square.html",
  "/ermitazh": "/pages/ermitazh.html",
  "/kazankremle": "/pages/kazan_kremle.html",
  "/goldring": "/pages/gold_ring.html",
  "/lakebaykal": "/pages/lake_baykal.html",
  "/elbrus": "/pages/elbrus.html",
  "/arhiz": "/pages/arhiz.html",
  "/lakekezenoyum": "/pages/lake_kezenoy_um.html",
  "/sofieslakes": "/pages/sofies_lakes.html",
  404: "/pages/404.html",
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
