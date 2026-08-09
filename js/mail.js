// Baut mailto-Links erst im Browser aus data-user/data-domain zusammen,
// damit die E-Mail-Adresse im HTML-Quelltext nicht als Klartext steht
// und von simplen Spam-Bots (die kein JavaScript ausführen) nicht gefunden wird.
(function () {
  var links = document.querySelectorAll("[data-user][data-domain]");
  links.forEach(function (el) {
    var address = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
    el.setAttribute("href", "mailto:" + address);
    el.textContent = address;
  });
})();
