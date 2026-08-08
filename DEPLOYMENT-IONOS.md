# Deployment auf IONOS (avenia.com)

Diese Website ist rein statisch (nur HTML/CSS, kein PHP, keine Datenbank).
Damit entfällt jede Joomla-Altlast – die bestehende PHP-Datenbank wird nicht mehr benötigt.

## 1. Alte Joomla-Installation entfernen (empfohlen)

1. Vorher ein Backup der alten Seite/Datenbank ziehen, falls du Inhalte archivieren willst
   (IONOS-Kundencenter → Webhosting → Datenbanken → Export, bzw. Dateimanager → Download).
2. Im IONOS-Dateimanager oder per FTP alle alten Joomla-Dateien im Webspace-Root
   (`/`, meist `httpdocs` oder `web`) löschen: u. a. `configuration.php`, `administrator/`,
   `components/`, `modules/`, `templates/`, `.htaccess` (falls Joomla-spezifisch).
3. Die alte MySQL-Datenbank im IONOS-Kundencenter kannst du danach löschen oder ungenutzt liegen lassen –
   sie wird von der neuen Seite nicht angesprochen.

## 2. Neue Dateien hochladen

Lade den kompletten Inhalt dieses Ordners (`avenia-website/`) in das Root-Verzeichnis
deines Webspace hoch, so dass `index.html` direkt unter der Domain erreichbar ist:

```
avenia.com/index.html
avenia.com/leistungen.html
avenia.com/ueber-mich.html
avenia.com/kontakt.html
avenia.com/impressum.html
avenia.com/datenschutz.html
avenia.com/css/style.css
```

**Per FTP** (z. B. mit FileZilla oder Cyberduck):
- Server: die FTP-Zugangsdaten aus dem IONOS-Kundencenter (Webhosting → FTP-Zugang)
- Zielverzeichnis: das Hauptverzeichnis des Hostings (oft `/` oder `/htdocs`)
- Alle Dateien und den `css`-Ordner 1:1 hochladen

**Per IONOS-Dateimanager** (Kundencenter → Webhosting → Dateien):
- In das Hauptverzeichnis wechseln
- "Hochladen" nutzen und alle Dateien + den `css`-Ordner übertragen

## 3. Prüfen

- `https://avenia.com/` sollte die Startseite zeigen
- Impressum und Datenschutz über die Fußzeile erreichbar
- Kein Cookie-Banner nötig, da die Seite keine Cookies setzt und keine externen
  Skripte/Schriften/Karten lädt

## 4. E-Mail-Postfach

Für `hello@avenia.com` (Kontakt-Adresse auf der Website) im IONOS-Kundencenter
ein eigenes Postfach anlegen bzw. als Alias/Weiterleitung auf dein bestehendes
Postfach (`raettig@avenia.com`) einrichten. So bleibt deine persönliche Adresse
aus der öffentlichen Anzeige heraus.

## 5. Empfehlung zu Telefonnummer/E-Mail (Spam)

- Die Telefonnummer wird bewusst nirgends auf der Website angezeigt. Das ist rechtlich
  zulässig: laut EuGH-Urteil (Rs. C-298/07, "Deutsche Internet Versicherung") reicht eine
  E-Mail-Adresse für die "schnelle Kontaktaufnahme" nach § 5 DDG (früher TMG) aus, ein
  Telefonanschluss muss nicht zwingend veröffentlicht werden.
- Die E-Mail-Adresse ist im HTML leicht mit HTML-Entities kodiert (`&#64;` statt `@`).
  Das ist für Besucher und Screenreader unsichtbar, erschwert aber primitiven Adress-Scrapern
  das automatisierte Auslesen. Ein 100%-Schutz ist das nicht – wirksamer ist zusätzlich:
  - ein separates Postfach `hello@avenia.com` nur für die Website (bereits umgesetzt),
  - großzügige Spam-Filter-Regeln im IONOS-Postfach,
  - bei Bedarf später ein Wechsel der Adresse, falls sie stark zugespammt wird
    (die Website-Datei ist dann in einer Zeile anzupassen).
