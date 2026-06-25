
const PRODUCTS = [{"id": "4-inch-led-work-light", "title": "4 Inch LED Work Light Waterproof Driving Light for Truck SUV ATV UTV", "short": "Compact 120W work light with RGB halo and multiple beam functions for professional vehicle lighting.", "category": "LED Work Lights", "power": "120W", "voltage": "9–36V", "size": "4 Inch / 97 × 97 × 75mm", "material": "Aluminum Alloy Housing + PC Lens", "waterproof": "IP67", "function": "High Beam, Low Beam, Turn Signal, RGB Halo", "application": "Truck, SUV, ATV, UTV, Motorcycle, Marine", "image": "assets/images/product-1.svg", "features": ["120W high brightness output", "RGB halo for customized vehicle styling", "IP67 waterproof protection", "Aluminum housing for heat dissipation", "Easy installation for multiple vehicle types"]}, {"id": "330w-off-road-driving-light", "title": "330W LED Off Road Driving Light Waterproof Auxiliary Light for Truck Motorcycle", "short": "Powerful square auxiliary light for off-road, truck and motorcycle applications with white, amber and RGB options.", "category": "Off-Road Driving Lights", "power": "330W", "voltage": "9–36V", "size": "125 × 125 × 85.5mm", "material": "Aluminum Alloy Housing + PC Lens", "waterproof": "IP67", "function": "White / Amber / RGB Lighting", "application": "Off-road vehicle, motorcycle, truck, engineering vehicle", "image": "assets/images/product-2.svg", "features": ["330W heavy-duty lighting performance", "White and amber light options", "Suitable for harsh off-road environments", "Strong mounting bracket support", "Designed for wholesale and project orders"]}, {"id": "220w-led-work-fog-light", "title": "220W LED Work Light Waterproof Fog Light for 4x4 SUV Truck", "short": "Durable 220W auxiliary lamp for SUVs, pickups, trucks and outdoor working vehicles.", "category": "Fog Lights", "power": "220W", "voltage": "9–36V", "size": "105 × 105 × 80mm", "material": "Aluminum Alloy Housing", "waterproof": "IP67", "function": "White / Amber Auxiliary Lighting", "application": "SUV, pickup, truck, ATV, UTV, boat", "image": "assets/images/product-3.svg", "features": ["220W bright output for night driving", "Waterproof and dustproof structure", "Compact size for bumper or bracket mounting", "Amber option improves fog penetration", "Reliable for outdoor and worksite vehicles"]}, {"id": "7-inch-round-led-driving-light", "title": "7 Inch Round LED Driving Light High Brightness Off Road Light", "short": "Classic round driving light with 3535 LED chips, 5400LM output and wide vehicle compatibility.", "category": "Driving Lights", "power": "54W", "voltage": "DC 9–36V", "size": "7 Inch", "material": "Aluminum Alloy Housing + PC Lens", "waterproof": "IP67", "function": "White / Yellow Light", "application": "Truck, motorcycle, off-road vehicle, forklift, engineering vehicle, boat", "image": "assets/images/product-4.svg", "features": ["3535 LED chips for stable brightness", "5400LM high brightness output", "Round housing for classic off-road appearance", "50000H long service life", "Factory direct supply for bulk buyers"]}, {"id": "10-inch-led-driving-light-bar", "title": "10 Inch LED Driving Light Bar White DRL Work Light for Truck", "short": "10 inch driving light bar with white light and DRL for trucks, SUVs and heavy-duty vehicles.", "category": "LED Light Bars", "power": "60W", "voltage": "DC 9–80V", "size": "10 Inch", "material": "Aluminum Alloy Housing", "waterproof": "IP67", "function": "White Light + DRL, Combo Beam", "application": "Truck, SUV, off-road vehicle, engineering vehicle, marine", "image": "assets/images/product-5.svg", "features": ["DC 9–80V wide voltage compatibility", "6000LM output for better visibility", "Combo beam for distance and flood lighting", "White light plus DRL design", "Suitable for truck and fleet upgrades"]}, {"id": "amber-led-fog-light", "title": "Amber LED Fog Light Waterproof Auxiliary Lamp for Motorcycle Truck SUV", "short": "Amber auxiliary fog light designed for rain, fog, snow and night driving conditions.", "category": "Amber Fog Lights", "power": "Customizable", "voltage": "9–36V / Customizable", "size": "Customizable", "material": "Aluminum Alloy Housing + PC Lens", "waterproof": "IP67", "function": "Amber Light / Fog Penetration", "application": "Rain, fog, snow, night driving, off-road roads", "image": "assets/images/product-6.svg", "features": ["Amber light improves visibility in fog and rain", "Built for motorcycle and truck auxiliary lighting", "Waterproof construction for outdoor roads", "Available for OEM color and packaging", "Ideal for harsh weather driving markets"]}];
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function productCard(p){
  return `
  <article class="card product-card" data-category="${p.category}">
    <img src="${p.image}" alt="${p.title}">
    <div class="product-info">
      <span class="tag">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.short}</p>
      <div class="spec-list">
        <div><span>Power</span><strong>${p.power}</strong></div>
        <div><span>Voltage</span><strong>${p.voltage}</strong></div>
        <div><span>Waterproof</span><strong>${p.waterproof}</strong></div>
      </div>
      <a class="btn btn-ghost" href="product.html?id=${p.id}">View Details</a>
    </div>
  </article>`;
}

function renderFeatured(){
  const el = $('#featured-products');
  if(el) el.innerHTML = PRODUCTS.map(productCard).join('');
}
function renderProducts(){
  const el = $('#products-grid');
  if(!el) return;
  el.innerHTML = PRODUCTS.map(productCard).join('');
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filters = $('#product-filters');
  if(filters){
    filters.innerHTML = cats.map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${c}">${c}</button>`).join('');
    filters.addEventListener('click', e=>{
      const btn = e.target.closest('.filter-btn');
      if(!btn) return;
      $$('.filter-btn', filters).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      $$('.product-card', el).forEach(card=>{
        card.style.display = (f==='All' || card.dataset.category===f) ? '' : 'none';
      });
    });
  }
}
function renderDetail(){
  const root = $('#product-detail');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || PRODUCTS[0].id;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  document.title = `${p.title} | AICCO LIGHTING`;
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.setAttribute('content', `${p.title}. ${p.short} OEM and bulk order support from AICCO LIGHTING.`);
  root.innerHTML = `
    <div class="detail-grid">
      <div class="detail-image"><img src="${p.image}" alt="${p.title}"></div>
      <div class="detail-content">
        <span class="tag">${p.category}</span>
        <h1>${p.title}</h1>
        <p class="lead">${p.short}</p>
        <div class="hero-buttons">
          <a class="btn btn-primary" href="contact.html?product=${encodeURIComponent(p.title)}">Get a Quote</a>
          <a class="btn btn-ghost" href="products.html">Back to Products</a>
        </div>
        <table class="spec-table" aria-label="Product specifications">
          <tr><th>Power</th><td>${p.power}</td></tr>
          <tr><th>Voltage</th><td>${p.voltage}</td></tr>
          <tr><th>Size</th><td>${p.size}</td></tr>
          <tr><th>Material</th><td>${p.material}</td></tr>
          <tr><th>Waterproof Rate</th><td>${p.waterproof}</td></tr>
          <tr><th>Function</th><td>${p.function}</td></tr>
          <tr><th>Application</th><td>${p.application}</td></tr>
        </table>
      </div>
    </div>
    <div class="tabs">
      <div class="tab-row">
        <button class="tab-btn active" data-tab="features">Key Features</button>
        <button class="tab-btn" data-tab="applications">Applications</button>
        <button class="tab-btn" data-tab="oem">OEM & Packaging</button>
      </div>
      <div class="tab-panel active" id="features"><ul class="list-check">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="tab-panel" id="applications"><p class="muted">Designed for professional vehicle lighting markets including ${p.application}. Suitable for distributors, wholesalers, repair shops, fleet buyers and project procurement.</p></div>
      <div class="tab-panel" id="oem"><p class="muted">AICCO LIGHTING supports custom logo, packaging, light color, beam pattern, power, voltage, bracket and product appearance for qualified bulk orders.</p></div>
    </div>`;
}
function tabs(){
  document.addEventListener('click', e=>{
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    const wrap = btn.closest('.tabs');
    $$('.tab-btn', wrap).forEach(b=>b.classList.remove('active'));
    $$('.tab-panel', wrap).forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel = $('#'+btn.dataset.tab, wrap);
    if(panel) panel.classList.add('active');
  });
}
function mobileNav(){
  const btn = $('#menu-btn');
  const nav = $('#nav');
  if(btn && nav){ btn.addEventListener('click', ()=> nav.classList.toggle('open')); }
}
function contactForm(){
  const form = $('#contact-form');
  if(!form) return;
  const product = new URLSearchParams(location.search).get('product');
  if(product){
    const input = $('#productInterest');
    if(input) input.value = product;
  }
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('AICCO LIGHTING Inquiry - ' + (data.get('product') || 'Product Quote'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCountry: ${data.get('country')}\nCompany: ${data.get('company')}\nProduct Interest: ${data.get('product')}\nEstimated Quantity: ${data.get('quantity')}\n\nMessage:\n${data.get('message')}`);
    const email = form.dataset.email || 'sales@example.com';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    const notice = $('#form-notice');
    if(notice) notice.style.display = 'block';
  });
}
function year(){ const y=$('#year'); if(y) y.textContent = new Date().getFullYear(); }
renderFeatured();renderProducts();renderDetail();tabs();mobileNav();contactForm();year();
