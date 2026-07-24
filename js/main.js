// DASTIONS — interacciones y animaciones (sin dependencias)
(function () {
  document.documentElement.classList.add('js');
  var header = document.querySelector('.site-header');
  var links = document.querySelector('.nav__links');
  var toggle = document.querySelector('.nav__toggle');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Menú móvil
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Selector de idioma (ES / CA / EN) — se construye segun la pagina actual
  var langsel = document.querySelector('.langsel');
  if (langsel) {
    var _segs = location.pathname.split('/').filter(Boolean);
    var _last = _segs[_segs.length - 1] || '';
    var _file;
    if (_last === '' || _last === 'en' || _last === 'ca') _file = 'index.html';
    else if (/\.html$/i.test(_last)) _file = _last;
    else _file = _last + '.html';       // servidor sense extensio (p. ex. /en/servicios)
    // idioma = carpeta "en"/"ca" mes propera al fitxer (robust per a file:// i servidor)
    var _cur = 'es';
    for (var _i = _segs.length - 1; _i >= 0; _i--) {
      if (_segs[_i] === 'en') { _cur = 'en'; break; }
      if (_segs[_i] === 'ca') { _cur = 'ca'; break; }
    }
    var _root = _cur === 'es' ? '' : '../';
    var _links = { es: _root + _file, ca: _root + 'ca/' + _file, en: _root + 'en/' + _file };
    var _flags = {
      es: '<svg viewBox="0 0 3 2" preserveAspectRatio="none"><rect width="3" height="2" fill="#c60b1e"/><rect y=".5" width="3" height="1" fill="#ffc400"/></svg>',
      ca: '<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="6" fill="#FCDD09"/><rect y="0.667" width="9" height="0.667" fill="#DA121A"/><rect y="2" width="9" height="0.667" fill="#DA121A"/><rect y="3.333" width="9" height="0.667" fill="#DA121A"/><rect y="4.667" width="9" height="0.667" fill="#DA121A"/></svg>',
      en: '<svg viewBox="0 0 60 30" preserveAspectRatio="none"><rect width="60" height="30" fill="#012169"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>'
    };
    var _names = { es: 'Español', ca: 'Català', en: 'English' }, _codes = { es: 'ES', ca: 'CA', en: 'EN' };
    var _menu = ['es', 'ca', 'en'].map(function (l) {
      return '<a href="' + _links[l] + '"' + (l === _cur ? ' class="is-active"' : '') + ' role="menuitem"><span class="flag">' + _flags[l] + '</span> ' + _names[l] + '</a>';
    }).join('');
    langsel.innerHTML =
      '<button class="langsel__btn" type="button" aria-label="Idioma / Language / Idioma" aria-haspopup="true" aria-expanded="false"><span class="flag">' + _flags[_cur] + '</span><span>' + _codes[_cur] + '</span><svg class="langsel__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="langsel__menu" role="menu">' + _menu + '</div>';

    var lbtn = langsel.querySelector('.langsel__btn');
    lbtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var o = langsel.classList.toggle('open');
      lbtn.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    document.addEventListener('click', function () {
      langsel.classList.remove('open');
      lbtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Cinta de testimonios: duplicar contenido para bucle continuo
  var track = document.querySelector('.marquee__track');
  if (track && !reduce) {
    var originals = [].slice.call(track.children);
    originals.forEach(function (el) {
      var c = el.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    });
  }

  // Hero carrusel de productos destacados (rota cada 5s)
  var heroSlider = document.querySelector('.hero--slider');
  if (heroSlider) {
    var hSlides = [].slice.call(heroSlider.querySelectorAll('.hero__slide'));
    var hDots = [].slice.call(heroSlider.querySelectorAll('.hero__dot'));
    var hCur = 0, hTimer = null;
    var playHeroVid = function (i) { var v = hSlides[i] && hSlides[i].querySelector('video'); if (v) { v.muted = true; v.playsInline = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); } };
    var pauseHeroVid = function (i) { var v = hSlides[i] && hSlides[i].querySelector('video'); if (v && !v.paused) v.pause(); };
    var heroGo = function (n) {
      pauseHeroVid(hCur);
      hSlides[hCur].classList.remove('is-active');
      if (hDots[hCur]) hDots[hCur].classList.remove('is-active');
      hCur = (n + hSlides.length) % hSlides.length;
      hSlides[hCur].classList.add('is-active');
      if (hDots[hCur]) hDots[hCur].classList.add('is-active');
      playHeroVid(hCur); // carga el vídeo solo al mostrarse
    };
    var heroStart = function () { heroStop(); if (!reduce) hTimer = setInterval(function () { heroGo(hCur + 1); }, 5000); };
    function heroStop() { if (hTimer) { clearInterval(hTimer); hTimer = null; } }
    hDots.forEach(function (d, idx) {
      d.addEventListener('click', function () { heroGo(idx); heroStart(); });
    });
    heroSlider.addEventListener('mouseenter', heroStop);
    heroSlider.addEventListener('mouseleave', heroStart);
    playHeroVid(0); // solo el primer slide se reproduce al cargar
    heroStart();
  }

  // Consolas interactivas en vivo (pesaje IA / ciberseguridad)
  var scenarios = {
    pesaje: {
      idle: 'EN ESPERA',
      fields: ['plate', 'company', 'driver', 'weight', 'dock', 'time'],
      items: [
        { plate: '4821-KLM', company: 'Transportes García S.L.', driver: 'Juan Martínez', weight: '32.450 kg', dock: 'Muelle 3', time: '09:42', ok: true },
        { plate: '7139-BRT', company: 'Logística del Ebro', driver: 'Marta Ruiz', weight: '28.980 kg', dock: 'Muelle 1', time: '10:07', ok: true },
        { plate: '2504-XCV', company: 'Áridos Peninsular', driver: 'Sin cita previa', weight: '—', dock: '—', time: '10:15', ok: false },
        { plate: '9662-TFR', company: 'Frutas del Sur', driver: 'Pedro Gómez', weight: '24.310 kg', dock: 'Muelle 5', time: '10:31', ok: true }
      ],
      steps: function (t, h) {
        return [
          [300, function () { h.clear(); h.line('b', 'IA', 'Detectando vehículo en báscula...'); }],
          [750, function () { h.line('ok', 'ANPR', 'Matrícula leída: ' + t.plate); h.set('plate', t.plate); }],
          [700, function () { h.line('txt', 'BD', 'Empresa: ' + t.company); h.set('company', t.company); }],
          [650, function () { h.set('driver', t.driver); h.line('txt', 'BD', 'Conductor: ' + t.driver); }],
          [750, function () { if (t.ok) { h.line('ok', 'PESO', 'Pesaje completado: ' + t.weight); h.set('weight', t.weight); } else { h.line('warn', 'AVISO', 'Vehículo sin cita ni albarán asignado'); } }],
          [700, function () { if (t.ok) { h.line('b', 'IA', 'Asignando destino: ' + t.dock); h.set('dock', t.dock); h.set('time', t.time); } else { h.set('time', t.time, true); } }],
          [800, function () { if (t.ok) { h.line('ok', 'ACCESO', 'ACCESO AUTORIZADO · barrera abierta'); h.result('ACCESO AUTORIZADO', 'ok'); } else { h.line('warn', 'ACCESO', 'ACCESO DENEGADO · avisar a operario'); h.result('ACCESO DENEGADO', 'warn'); } }],
          [750, function () { if (t.ok) h.line('ok', 'ERP', 'Datos enviados a SAP correctamente ✓'); else h.line('txt', 'ERP', 'Registro guardado para revisión'); }]
        ];
      }
    },
    seguridad: {
      idle: 'EN ESCUCHA',
      fields: ['ip', 'user', 'device', 'geo', 'mfa', 'fw'],
      items: [
        { ip: '192.168.10.24', user: 'a.mauri@dastions', device: 'FW-Core-01', geo: 'Tarragona, ES', mfa: true, ok: true },
        { ip: '45.83.121.7', user: 'root', device: 'Edge-GW-02', geo: 'Ubicación desconocida', mfa: false, ok: false },
        { ip: '10.0.4.51', user: 'm.ruiz@dastions', device: 'VPN-Node-03', geo: 'Madrid, ES', mfa: true, ok: true },
        { ip: '193.42.8.91', user: '—', device: 'Edge-GW-02', geo: 'Fuera de la red', ok: false, brute: true }
      ],
      steps: function (e, h) {
        return [
          [300, function () { h.clear(); h.line('b', 'IDS', 'Analizando conexión entrante...'); }],
          [700, function () { h.line('txt', 'NET', 'Origen: ' + e.ip + ' (' + e.geo + ')'); h.set('ip', e.ip); h.set('geo', e.geo, !e.ok); }],
          [700, function () { h.line('txt', 'FW', e.device + ': aplicando reglas TLS/443'); h.set('device', e.device); h.set('fw', e.ok ? 'Permitido' : 'Bloqueado', !e.ok); }],
          [700, function () { if (e.user && e.user !== '—') { h.line('txt', 'AUTH', 'Autenticando usuario: ' + e.user); h.set('user', e.user); } else { h.line('warn', 'AUTH', 'Usuario no reconocido'); h.set('user', '—', true); } }],
          [750, function () {
            if (e.brute) { h.line('warn', 'IDS', 'Fuerza bruta detectada · 42 intentos'); h.set('mfa', '—', true); }
            else if (e.mfa) { h.line('ok', 'MFA', 'Verificación 2FA correcta'); h.set('mfa', 'OK'); }
            else { h.line('warn', 'MFA', 'Doble factor no superado'); h.set('mfa', 'Fallo', true); }
          }],
          [700, function () { if (e.ok) { h.line('ok', 'VULN', 'Escaneo de vulnerabilidades: 0 críticas'); } else { h.line('warn', 'IDS', 'Patrón de intrusión bloqueado'); } }],
          [800, function () { if (e.ok) { h.line('ok', 'ACCESO', 'SESIÓN AUTORIZADA · cifrado TLS 1.3'); h.result('SESIÓN AUTORIZADA', 'ok'); } else { h.line('warn', 'ACCESO', 'ACCESO BLOQUEADO · IP en cuarentena'); h.result('ACCESO BLOQUEADO', 'warn'); } }],
          [750, function () { h.line(e.ok ? 'ok' : 'txt', 'SIEM', 'Evento registrado en SIEM ✓'); }]
        ];
      }
    }
  };

  [].slice.call(document.querySelectorAll('.agentsim')).forEach(function (sim) {
    var sc = scenarios[sim.getAttribute('data-sim') || 'pesaje'];
    if (!sc) return;
    var logEl = sim.querySelector('.agentsim__log');
    var h = {
      field: function (n) { return sim.querySelector('[data-f="' + n + '"]'); },
      clear: function () { logEl.innerHTML = ''; sc.fields.forEach(function (n) { var el = h.field(n); if (el) { el.textContent = '—'; el.classList.remove('set'); el.style.color = ''; } }); var st = h.field('status'); if (st) { st.textContent = sc.idle; st.className = 'agentsim__result'; } },
      line: function (cls, tag, txt) {
        var d = document.createElement('div'); d.className = 'agentsim__line';
        d.innerHTML = '<span class="agentsim__ln-t">&gt;</span><span class="agentsim__ln-' + cls + '">' + (tag ? '[' + tag + '] ' : '') + txt + '</span>';
        logEl.appendChild(d);
        while (logEl.children.length > 8) logEl.removeChild(logEl.firstChild);
      },
      set: function (n, val, warn) { var el = h.field(n); if (!el) return; el.textContent = val; el.classList.add('set'); el.style.color = warn ? '#febc2e' : ''; },
      result: function (txt, cls) { var st = h.field('status'); if (st) { st.textContent = txt; st.className = 'agentsim__result ' + cls; } }
    };
    var idx = 0;
    function play(item) {
      var steps = sc.steps(item, h), k = 0;
      (function next() {
        if (k >= steps.length) { setTimeout(function () { idx = (idx + 1) % sc.items.length; play(sc.items[idx]); }, 2600); return; }
        var s = steps[k++];
        setTimeout(function () { s[1](); next(); }, s[0]);
      })();
    }
    if (reduce) { sc.steps(sc.items[0], h).forEach(function (s) { s[1](); }); }
    else { setTimeout(function () { play(sc.items[0]); }, 600); }
  });

  // Carga y reproducción DIFERIDA de vídeos: solo cuando entran en pantalla
  // (los del carrusel los gestiona el slider; el resto, IntersectionObserver)
  var lazyVids = [].slice.call(document.querySelectorAll('video')).filter(function (v) { return !v.closest('.hero__slide'); });
  var playLazy = function (v) { v.muted = true; v.playsInline = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); };
  if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) playLazy(e.target);
        else if (!e.target.paused) e.target.pause();
      });
    }, { rootMargin: '250px 0px', threshold: 0.1 });
    lazyVids.forEach(function (v) { vio.observe(v); });
  } else {
    lazyVids.forEach(playLazy);
  }

  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  var pels = [].slice.call(document.querySelectorAll('.hero__bg img, .hero__bg video, .phero__bg img, .phero__bg video'));

  // Si el usuario prefiere menos movimiento: mostrar todo sin animar
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    counters.forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
  }

  // Reveal basado en scroll (fiable, se reactiva al subir y bajar)
  function checkReveals() {
    if (reduce) return;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = 0; i < reveals.length; i++) {
      var el = reveals[i], r = el.getBoundingClientRect();
      var inView = r.top < vh * 0.90 && r.bottom > vh * 0.06;
      if (inView) el.classList.add('in');
      else if (r.top >= vh) el.classList.remove('in'); // salió por abajo → se reanima al volver
    }
  }

  // Contadores animados
  function runCounter(el) {
    if (el.__done) return; el.__done = true;
    var end = parseFloat(el.getAttribute('data-count')), suf = el.getAttribute('data-suffix') || '',
        t0 = null, dur = 1500;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * p) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = end + suf;
    }
    requestAnimationFrame(step);
  }
  function checkCounters() {
    if (reduce) return;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    counters.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) runCounter(el);
    });
  }

  // Parallax suave de los fondos (hero / phero)
  function parallax() {
    if (reduce) return;
    var vh = window.innerHeight;
    pels.forEach(function (img) {
      var host = img.parentElement, r = host.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var offset = ((r.top + r.height / 2) - vh / 2) / vh;
      var y = Math.max(-70, Math.min(70, offset * 90));
      img.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(1.16)';
    });
  }

  var ticking = false;
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        checkReveals(); checkCounters(); parallax(); ticking = false;
      });
    }
  }

  // Ejecutar al cargar y en cada scroll/resize
  onScroll();
  // segunda pasada tras el primer paint (por si el layout aún no estaba listo)
  window.addEventListener('load', onScroll);
  setTimeout(onScroll, 250);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();

// Modales de contacto: formulario emergente encima de la página actual
(function () {
  var closeSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  function buildModal(label, inner) {
    var m = document.createElement('div');
    m.className = 'cmodal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-label', label);
    m.innerHTML =
      '<div class="cmodal__backdrop" data-cm-close></div>' +
      '<div class="cmodal__card">' +
        '<button class="cmodal__close" type="button" aria-label="Cerrar" data-cm-close>' + closeSvg + '</button>' +
        inner +
      '</div>';
    document.body.appendChild(m);
    m.addEventListener('click', function (e) { if (e.target.closest('[data-cm-close]')) closeModal(m); });
    return m;
  }
  function openModal(m, e) {
    if (e) e.preventDefault();
    m.classList.add('is-open');
    document.body.classList.add('cmodal-open');
    var f = m.querySelector('input, select, textarea');
    if (f) setTimeout(function () { f.focus(); }, 80);
  }
  function closeModal(m) {
    m.classList.remove('is-open');
    document.body.classList.remove('cmodal-open');
  }

  // Idioma de la página (es / en)
  var EN = (document.documentElement.getAttribute('lang') || 'es').toLowerCase().indexOf('en') === 0;
  var L = function (es, en) { return EN ? en : es; };
  var opts = function (arr) { return arr.map(function (v) { return '<option>' + v + '</option>'; }).join(''); };
  var chips = function (name, arr) { return arr.map(function (v) { return '<label class="chip"><input type="checkbox" name="' + name + '" value="' + v + '"><span>' + v + '</span></label>'; }).join(''); };
  // Campos de configuración de FormSubmit (los datos se envían a info@dastions.com)
  var fsHidden = function (subject) {
    return '<input type="hidden" name="_subject" value="' + subject + '">' +
      '<input type="hidden" name="_template" value="table">' +
      '<input type="hidden" name="_captcha" value="false">' +
      '<input type="text" name="_honey" tabindex="-1" autocomplete="off" style="display:none">';
  };

  var rgpd = '<label class="check"><input type="checkbox" required><span>' + L('He leído y acepto la política de privacidad y el tratamiento de mis datos para responder a esta solicitud.', 'I have read and accept the privacy policy and the processing of my data in order to respond to this request.') + '</span></label>';
  var mailNote = '<p style="font-size:.86rem;color:var(--muted);margin:1.1rem 0 0">' + L('¿Prefieres el correo? ', 'Prefer email? ') + '<a href="mailto:info@dastions.com" style="color:var(--brand-dd);font-weight:600">info@dastions.com</a></p>';
  var LB_NAME = L('Nombre *', 'Name *'), LB_COMP = L('Empresa', 'Company'), LB_TEL = L('Teléfono *', 'Phone *'), LB_MSG = L('Mensaje', 'Message'), LB_SEL = L('Selecciona', 'Select'), LB_SEND = L('Enviar solicitud', 'Send request'), LB_QUOTE = L('Solicitar presupuesto', 'Request a quote');

  // ---- Modal general ----
  var general = buildModal(L('Solicita tu presupuesto', 'Request your quote'),
    '<span class="eyebrow">' + L('Contacto', 'Contact') + '</span>' +
    '<h2 class="h3" style="margin:.3rem 0 1.3rem">' + L('Solicita tu presupuesto', 'Request your quote') + '</h2>' +
    '<form action="https://formsubmit.co/info@dastions.com" method="POST">' +
      fsHidden(L('Nueva solicitud de presupuesto — Dastions.com', 'New quote request — Dastions.com')) +
      '<div class="row2">' +
        '<div class="field"><label for="cm-nombre">' + LB_NAME + '</label><input id="cm-nombre" name="nombre" type="text" required autocomplete="name"></div>' +
        '<div class="field"><label for="cm-empresa">' + LB_COMP + '</label><input id="cm-empresa" name="empresa" type="text" autocomplete="organization"></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="cm-email">Email *</label><input id="cm-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="field"><label for="cm-telefono">' + LB_TEL + '</label><input id="cm-telefono" name="telefono" type="tel" required autocomplete="tel"></div>' +
      '</div>' +
      '<div class="field"><label for="cm-necesitas">' + L('¿Qué necesitas?', 'What do you need?') + '</label><select id="cm-necesitas" name="necesitas">' +
        '<option value="">' + L('Selecciona una opción', 'Select an option') + '</option>' +
        opts(L(['Software a medida', 'Básculas puente', 'Pesaje y logística (Truck &amp; Scales)', 'Silos 360 (monitorización de silos)', 'Control de accesos', 'Verificaciones y calibraciones (ENAC)', 'IoT / Producción', 'Ciberseguridad', 'Agente de IA', 'Integración con ERP', 'Otro'], ['Custom software', 'Truck weighbridges', 'Weighing &amp; logistics (Truck &amp; Scales)', 'Silos 360 (silo monitoring)', 'Access control', 'Verification &amp; calibration (ENAC)', 'IoT / Production', 'Cybersecurity', 'AI agent', 'ERP integration', 'Other'])) +
      '</select></div>' +
      '<div class="field"><label for="cm-mensaje">' + LB_MSG + '</label><textarea id="cm-mensaje" name="mensaje" rows="4" placeholder="' + L('Cuéntanos tu caso, equipos a conectar, plazos...', 'Tell us about your case, equipment to connect, timescales...') + '"></textarea></div>' +
      rgpd +
      '<button type="submit" class="btn btn--primary" style="width:100%;justify-content:center">' + LB_SEND + ' <span class="arrow">→</span></button>' +
    '</form>' + mailNote);

  // ---- Modal específico: Integración ERP ----
  var erp = buildModal(L('Conecta tus equipos con tu ERP', 'Connect your equipment with your ERP'),
    '<span class="eyebrow">' + L('Integración ERP', 'ERP integration') + '</span>' +
    '<h2 class="h3" style="margin:.3rem 0 .5rem">' + L('Conecta tus equipos con tu ERP', 'Connect your equipment with your ERP') + '</h2>' +
    '<p style="color:var(--muted);font-size:.92rem;margin:0 0 1.3rem">' + L('Cuéntanos qué equipos quieres integrar y con qué ERP trabajas. Te preparamos una propuesta a medida.', 'Tell us which equipment you want to integrate and which ERP you work with. We\'ll prepare a tailor-made proposal.') + '</p>' +
    '<form action="https://formsubmit.co/info@dastions.com" method="POST">' +
      fsHidden(L('Integración ERP — Dastions.com', 'ERP integration — Dastions.com')) +
      '<input type="hidden" name="asunto" value="' + L('Integración ERP', 'ERP integration') + '">' +
      '<div class="row2">' +
        '<div class="field"><label for="erp-nombre">' + LB_NAME + '</label><input id="erp-nombre" name="nombre" type="text" required autocomplete="name"></div>' +
        '<div class="field"><label for="erp-empresa">' + LB_COMP + '</label><input id="erp-empresa" name="empresa" type="text" autocomplete="organization"></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="erp-email">Email *</label><input id="erp-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="field"><label for="erp-telefono">' + LB_TEL + '</label><input id="erp-telefono" name="telefono" type="tel" required autocomplete="tel"></div>' +
      '</div>' +
      '<div class="field"><span class="cmodal__legend">' + L('¿Qué elementos deseas conectar?', 'Which items would you like to connect?') + '</span><div class="cmodal__checks">' + chips('elementos', L(['Básculas de camiones', 'Detectores de metales', 'Pesadoras en continuo', 'Dosificadoras', 'Silos', 'Control de accesos', 'Otros'], ['Truck weighbridges', 'Metal detectors', 'Checkweighers', 'Dosing machines', 'Silos', 'Access control', 'Other'])) + '</div></div>' +
      '<div class="field"><label for="erp-sistema">' + L('¿Qué ERP usas?', 'Which ERP do you use?') + '</label><select id="erp-sistema" name="erp">' +
        '<option value="">' + L('Selecciona tu ERP', 'Select your ERP') + '</option>' +
        opts(['SAP', 'Navision', 'Oracle', 'Sage', 'Transkal']) +
        opts(L(['ERP propio de la empresa', 'Otro'], ['Company\'s own ERP', 'Other'])) +
      '</select></div>' +
      '<div class="field"><label for="erp-mensaje">' + LB_MSG + '</label><textarea id="erp-mensaje" name="mensaje" rows="3" placeholder="' + L('Nº de equipos, marcas, plazos...', 'Number of units, brands, timescales...') + '"></textarea></div>' +
      rgpd +
      '<button type="submit" class="btn btn--primary" style="width:100%;justify-content:center">' + LB_SEND + ' <span class="arrow">→</span></button>' +
    '</form>' + mailNote);

  // ---- Modal específico: Calibración y verificación ----
  var calib = buildModal(L('Calibración y verificación de básculas', 'Scale calibration and verification'),
    '<span class="eyebrow">' + L('Metrología · ENAC', 'Metrology · ENAC') + '</span>' +
    '<h2 class="h3" style="margin:.3rem 0 .5rem">' + L('Presupuesto de calibración y verificación', 'Calibration and verification quote') + '</h2>' +
    '<p style="color:var(--muted);font-size:.92rem;margin:0 0 1.3rem">' + L('Cuéntanos qué instrumentos quieres calibrar o verificar y su capacidad. Te preparamos un presupuesto y te llamamos.', 'Tell us which instruments you want to calibrate or verify and their capacity. We\'ll prepare a quote and call you.') + '</p>' +
    '<form action="https://formsubmit.co/info@dastions.com" method="POST">' +
      fsHidden(L('Calibración y verificación (ENAC) — Dastions.com', 'Calibration and verification (ENAC) — Dastions.com')) +
      '<input type="hidden" name="asunto" value="' + L('Calibración y verificación (ENAC)', 'Calibration and verification (ENAC)') + '">' +
      '<div class="row2">' +
        '<div class="field"><label for="cal-nombre">' + LB_NAME + '</label><input id="cal-nombre" name="nombre" type="text" required autocomplete="name"></div>' +
        '<div class="field"><label for="cal-empresa">' + LB_COMP + '</label><input id="cal-empresa" name="empresa" type="text" autocomplete="organization"></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="cal-email">Email *</label><input id="cal-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="field"><label for="cal-telefono">' + LB_TEL + '</label><input id="cal-telefono" name="telefono" type="tel" required autocomplete="tel"></div>' +
      '</div>' +
      '<div class="field"><label for="cal-servicio">' + L('¿Qué necesitas?', 'What do you need?') + '</label><select id="cal-servicio" name="servicio">' +
        '<option value="">' + L('Selecciona una opción', 'Select an option') + '</option>' +
        opts(L(['Calibración', 'Verificación (metrología legal)', 'Calibración y verificación', 'No estoy seguro, asesoradme'], ['Calibration', 'Verification (legal metrology)', 'Calibration and verification', 'I\'m not sure, please advise'])) +
      '</select></div>' +
      '<div class="field"><span class="cmodal__legend">' + L('¿Qué instrumentos quieres calibrar o verificar?', 'Which instruments do you want to calibrate or verify?') + '</span><div class="cmodal__checks">' + chips('instrumento', L(['Báscula puente de camiones', 'Báscula de plataforma / paletizada', 'Báscula de laboratorio o precisión', 'Báscula de sobremesa (hasta 30 kg)', 'Pesas patrón', 'Otro'], ['Truck weighbridge', 'Platform / pallet scale', 'Laboratory or precision scale', 'Bench scale (up to 30 kg)', 'Standard weights', 'Other'])) + '</div></div>' +
      '<div class="row2">' +
        '<div class="field"><label for="cal-alcance">' + L('Alcance / capacidad máxima', 'Range / maximum capacity') + '</label><select id="cal-alcance" name="alcance">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(L(['Hasta 30 kg', 'Hasta 300 kg', 'Hasta 1.500 kg', 'Hasta 6.000 kg', '45 t', '60 t', '80 t', 'Otro / no lo sé'], ['Up to 30 kg', 'Up to 300 kg', 'Up to 1,500 kg', 'Up to 6,000 kg', '45 t', '60 t', '80 t', 'Other / not sure'])) +
        '</select></div>' +
        '<div class="field"><label for="cal-num">' + L('Nº de instrumentos', 'Number of instruments') + '</label><select id="cal-num" name="cantidad">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(L(['1', '2 a 5', '6 a 10', 'Más de 10'], ['1', '2 to 5', '6 to 10', 'More than 10'])) +
        '</select></div>' +
      '</div>' +
      '<div class="field"><label for="cal-mensaje">' + LB_MSG + '</label><textarea id="cal-mensaje" name="mensaje" rows="3" placeholder="' + L('Marca/modelo, ubicación, periodicidad...', 'Brand/model, location, frequency...') + '"></textarea></div>' +
      rgpd +
      '<button type="submit" class="btn btn--primary" style="width:100%;justify-content:center">' + LB_QUOTE + ' <span class="arrow">→</span></button>' +
    '</form>' + mailNote);

  // ---- Modal específico: Báscula puente de camiones ----
  var bascula = buildModal(L('Presupuesto de báscula de camiones', 'Truck weighbridge quote'),
    '<span class="eyebrow">' + L('Básculas puente · Montaje', 'Weighbridges · Installation') + '</span>' +
    '<h2 class="h3" style="margin:.3rem 0 .5rem">' + L('Presupuesto de báscula de camiones', 'Truck weighbridge quote') + '</h2>' +
    '<p style="color:var(--muted);font-size:.92rem;margin:0 0 1.3rem">' + L('Diseño, obra civil, montaje y puesta en marcha llave en mano. Cuéntanos cómo la quieres y te preparamos un presupuesto.', 'Turnkey design, civil works, installation and commissioning. Tell us how you want it and we\'ll prepare a quote.') + '</p>' +
    '<form action="https://formsubmit.co/info@dastions.com" method="POST">' +
      fsHidden(L('Báscula puente de camiones — Dastions.com', 'Truck weighbridge — Dastions.com')) +
      '<input type="hidden" name="asunto" value="' + L('Báscula puente de camiones', 'Truck weighbridge') + '">' +
      '<div class="row2">' +
        '<div class="field"><label for="bas-nombre">' + LB_NAME + '</label><input id="bas-nombre" name="nombre" type="text" required autocomplete="name"></div>' +
        '<div class="field"><label for="bas-empresa">' + LB_COMP + '</label><input id="bas-empresa" name="empresa" type="text" autocomplete="organization"></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="bas-email">Email *</label><input id="bas-email" name="email" type="email" required autocomplete="email"></div>' +
        '<div class="field"><label for="bas-telefono">' + LB_TEL + '</label><input id="bas-telefono" name="telefono" type="tel" required autocomplete="tel"></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="bas-tipo">' + L('Tipo de instalación', 'Installation type') + '</label><select id="bas-tipo" name="instalacion">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(L(['Sobresuelo (apoyada)', 'Empotrada (en foso)', 'No lo sé / asesoradme'], ['Surface-mounted', 'Pit-mounted', 'Not sure / please advise'])) +
        '</select></div>' +
        '<div class="field"><label for="bas-material">' + L('Material', 'Material') + '</label><select id="bas-material" name="material">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(L(['Metálica', 'Hormigón', 'No lo sé / asesoradme'], ['Steel', 'Concrete', 'Not sure / please advise'])) +
        '</select></div>' +
      '</div>' +
      '<div class="row2">' +
        '<div class="field"><label for="bas-capacidad">' + L('Capacidad máxima', 'Maximum capacity') + '</label><select id="bas-capacidad" name="capacidad">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(L(['45 t', '60 t', '80 t', 'Otra'], ['45 t', '60 t', '80 t', 'Other'])) +
        '</select></div>' +
        '<div class="field"><label for="bas-longitud">' + L('Longitud de la báscula', 'Weighbridge length') + '</label><select id="bas-longitud" name="longitud">' +
          '<option value="">' + LB_SEL + '</option>' +
          opts(['6 m', '8 m', '18 m', '22 m', '24 m', '26 m']) + opts(L(['Otra'], ['Other'])) +
        '</select></div>' +
      '</div>' +
      '<div class="field"><label for="bas-mensaje">' + LB_MSG + '</label><textarea id="bas-mensaje" name="mensaje" rows="3" placeholder="' + L('Ubicación, plazos, si necesitas obra civil...', 'Location, timescales, whether you need civil works...') + '"></textarea></div>' +
      rgpd +
      '<button type="submit" class="btn btn--primary" style="width:100%;justify-content:center">' + LB_QUOTE + ' <span class="arrow">→</span></button>' +
    '</form>' + mailNote);

  // Enganchar botones: modales específicos primero, resto al general
  [].slice.call(document.querySelectorAll('[data-erp-contact]')).forEach(function (a) {
    a.addEventListener('click', function (e) { openModal(erp, e); });
  });
  [].slice.call(document.querySelectorAll('[data-calib-contact]')).forEach(function (a) {
    a.addEventListener('click', function (e) { openModal(calib, e); });
  });
  [].slice.call(document.querySelectorAll('[data-bascula-contact]')).forEach(function (a) {
    a.addEventListener('click', function (e) { openModal(bascula, e); });
  });
  [].slice.call(document.querySelectorAll('a.btn[href="contacto.html"]:not([data-erp-contact]):not([data-calib-contact]):not([data-bascula-contact])')).forEach(function (a) {
    a.addEventListener('click', function (e) { openModal(general, e); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      [].slice.call(document.querySelectorAll('.cmodal.is-open')).forEach(function (m) { closeModal(m); });
    }
  });
})();

// Corregir enllaços interns NOMES quan el servidor serveix la carpeta d'idioma sense fitxer
// (p. ex. la URL acaba en /ca o /en). Amb file:// o subpagines la URL ja porta el fitxer i
// els enllaços relatius resolen be, aixi que NO cal tocar-los (i evitem trencar file://).
// S'executa DESPRES d'enganxar els modals perque no afecti els seus selectors.
(function () {
  var segs = location.pathname.split('/').filter(Boolean);
  var last = segs[segs.length - 1];
  if (last !== 'en' && last !== 'ca') return; // nomes la home de carpeta servida sense fitxer
  var folderBase = location.pathname.replace(/\/?$/, '/'); // assegura barra final -> /ca/
  [].slice.call(document.querySelectorAll('a[href]')).forEach(function (a) {
    var h = a.getAttribute('href');
    if (!h || /^(https?:|mailto:|tel:|#|\/|\.\.?\/)/.test(h)) return; // nomes fitxers relatius
    a.setAttribute('href', folderBase + h);
  });
})();
