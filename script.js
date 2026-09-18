// JavaScript logic for Uthrattaathi DTP Center Website

document.addEventListener('DOMContentLoaded', () => {
  console.log('Uthrattaathi DTP Center website initialized.');

  // Checkbox selection styling for Quote Builder
  const checkboxCards = document.querySelectorAll('.checkbox-card');
  checkboxCards.forEach(card => {
    const checkbox = card.querySelector('input[type="checkbox"]');
    card.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      if (checkbox.checked) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  });

  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : '';
      if (navLinks.classList.contains('active')) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#140406';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid var(--bright-gold)';
      }
    });
  }

  // Square Service Card Data for Modal
  const serviceDetails = {
    dtp: {
      titleEn: 'DTP & Document Formatting',
      titleMl: 'ഡി.ടി.പി വർക്കുകൾ (മലയാളം & ഇംഗ്ലീഷ്)',
      desc: 'Expert Malayalam and English DTP typewriting, page layout design, font formatting, DTP composition for books, government forms, brochures, and custom documents.',
      features: [
        'Pure & Accurate Malayalam Fonts (Unicode & ML Fonts)',
        'English Technical & Speed Typewriting',
        'Official Document Layouts & Formatting',
        'Fast Same-Day Turnaround'
      ]
    },
    project: {
      titleEn: 'Project Works & Thesis',
      titleMl: 'പ്രോജക്ട് വർക്കുകൾ (സ്കൂൾ & കോളേജ്)',
      desc: 'Complete end-to-end academic project report creation, typing, indexing, reference formatting, diagram layout, color printouts, and hard/soft binding.',
      features: [
        'School, B.Tech, M.Tech, Degree & Diploma Projects',
        'Calicut / Kerala University Standard Formatting',
        'Certificate, Declaration & Index Page Setup',
        'High Quality Color & Black/White Printouts'
      ]
    },
    invitation: {
      titleEn: 'Invitation Card Design & Print',
      titleMl: 'ക്ഷണപത്രങ്ങൾ (കല്യാണം & മറ്റ് ചടങ്ങുകൾ)',
      desc: 'Beautifully crafted invitation cards for Weddings, Housewarming (പാലുകാച്ചൽ), Birthday Celebrations, Baptism, Anniversaries, and Funeral (ഓർമ്മക്കുറിപ്പുകൾ) functions.',
      features: [
        'Custom Malayalam Traditional & Modern Typography',
        'Premium Cardstock & Metallic Foil Options',
        'Matching Envelopes & QR Code Location Tags',
        'Quick Proofing & Bulk Printing Discounts'
      ]
    },
    visiting: {
      titleEn: 'Visiting Cards & Business Identity',
      titleMl: 'വിസിറ്റിംഗ് കാർഡുകൾ',
      desc: 'Stand out with professional business visiting cards, identity cards, name badges, and corporate brand stationery with premium matte or glossy finishes.',
      features: [
        'Single & Double Sided Multi-color Printing',
        '350 GSM Heavy Cardstock & Velvet Lamination',
        'Spot UV, Embossing & Rounded Corner Cuts',
        'Digital QR Code Link to WhatsApp / Maps'
      ]
    },
    binding: {
      titleEn: 'Book Binding & Document Finishing',
      titleMl: 'ബുക്ക് ബൈൻഡിംഗ്',
      desc: 'Durable binding options for project books, office registers, account books, legal documents, and personal manuscripts.',
      features: [
        'Golden Embossed Leatherette / Hard Binding',
        'Spiral Binding & Comb Binding',
        'Soft Cover Glossy / Calico Binding',
        'Old Book Restoration & Re-binding'
      ]
    },
    offset: {
      titleEn: 'Offset & Bulk Digital Printing',
      titleMl: 'ഓഫ്സെറ്റ് പ്രിന്റിംഗ് & നോട്ടീസുകൾ',
      desc: 'High-volume commercial offset printing for notices, event flyers, pamphlets, posters, bill books, letterheads, and flex banners.',
      features: [
        'Fast Multi-color Notice & Leaflet Printing',
        'Bill Books, Receipts & Token Books',
        'Letterheads, Envelopes & Vouchers',
        'Event Posters & Flex Printing'
      ]
    },
    scanning: {
      titleEn: 'Scanning & Lamination',
      titleMl: 'ഡിജിറ്റൽ സ്കാനിംഗ് & ലാമിനേഷൻ',
      desc: 'Ultra-clear digital scanning of documents & photos to PDF/JPEG, plus heavy duty thermal lamination to protect certificates and IDs.',
      features: [
        'High Resolution Color Scanning (up to 1200 DPI)',
        'Pouch Lamination for A4, A3 & Card Sizes',
        'PDF Creation & Email / WhatsApp Delivery',
        'Old Photo & Document Digital Archiving'
      ]
    },
    online: {
      titleEn: 'Online Applications & Form Filing',
      titleMl: 'ഓൺലൈൻ അപേക്ഷകൾ & പ്രിന്റൗട്ടുകൾ',
      desc: 'Assistance with online application forms, certificate requests, printouts from email/WhatsApp, mobile recharges, and digital submissions.',
      features: [
        'Quick WhatsApp File Printout Service',
        'Government & Educational Form Submissions',
        'Photo Resizing & Signature Editing',
        'Color & B/W High Speed Xeroxing'
      ]
    }
  };

  // Modal Functionality
  const modalOverlay = document.getElementById('serviceModal');
  const modalTitleEn = document.getElementById('modalTitleEn');
  const modalTitleMl = document.getElementById('modalTitleMl');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalClose = document.getElementById('modalClose');
  const modalWaBtn = document.getElementById('modalWaBtn');

  const squareCards = document.querySelectorAll('.square-card');
  squareCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceKey = card.getAttribute('data-service');
      const data = serviceDetails[serviceKey];
      if (data) {
        modalTitleEn.textContent = data.titleEn;
        modalTitleMl.textContent = data.titleMl;
        modalDesc.textContent = data.desc;
        modalFeatures.innerHTML = data.features.map(f => `<li><i class="fas fa-check-circle" style="color:#ffd700;"></i> ${f}</li>`).join('');
        
        const message = encodeURIComponent(`Hello Uthrattaathi DTP Center, I am interested in: ${data.titleEn} (${data.titleMl}). Please provide details.`);
        modalWaBtn.href = `https://wa.me/919947389514?text=${message}`;

        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
});

// WhatsApp Quote Generator Function
function sendWhatsAppQuote() {
  const selectedServices = [];
  const checkboxes = document.querySelectorAll('.checkbox-card input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    selectedServices.push(cb.value);
  });

  const customerName = document.getElementById('custName') ? document.getElementById('custName').value : '';
  const customerNotes = document.getElementById('custNotes') ? document.getElementById('custNotes').value : '';

  if (selectedServices.length === 0 && !customerNotes) {
    alert('Please select at least one service or write a brief note.');
    return;
  }

  let text = `*New Inquiry from Website - Uthrattaathi DTP*\n`;
  if (customerName) text += `*Name:* ${customerName}\n`;
  if (selectedServices.length > 0) {
    text += `*Selected Services:*\n - ${selectedServices.join('\n - ')}\n`;
  }
  if (customerNotes) {
    text += `*Notes/Requirements:* ${customerNotes}\n`;
  }
  text += `\nPlease reply with pricing and details. Thank you!`;

  const waUrl = `https://wa.me/919947389514?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}
