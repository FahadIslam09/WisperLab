/**
 * WISPER LAB — CORPORATE CLIENT LOGIC & INTERACTION CONTROLLER
 * Zero external libraries • High-trust accessibility • Enterprise Standard
 */

document.addEventListener('DOMContentLoaded', () => {
  initModals();
  initCopyActions();
  initContactForm();
  initMobileNavigation();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Accessible Modal Dialog Controller
   -------------------------------------------------------------------------- */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  let lastFocusedElement = null;

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        lastFocusedElement = document.activeElement;
        openModal(modal);
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.modal-backdrop');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // Close when clicking directly on backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Global ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.is-active');
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });

  function openModal(modal) {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button inside modal
    const closeBtn = modal.querySelector('[data-modal-close]');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeModal(modal) {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }
}

/* --------------------------------------------------------------------------
   2. Clipboard Copy & Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('[data-copy-value]');
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer = null;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const rawValue = btn.getAttribute('data-copy-value');
      const label = btn.getAttribute('data-copy-label') || 'Copied';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(rawValue).then(() => {
          showToast(`${label} copied to clipboard`);
        }).catch(() => {
          fallbackCopyText(rawValue, label);
        });
      } else {
        fallbackCopyText(rawValue, label);
      }
    });
  });

  function fallbackCopyText(text, label) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    try {
      document.execCommand('copy');
      showToast(`${label} copied to clipboard`);
    } catch (err) {
      showToast('Copy command failed');
    }
    document.body.removeChild(tempTextArea);
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // Hook copy JSON Dossier button
  const copyJsonBtn = document.getElementById('btn-copy-json-dossier');
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const entityDossier = {
        entity_name: "Wisper Lab",
        trade_license_number: "20268119454000219",
        proprietor: "Md. Fahad Islam",
        nature_of_business: "Individual / Sole Proprietorship (Online Business)",
        business_categories: [
          "Online Business",
          "Software Development",
          "Digital Commerce"
        ],
        issuing_authority: "No. 3 Pachandar Union Parishad, Tanore, Rajshahi",
        fiscal_year: "2026-2027",
        validity: "Valid up to 30 June 2027",
        registered_address: {
          line_1: "Kachua Uttar Para, Ward No- 07",
          line_2: "Post Office: Krishnapur, Upazila: Tanore",
          city_district: "Rajshahi",
          state_division: "Rajshahi",
          postal_code: "6220",
          country: "Bangladesh",
          geo_coordinates: "24.58° N, 88.58° E"
        },
        contact: {
          telephone: "+8801516556465",
          email: "fahadislam.fir@gmail.com",
          primary_domain: "https://wisperlab.fahadislam.com"
        },
        compliance_status: "Active Registered Enterprise"
      };

      const jsonString = JSON.stringify(entityDossier, null, 2);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(jsonString).then(() => {
          showToast('Official JSON Registry Dossier copied');
        });
      } else {
        fallbackCopyText(jsonString, 'Official JSON Registry Dossier');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. Contact Form Client-Side Validation & Dispatch State
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success-box');
  const resetBtn = document.getElementById('btn-reset-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('input-name');
    const emailInput = document.getElementById('input-email');
    const subjectInput = document.getElementById('input-subject');
    const messageInput = document.getElementById('input-message');

    // Reset error styles
    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      if (field) {
        field.style.borderColor = '';
        const err = field.parentElement.querySelector('.form-error-msg');
        if (err) err.classList.remove('visible');
      }
    });

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showFieldError(nameInput, 'Please provide your full legal name or organization representative.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, 'Please provide a valid business or verification email address.');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showFieldError(subjectInput, 'Please select or enter the inquiry subject category.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      showFieldError(messageInput, 'Message must be at least 15 characters detailing your inquiry.');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate high-trust corporate dispatch receipt
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting...';
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('visible');
        
        // Populate dispatch receipt
        const refCodeEl = document.getElementById('receipt-ref-code');
        const timestampEl = document.getElementById('receipt-timestamp');
        const emailReceiptEl = document.getElementById('receipt-target-email');

        const randomNum = Math.floor(1000 + Math.random() * 9000);
        if (refCodeEl) refCodeEl.textContent = `WL-REF-2026-${randomNum}`;
        if (timestampEl) timestampEl.textContent = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        if (emailReceiptEl) emailReceiptEl.textContent = emailInput.value.trim();
      }
    }, 400);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      form.reset();
      form.style.display = 'flex';
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Transmit Corporate Inquiry';
      }
      if (successBox) {
        successBox.classList.remove('visible');
      }
    });
  }

  function showFieldError(field, message) {
    field.style.borderColor = '#C0392B';
    const err = field.parentElement.querySelector('.form-error-msg');
    if (err) {
      err.textContent = message;
      err.classList.add('visible');
    }
  }
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = drawer.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  // Close when clicking nav links
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   5. Smooth Scroll Offset Handling
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

