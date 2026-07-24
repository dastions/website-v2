// year
var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

// header solidify
var hdr=document.getElementById('hdr');
function onScroll(){ if(hdr) hdr.classList.toggle('solid', window.scrollY>40); }
onScroll(); addEventListener('scroll', onScroll, {passive:true});

// mobile menu
var burger=document.getElementById('burger'), nav=document.getElementById('navlinks');
if(burger&&nav){
  burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  nav.addEventListener('click', function(e){ if(e.target.tagName==='A') nav.classList.remove('open'); });
}

// reveal on scroll
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('[data-rev]').forEach(function(el){ io.observe(el); });

// duplicate marquee for seamless loop
var m=document.getElementById('marq'); if(m) m.innerHTML+=m.innerHTML;

// quote form -> mailto (replace with your n8n/webhook backend if you prefer)
var form=document.getElementById('quoteForm');
if(form){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){ form.reportValidity(); return; }
    var fd=new FormData(form);
    var servicios=fd.getAll('servicio').join(', ')||'(no indicado)';
    var L=[
      'Tipo de báscula: '+fd.get('tipo'),
      'Capacidad: '+(fd.get('cap')||'-'),
      'Marca/modelo: '+(fd.get('marca')||'-'),
      'Ubicación: '+fd.get('lugar'),
      'Servicio: '+servicios,
      '',
      'Nombre: '+fd.get('nombre'),
      'Empresa: '+(fd.get('empresa')||'-'),
      'Teléfono: '+fd.get('tel'),
      'Email: '+fd.get('email'),
      '',
      'Detalles: '+(fd.get('msg')||'-')
    ].join('\n');
    var subject='Presupuesto báscula · '+fd.get('tipo');
    var mail='mailto:info@dastions.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(L);
    form.style.display='none';
    var ok=document.getElementById('formOk');
    ok.classList.add('show');
    ok.scrollIntoView({behavior:reduce?'auto':'smooth', block:'center'});
    setTimeout(function(){ window.location.href=mail; }, 600);
  });
}
