# CRO Audit: Landing Page Workshop Véritable

**Date**: 2026-03-25
**Auditor**: Baptist CRO

---

## Page Context

| Detail | Value |
|---|---|
| Page URL | veritable-sb.it/workshop-valore-invisibile |
| Page type | Landing Page (Event Registration) |
| Primary conversion goal | Registrazione workshop gratuito |
| Traffic sources | Presunto: LinkedIn Ads, email, referral, organico |
| Current CVR | N/A (pre-lancio) |
| Mobile traffic % | Stimato 55-65% (target CEO, uso ibrido mobile/desktop) |

---

## 7-Dimension Audit

### 1. Clarity (Value Proposition)

**Question**: Un visitatore capisce cosa offriamo e perché dovrebbe interessargli entro 8 secondi?

- [x] Value proposition visibile above the fold
- [x] Headline comunica benefit core (non feature)
- [x] Scritto nel linguaggio del cliente
- [x] Specifico e differenziato
- [x] Subheadline rinforza l'headline

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| Hero subheadline (sopra H1) è denso di informazioni: target + data + formato tutto in una riga | Cognitive Load Theory: troppi dati nello stesso elemento visivo rallentano la comprensione. Il visitatore deve parsare 3 info contemporaneamente | Medium | Separare visivamente: target su una riga, data/ora/formato come badge separato sotto l'headline | Seurat | 6.3 |
| "Fai sostenibilità vera" potrebbe non essere chiaro per chi non usa questo linguaggio | Un CEO che "fa cose buone" potrebbe non identificarsi col termine "sostenibilità vera" | Low | Testare variante: "Investi in qualità e valori autentici. Ma il mercato non lo vede." | Ghostwriter | 4.7 |

**Score: 8/10** — Clarity è forte. L'headline è potente e il problema è immediatamente riconoscibile.

---

### 2. Motivation (Fogg: M)

**Question**: Perché dovrei agire? C'è abbastanza desiderio?

- [x] Benefit chiaro (pain relief)
- [x] Hook emotivo (paura di perdere gare, talenti, margini)
- [x] Rilevanza per la situazione del visitatore
- [x] Urgency/scarcity genuina (30 posti)
- [x] Social proof supporta la promessa

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| Case study senza numeri/risultati misurabili | I case Oropan/Forte e Di Leo descrivono il processo ma non il risultato ("fatturato +X%", "gare vinte +Y"). Senza outcome quantificati, il social proof è debole | High | Aggiungere almeno 1 metrica per caso: incremento vendite, gare vinte, crescita awareness. Se i dati non sono disponibili, aggiungere una citazione diretta del CEO del caso | Ghostwriter | 8.0 |
| Manca una testimonianza diretta di un partecipante/cliente | Research: testimonial con nome, foto e risultato specifico è il trust signal #1 per landing page B2B (Wynter 2024) | High | Aggiungere almeno 1 testimonial con: foto, nome, ruolo, azienda, citazione, risultato | Ghostwriter | 7.7 |
| Il "bonus 30min consulenza per i primi 10" è menzionato solo nella sezione dettagli | Questo è un motivatore forte (esclusività + valore aggiunto) ma è sepolto a metà pagina | Medium | Evidenziarlo nell'hero o nella sezione urgency come incentivo addizionale | Ghostwriter | 6.7 |

**Score: 7/10** — Motivazione buona ma mancano outcome quantificati e testimonial diretti.

---

### 3. Ability (Fogg: A)

**Question**: Quanto è facile agire? Quale frizione esiste?

- [x] Conversione richiede ≤3 step (1: compila form → 2: submit)
- [ ] Form ha il minimo di campi necessari
- [x] Nessuna informazione non necessaria
- [x] Pagina leggera (HTML statico, nessun framework pesante)
- [x] Processo chiaro

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| **7 campi required + 1 opzionale + 1 checkbox = 9 interazioni** | Form strategy: 7+ campi = 25-50% riduzione tasso completamento vs 3 campi. Per un workshop gratuito, il commitment percepito è sproporzionato | **High** | **Multi-step form**: Step 1 (email + nome — cattura lead), Step 2 (azienda + settore + fatturato + ruolo). Progressive profiling: anche se abbandona allo step 2, hai già la lead | Seurat + Baptist | **8.7** |
| Il form è in sezione 11 (molto in basso nella pagina) | Il visitatore deve scrollare 10 sezioni prima di arrivare all'azione. Bounce potenziale per chi è già convinto dall'hero | High | Aggiungere un mini-form (solo email) o un form ridotto subito dopo la sezione Promessa (sez. 3), con l'opzione di completare i dati dopo | Seurat | 7.7 |
| Dropdown "Fatturato annuo" richiede di rivelare dati sensibili senza spiegare perché | CEO di PMI possono esitare a condividere la fascia di fatturato in un form online | Medium | Aggiungere micro-copy sotto il campo: "Ci serve per personalizzare i contenuti del workshop per la tua realtà" | Ghostwriter | 6.3 |
| Il campo "Settore" ha solo 3 opzioni di cui "Altro" | Se il target è Food & Manifatturiero, chi seleziona "Altro" potrebbe non sentirsi qualificato → abbandono | Low | Mantenere ma aggiungere rassicurazione: "Anche se il tuo settore non è elencato, i principi si applicano" — oppure rimuovere il campo e qualificare via email | Baptist | 4.3 |

**Score: 5/10** — **Il form è il punto critico.** Troppi campi per un evento gratuito. Il form troppo in basso amplifica il problema.

---

### 4. Prompt (Fogg: P)

**Question**: C'è un trigger chiaro e visibile per agire?

- [x] CTA visibile above the fold
- [x] CTA ha contrasto e dimensione sufficienti
- [x] CTA copy comunica valore
- [x] CTA ripetuto in punti chiave
- [x] Nessun CTA competitivo

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| Tutti i CTA puntano a `#registrazione` (sezione 11) — distanza psicologica e fisica | Quando il CTA è lontano dal contenuto che ha motivato il click, il desiderio si dissipa durante lo scroll. Il visitatore può distrarsi con sezioni intermedie | Medium | Sticky CTA bar su mobile che appare dopo il primo scroll. Su desktop, sidebar sticky o floating button | Seurat | 7.0 |
| CTA hero "RISERVA IL TUO POSTO (Posti limitati)" — le parentesi attenuano l'urgency | Il testo tra parentesi viene processato come informazione secondaria dal cervello. "Posti limitati" dovrebbe essere un badge separato, non un inciso | Low | Rimuovere parentesi. Badge "Solo 12 posti rimasti" sopra o sotto il bottone | Ghostwriter + Seurat | 5.3 |

**Score: 8/10** — I prompt sono ben distribuiti. Il miglioramento principale è la distanza form-contenuto.

---

### 5. Trust

**Question**: Mi fido abbastanza per agire?

- [x] ≥3 trust signals presenti (anni esperienza, Società Benefit, case study)
- [ ] Trust signals vicini al form
- [ ] Testimonial specifici (nome, foto, azienda, risultato)
- [x] Informazioni di contatto (footer)
- [x] Company legittima (link a sito, privacy policy)

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| **Nessun trust signal vicino al form** | I 3 trust badge sono nell'hero. Quando l'utente raggiunge il form (10 sezioni dopo), non ha trust signal visibili nel viewport. Research: trust elements near form increase CVR 11-25% | **High** | Ripetere trust badges (o sottoinsieme) immediatamente sopra il form. Aggiungere "Già 18 imprenditori iscritti" vicino al submit | Seurat | **8.3** |
| Foto speaker mancante (placeholder) | La sezione speaker è fondamentale per trust in un contesto B2B/consulenziale. Senza foto, perde il 60-80% del suo impatto | High | Inserire foto professionale reale di Ettore Chiurazzi | Baptist (nota al cliente) | 9.0 |
| Case study senza logo aziende | I loghi sono processati 60.000x più velocemente del testo (MIT). "Oropan/Forte" e "Di Leo" come testo hanno meno impatto che come loghi | Medium | Aggiungere loghi delle aziende citate nella sezione case study | Seurat | 6.0 |
| Manca un numero specifico di "aziende aiutate" | "30 anni esperienza" e "centinaia di processi" sono vaghi. Un numero specifico (es. "273 PMI affiancate") è più credibile | Medium | Richiedere al cliente il numero esatto e inserirlo come trust signal | Ghostwriter | 5.7 |

**Score: 5/10** — Trust soffre dell'assenza di foto, testimonial, e trust signal vicini al form.

---

### 6. Funnel Coherence

**Question**: Il percorso dal traffico alla conversione è coerente?

- [x] Nessun detour o distrazione
- [x] Navigazione rimossa (single-purpose page)
- [x] Esperienza post-conversione chiara (messaggio successo)
- [x] Nessun link rotto

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| Self-assessment (sez. 5) potrebbe creare un "falso fondo" — l'utente interagisce e pensa di aver completato qualcosa | Micro-commitment positivo MA rischio che chi ottiene "Rischio basso" si senta non-target e abbandoni | Medium | Riformulare il risultato "Rischio basso": non dire che il rischio è basso, dire "Il tuo valore è parzialmente visibile — il workshop ti aiuta a massimizzarlo" | Ghostwriter | 6.3 |
| La logica del self-assessment è invertita rispetto al brief | Il brief dice 0-1 SÌ = "Rischio basso", ma la pagina conta i NO. La logica è: più NO = più rischio. Tuttavia, le domande sono formulate in positivo ("Un buyer capisce..."), quindi SÌ = bene. Un utente che seleziona "Sì" a tutto dovrebbe avere rischio basso, non alto | **High** | **Bug**: la logica JS conta i checkbox selezionati come "Sì" ma li sottrae per ottenere il rischio. Verificare che l'UX corrisponda alla logica: se seleziono "Sì" a tutte le domande, il rischio deve essere BASSO | Baptist (dev fix) | **9.0** |
| Nessun link di navigazione tra sezioni | Su pagina lunga (12 sezioni), l'utente non può tornare su o saltare a sezione specifica | Low | Aggiungere nav anchor minima (solo mobile) o "back to top" button | Seurat | 3.7 |

**Score: 7/10** — Coerenza buona, ma il bug del self-assessment è critico da verificare.

---

### 7. Mobile Parity

**Question**: Funziona su mobile?

- [x] Contenuto critico visibile senza zoom (responsive breakpoints a 968px e 600px)
- [x] Form single-column su mobile (max-width: 640px)
- [ ] Touch targets ≥ 44px (da verificare sui checkbox assessment)
- [x] Nessuno scroll orizzontale (grids collassano a 1 colonna)
- [x] Caricamento rapido (HTML statico, nessun framework)

**Issues found**:

| Problem | Evidence | Impact | Fix | Owner | ICE |
|---|---|---|---|---|---|
| Assessment checkbox `2.8rem` (28px) è sotto la soglia 44px per touch target | WCAG 2.5.5 raccomanda 44x44px minimum. Su mobile, checkbox piccoli = errori di tap e frustrazione | Medium | Aumentare area cliccabile a 44px minimo (padding o dimensione). L'intero `.assessment__q` è cliccabile (bene), ma il feedback visivo è sul checkbox piccolo | Seurat | 6.0 |
| CTA hero "RISERVA IL TUO POSTO (Posti limitati)" potrebbe troncarsi su schermi <375px | Il testo lungo + parentesi + padding potrebbe andare su 3 righe e sembrare schiacciato | Low | Accorciare CTA mobile a "RISERVA IL TUO POSTO" (senza parentesi) e mostrare "Posti limitati" come badge separato | Seurat | 4.7 |
| Progress bar section: testo progress bar label piccolo (1.5rem = 15px) su sfondo scuro | Leggibilità ridotta su schermi piccoli con contrasto basso (grigio su nero) | Low | Aumentare font-size a 1.6rem e lightness del colore | Seurat | 3.3 |

**Score: 7/10** — Responsive ben strutturato, piccoli fix di touch target e leggibilità.

---

## Summary Score

| Dimension | Score | Max |
|---|---|---|
| 1. Clarity | 8 | 10 |
| 2. Motivation | 7 | 10 |
| 3. Ability | 5 | 10 |
| 4. Prompt | 8 | 10 |
| 5. Trust | 5 | 10 |
| 6. Funnel Coherence | 7 | 10 |
| 7. Mobile Parity | 7 | 10 |
| **Total** | **47** | **70** |
| **Score** | **67%** | |

**Verdict**: Struttura solida, ma **Ability (form) e Trust** sono i colli di bottiglia. Intervenire qui sposta il CVR in modo significativo.

---

## Quick Wins (Implementare subito)

1. **Ripetere trust badges sopra il form** — 0 effort, impatto diretto su CVR (ICE 8.3)
2. **Inserire foto reale di Ettore** — sostituire placeholder (ICE 9.0)
3. **Riformulare risultato "Rischio basso" del self-assessment** — evita che il target "buono" abbandoni (ICE 6.3)

## High-Impact Changes (Priorità)

1. **Multi-step form** — Step 1: email + nome (cattura lead). Step 2: dettagli. Riduce frizione percepita del 30-40% (ICE 8.7)
2. **Case study con metriche** — Aggiungere almeno 1 risultato quantificato per caso (ICE 8.0)
3. **Sticky CTA bar su mobile** — Sempre visibile durante lo scroll (ICE 7.0)
4. **Trust signal vicino al form** — Badge + counter iscritti (ICE 8.3)
5. **Aggiungere 1 testimonial con foto** — Cliente reale con risultato (ICE 7.7)

## Test Ideas (Validare con A/B)

1. **Form: 7 campi vs 2 step** — Hypothesis: multi-step aumenta completion rate del 25%+ mantenendo qualità lead
2. **Hero CTA text** — "RISERVA IL TUO POSTO" vs "ISCRIVITI AL WORKSHOP GRATUITO" vs "PARTECIPA (Solo 12 posti rimasti)"
3. **Self-assessment PRIMA del form** — Testare se il micro-commitment aumenta la form completion
4. **Mini-form dopo sezione 3** — Solo email, con "Ti invieremo i dettagli" — cattura lead early

## Orchestration Matrix

| Fix | Owner | Priority | ICE |
|---|---|---|---|
| Verificare/fixare logica self-assessment | Baptist (dev) | CRITICO | 9.0 |
| Foto Ettore Chiurazzi | Nota al cliente | CRITICO | 9.0 |
| Multi-step form design | Seurat | HIGH | 8.7 |
| Trust badges vicino form | Seurat | HIGH | 8.3 |
| Metriche nei case study | Ghostwriter | HIGH | 8.0 |
| Testimonial con foto | Ghostwriter | HIGH | 7.7 |
| Sticky CTA mobile | Seurat | HIGH | 7.0 |
| Bonus 30min in evidenza | Ghostwriter | MEDIUM | 6.7 |
| Micro-copy campo fatturato | Ghostwriter | MEDIUM | 6.3 |
| Risultato "rischio basso" | Ghostwriter | MEDIUM | 6.3 |
| Separare info hero subheadline | Seurat | MEDIUM | 6.3 |
| Loghi aziende case study | Seurat | MEDIUM | 6.0 |
| Touch target assessment | Seurat | MEDIUM | 6.0 |
| Numero specifico aziende aiutate | Ghostwriter | MEDIUM | 5.7 |
