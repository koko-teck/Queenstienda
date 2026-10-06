/* =========================================================
   QUEENS — JavaScript principal
   ETIQUETAS: PRODUCTOS · BUSCADOR · CARRUSEL · FILTROS · CARRITO · MODAL
   ========================================================= */

// ===== DATOS DE PRODUCTOS (ficticios para PREVIEW) =====
const products = [
  {id:1, name:'Labial Velvet Matte', brand:'Queens Beauty', category:'maquillaje', price:12990, oldPrice:14990, rating:'★★★★★', reviews:124, badge:'Más vendido', desc:'Labial cremoso de acabado aterciopelado, cómodo y de larga duración.', variants:[['Rosa Nude','#d99aa2'],['Berry','#9d5669'],['Malva','#b88592']], art:'lipstick'},
  {id:2, name:'Crema Facial Hidratante', brand:'Pure Skin', category:'skincare', price:18990, rating:'★★★★★', reviews:98, badge:'Favorito', desc:'Crema ligera con sensación fresca para una rutina suave y luminosa.', variants:[['Lavanda','#c7b2cf'],['Rosa','#e7b9c0'],['Marfil','#e8ddd1']], art:'skincare'},
  {id:3, name:'Vestido Casual Chic', brand:'QueenStyle', category:'ropa', price:29990, rating:'★★★★★', reviews:76, desc:'Vestido midi liviano con caída elegante y detalle de cintura.', variants:[['Rosa pastel','#e6aebc'],['Lila','#c9b5d1'],['Crema','#ead8c8']], art:'dress'},
  {id:4, name:'Conjunto de Encaje', brand:'Lingerie Queen', category:'lenceria', price:21990, rating:'★★★★★', reviews:62, badge:'Nuevo', desc:'Conjunto delicado con encaje floral y tiras regulables.', variants:[['Rosa','#e7a9b7'],['Negro','#4a4147'],['Marfil','#e8ddd2']], art:'lingerie'},
  {id:5, name:'Kit de Cuidado Capilar', brand:'Hair Queen', category:'cabello', price:16990, rating:'★★★★★', reviews:89, desc:'Ritual completo para hidratar, suavizar y dar brillo al cabello.', variants:[['Lila','#bda8cc'],['Rosa','#e8bcc4'],['Blanco','#ece9e8']], art:'hair'},
  {id:6, name:'Aros Estrella', brand:'Queen Bijoux', category:'alhajas', price:11990, rating:'★★★★★', reviews:45, badge:'-20%', discount:true, desc:'Aros dorados con estrella, livianos y fáciles de combinar.', variants:[['Dorado','#d8ad5f'],['Plateado','#c5c5c5']], art:'earrings'},
  {id:7, name:'Paleta Soft Bloom', brand:'Queens Beauty', category:'maquillaje', price:23990, rating:'★★★★★', reviews:51, desc:'Nueve tonos románticos para looks suaves, de día o de noche.', variants:[['Blush','#d7a8b3'],['Mauve','#a48798']], art:'palette'},
  {id:8, name:'Sérum Glow 30 ml', brand:'Pure Skin', category:'skincare', price:21490, rating:'★★★★★', reviews:71, badge:'Top', desc:'Sérum facial de textura sedosa pensado para aportar apariencia luminosa.', variants:[['Rosa',' #e6bdc6'],['Ámbar','#d7b172']], art:'serum'},
  {id:9, name:'Cárdigan Cozy', brand:'QueenStyle', category:'ropa', price:27990, rating:'★★★★☆', reviews:34, desc:'Tejido suave y liviano, ideal para sumar una capa cálida y femenina.', variants:[['Rosa','#dcaebb'],['Crema','#ddcfb7'],['Lila','#bdaabd']], art:'cardigan'},
  {id:10, name:'Pijama Satin Dreams', brand:'Lingerie Queen', category:'lenceria', price:24990, rating:'★★★★★', reviews:29, desc:'Pijama satinado de tacto suave con terminaciones delicadas.', variants:[['Champagne','#dfcdb4'],['Rosa','#e5abb9']], art:'pajamas'},
  {id:11, name:'Cepillo Ionic Rose', brand:'Hair Queen', category:'cabello', price:14990, rating:'★★★★☆', reviews:40, desc:'Cepillo de styling con cuerpo ergonómico y estética minimalista.', variants:[['Rosa','#dbaab7'],['Lavanda','#bda9c7']], art:'brush'},
  {id:12, name:'Collar Initial Q', brand:'Queen Bijoux', category:'alhajas', price:15990, rating:'★★★★★', reviews:52, desc:'Collar delicado con dije de inicial para llevar tu esencia contigo.', variants:[['Dorado','#d8ad5f'],['Plateado','#bdbdbd']], art:'necklace'}
];

let cart = JSON.parse(localStorage.getItem('queens-cart') || '[]');
let currentFilter = 'all';
let currentQuery = '';
let heroIndex = 0;
let heroTimer;

// ===== ARTE SVG AUTO-CONTENIDO (evita dependencias externas) =====
function svgArt(type, variant='#e6b0bb', compact=false){
  const v = (variant || '#e6b0bb').trim();
  const common = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="Producto Queens"`;
  const stroke='#7c636d';
  if(type==='lipstick') return `<svg ${common}><rect x="0" y="0" width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="258" rx="72" ry="13" fill="#dfcfd2"/><rect x="111" y="130" width="78" height="110" rx="15" fill="#c999a5"/><rect x="120" y="78" width="60" height="68" rx="14" fill="#ddd0d2"/><path d="M120 92 C127 66 158 56 177 70 L180 106 L120 106 Z" fill="${v}"/><rect x="118" y="144" width="64" height="13" rx="6" fill="#b98492" opacity=".55"/><circle cx="142" cy="151" r="5" fill="#f8eff0" opacity=".55"/></svg>`;
  if(type==='skincare') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="260" rx="92" ry="13" fill="#ddcfd2"/><rect x="87" y="136" width="126" height="100" rx="25" fill="#f7f0e9" stroke="#dfd3d3"/><rect x="101" y="115" width="98" height="30" rx="10" fill="#c9afc9"/><rect x="108" y="155" width="84" height="26" rx="10" fill="${v}" opacity=".65"/><path d="M131 194 Q150 176 169 194" stroke="${stroke}" fill="none" stroke-width="3"/><circle cx="150" cy="202" r="19" fill="#fff" opacity=".65"/></svg>`;
  if(type==='dress') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f6eef0"/><ellipse cx="150" cy="263" rx="72" ry="13" fill="#ddcfd1"/><path d="M113 69 C121 54 137 51 150 51 C163 51 179 54 187 69 L176 111 L198 235 Q150 259 102 235 L124 111 Z" fill="${v}"/><path d="M124 111 Q150 126 176 111" fill="none" stroke="#a37b87" stroke-width="4"/><path d="M126 79 C135 88 165 88 174 79" fill="none" stroke="#a37b87" stroke-width="3"/><circle cx="150" cy="150" r="4" fill="#fff" opacity=".65"/></svg>`;
  if(type==='lingerie') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f9eff1"/><ellipse cx="150" cy="261" rx="82" ry="12" fill="#dfd1d4"/><path d="M86 110 Q108 71 140 102 Q150 112 160 102 Q192 71 214 110 L194 154 L106 154 Z" fill="${v}"/><path d="M106 154 L118 222 L139 203 L150 178 L161 203 L182 222 L194 154" fill="${v}"/><path d="M97 97 Q91 72 78 54 M203 97 Q209 72 222 54" stroke="#a17b86" fill="none" stroke-width="6" stroke-linecap="round"/><path d="M125 132 Q150 149 175 132" fill="none" stroke="#a17b86" stroke-width="2" opacity=".7"/></svg>`;
  if(type==='hair') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f3edf6"/><ellipse cx="150" cy="258" rx="87" ry="13" fill="#d9cedc"/><rect x="63" y="118" width="52" height="111" rx="14" fill="#c3b0cf"/><rect x="124" y="93" width="52" height="136" rx="14" fill="${v}"/><rect x="185" y="129" width="52" height="100" rx="14" fill="#e8dce9"/><circle cx="89" cy="100" r="24" fill="#ad93bd"/><circle cx="150" cy="75" r="24" fill="#ad93bd"/><circle cx="211" cy="111" r="24" fill="#ad93bd"/></svg>`;
  if(type==='earrings') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f3ee"/><ellipse cx="150" cy="262" rx="76" ry="11" fill="#ded4cc"/><path d="M110 77 C110 55 140 55 140 77 L140 119" stroke="#d8ad5f" fill="none" stroke-width="8"/><path d="M160 77 C160 55 190 55 190 77 L190 119" stroke="#d8ad5f" fill="none" stroke-width="8"/><path d="M121 151 l14 29 32 4-24 21 7 31-29-16-29 16 7-31-24-21 32-4z" fill="${v}" stroke="#b2874d" stroke-width="4" transform="translate(0,-20)"/><path d="M176 151 l14 29 32 4-24 21 7 31-29-16-29 16 7-31-24-21 32-4z" fill="${v}" stroke="#b2874d" stroke-width="4" transform="translate(0,-20)"/></svg>`;
  if(type==='palette') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="260" rx="85" ry="12" fill="#ddcfd1"/><rect x="62" y="70" width="176" height="155" rx="26" fill="#dfb9c1"/><rect x="76" y="84" width="148" height="112" rx="18" fill="#f6efee"/><circle cx="104" cy="115" r="13" fill="#d7a6b3"/><circle cx="150" cy="115" r="13" fill="#b88898"/><circle cx="196" cy="115" r="13" fill="#d5b3b9"/><circle cx="104" cy="160" r="13" fill="#af7c91"/><circle cx="150" cy="160" r="13" fill="${v}"/><circle cx="196" cy="160" r="13" fill="#e0c7bd"/></svg>`;
  if(type==='serum') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f7eff2"/><ellipse cx="150" cy="263" rx="78" ry="11" fill="#ddd0d4"/><rect x="106" y="118" width="88" height="120" rx="22" fill="#efe4d6"/><rect x="111" y="98" width="78" height="27" rx="10" fill="${v}"/><rect x="132" y="63" width="36" height="42" rx="9" fill="#8e7180"/><path d="M128 152h44" stroke="#b0949d" stroke-width="4"/><path d="M132 171h36" stroke="#d2b0ba" stroke-width="4"/></svg>`;
  if(type==='cardigan') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f1ee"/><ellipse cx="150" cy="260" rx="82" ry="11" fill="#ded2cf"/><path d="M102 85 Q120 60 150 76 Q180 60 198 85 L228 234 Q150 255 72 234 Z" fill="${v}"/><path d="M150 80V234 M121 108H179 M109 145H191 M100 183H200" stroke="#a07e87" stroke-width="3" opacity=".6"/></svg>`;
  if(type==='pajamas') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f5f0ec"/><ellipse cx="150" cy="260" rx="86" ry="12" fill="#ddd3ce"/><path d="M112 80 L149 112 L188 80 L205 132 L185 149 L177 218 L123 218 L115 149 L95 132 Z" fill="${v}"/><path d="M111 81 Q125 65 140 78 L150 91 L160 78 Q175 65 189 81" fill="none" stroke="#b4959e" stroke-width="4"/><path d="M103 154 L84 240 M197 154 L216 240" stroke="#b4959e" stroke-width="12" stroke-linecap="round"/></svg>`;
  if(type==='brush') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f3eef5"/><ellipse cx="150" cy="260" rx="90" ry="12" fill="#d8d0dc"/><rect x="133" y="73" width="34" height="152" rx="17" fill="#e5d0d7"/><rect x="115" y="44" width="70" height="44" rx="22" fill="#c6aec8"/><path d="M115 56 Q150 12 185 56" fill="#8e788f" opacity=".7"/></svg>`;
  if(type==='necklace') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f3ee"/><ellipse cx="150" cy="260" rx="75" ry="10" fill="#ded4ca"/><path d="M76 82 Q150 188 224 82" fill="none" stroke="#d8ad5f" stroke-width="5"/><circle cx="150" cy="151" r="33" fill="#d8ad5f"/><text x="150" y="166" text-anchor="middle" font-size="33" font-family="serif" fill="#fff">Q</text></svg>`;
  return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f6eeee"/><circle cx="150" cy="145" r="72" fill="${v}"/></svg>`;
}

function money(v){ return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(v); }

// ===== RENDER PRODUCTOS =====
function renderProducts(){
  const grid=document.getElementById('productGrid');
  const empty=document.getElementById('emptyState');
  const active=document.getElementById('activeFilter');
  let list=products.filter(p=>{
    const matchFilter = currentFilter==='all' || (currentFilter==='ofertas' ? p.discount || p.badge==='Nuevo' : p.category===currentFilter);
    const q=currentQuery.trim().toLowerCase();
    const matchQuery = !q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });
  if(currentFilter!=='all'){
    const label=currentFilter==='ofertas'?'Ofertas':currentFilter[0].toUpperCase()+currentFilter.slice(1);
    active.textContent=`Mostrando: ${label}`; active.hidden=false;
  } else if(currentQuery){
    active.textContent=`Buscando: “${currentQuery}”`; active.hidden=false;
  } else active.hidden=true;
  grid.innerHTML=list.map(productCard).join('');
  empty.hidden=list.length>0;
  bindProductEvents();
}

function productCard(p){
  const first=p.variants[0];
  return `<article class="product-card" data-product-id="${p.id}">
    <div class="product-image">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
      <button class="quick" data-detail="${p.id}" aria-label="Ver ${p.name}">♡</button>
      <div class="product-art" id="art-${p.id}">${svgArt(p.art, first[1])}</div>
    </div>
    <div class="product-meta">
      <div><h3>${p.name}</h3><div class="brand-name">${p.brand}</div></div>
      <div class="rating">${p.rating} <span style="color:#9b9095">(${p.reviews})</span></div>
      <div class="price">${money(p.price)}</div>
      <div class="swatches" aria-label="Colores disponibles">
        ${p.variants.map((v,i)=>`<button class="swatch ${i===0?'active':''}" title="${v[0]}" aria-label="${v[0]}" data-variant-index="${i}" data-product="${p.id}" style="background:${v[1]}"></button>`).join('')}
      </div>
      <div class="card-actions"><button class="add-btn" data-add="${p.id}">Agregar al carrito</button><button class="detail-btn" data-detail="${p.id}" aria-label="Ver detalle">+</button></div>
    </div>
  </article>`;
}

function bindProductEvents(){
  document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>addToCart(Number(btn.dataset.add),0)));
  document.querySelectorAll('[data-detail]').forEach(btn=>btn.addEventListener('click',()=>openModal(Number(btn.dataset.detail),0)));
  document.querySelectorAll('.swatch').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const id=Number(btn.dataset.product), idx=Number(btn.dataset.variantIndex); const p=products.find(x=>x.id===id);
    const card=document.querySelector(`.product-card[data-product-id="${id}"]`);
    card?.querySelectorAll('.swatch').forEach(s=>s.classList.remove('active')); btn.classList.add('active');
    const art=card?.querySelector('.product-art'); if(art) art.innerHTML=svgArt(p.art,p.variants[idx][1]);
    card?.querySelector('.product-image')?.setAttribute('data-color',p.variants[idx][0]);
  }));
}

// ===== FILTROS Y BUSCADOR =====
function setFilter(filter){
  currentFilter=filter; document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter)); renderProducts();
}
document.getElementById('categoryNav').addEventListener('click',e=>{const b=e.target.closest('[data-filter]'); if(b) setFilter(b.dataset.filter);});
document.querySelectorAll('[data-filter-trigger]').forEach(b=>b.addEventListener('click',()=>{setFilter(b.dataset.filterTrigger); document.getElementById('productos').scrollIntoView({behavior:'smooth',block:'start'});}));
document.querySelector('[data-scroll-products]').addEventListener('click',()=>document.getElementById('productos').scrollIntoView({behavior:'smooth'}));
document.getElementById('clearFilters').addEventListener('click',()=>{currentQuery=''; document.getElementById('searchInput').value=''; setFilter('all');});
document.getElementById('searchBtn').addEventListener('click',()=>{currentQuery=document.getElementById('searchInput').value; renderProducts(); document.getElementById('productos').scrollIntoView({behavior:'smooth'});});
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click();});

// ===== CARRUSEL HERO =====
function showHero(i){
  heroIndex=(i+3)%3; document.querySelectorAll('.hero-slide').forEach((s,n)=>s.classList.toggle('active',n===heroIndex)); document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===heroIndex));
}
function restartHero(){clearInterval(heroTimer); heroTimer=setInterval(()=>showHero(heroIndex+1),5500)}
document.querySelector('.hero-prev').addEventListener('click',()=>{showHero(heroIndex-1);restartHero()});
document.querySelector('.hero-next').addEventListener('click',()=>{showHero(heroIndex+1);restartHero()});
document.querySelectorAll('.dot').forEach(d=>d.addEventListener('click',()=>{showHero(Number(d.dataset.slide));restartHero()}));
restartHero();

// ===== CARRITO =====
function addToCart(id, variantIndex=0){
  const p=products.find(x=>x.id===id), variant=p.variants[variantIndex] || p.variants[0];
  const key=`${id}-${variant[0]}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=1; else cart.push({key,id,variant:variant[0],color:variant[1],qty:1});
  persistCart(); renderCart(); showToast(`${p.name} agregado al carrito`);
}
function changeQty(key,delta){const item=cart.find(i=>i.key===key); if(!item)return; item.qty+=delta; if(item.qty<=0)cart=cart.filter(i=>i.key!==key); persistCart();renderCart();}
function removeItem(key){cart=cart.filter(i=>i.key!==key);persistCart();renderCart();}
function persistCart(){localStorage.setItem('queens-cart',JSON.stringify(cart));}
function cartCount(){return cart.reduce((n,i)=>n+i.qty,0)}
function renderCart(){
  const items=document.getElementById('cartItems'), empty=document.getElementById('cartEmpty');
  const count=cartCount(); document.getElementById('cartCount').textContent=count;document.getElementById('drawerCount').textContent=count;
  empty.hidden=count>0;
  items.innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id); return `<div class="cart-row"><div class="cart-thumb">${svgArt(p.art,item.color,true)}</div><div class="cart-info"><h4>${p.name}</h4><p>${item.variant}</p><div class="qty"><button data-qty="${item.key}" data-delta="-1">−</button><strong>${item.qty}</strong><button data-qty="${item.key}" data-delta="1">+</button></div><button class="remove" data-remove="${item.key}">Eliminar</button></div><div class="cart-price">${money(p.price*item.qty)}</div></div>`}).join('');
  items.querySelectorAll('[data-qty]').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));
  items.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeItem(b.dataset.remove)));
  const total=cart.reduce((sum,i)=>{const p=products.find(x=>x.id===i.id);return sum+p.price*i.qty},0);document.getElementById('subtotal').textContent=money(total);
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('overlay').classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('overlay').classList.remove('open');document.body.style.overflow=''}
document.getElementById('cartBtn').addEventListener('click',openCart);document.getElementById('closeCart').addEventListener('click',closeCart);document.getElementById('overlay').addEventListener('click',closeCart);

document.getElementById('checkoutBtn').addEventListener('click',()=>showToast(cart.length?'Demo: conectá aquí tu checkout/mercado pago.':'Tu carrito está vacío.'));

// ===== MODAL DE PRODUCTO =====
function openModal(id,activeVariant=0){
  const p=products.find(x=>x.id===id); const modal=document.getElementById('productModal');
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  function draw(idx){
    const v=p.variants[idx];
    document.getElementById('modalContent').innerHTML=`<div class="modal-grid"><div class="modal-art">${svgArt(p.art,v[1])}</div><div class="modal-info"><p class="eyebrow">${p.brand}</p><h2>${p.name}</h2><div class="rating">${p.rating} <span style="color:#9b9095">(${p.reviews})</span></div><p class="modal-desc">${p.desc}</p><div class="modal-price">${money(p.price)}</div><div class="choice-label">Color</div><div class="variant-row">${p.variants.map((x,i)=>`<button class="variant-btn ${i===idx?'active':''}" data-var="${i}">${x[0]}</button>`).join('')}</div><button class="btn btn-dark full" id="modalAdd">Agregar al carrito</button></div></div>`;
    document.querySelectorAll('[data-var]').forEach(b=>b.addEventListener('click',()=>draw(Number(b.dataset.var)))); document.getElementById('modalAdd').addEventListener('click',()=>{addToCart(p.id,idx); closeModal();});
  }
  draw(activeVariant);
}
function closeModal(){const modal=document.getElementById('productModal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.getElementById('modalClose').addEventListener('click',closeModal);document.getElementById('productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeModal()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeModal()}});

// ===== TOAST =====
let toastTimer;function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200)}

// ===== INICIALIZACIÓN =====
renderProducts();renderCart();
