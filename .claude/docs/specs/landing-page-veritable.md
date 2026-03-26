# Spec: Landing Page Workshop Véritable

**Data:** 2026-03-25

---

## Cosa sto costruendo

Landing page completa per il workshop gratuito "Il Valore Invisibile" di Véritable, destinata a CEO di PMI Food & Manifatturiere (€20-80M). 12 sezioni come da brief del cliente.

---

## Stack tecnico proposto

- **HTML5** single-page statica
- **CSS3** custom (no framework) — design pulito, professionale, adatto a target C-level
- **JavaScript** vanilla per:
  - Self-assessment interattivo (Sez. 5) con risultati dinamici
  - Progress bar posti (Sez. 10)
  - Form validation (Sez. 11)
  - Smooth scroll e interazioni UI
- **Font:** sistema o Google Fonts (da definire in base al brand Véritable)
- **Responsive:** mobile-first

---

## Struttura file

```
/
├── index.html          # Landing page completa
├── css/
│   └── style.css       # Stili
├── js/
│   └── main.js         # Logica interattiva
└── assets/
    └── images/         # Logo, foto Ettore, immagini case study
```

---

## Le 12 sezioni

1. **Hero** — Headline, subheadline, problem hook, CTA, trust badges
2. **Il Problema** — 3 colonne (Gare, Talenti, Prezzo)
3. **La Promessa** — 3 outcome cards + CTA secondario
4. **Case Study** — 2 colonne (Oropan/Forte, Di Leo)
5. **Self-Assessment** — 5 domande Yes/No, risultati dinamici (JS)
6. **Per chi è / non è** — Green checks / Red X
7. **Chi conduce** — Bio Ettore Chiurazzi
8. **Dettagli Workshop** — 6 dettagli con icone
9. **FAQ** — 4 Q&A con accordion
10. **Urgency** — Counter, progress bar, CTA
11. **Form Registrazione** — 7 campi + privacy + CTA
12. **Rassicurazione Finale** — 3 colonne zero rischio

Footer con copyright, privacy, cookie, contatti.

---

## Codice riutilizzabile esistente

Nessuno — progetto nuovo, codebase vuota.

---

## Verifica

- [ ] Tutte le 12 sezioni presenti con copy esatto dal brief
- [ ] Responsive su mobile/tablet/desktop
- [ ] Self-assessment funzionante con risultati dinamici
- [ ] Form con validazione client-side
- [ ] Progress bar posti visuale
- [ ] FAQ accordion funzionante
- [ ] Smooth scroll ai CTA
- [ ] Accessibilità base (contrasti, alt text, labels)

---

## Note

- Il copy è già definito dal cliente — usarlo verbatim
- Palette colori: da estrarre dal sito veritable-sb.it o definire con il cliente
- Form action: placeholder (backend non definito)
- Counter iscritti (Sez. 10): statico/configurabile, non collegato a backend
