---
theme: dracula
background: https://cover.sli.dev
title: Praktische Web Security
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Praktische Web Security

---

# Was ist Web Security?

- Schutz von (sensiblen) Informationen
- Schutz von Infrastruktur

Angreifer dürfen keinen Zugriff auf Informationen bekommen, die nicht für sie bestimmt sind und die reibungslose
Funktion von Infrastruktur soll gewahrt bleiben.

---

# Warum ist das wichtig?

<img src="./assets/heartland-logo.jpg" width="200" class="float-end">

- SQL Injection über MSSQL um weitere Tools zu installieren
- Millionen von Kreditkartendaten kompromittiert
- 200M$ Verlust für das Unternehmen
- 50 %, später 77 % Verlust am Aktienmarkt
- Trotz PCI DSS Compliance
- 20 Jahre Haft für den Angreifer

---

# Warum ist das wichtig?

<div class="flex flex-col float-end items-end">
    <img src="./assets/panera-bread-logo.png" width="200" class="bg-white">
</div>

- Ungeschützte APIs
- Daten von Millionen Kunden öffentlich abrufbar
- Reaktion auf Report erst nach 8 Monaten (!) und nachdem das Problem öffentlich gemacht wurde

<img src="./assets/panera-bread-leak.png" width="400" class="mt-4">

---

# Warum ist das wichtig?

<div class="flex flex-col float-end items-end">
    <img src="./assets/nextjs-logo.svg" alt="Next.js" width="200" class="bg-white p-4">
    <img src="./assets/nextjs-severity.png" alt="GitHub Advisory" width="200" class="mt-4">
</div>

- Improper Authorization Vulnerability
- Fehler im Framework mit Auswirkungen auf jede Next.js Seite mit betroffenen Versionen
- Das Setzen vom `x-middleware-subrequest` Header reicht - geringe Hürde

<Footer>
    <a href="https://github.com/vercel/next.js/security/advisories/GHSA-f82v-jwr5-mffw">GitHub Advisory</a>
</Footer>
