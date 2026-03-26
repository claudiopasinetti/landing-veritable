/* ============================================
   Véritable Landing Page — Interactive Logic
   v2: CRO fixes (multi-step form, sticky CTA,
       improved assessment, trust signals)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Self-Assessment (Section 5) --- */
  var questions = document.querySelectorAll('.assessment__q');
  var resultScore = document.querySelector('.assessment__result-score');
  var resultText = document.querySelector('.assessment__result-text');
  var resultDesc = document.querySelector('.assessment__result-desc');

  if (questions.length) {
    questions.forEach(function (q) {
      q.addEventListener('click', function () {
        var checkbox = this.querySelector('.assessment__checkbox');
        checkbox.classList.toggle('checked');
        updateAssessment();
      });
    });
  }

  function updateAssessment() {
    var yesCount = document.querySelectorAll('.assessment__checkbox.checked').length;
    var noCount = questions.length - yesCount;

    if (resultScore) resultScore.textContent = noCount + '/' + questions.length;

    if (!resultText) return;

    if (noCount <= 1) {
      resultText.textContent = 'Il tuo valore \u00e8 parzialmente visibile';
      resultText.style.color = '#329f5b';
      resultDesc.textContent = 'Buona base, ma il workshop ti aiuta a massimizzare ci\u00f2 che il mercato percepisce. C\u2019\u00e8 sempre margine per comunicare meglio.';
    } else if (noCount <= 3) {
      resultText.textContent = 'Gap di percezione moderato';
      resultText.style.color = '#e9531d';
      resultDesc.textContent = 'Il mercato non vede tutto il tuo valore. Il workshop ti d\u00e0 strumenti concreti per colmare il gap.';
    } else {
      resultText.textContent = 'Valore invisibile \u2014 rischio alto';
      resultText.style.color = '#c0392b';
      resultDesc.textContent = 'Il tuo valore resta chiuso dentro l\u2019azienda. Stai perdendo opportunit\u00e0. Questo workshop \u00e8 stato progettato per te.';
    }
  }

  /* --- FAQ Accordion (Section 9) --- */
  var faqItems = document.querySelectorAll('.faq__question');

  faqItems.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.parentElement;
      var isActive = item.classList.contains('active');

      document.querySelectorAll('.faq__item').forEach(function (el) {
        el.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* --- Multi-Step Form (Section 11) --- */
  var form = document.getElementById('workshop-form');
  var formNextBtn = document.getElementById('form-next');
  var formBackBtn = document.getElementById('form-back');
  var steps = form ? form.querySelectorAll('.form-step') : [];
  var dots = form ? form.querySelectorAll('.form-step-dot') : [];
  var currentStep = 1;

  function showStep(step) {
    steps.forEach(function (s) { s.classList.remove('form-step--active'); });
    dots.forEach(function (d) {
      var dotStep = parseInt(d.dataset.step);
      d.classList.remove('active', 'completed');
      if (dotStep === step) d.classList.add('active');
      if (dotStep < step) d.classList.add('completed');
    });

    var target = form.querySelector('.form-step[data-step="' + step + '"]');
    if (target) target.classList.add('form-step--active');
    currentStep = step;

    // Scroll form into view
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validateStep(step) {
    var stepEl = form.querySelector('.form-step[data-step="' + step + '"]');
    if (!stepEl) return true;

    var isValid = true;

    // Reset errors in this step
    stepEl.querySelectorAll('.form-group').forEach(function (g) {
      g.classList.remove('has-error');
    });

    // Validate required fields in this step only
    stepEl.querySelectorAll('[required]').forEach(function (field) {
      if (field.type === 'checkbox' && !field.checked) {
        isValid = false;
        var container = field.closest('.form-checkbox');
        if (container) container.classList.add('has-error');
      } else if (!field.value || !field.value.trim()) {
        isValid = false;
        var group = field.closest('.form-group');
        if (group) group.classList.add('has-error');
      }
    });

    // Validate email format in step 1
    if (step === 1) {
      var email = stepEl.querySelector('#email');
      if (email && email.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
          isValid = false;
          email.closest('.form-group').classList.add('has-error');
        }
      }
    }

    return isValid;
  }

  if (formNextBtn) {
    formNextBtn.addEventListener('click', function () {
      if (validateStep(1)) {
        showStep(2);
      }
    });
  }

  if (formBackBtn) {
    formBackBtn.addEventListener('click', function () {
      showStep(1);
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateStep(2)) return;

      // Show success message
      form.style.display = 'none';
      var trustEl = document.querySelector('.form-trust');
      if (trustEl) trustEl.style.display = 'none';
      document.querySelector('.form-success').style.display = 'block';

      // Hide sticky CTA
      var stickyCta = document.getElementById('sticky-cta');
      if (stickyCta) stickyCta.classList.remove('visible');

      // In production: submit data to backend
      // var formData = new FormData(form);
      // fetch('/api/register', { method: 'POST', body: formData });
    });
  }

  /* --- Smooth Scroll for CTA anchors --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Progress Bar Animation (Section 10) --- */
  var progressFill = document.querySelector('.progress-bar__fill');
  if (progressFill) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          progressFill.style.width = progressFill.dataset.width || '60%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(progressFill.parentElement);
  }

  /* --- Sticky CTA Bar (Mobile) --- */
  var stickyCta = document.getElementById('sticky-cta');
  var heroSection = document.querySelector('.hero');
  var formSection = document.getElementById('registrazione');

  if (stickyCta && heroSection) {
    var stickyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // Show sticky when hero is NOT visible (user has scrolled past)
        if (!entry.isIntersecting) {
          stickyCta.classList.add('visible');
          stickyCta.setAttribute('aria-hidden', 'false');
        } else {
          stickyCta.classList.remove('visible');
          stickyCta.setAttribute('aria-hidden', 'true');
        }
      });
    }, { threshold: 0 });

    stickyObserver.observe(heroSection);

    // Hide sticky when form is visible
    if (formSection) {
      var formObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            stickyCta.classList.remove('visible');
            stickyCta.setAttribute('aria-hidden', 'true');
          }
        });
      }, { threshold: 0.2 });

      formObserver.observe(formSection);
    }
  }

});
