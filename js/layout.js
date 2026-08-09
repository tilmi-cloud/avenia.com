// Hält Header und Footer fix am Bildschirmrand (siehe CSS position:fixed)
// und reserviert im Body genau so viel Platz, wie beide tatsächlich hoch sind,
// damit Inhalte nicht darunter verschwinden. Läuft bei jeder Größenänderung neu,
// da die Höhe je nach Zeilenumbruch (z.B. schmale Bildschirme) variieren kann.
(function () {
  function updateOffsets() {
    var header = document.querySelector(".site-header");
    var footer = document.querySelector(".site-footer");
    var headerH = header ? header.offsetHeight : 0;
    var footerH = footer ? footer.offsetHeight : 0;
    document.documentElement.style.setProperty("--header-h", headerH + "px");
    document.documentElement.style.setProperty("--footer-h", footerH + "px");
    document.body.style.paddingTop = headerH + "px";
    document.body.style.paddingBottom = footerH + "px";
  }
  updateOffsets();
  window.addEventListener("resize", updateOffsets);
})();
