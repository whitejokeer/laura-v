/* =======================================================================
   Laura Victoria Herrera M. — Portfolio
   Bilingual (ES/EN) static site logic: i18n, nav, WhatsApp CTAs,
   project gallery/lightbox, scroll reveal.
   ======================================================================= */
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '573153980538'; // +57 315 3980 538
  const PAGES = 'assets/portfolio/pages/';
  const img = (n) => PAGES + 'page-' + String(n).padStart(2, '0') + '.webp';

  /* ----------------------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------------------- */
  const I18N = {
    es: {
      'skip': 'Saltar al contenido',
      'nav.about': 'Perfil', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos',
      'nav.cv': 'Trayectoria', 'nav.contact': 'Contacto', 'nav.cta': 'WhatsApp',
      'hero.eyebrow': 'Arquitecta · Bucaramanga, Colombia',
      'hero.tagline': 'Diseño urbano y arquitectónico que transforma ciudades y genera valor real para las comunidades.',
      'hero.cta1': 'Hablemos de tu proyecto',
      'hero.cta2': 'Ver proyectos',
      'about.eyebrow': 'Perfil profesional',
      'about.heading': 'Rigor técnico con sensibilidad humana.',
      'about.p1': 'Arquitecta bilingüe con más de tres años de experiencia liderando proyectos urbanos, de espacio público, educativos y de salud en Bucaramanga y Santander. Coordiné 49 laboratorios en 5.335 m² para la Universidad Industrial de Santander y participé en el diseño del Corredor Urbano Calle 53–54.',
      'about.p2': 'Especializada en metodologías <strong class="text-ink font-semibold">BIM</strong> y visualización arquitectónica, combino rigor técnico, creatividad y sostenibilidad para generar impacto comunitario y valor tangible en cada proyecto.',
      'stats.years': 'Años de experiencia',
      'stats.m2': 'm² de laboratorios coordinados',
      'stats.labs': 'Laboratorios coordinados',
      'stats.km': 'De alameda urbana diseñada',
      'services.eyebrow': 'Cómo puedo ayudarte',
      'services.heading': 'Servicios de diseño y consultoría.',
      'services.sub': 'Acompaño tu proyecto desde la idea hasta la entrega, con estándares técnicos, visualización de alto nivel y enfoque en resultados.',
      'services.cta': 'Cuéntame qué necesitas',
      'projects.eyebrow': 'Trabajo seleccionado',
      'projects.heading': 'Proyectos.',
      'projects.sub': 'Cuatro proyectos urbanos y arquitectónicos en Bucaramanga y Santander.',
      'projects.view': 'Ver proyecto',
      'cv.eyebrow': 'Trayectoria',
      'cv.heading': 'Formación y experiencia.',
      'cv.experience': 'Experiencia',
      'cv.education': 'Educación',
      'cv.languages': 'Idiomas',
      'contact.eyebrow': 'Trabajemos juntos',
      'contact.heading': '¿Tienes un proyecto en mente?',
      'contact.sub': 'Escríbeme por WhatsApp y conversemos. Respondo personalmente y te ayudo a darle forma a tu idea.',
      'contact.whatsapp': 'Escríbeme por WhatsApp',
      'contact.phoneLabel': 'Teléfono', 'contact.emailLabel': 'Email', 'contact.locLabel': 'Ubicación',
      'contact.loc': 'Bucaramanga, Santander · Colombia',
      'footer.rights': 'Todos los derechos reservados.',
      'modal.cta': 'Consultar por este proyecto',
      // WhatsApp prefilled messages
      'wa.general': 'Hola Laura, vi tu portafolio y me gustaría hablar sobre un proyecto.',
      'wa.project': 'Hola Laura, vi tu portafolio y me interesa el proyecto «{p}». Me gustaría conversar.',
      'status.built': 'Construido',
      'status.phase3': 'Diseño · Fase 3',
      'status.phase2': 'Diseño · Fase 2',
    },
    en: {
      'skip': 'Skip to content',
      'nav.about': 'About', 'nav.services': 'Services', 'nav.projects': 'Projects',
      'nav.cv': 'Résumé', 'nav.contact': 'Contact', 'nav.cta': 'WhatsApp',
      'hero.eyebrow': 'Architect · Bucaramanga, Colombia',
      'hero.tagline': 'Urban and architectural design that transforms cities and creates real value for communities.',
      'hero.cta1': "Let's talk about your project",
      'hero.cta2': 'View projects',
      'about.eyebrow': 'Professional profile',
      'about.heading': 'Technical rigor with a human touch.',
      'about.p1': 'Bilingual architect with over three years of experience leading urban, public-space, educational and healthcare projects in Bucaramanga and Santander. I coordinated 49 laboratories across 5,335 m² for the Industrial University of Santander and contributed to the design of the Calle 53–54 Urban Corridor.',
      'about.p2': 'Specialized in <strong class="text-ink font-semibold">BIM</strong> methodologies and architectural visualization, I combine technical rigor, creativity and sustainability to generate community impact and tangible value in every project.',
      'stats.years': 'Years of experience',
      'stats.m2': 'm² of labs coordinated',
      'stats.labs': 'Laboratories coordinated',
      'stats.km': 'Of urban promenade designed',
      'services.eyebrow': 'How I can help',
      'services.heading': 'Design & consulting services.',
      'services.sub': 'I guide your project from idea to delivery, with technical standards, high-end visualization and a results-driven focus.',
      'services.cta': 'Tell me what you need',
      'projects.eyebrow': 'Selected work',
      'projects.heading': 'Projects.',
      'projects.sub': 'Four urban and architectural projects in Bucaramanga and Santander.',
      'projects.view': 'View project',
      'cv.eyebrow': 'Background',
      'cv.heading': 'Education & experience.',
      'cv.experience': 'Experience',
      'cv.education': 'Education',
      'cv.languages': 'Languages',
      'contact.eyebrow': "Let's work together",
      'contact.heading': 'Have a project in mind?',
      'contact.sub': "Message me on WhatsApp and let's talk. I reply personally and help you shape your idea.",
      'contact.whatsapp': 'Message me on WhatsApp',
      'contact.phoneLabel': 'Phone', 'contact.emailLabel': 'Email', 'contact.locLabel': 'Location',
      'contact.loc': 'Bucaramanga, Santander · Colombia',
      'footer.rights': 'All rights reserved.',
      'modal.cta': 'Ask about this project',
      'wa.general': "Hi Laura, I saw your portfolio and I'd like to talk about a project.",
      'wa.project': 'Hi Laura, I saw your portfolio and I\'m interested in the "{p}" project. I\'d like to talk.',
      'status.built': 'Built',
      'status.phase3': 'Design · Phase 3',
      'status.phase2': 'Design · Phase 2',
    },
  };

  /* ----------------------------------------------------------------------
     2. DATA — services, projects, CV
     ---------------------------------------------------------------------- */
  const ICONS = {
    building: '<path d="M3 21h18M5 21V5a2 2 0 012-2h6a2 2 0 012 2v16M9 7h2M9 11h2M9 15h2M17 21V9h2a2 2 0 012 2v10"/>',
    map: '<path d="M9 6.75L3.75 4.5v12.75L9 19.5m0-12.75L15 4.5m-6 2.25v12.75m6-15L20.25 6.75V19.5L15 17.25m0-12.75v12.75"/>',
    leaf: '<path d="M3 21c0-9 6-15 18-15 0 12-6 18-15 18 0-6 3-9 9-12"/>',
    cube: '<path d="M21 7.5L12 3 3 7.5m18 0L12 12m9-4.5v9L12 21m0-9L3 7.5m9 4.5v9M3 7.5v9L12 21"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 16.5l9 5 9-5"/>',
  };

  const SERVICES = {
    es: [
      { i: 'building', t: 'Diseño arquitectónico', d: 'Proyectos de salud, educación e infraestructura, del concepto a la documentación técnica.' },
      { i: 'map', t: 'Diseño urbano y espacio público', d: 'Corredores, parques y alamedas que conectan la ciudad con la naturaleza y la comunidad.' },
      { i: 'layers', t: 'Coordinación BIM', d: 'Modelado, detección de interferencias y coordinación interdisciplinar en Revit y BIM 360.' },
      { i: 'cube', t: 'Visualización y renders', d: 'Imágenes fotorrealistas y montaje de escena en D5 para comunicar tu proyecto con impacto.' },
      { i: 'leaf', t: 'Paisajismo y sostenibilidad', d: 'Diseño de paisaje, arborización y estrategias sostenibles para entornos más habitables.' },
      { i: 'compass', t: 'Cumplimiento normativo', d: 'Diseño técnico bajo normativa colombiana (Res. 3100, NTC) para salud y espacio público.' },
    ],
    en: [
      { i: 'building', t: 'Architectural design', d: 'Healthcare, educational and infrastructure projects, from concept to technical documentation.' },
      { i: 'map', t: 'Urban design & public space', d: 'Corridors, parks and promenades that connect the city with nature and the community.' },
      { i: 'layers', t: 'BIM coordination', d: 'Modeling, clash detection and interdisciplinary coordination in Revit and BIM 360.' },
      { i: 'cube', t: 'Visualization & renders', d: 'Photorealistic imagery and scene composition in D5 to communicate your project with impact.' },
      { i: 'leaf', t: 'Landscape & sustainability', d: 'Landscape design, tree planting and sustainable strategies for more livable environments.' },
      { i: 'compass', t: 'Regulatory compliance', d: 'Technical design under Colombian regulations (Res. 3100, NTC) for healthcare and public space.' },
    ],
  };

  const PROJECTS = [
    {
      id: 'uis',
      feature: img(7),
      images: [5, 6, 7, 8, 10, 11, 13, 14, 16, 18, 20, 22],
      year: '2023–2024',
      status: 'status.built',
      es: {
        title: 'Complejo Científico de Salud y Ciencias de la Vida — UIS',
        type: 'Facultad de Salud · Universidad Industrial de Santander',
        desc: 'Coordinación integral de 5.335 m² distribuidos en 56 laboratorios, 13 aulas y un auditorio para 400 personas. Una de las infraestructuras académicas y médicas más avanzadas de Latinoamérica, que integra docencia, experimentación e investigación.',
        achievement: 'Lideré la coordinación entre profesores, ingenieros y consultores para asegurar el cumplimiento regulatorio, funcional y sanitario bajo los estándares del Ministerio de Salud (Res. 3100 de 2019 y 1441 de 2024).',
      },
      en: {
        title: 'Scientific Complex for Health & Life Sciences — UIS',
        type: 'School of Health · Industrial University of Santander',
        desc: 'End-to-end coordination of 5,335 m² across 56 laboratories, 13 classrooms and a 400-seat auditorium. One of the most advanced academic and medical facilities in Latin America, integrating teaching, experimentation and research.',
        achievement: 'I led coordination among professors, engineers and consultants to ensure regulatory, functional and sanitary compliance under Ministry of Health standards (Res. 3100/2019 and 1441/2024).',
      },
    },
    {
      id: 'corredor',
      feature: img(25),
      images: [24, 25, 26, 27, 28, 29],
      year: '2022–2023',
      status: 'status.phase3',
      es: {
        title: 'Corredor Urbano Calle 53–54',
        type: 'Corredor verde y recreativo · Geomatics Research Group (UIS)',
        desc: 'Diseño de un corredor de integración de movilidad, ambiental y paisajística que conecta los sectores oriental y occidental de Bucaramanga: ciclorruta, alameda arborizada, gimnasios al aire libre y espacio público inclusivo.',
        achievement: 'Diseñé un corredor urbano de 15.000 m² que conecta la ciudad con el escarpe occidental —el pulmón verde olvidado de Bucaramanga— integrando movilidad activa, naturaleza y espacio público bajo principios de sostenibilidad.',
      },
      en: {
        title: 'Calle 53–54 Urban Corridor',
        type: 'Green & recreational corridor · Geomatics Research Group (UIS)',
        desc: 'Design of a mobility, environmental and landscape corridor connecting the eastern and western sectors of Bucaramanga: bike lane, tree-lined promenade, outdoor gyms and inclusive public space.',
        achievement: 'I designed a 15,000 m² urban corridor connecting the city with the western escarpment —Bucaramanga\'s forgotten green lung— integrating active mobility, nature and public space under sustainability principles.',
      },
    },
    {
      id: 'carrera25',
      feature: 'assets/portfolio/carrera25-feature.webp',
      images: [30, 31, 32, 33],
      year: '2023',
      status: 'status.phase3',
      es: {
        title: 'Eje del Espacio Público — Carrera 25',
        type: 'Corredor verde, educativo y recreativo · Geomatics Research Group',
        desc: 'Recuperación del espacio público en un sector con alto conflicto social y ambiental, junto a la UIS, el Colegio Santander y una estación de Metrolínea. Mejoramiento de andenes, zonas deportivas y recreativas.',
        achievement: 'Consolidé un proyecto urbano socializado y validado con la comunidad, transformando un corredor subutilizado en un espacio activo, seguro y recreativo para la interacción ciudadana.',
      },
      en: {
        title: 'Public Realm Axis — Carrera 25',
        type: 'Green, educational & recreational corridor · Geomatics Research Group',
        desc: 'Recovery of public space in an area with high social and environmental conflict, next to UIS, Colegio Santander and a Metrolínea station. Sidewalk improvement, sports and recreational zones.',
        achievement: 'I consolidated an urban project socialized and validated with the community, transforming an underused corridor into an active, safe and recreational space for civic interaction.',
      },
    },
    {
      id: 'provenza',
      feature: img(34),
      images: [34, 35, 36, 37],
      year: '2022',
      status: 'status.phase2',
      es: {
        title: 'Parque Portal de Provenza',
        type: 'Parque intergeneracional · Taller de Arquitectura, Alcaldía de Bucaramanga',
        desc: 'Diseño de un parque a escala barrial a partir de un espacio subutilizado, con zonas específicas por edad y áreas comunitarias compartidas de encuentro.',
        achievement: 'Consolidé un parque intergeneracional con juegos, gimnasio al aire libre, salón comunal y espacios de encuentro, conectados por una gran pérgola central que potencia la integración entre zonas y usuarios.',
      },
      en: {
        title: 'Portal de Provenza Park',
        type: 'Intergenerational park · Taller de Arquitectura, City of Bucaramanga',
        desc: 'Design of a neighborhood-scale park from an underused space, with age-specific zones and shared community gathering areas.',
        achievement: 'I consolidated an intergenerational park with playgrounds, an outdoor gym, a community hall and gathering spaces, connected by a large central pergola that enhances integration between zones and users.',
      },
    },
  ];

  const CV = {
    experience: [
      { range: '2025', es: { role: 'Diseñadora arquitectónica', org: 'Área Metropolitana de Bucaramanga' }, en: { role: 'Architectural designer', org: 'Bucaramanga Metropolitan Area' } },
      { range: '2023–2024', es: { role: 'Diseñadora arquitectónica y coordinadora BIM', org: 'SARCA SAS' }, en: { role: 'Architectural designer & BIM coordinator', org: 'SARCA SAS' } },
      { range: '2024', es: { role: 'Diseñadora arquitectónica', org: 'AG Arquitectos Urbanistas SAS' }, en: { role: 'Architectural designer', org: 'AG Arquitectos Urbanistas SAS' } },
      { range: '2022–2023', es: { role: 'Diseñadora urbana y de paisaje', org: 'Universidad Industrial de Santander' }, en: { role: 'Urban & landscape designer', org: 'Industrial University of Santander' } },
      { range: '2021–2022', es: { role: 'Diseñadora de paisaje y dibujante técnica', org: 'Alcaldía de Bucaramanga · Taller de Arquitectura' }, en: { role: 'Landscape designer & technical drafter', org: 'City of Bucaramanga · Architecture Studio' } },
    ],
    education: [
      { range: '2024', es: { role: 'Especialización Internacional en Gestión BIM', org: 'ARKADIS · Autodesk Authorized Training Center' }, en: { role: 'International Specialization in BIM Management', org: 'ARKADIS · Autodesk Authorized Training Center' } },
      { range: '2021', es: { role: 'Práctica Arquitectónica (RIBA Part 2)', org: 'Pontificia Universidad Javeriana' }, en: { role: 'Architectural Practice (RIBA Part 2)', org: 'Pontificia Universidad Javeriana' } },
      { range: '2016–2021', es: { role: 'Pregrado en Arquitectura', org: 'Pontificia Universidad Javeriana, Bogotá' }, en: { role: 'Bachelor of Architecture', org: 'Pontificia Universidad Javeriana, Bogotá' } },
      { range: '2006–2015', es: { role: 'Bachillerato bilingüe', org: 'New Cambridge School, Bucaramanga' }, en: { role: 'Bilingual high school', org: 'New Cambridge School, Bucaramanga' } },
    ],
    languages: [
      { es: 'Español — Nativo', en: 'Spanish — Native' },
      { es: 'Inglés — B2', en: 'English — B2' },
      { es: 'Francés — B1', en: 'French — B1' },
    ],
  };

  /* ----------------------------------------------------------------------
     3. STATE + HELPERS
     ---------------------------------------------------------------------- */
  let lang = localStorage.getItem('lvh-lang') || (navigator.language || 'es').slice(0, 2);
  if (lang !== 'en') lang = 'es';

  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.es[key] || key);
  const waLink = (msg) => 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ----------------------------------------------------------------------
     4. RENDER dynamic content
     ---------------------------------------------------------------------- */
  function renderServices() {
    const grid = $('#services-grid');
    grid.innerHTML = '';
    SERVICES[lang].forEach((s) => {
      const card = el('div', 'bg-ink p-7 sm:p-8 group');
      card.innerHTML =
        '<svg class="w-9 h-9 text-goldlt mb-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[s.i] + '</svg>' +
        '<h3 class="font-display font-bold text-lg mb-2">' + s.t + '</h3>' +
        '<p class="text-white/60 text-sm leading-relaxed">' + s.d + '</p>';
      grid.appendChild(card);
    });
  }

  function renderProjects() {
    const grid = $('#projects-grid');
    grid.innerHTML = '';
    PROJECTS.forEach((p, idx) => {
      const c = p[lang];
      const btn = el('button',
        'group text-left bg-white border border-line rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold');
      btn.type = 'button';
      btn.setAttribute('aria-label', t('projects.view') + ': ' + c.title);
      btn.innerHTML =
        '<div class="relative aspect-[4/3] overflow-hidden bg-muted">' +
          '<img src="' + p.feature + '" alt="' + c.title + '" loading="lazy" ' +
            'class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />' +
          '<span class="absolute top-4 left-4 bg-white/90 backdrop-blur text-ink text-xs font-semibold px-3 py-1 rounded-full">' + t(p.status) + '</span>' +
        '</div>' +
        '<div class="p-6 sm:p-7">' +
          '<div class="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-gold mb-3">' +
            '<span>' + p.year + '</span>' +
          '</div>' +
          '<h3 class="font-display font-bold text-xl sm:text-2xl leading-tight mb-2">' + c.title + '</h3>' +
          '<p class="text-ink2 text-sm mb-4">' + c.type + '</p>' +
          '<span class="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-gold transition-colors">' +
            t('projects.view') +
            '<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M5 12h14M13 6l6 6-6 6"/></svg>' +
          '</span>' +
        '</div>';
      btn.addEventListener('click', () => openModal(idx));
      grid.appendChild(btn);
    });
  }

  function renderCV() {
    const exp = $('#cv-experience'); exp.innerHTML = '';
    CV.experience.forEach((e) => {
      const d = e[lang];
      exp.appendChild(el('li', 'relative',
        '<span class="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-white"></span>' +
        '<p class="text-xs font-semibold tracking-wider uppercase text-gold mb-1">' + e.range + '</p>' +
        '<p class="font-display font-semibold text-base">' + d.role + '</p>' +
        '<p class="text-ink2 text-sm">' + d.org + '</p>'));
    });

    const edu = $('#cv-education'); edu.innerHTML = '';
    CV.education.forEach((e) => {
      const d = e[lang];
      edu.appendChild(el('li', 'relative',
        '<span class="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-white"></span>' +
        '<p class="text-xs font-semibold tracking-wider uppercase text-gold mb-1">' + e.range + '</p>' +
        '<p class="font-display font-semibold text-base">' + d.role + '</p>' +
        '<p class="text-ink2 text-sm">' + d.org + '</p>'));
    });

    const langs = $('#cv-languages'); langs.innerHTML = '';
    CV.languages.forEach((l) => {
      langs.appendChild(el('li', 'border border-line rounded-full px-4 py-2 text-sm font-medium', l[lang]));
    });
  }

  /* ----------------------------------------------------------------------
     5. i18n apply (static [data-i18n] nodes) + WhatsApp links
     ---------------------------------------------------------------------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const val = t(key);
      if (val) node.innerHTML = val;
    });
    $('#langLabel').textContent = lang === 'es' ? 'EN' : 'ES';

    // WhatsApp CTA links (general)
    const generalUrl = waLink(t('wa.general'));
    ['#navWhats', '#navWhatsM', '#heroWhats', '#servicesWhats', '#contactWhats', '#floatWhats']
      .forEach((sel) => { const n = $(sel); if (n) n.href = generalUrl; });
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('lvh-lang', lang);
    applyI18n();
    renderServices();
    renderProjects();
    renderCV();
    if (!$('#modal').hasAttribute('hidden') && currentProject != null) fillModal(currentProject);
  }

  /* ----------------------------------------------------------------------
     6. MODAL / LIGHTBOX
     ---------------------------------------------------------------------- */
  const modal = $('#modal');
  let currentProject = null;
  let lastFocused = null;

  function fillModal(idx) {
    const p = PROJECTS[idx];
    const c = p[lang];
    $('#modalMeta').textContent = p.year + ' · ' + t(p.status);
    $('#modalTitle').textContent = c.title;
    $('#modalDesc').textContent = c.desc;
    $('#modalAchievement').textContent = c.achievement;
    $('#modalWhats').href = waLink(t('wa.project').replace('{p}', c.title));

    const gal = $('#modalGallery');
    gal.innerHTML = '';
    p.images.forEach((n) => {
      const fig = el('a', 'block bg-muted rounded-lg overflow-hidden border border-line');
      fig.href = img(n);
      fig.target = '_blank';
      fig.rel = 'noopener';
      fig.innerHTML = '<img src="' + img(n) + '" alt="' + c.title + ' — ' + n + '" loading="lazy" class="w-full h-auto hover:opacity-90 transition-opacity" />';
      gal.appendChild(fig);
    });
  }

  function openModal(idx) {
    currentProject = idx;
    lastFocused = document.activeElement;
    fillModal(idx);
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    currentProject = null;
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {
      // simple focus trap
      const focusables = $$('a[href], button', modal).filter((n) => !n.hasAttribute('hidden'));
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  /* ----------------------------------------------------------------------
     7. NAV: header shadow, mobile menu
     ---------------------------------------------------------------------- */
  function initNav() {
    const header = $('#header');
    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add('bg-white/90', 'backdrop-blur', 'border-b', 'border-line', 'shadow-sm');
      else header.classList.remove('bg-white/90', 'backdrop-blur', 'border-b', 'border-line', 'shadow-sm');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const menuBtn = $('#menuBtn');
    const mobileNav = $('#mobileNav');
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.hasAttribute('hidden');
      if (open) { mobileNav.removeAttribute('hidden'); menuBtn.setAttribute('aria-expanded', 'true'); }
      else { mobileNav.setAttribute('hidden', ''); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
    $$('#mobileNav a').forEach((a) => a.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', ''); menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ----------------------------------------------------------------------
     8. SCROLL REVEAL
     ---------------------------------------------------------------------- */
  function initReveal() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = $$('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { items.forEach((i) => i.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach((i) => io.observe(i));
  }

  /* ----------------------------------------------------------------------
     9. INIT
     ---------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    $('#year').textContent = new Date().getFullYear();
    applyI18n();
    renderServices();
    renderProjects();
    renderCV();
    initNav();
    initReveal();

    $('#langToggle').addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
    $('#modalClose').addEventListener('click', closeModal);
    $('#modalBackdrop').addEventListener('click', closeModal);
  });
})();
