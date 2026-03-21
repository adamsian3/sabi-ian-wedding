// ============================================================
//  Language Switcher — Sabi & Ian Wedding
//  Supports: English (en) | Română (ro)
// ============================================================

const translations = {
  en: {
    // Navigation
    'nav.title':        'Our Wedding',
    'nav.info':         'Info',
    'nav.when_where':   'When &amp; Where',
    'nav.story':        'Our Story',
    'nav.guide':        'Wedding Guide',
    'nav.travel':       'Travel Guide',
    'nav.faq':          'FAQ',

    // index.html
    'home.date':           '12th June 2027',
    'home.subtitle':       'We\'re Getting Married!',
    'home.heading1':       'A match made in heaven!',
    'home.when':           'When',
    'home.when_date':      '<strong>Saturday, June 12, 2027</strong>',
    'home.church':         'Church',
    'home.church_sched':   'Church: 1pm – 2pm',
    'home.reception':      'Reception',
    'home.reception_sched':'Reception: 4pm – 3am',
    'home.cta':            'We hope you\'ll join us on this special day.',
    'home.guide_heading':  'What to expect from a Romanian Wedding',
    'home.guide_link':     'Read our guide →',
    'home.guide_dm':       'If you have any questions please just drop us a DM!',
    'home.travel_heading': 'Traveling in? No problem!',
    'home.travel_link':    'View Travel Guide →',

    // when-where.html
    'ww.when':          'When',
    'ww.when_date':     'Saturday, June 12, 2027',
    'ww.church_time':   'Church: 1pm — 2pm',
    'ww.reception_time':'Reception: 3pm — 3am',
    'ww.where':         'Where',
    'ww.church_title':  'Church',
    'ww.address':       '<strong>Address:</strong>',
    'ww.maps_view':     'View on Google Maps ↗',
    'ww.reception_title':'Reception',
    'ww.church_map':    'The Church',
    'ww.reception_map': 'The Reception',
    'ww.maps_open':     'Open in Google Maps ↗',

    // our-story.html
    'story.about':         'About Us',
    'story.bride':         'The Bride',
    'story.groom':         'The Groom',
    'story.journey':       'Our Journey',
    'story.meet_title':    'We meet for the first time',
    'story.date_title':    'Our first date!',
    'story.gig_title':     'Going to our first gig',
    'story.festival_title':'Boomtown Chapter One!',
    'story.memories_title':'Making memories',
    'story.trip_title':    'Our first trip abroad!',

    // guide.html
    'guide.banner':      'Our Romanian Wedding Guide',
    'guide.dress':       'Dress to impress',
    'guide.godparents':  'Godparents, Bridesmaids and Groomsmen',
    'guide.ceremony':    'Church Ceremony',
    'guide.dinner':      'The Dinner &amp; Bar',
    'guide.party':       'The Party',
    'guide.gifts':       'Wedding Gifts',

    // travel-guide.html
    'travel.banner':         'Your Romanian Travel Guide',
    'travel.how':            'How to get to Brașov',
    'travel.around':         'Getting around the city',
    'travel.see':            'What to See in Brașov',
    'travel.restaurants':    'Best Restaurants in Brașov',
    'travel.hotels':         'Hotels in Brașov',
    'travel.around_brasov':  'What to See Around Brașov',
    'travel.sightseeing':    'Sightseeing Romania',

    // faq.html
    'faq.banner':   'Frequently Asked Questions',
    'faq.q1':  'When is the RSVP deadline?',
    'faq.q2':  'What time should I arrive for the ceremony?',
    'faq.q3':  'Will there be a shuttle from the church to the venue?',
    'faq.q4':  'How do I get to and from the wedding venue?',
    'faq.q5':  'I\'m driving — where can I park?',
    'faq.q6':  'Can I bring a plus-one or my children?',
    'faq.q7':  'Can I take photos / videos with my phone?',
    'faq.q8':  'Will the wedding be indoors or outdoors?',
    'faq.q9':  'What should I wear?',
    'faq.q10': 'Can I wear a white dress?',
    'faq.q11': 'Will there be WiFi?',
    'faq.q12': 'Can I transfer the wedding gift in advance?',
    'faq.q13': 'I wish to bring a physical gift?',
    'faq.q14': 'I\'m flying in — what airport should I choose?',
    'faq.q15': 'Where should I stay hotel-wise?',
    'faq.q16': 'My question isn\'t listed here',

    // rsvp.html
    'rsvp.heading':  'We hope you\'ll join us!',
    'rsvp.btn':      'RSVP Now',
  },

  ro: {
    // Navigation
    'nav.title':        'Nunta Noastră',
    'nav.info':         'Informații',
    'nav.when_where':   'Când &amp; Unde',
    'nav.story':        'Povestea Noastră',
    'nav.guide':        'Ghidul Nunții',
    'nav.travel':       'Ghid de Călătorie',
    'nav.faq':          'Întrebări Frecvente',

    // index.html
    'home.date':           '12 Iunie 2027',
    'home.subtitle':       'Ne Căsătorim!',
    'home.heading1':       'Suflete pereche!',
    'home.when':           'Când',
    'home.when_date':      '<strong>Sâmbătă, 12 Iunie 2027</strong>',
    'home.church':         'Biserică',
    'home.church_sched':   'Ceremonie: 13:00 – 14:00',
    'home.reception':      'Recepție',
    'home.reception_sched':'Recepție: 16:00 – 3:00',
    'home.cta':            'Sperăm să fim cu toții împreună în această zi specială.',
    'home.guide_heading':  'Ce să te aștepți de la o nuntă românească',
    'home.guide_link':     'Citește ghidul nostru →',
    'home.guide_dm':       'Dacă ai întrebări, nu ezita să ne scrii!',
    'home.travel_heading': 'Vii din altă țară? Nicio problemă!',
    'home.travel_link':    'Vezi Ghidul de Călătorie →',

    // when-where.html
    'ww.when':          'Când',
    'ww.when_date':     'Sâmbătă, 12 Iunie 2027',
    'ww.church_time':   'Ceremonie: 13:00 — 14:00',
    'ww.reception_time':'Recepție: 15:00 — 3:00',
    'ww.where':         'Unde',
    'ww.church_title':  'Biserică',
    'ww.address':       '<strong>Adresă:</strong>',
    'ww.maps_view':     'Vezi pe Google Maps ↗',
    'ww.reception_title':'Recepție',
    'ww.church_map':    'Biserica',
    'ww.reception_map': 'Recepția',
    'ww.maps_open':     'Deschide în Google Maps ↗',

    // our-story.html
    'story.about':         'Despre Noi',
    'story.bride':         'Mireasa',
    'story.groom':         'Mirele',
    'story.journey':       'Călătoria Noastră',
    'story.meet_title':    'Ne întâlnim pentru prima dată',
    'story.date_title':    'Prima noastră întâlnire!',
    'story.gig_title':     'Primul concert împreună',
    'story.festival_title':'Boomtown — Capitolul Unu!',
    'story.memories_title':'Amintiri de neuitat',
    'story.trip_title':    'Prima noastră vacanță!',

    // guide.html
    'guide.banner':      'Ghidul Nunții Noastre Românești',
    'guide.dress':       'Îmbrăcați-vă elegant',
    'guide.godparents':  'Nași, Domnișoare de Onoare și Cavaleri de Onoare',
    'guide.ceremony':    'Ceremonia la Biserică',
    'guide.dinner':      'Cina &amp; Barul',
    'guide.party':       'Petrecerea',
    'guide.gifts':       'Cadouri de Nuntă',

    // travel-guide.html
    'travel.banner':         'Ghidul Tău de Călătorie în România',
    'travel.how':            'Cum ajungi la Brașov',
    'travel.around':         'Deplasarea în oraș',
    'travel.see':            'Ce să vizitezi în Brașov',
    'travel.restaurants':    'Cele mai bune restaurante din Brașov',
    'travel.hotels':         'Hoteluri în Brașov',
    'travel.around_brasov':  'Ce să vizitezi în împrejurimile Brașovului',
    'travel.sightseeing':    'Obiective turistice în România',

    // faq.html
    'faq.banner':   'Întrebări Frecvente',
    'faq.q1':  'Care este termenul limită pentru RSVP?',
    'faq.q2':  'La ce oră trebuie să ajung la ceremonie?',
    'faq.q3':  'Va exista un shuttle de la biserică la locație?',
    'faq.q4':  'Cum ajung la și de la locația nunții?',
    'faq.q5':  'Vin cu mașina — unde pot parca?',
    'faq.q6':  'Pot aduce un plus-one sau copiii mei?',
    'faq.q7':  'Pot face poze / video cu telefonul?',
    'faq.q8':  'Nunta va fi în interior sau în exterior?',
    'faq.q9':  'Cum trebuie să mă îmbrac?',
    'faq.q10': 'Pot purta o rochie albă?',
    'faq.q11': 'Va exista WiFi?',
    'faq.q12': 'Pot transfera cadoul în avans?',
    'faq.q13': 'Vreau să aduc un cadou fizic?',
    'faq.q14': 'Vin cu avionul — ce aeroport să aleg?',
    'faq.q15': 'Unde recomandați să stau la hotel?',
    'faq.q16': 'Întrebarea mea nu este listată aici',

    // rsvp.html
    'rsvp.heading':  'Sperăm să fii alături de noi!',
    'rsvp.btn':      'Confirmă Acum',
  }
};

// ============================================================
//  Core functions
// ============================================================

function getCurrentLang() {
  return localStorage.getItem('weddingLang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('weddingLang', lang);
  applyLang(lang);
  closeLangDropdown();
}

function applyLang(lang) {
  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = translations[lang] && translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Show/hide data-lang blocks
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
  });

  // Update the label inside the trigger button
  var label = document.getElementById('currentLangLabel');
  if (label) label.textContent = lang === 'en' ? 'English' : 'Română';

  // Highlight active language in dropdown
  ['en', 'ro'].forEach(function(l) {
    var btn = document.getElementById('lang-btn-' + l);
    if (btn) btn.classList.toggle('lang-active', l === lang);
  });
}

function toggleLangDropdown(e) {
  e.stopPropagation();
  var switcher = document.getElementById('langSwitcher');
  if (switcher) switcher.classList.toggle('open');
}

function closeLangDropdown() {
  var switcher = document.getElementById('langSwitcher');
  if (switcher) switcher.classList.remove('open');
}

// Close dropdown when clicking anywhere outside
document.addEventListener('click', function(e) {
  var switcher = document.getElementById('langSwitcher');
  if (switcher && !switcher.contains(e.target)) {
    switcher.classList.remove('open');
  }
});

// Apply stored language on page load
document.addEventListener('DOMContentLoaded', function() {
  applyLang(getCurrentLang());
});
