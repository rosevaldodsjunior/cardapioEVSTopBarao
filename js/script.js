/**
 * CARDÁPIO DIGITAL COMPLETO - EVS TOP BARÃO
 * Itens 100% Proteicos e Funcionais
 */

const I18N = {
  pt: {
    contrast_btn: 'Alto Contraste',
    tagline: 'CARDÁPIO DE REFEIÇÕES E BEBIDAS SAUDÁVEIS',
    badge_gluten: '0% Glúten',
    badge_lactose: '0% Lactose',
    badge_vegan: 'Veganos',
    hours_strip: 'Seg a Sex: 08h às 20h | Sáb: 09h às 13h',
    search_placeholder: 'Pesquisar itens, shakes, bebidas, kits...',
    cat_todos: 'Todos',
    cat_detox: 'Prog. Detox',
    cat_bebidas: 'Bebidas Funcionais',
    cat_gelato: 'Gelato Protéico',
    cat_salgados: 'Salgados & Pratos',
    cat_shakes: 'Shakes Protéicos',
    cat_doces: 'Doces Fit',
    empty_title: 'Nenhum produto encontrado',
    empty_desc: 'Tente buscar por outro ingrediente ou selecione outra categoria.',
    footer_delivery: 'Delivery',
    footer_payments: 'Pagamentos: Pix, Cartão de Crédito e Débito',
    subtotal_float: 'Subtotal do Pedido',
    view_order: 'Ver Pedido',
    checkout_title: 'Resumo do Pedido',
    delivery_prompt: 'Como deseja receber?',
    opt_dine_in: 'No EVS',
    opt_takeaway: 'Retirada',
    opt_delivery: 'Delivery',
    client_data_title: 'Seus Dados',
    payment_title: 'Forma de Pagamento',
    pay_credit: 'Crédito',
    pay_debit: 'Débito',
    pay_cash: 'Dinheiro',
    total_qty_label: 'Quantidade Total:',
    subtotal_label: 'Subtotal:',
    grand_total_label: 'Total a Pagar:',
    send_whatsapp_btn: 'Enviar Pedido para o WhatsApp',
    btn_customize: 'Personalizar',
    btn_value: 'Valor',
    extra_protein_title: 'Dose Extra de Proteína',
    extra_protein_opt: 'Adicionar +1 Dose de Proteína Pura',
    extra_border_title: 'Borda Artesanal Adicional',
    extra_fiber_title: 'Fibras Especiais',
    extra_toppings_title: 'Toppings Crocantes',
    custom_obs_title: 'Instruções especiais do item:',
    add_custom_btn: 'Adicionar ao Pedido',
    opt_none: 'Nenhuma',
    status_open: 'Aberto Agora',
    status_closed: 'Fechado (Recebendo Pedidos)'
  },
  en: {
    contrast_btn: 'High Contrast',
    tagline: 'HEALTHY MEALS & FUNCTIONAL DRINKS MENU',
    badge_gluten: '0% Gluten',
    badge_lactose: '0% Lactose',
    badge_vegan: 'Vegan Options',
    hours_strip: 'Mon to Fri: 8am - 8pm | Sat: 9am - 1pm',
    search_placeholder: 'Search items, shakes, functional drinks, snacks...',
    cat_todos: 'All Items',
    cat_detox: 'Detox Program',
    cat_bebidas: 'Functional Drinks',
    cat_gelato: 'Protein Gelato',
    cat_salgados: 'Savory & Waffles',
    cat_shakes: 'Protein Shakes',
    cat_doces: 'Fit Desserts',
    empty_title: 'No products found',
    empty_desc: 'Try searching with another keyword or select another category.',
    footer_delivery: 'Delivery',
    footer_payments: 'Payments: Pix, Credit and Debit Cards',
    subtotal_float: 'Order Subtotal',
    view_order: 'View Order',
    checkout_title: 'Order Summary',
    delivery_prompt: 'How would you like to receive it?',
    opt_dine_in: 'Dine-in (EVS)',
    opt_takeaway: 'Takeout',
    opt_delivery: 'Delivery',
    client_data_title: 'Your Details',
    payment_title: 'Payment Method',
    pay_credit: 'Credit Card',
    pay_debit: 'Debit Card',
    pay_cash: 'Cash',
    total_qty_label: 'Total Quantity:',
    subtotal_label: 'Subtotal:',
    grand_total_label: 'Total to Pay:',
    send_whatsapp_btn: 'Send Order via WhatsApp',
    btn_customize: 'Customize',
    btn_value: 'Price',
    extra_protein_title: 'Extra Protein Boost',
    extra_protein_opt: 'Add +1 Extra Pure Protein Scoop',
    extra_border_title: 'Artisan Glass Rim Coating',
    extra_fiber_title: 'Special Active Fibers',
    extra_toppings_title: 'Crunchy Toppings',
    custom_obs_title: 'Special item instructions:',
    add_custom_btn: 'Add to Order',
    opt_none: 'None',
    status_open: 'Open Now',
    status_closed: 'Closed (Receiving Orders)'
  },
  es: {
    contrast_btn: 'Alto Contraste',
    tagline: 'MENÚ DE COMIDAS Y BEBIDAS SALUDABLES',
    badge_gluten: '0% Gluten',
    badge_lactose: '0% Lactosa',
    badge_vegan: 'Veganos',
    hours_strip: 'Lun a Vie: 08h a 20h | Sáb: 09h a 13h',
    search_placeholder: 'Buscar platos, batidos, bebidas funcionales, kits...',
    cat_todos: 'Todos',
    cat_detox: 'Prog. Detox',
    cat_bebidas: 'Bebidas Funcionales',
    cat_gelato: 'Gelato Proteico',
    cat_salgados: 'Salados y Platos',
    cat_shakes: 'Batidos Proteicos',
    cat_doces: 'Postres Fit',
    empty_title: 'Ningún producto encontrado',
    empty_desc: 'Intente buscar con otro término o seleccione otra categoría.',
    footer_delivery: 'Delivery',
    footer_payments: 'Pagos: Pix, Tarjetas de Crédito y Débito',
    subtotal_float: 'Subtotal del Pedido',
    view_order: 'Ver Pedido',
    checkout_title: 'Resumen del Pedido',
    delivery_prompt: '¿Cómo desea recibirlo?',
    opt_dine_in: 'En el EVS',
    opt_takeaway: 'Para Llevar',
    opt_delivery: 'Delivery',
    client_data_title: 'Sus Datos',
    payment_title: 'Forma de Pago',
    pay_credit: 'Crédito',
    pay_debit: 'Débito',
    pay_cash: 'Efectivo',
    total_qty_label: 'Cantidad Total:',
    subtotal_label: 'Subtotal:',
    grand_total_label: 'Total a Pagar:',
    send_whatsapp_btn: 'Enviar Pedido por WhatsApp',
    btn_customize: 'Personalizar',
    btn_value: 'Precio',
    extra_protein_title: 'Dosis Extra de Proteína',
    extra_protein_opt: 'Agregar +1 Dosis de Proteína Pura',
    extra_border_title: 'Borde Artesanal Adicional',
    extra_fiber_title: 'Fibras Especiales',
    extra_toppings_title: 'Toppings Crocantes',
    custom_obs_title: 'Instrucciones especiales del plato:',
    add_custom_btn: 'Agregar al Pedido',
    opt_none: 'Ninguna',
    status_open: 'Abierto Ahora',
    status_closed: 'Cerrado (Recibiendo Pedidos)'
  }
};

let currentLang = 'pt';
let highContrastMode = false;

// Configuração das seções visíveis (sem a seção isolada de adicionais)
const SECTIONS_CONFIG = [
  { key: 'detox', title: 'Programa Detox / Kit Slim Day', badge: '100% Funcional', icon: 'fa-heart-pulse' },
  { key: 'bebidas', title: 'Bebidas Funcionais', badge: 'Zero Inchaço', icon: 'fa-bottle-water' },
  { key: 'gelato', title: 'Gelato Protéico (Picolés Gourmet)', badge: 'Até 20g de Proteína', icon: 'fa-ice-cream' },
  { key: 'salgados', title: 'Salgados & Pratos Quentes Protéicos', badge: 'Alta Proteína', icon: 'fa-utensils' },
  { key: 'shakes', title: 'Shakes Protéicos & Gourmets', badge: 'Veganos / 0% Lactose / 0% Glúten', icon: 'fa-glass-water' },
  { key: 'doces', title: 'Doces & Sobremesas Fit Protéicas', badge: 'Sem Açúcar Refinado', icon: 'fa-cake-candles' }
];

const MENU_DATA = [
  // 1. PROGRAMA DETOX
  {
    id: 1,
    category: 'detox',
    name: 'Kit Slim Day (Programa Detox 1 Dia)',
    subtitle: 'Reduza de 500g até 2kg em 1 Dia',
    price: 145.00,
    desc: 'Detox completo de 1 dia (do café da manhã até o jantar!): 1. Shot Matinal 2. Café da Manhã (Waffle) 3. Lanche Manhã 4. Drink Almoço 5. Almoço (Shake) 6. Hidratação Tarde 7. Lanche Tarde 8. Jantar.',
    image: 'img/SlimWeek.png',
    defaultImg: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80'
  },

  // 2. BEBIDAS FUNCIONAIS
  {
    id: 101,
    category: 'bebidas',
    name: 'Reset 5 Dias',
    subtitle: 'Zero Inchaço & Digestão',
    price: 65.00,
    desc: 'Nosso combo RESET de 5 dias ativa seu metabolismo ,ajuda a desinchar  e reduzir medidas🤩além de foco ,disposição e energia⚡️.',
    image: 'img/kitReset5Dias.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 102,
    category: 'bebidas',
    name: 'Hype Drink',
    subtitle: 'Energia & Foco',
    price: 30.00,
    desc: 'A melhor bebida energética funcional! Proporciona mais foco, concentração, auxilia na perda de peso e elimina retenção líquida. (Kit 5x por R$ 140,00).',
    image: 'img/Hype Drink.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 103,
    category: 'bebidas',
    name: 'Sunset Glow',
    subtitle: 'Fibras & Saúde Intestinal',
    price: 30.00,
    desc: 'Rico em fibras ativas! Excelente para combater a retenção de líquidos e melhorar o funcionamento do intestino. (Kit 5x por R$ 140,00).',
    image: 'img/sunset.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80'
  },

  // 3. GELATO PROTÉICO (PICOLÉS GOURMET)
  {
    id: 201,
    category: 'gelato',
    name: 'Gelato Protéico Gourmet com Cobertura (Unidade)',
    subtitle: '0 Açúcar • 0 Lactose • 0 Glúten',
    price: 20.00,
    desc: 'Lanche saudável, super cremoso e rico em proteínas (até 20g por picolé). Sabores: Prestígio, Doce c/ Chocolate, Pistache, Brigadeiro.',
    image: 'img/GElato Picole.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 202,
    category: 'gelato',
    name: 'Gelato Protéico Especial com Cobertura',
    subtitle: 'Linha Pistache / Amendoim',
    price: 23.00,
    desc: 'Linha Gourmet mais Proteica. Sabores: Frutas Vermelhas, OvoMaltine, Casadinho (Branco e Preto), Açaí.',
    image: 'img/GElato Picole.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=600&q=80'
  },

  // 4. SALGADOS & PRATOS QUENTES PROTÉICOS
  {
    id: 301,
    category: 'salgados',
    name: 'X-Tudo Protéico',
    subtitle: 'Alta Proteína',
    price: 40.00,
    desc: 'Waffle protéico tostado, frango desfiado temperado, queijo mussarela, ovo cozido, ervilha e milho.',
    image: 'img/X - Tudo Proteico.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 302,
    category: 'salgados',
    name: 'Suflê de Frango Clássico',
    subtitle: 'Nutrição & Queijo Gratinado',
    price: 40.00,
    desc: 'Suflê de frango cremoso clássico com queijo mussarela derretido e tomates selecionados.',
    image: 'img/Sufle de Frango - Sopa Gourmet.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 303,
    category: 'salgados',
    name: 'Sopa Gourmet de Frango',
    subtitle: 'Cremosa & Sem Queijo',
    price: 37.00,
    desc: 'Sopa de frango cremosa gourmet com orégano e toque suave de pimenta (sem queijo).',
    image: 'img/sopaFrango.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 304,
    category: 'salgados',
    name: 'Pizza Protéica',
    subtitle: 'Waffle Salgado',
    price: 22.00,
    desc: 'Deliciosa e saudável massa de waffle protéico salgado com queijo mussarela e orégano.',
    image: 'img/pizza proteica.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 305,
    category: 'salgados',
    name: 'Waffle Pão de Queijo Protéico',
    subtitle: 'Crocante com Ervas Finas',
    price: 22.00,
    desc: 'Delicioso waffle protéico com sabor e textura de pão de queijo, finalizado com ervas finas. Quentinho e crocante!',
    image: 'img/QueijoQuente.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 306,
    category: 'salgados',
    name: 'Waffle Casadinho',
    subtitle: 'Metade Salgado • Metade Doce',
    price: 35.00,
    desc: 'Waffle protéico com a combinação perfeita: metade salgado com queijo/frango e metade doce Nega Maluca.',
    image: 'img/WaffleCasadinho.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 307,
    category: 'salgados',
    name: 'Croquete Fitness de Frango',
    subtitle: 'Com Sopa Lanche & Requeijão Light',
    price: 18.00,
    desc: 'Frango desfiado temperado com ervas finas, enriquecido com sopa lanche, fatia de queijo e requeijão light.',
    image: 'img/croqueteFrango.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 308,
    category: 'salgados',
    name: 'Croquete Fitness de Carne Patinho',
    subtitle: 'Carne Nobre & Ervas Finas',
    price: 20.00,
    desc: 'Carne de patinho moída com ervas finas, enriquecida com sopa lanche, fatia de queijo e requeijão light.',
    image: 'img/croqueteCarne.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 309,
    category: 'salgados',
    name: 'Bolinho Proteico Salgado (Queijo) e Doce (Chocolate)',
    subtitle: 'Dose de Proteína',
    price: 6.00,
    desc: 'Feito com queijo e sopa lanche proteica funcional. Feito com shake de chocolate e cacau 70%. (Opção Kit 4x por R$ 20,00).',
    image: 'img/Bolinhos proteico.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=600&q=80'
  },

  // 5. SHAKES PROTÉICOS & GOURMETS
  {
    id: 401,
    category: 'shakes',
    name: 'Shake Ovomaltine Tradicional',
    subtitle: 'Mais Pedido',
    price: 44.00,
    desc: 'Shake cremoso sabor Baunilha com cookies e Ovomaltine crocante.',
    image: 'img/shakeOvoMaltine.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 402,
    category: 'shakes',
    name: 'Shake Ovomaltine Trufado Especial',
    subtitle: 'Gourmet Supremo',
    price: 71.00,
    desc: 'Baunilha com cookies, farofa de chocolate, Proteína Crunch, pão de mel proteico e calda especial.',
    image: 'img/shakeOvomaltineTrufado.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 403,
    category: 'shakes',
    name: 'Shake Limão com Doce',
    subtitle: 'Cremoso & Cítrico',
    price: 47.00,
    desc: 'Shake de doce de leite com limão, borda cremosa de doce de leite e farofa crocante de chocolate.',
    image: 'img/Limao com Doce.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 404,
    category: 'shakes',
    name: 'Shake Frutas Vermelhas',
    subtitle: 'Antioxidante & Fibras',
    price: 50.00,
    desc: 'Shake de doce de leite e morango, fibra de uva, proteína crunch, cereja e amendoim.',
    image: 'img/Shake Frutas Vermelhas.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 405,
    category: 'shakes',
    name: 'Shake Barbie Especial',
    subtitle: 'Com Borda de Colágeno',
    price: 57.00,
    desc: 'Shake cremoso de Morango com borda especial de colágeno Verisol hidrolisado.',
    image: 'img/ShakeBarbie.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 406,
    category: 'shakes',
    name: 'Shake Cocadinha Borda Dupla C/ Bombom Fit',
    subtitle: 'Coco & Bombom Fit',
    price: 47.00,
    desc: 'Shake cremoso de coco sem açúcar, com borda dupla de doce de leite vegano e brigadeiro, finalizado com bombom de cocada e coco ralado.',
    image: 'img/ShakeCocadinhaBordaDupla.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 407,
    category: 'shakes',
    name: 'Shake Limão Tradicional',
    subtitle: 'Torta de Limão Fit',
    price: 41.00,
    desc: 'Torta de limão cremosa com borda suave de baunilha.',
    image: 'img/Limao Tradicional.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80'
  },

  // 6. DOCES & SOBREMESAS FIT PROTÉICAS
  {
    id: 601,
    category: 'doces',
    name: 'Bolo de Pote Protéico',
    subtitle: 'Fofinho & Recheado',
    price: 40.00,
    desc: 'Bolo de pote super fofinho, protéico e saudável (consultar sabores disponíveis do dia).',
    image: 'img/boloPoteProteico.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 602,
    category: 'doces',
    name: 'Waffle Nega Maluca',
    subtitle: 'Chocolate & Cacau 50%',
    price: 35.00,
    desc: 'Waffle protéico coberto com shake cremoso de chocolate e cacau nobre 50%.',
    image: 'img/nega_maluca.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 603,
    category: 'doces',
    name: 'Pudim Protéico Fit',
    subtitle: 'Leve, Cremoso & Sem Culpa',
    price: 28.00,
    desc: 'Pudim leve, cremoso e sem culpa com a logo oficial EVS Top Barão (consultar sabores do dia).',
    image: 'img/Pudim Proteico.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 604,
    category: 'doces',
    name: 'Pão de Mel Protéico Gourmet',
    subtitle: 'Cacau 50% & Doce de Leite',
    price: 24.00,
    desc: 'Lanche saudável feito com shake de chocolate e doce, recheio de cacau 50%.',
    image: 'img/Pao de Mel Proteico.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 605,
    category: 'doces',
    name: 'Bolinho Proteico de Chocolate',
    subtitle: 'Shake + Cacau 70%',
    price: 6.00,
    desc: 'Feito com shake de chocolate e cacau 70%. (Opção Kit 4x por R$ 20,00).',
    image: 'img/Bolinho Proteico de Chocolate.jpg',
    defaultImg: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  }
];

let cart = {}; 
let activeCategory = 'todos';
let deliveryType = 'Consumir no EVS';
let paymentMethod = 'PIX';
let searchTerm = '';
let currentCustomizingItem = null;

document.addEventListener('DOMContentLoaded', () => {
  loadSavedSettings();
  loadSavedCart();
  applyLanguage();
  checkLiveStoreHours();
  updateCategoryBadges();
  renderCatalogSections();
  updateCartCounters();
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('evs_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  applyLanguage();
  renderCatalogSections();
  updateCartCounters();
}

function applyLanguage() {
  const dict = I18N[currentLang] || I18N.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });
  document.getElementById('search-input').placeholder = dict.search_placeholder;
}

function toggleHighContrast() {
  highContrastMode = !highContrastMode;
  document.body.classList.toggle('high-contrast', highContrastMode);
  localStorage.setItem('evs_high_contrast', highContrastMode ? '1' : '0');
}

function loadSavedSettings() {
  const savedLang = localStorage.getItem('evs_lang');
  if (savedLang && I18N[savedLang]) {
    currentLang = savedLang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`.lang-btn[onclick="setLanguage('${savedLang}')"]`);
    if (btn) btn.classList.add('active');
  }

  const savedContrast = localStorage.getItem('evs_high_contrast');
  if (savedContrast === '1') {
    highContrastMode = true;
    document.body.classList.add('high-contrast');
  }
}

function checkLiveStoreHours() {
  const now = new Date();
  const day = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  let isOpen = false;
  if (day >= 1 && day <= 5) {
    isOpen = (currentTime >= 480 && currentTime <= 1200); // 08:00 às 20:00
  } else if (day === 6) {
    isOpen = (currentTime >= 540 && currentTime <= 780); // 09:00 às 13:00
  }

  const pill = document.getElementById('live-status-pill');
  const text = document.getElementById('live-status-text');
  const dict = I18N[currentLang] || I18N.pt;

  if (isOpen) {
    pill.className = 'strip-center open';
    text.innerText = dict.status_open;
  } else {
    pill.className = 'strip-center closed';
    text.innerText = dict.status_closed;
  }
}

function renderCatalogSections() {
  const container = document.getElementById('menu-sections-container');
  const emptyState = document.getElementById('empty-search');
  const dict = I18N[currentLang] || I18N.pt;
  container.innerHTML = '';

  let totalVisible = 0;

  SECTIONS_CONFIG.forEach(sec => {
    if (activeCategory !== 'todos' && activeCategory !== sec.key) return;

    const items = MENU_DATA.filter(item => {
      const matchCat = (item.category === sec.key);
      const searchLow = searchTerm.toLowerCase();
      const matchSearch = item.name.toLowerCase().includes(searchLow) || 
                            item.desc.toLowerCase().includes(searchLow) ||
                            item.subtitle.toLowerCase().includes(searchLow);
      return matchCat && matchSearch;
    });

    if (items.length === 0) return;
    totalVisible += items.length;

    const sectionEl = document.createElement('div');
    sectionEl.className = 'category-section-block';
    sectionEl.innerHTML = `
      <div class="section-banner-header">
        <h2 class="section-banner-title"><i class="fa-solid ${sec.icon}"></i> ${sec.title}</h2>
        <span class="section-banner-badge">${sec.badge}</span>
      </div>
      <div class="products-grid">
        ${items.map(item => {
          const qty = cart[item.id] ? (cart[item.id].qty || 0) : 0;
          return `
            <div class="item-card">
              <div class="item-media" onclick="openImageZoom('${item.image}', '${item.defaultImg}', '${item.name}')">
                <img class="item-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${item.defaultImg}';">
                <span class="item-highlight-tag">${item.subtitle}</span>
                <div class="zoom-badge" title="Ampliar Imagem"><i class="fa-solid fa-expand"></i></div>
              </div>
              <div class="item-content">
                <div>
                  <h3 class="item-title">${item.name}</h3>
                  <p class="item-description">${item.desc}</p>
                </div>
                <div class="item-footer">
                  <div class="item-price-box">
                    <span class="price-small-label">${dict.btn_value}</span>
                    <span class="price-value">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div class="item-actions">
                    <button class="btn-customize" onclick="openCustomizeModal(${item.id})">
                      <i class="fa-solid fa-sliders"></i> ${dict.btn_customize}
                    </button>
                    <div class="qty-stepper">
                      <button class="step-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
                      <span class="step-number" id="qty-${item.id}">${qty}</span>
                      <button class="step-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.appendChild(sectionEl);
  });

  emptyState.style.display = totalVisible === 0 ? 'block' : 'none';
}

function openCustomizeModal(itemId) {
  const item = MENU_DATA.find(i => i.id == itemId);
  if (!item) return;

  currentCustomizingItem = item;
  document.getElementById('custom-item-name').innerText = item.name;
  document.getElementById('custom-item-base-price').innerText = `Preço base: R$ ${item.price.toFixed(2).replace('.', ',')}`;

  document.getElementById('chk-protein').checked = false;
  document.querySelector('input[name="custom_border"][value="Nenhuma"]').checked = true;
  document.querySelector('input[name="custom_fiber"][value="Nenhuma"]').checked = true;
  document.getElementById('chk-crunch').checked = false;
  document.getElementById('chk-peanut').checked = false;
  document.getElementById('custom-item-obs').value = '';

  calculateCustomPrice();
  document.getElementById('customize-modal').classList.add('active');
}

function calculateCustomPrice() {
  if (!currentCustomizingItem) return;
  let total = currentCustomizingItem.price;

  if (document.getElementById('chk-protein').checked) total += 8.00;

  const border = document.querySelector('input[name="custom_border"]:checked');
  if (border && border.value !== 'Nenhuma') total += parseFloat(border.dataset.price);

  const fiber = document.querySelector('input[name="custom_fiber"]:checked');
  if (fiber && fiber.value !== 'Nenhuma') total += parseFloat(fiber.dataset.price);

  if (document.getElementById('chk-crunch').checked) total += 6.00;
  if (document.getElementById('chk-peanut').checked) total += 3.00;

  document.getElementById('custom-total-btn-price').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function confirmCustomizedItem() {
  if (!currentCustomizingItem) return;

  const selectedExtras = [];
  let extraCost = 0;

  if (document.getElementById('chk-protein').checked) {
    selectedExtras.push('Dose Extra Proteína (+R$ 8)');
    extraCost += 8.00;
  }

  const border = document.querySelector('input[name="custom_border"]:checked');
  if (border && border.value !== 'Nenhuma') {
    selectedExtras.push(`${border.value} (+R$ 6)`);
    extraCost += 6.00;
  }

  const fiber = document.querySelector('input[name="custom_fiber"]:checked');
  if (fiber && fiber.value !== 'Nenhuma') {
    selectedExtras.push(`${fiber.value} (+R$ 9)`);
    extraCost += 9.00;
  }

  if (document.getElementById('chk-crunch').checked) {
    selectedExtras.push('Crunch Protéico (+R$ 6)');
    extraCost += 6.00;
  }
  if (document.getElementById('chk-peanut').checked) {
    selectedExtras.push('Amendoim (+R$ 3)');
    extraCost += 3.00;
  }

  const userItemObs = document.getElementById('custom-item-obs').value.trim();
  const finalPrice = currentCustomizingItem.price + extraCost;
  const customKey = `${currentCustomizingItem.id}_custom_${Date.now()}`;

  cart[customKey] = {
    id: currentCustomizingItem.id,
    name: currentCustomizingItem.name,
    basePrice: currentCustomizingItem.price,
    finalPrice: finalPrice,
    qty: 1,
    isCustom: true,
    extras: selectedExtras,
    itemObs: userItemObs
  };

  closeCustomizeModal();
  saveCart();
  updateCartCounters();
  renderCatalogSections();
}

function closeCustomizeModal() {
  document.getElementById('customize-modal').classList.remove('active');
  currentCustomizingItem = null;
}

function closeCustomizeOnBackdrop(e) {
  if (e.target.id === 'customize-modal') closeCustomizeModal();
}

function updateItemQuantity(cartKey, change) {
  if (MENU_DATA.find(i => i.id == cartKey)) {
    const item = MENU_DATA.find(i => i.id == cartKey);
    if (!cart[cartKey]) {
      cart[cartKey] = {
        id: item.id,
        name: item.name,
        basePrice: item.price,
        finalPrice: item.price,
        qty: 0,
        isCustom: false,
        extras: []
      };
    }
    cart[cartKey].qty += change;
    if (cart[cartKey].qty <= 0) {
      delete cart[cartKey];
    }
  } else if (cart[cartKey]) {
    cart[cartKey].qty += change;
    if (cart[cartKey].qty <= 0) {
      delete cart[cartKey];
    }
  }

  saveCart();
  updateCartCounters();
  renderCatalogSections();
}

function updateCartCounters() {
  let totalQty = 0;
  let totalPrice = 0;

  for (const [key, item] of Object.entries(cart)) {
    totalQty += item.qty;
    totalPrice += item.finalPrice * item.qty;
  }

  const floatBar = document.getElementById('cart-float-bar');
  const countBadge = document.getElementById('cart-count-badge');
  const totalBadge = document.getElementById('cart-total-badge');

  countBadge.innerText = totalQty;
  totalBadge.innerText = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

  if (totalQty > 0) {
    floatBar.classList.remove('hidden');
  } else {
    floatBar.classList.add('hidden');
  }
}

function saveCart() {
  localStorage.setItem('evs_pdf_cart_v5', JSON.stringify(cart));
}

function loadSavedCart() {
  try {
    const saved = localStorage.getItem('evs_pdf_cart_v5');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = {};
  }
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (btn) {
    btn.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }

  renderCatalogSections();
}

function updateCategoryBadges() {
  document.getElementById('count-todos').innerText = MENU_DATA.length;
  SECTIONS_CONFIG.forEach(sec => {
    const el = document.getElementById(`count-${sec.key}`);
    if (el) {
      el.innerText = MENU_DATA.filter(i => i.category === sec.key).length;
    }
  });
}

function handleSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  searchTerm = input.value.trim();
  clearBtn.style.display = searchTerm ? 'block' : 'none';
  renderCatalogSections();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  input.value = '';
  searchTerm = '';
  document.getElementById('clear-search-btn').style.display = 'none';
  renderCatalogSections();
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const wrapper = document.getElementById('cart-items-list');
  wrapper.innerHTML = '';

  let totalQty = 0;
  let totalPrice = 0;

  for (const [key, item] of Object.entries(cart)) {
    const itemSubtotal = item.finalPrice * item.qty;
    totalQty += item.qty;
    totalPrice += itemSubtotal;

    const extrasText = item.extras && item.extras.length > 0 ? `<div style="font-size: 0.72rem; color: var(--pdf-magenta); margin-top:2px;">+ ${item.extras.join(', ')}</div>` : '';
    const obsText = item.itemObs ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-style: italic;">Obs: ${item.itemObs}</div>` : '';

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="row-details">
        <h4>${item.name}</h4>
        <p>${item.qty} un. x R$ ${item.finalPrice.toFixed(2).replace('.', ',')}</p>
        ${extrasText}
        ${obsText}
      </div>
      <div class="row-pricing">
        <div class="qty-stepper" style="background: white;">
          <button class="step-btn" onclick="updateItemModal('${key}', -1)">-</button>
          <span class="step-number">${item.qty}</span>
          <button class="step-btn" onclick="updateItemModal('${key}', 1)">+</button>
        </div>
        <span class="row-total-val">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</span>
      </div>
    `;
    wrapper.appendChild(row);
  }

  document.getElementById('summary-items-count').innerText = `${totalQty} itens`;
  document.getElementById('summary-subtotal-price').innerText = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  document.getElementById('summary-grand-price').innerText = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

  modal.classList.add('active');
}

function updateItemModal(key, change) {
  updateItemQuantity(key, change);
  if (Object.keys(cart).length === 0) {
    closeCheckoutModal();
  } else {
    openCheckoutModal();
  }
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}

function closeCheckoutOnBackdrop(event) {
  if (event.target.id === 'checkout-modal') closeCheckoutModal();
}

function setDeliveryMode(mode, btn) {
  deliveryType = mode;
  document.querySelectorAll('.deliv-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const addrRow = document.getElementById('delivery-address-row');
  if (mode === 'Delivery') {
    addrRow.style.display = 'block';
  } else {
    addrRow.style.display = 'none';
  }
}

function setPaymentType(type, chip) {
  paymentMethod = type;
  document.querySelectorAll('.pay-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
}

function openImageZoom(imgSrc, defaultSrc, name) {
  const modal = document.getElementById('image-zoom-modal');
  const img = document.getElementById('zoom-modal-img');
  const caption = document.getElementById('zoom-modal-caption');

  img.src = imgSrc;
  img.onerror = function() {
    this.onerror = null;
    this.src = defaultSrc;
  };
  caption.innerText = name;
  modal.classList.add('active');
}

function closeImageZoom(e) {
  if (e.target.id === 'image-zoom-modal' || e.target.closest('.zoom-close-btn')) {
    document.getElementById('image-zoom-modal').classList.remove('active');
  }
}

function dispatchOrderWhatsApp() {
  const name = document.getElementById('cust-name').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const obs = document.getElementById('cust-obs').value.trim();

  if (!name) {
    alert('Por favor, informe seu nome para identificarmos o pedido.');
    document.getElementById('client-name').focus();
    return;
  }

  if (deliveryType === 'Delivery' && !address) {
    alert('Por favor, informe o endereço completo para entrega!');
    document.getElementById('cust-address').focus();
    return;
  }

  if (Object.keys(cart).length === 0) {
    alert('Seu carrinho está vazio. Adicione itens antes de finalizar!');
    return;
  }

  let message = `🌟 *NOVO PEDIDO - EVS TOP BARÃO* 🌟\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📍 *Modalidade:* ${deliveryType}\n`;
  if (deliveryType === 'Delivery') {
    message += `🏠 *Endereço:* ${address}\n`;
  }
  message += `💳 *Pagamento:* ${paymentMethod}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *ITENS DO PEDIDO (CARDÁPIO OFICIAL EVS):*\n\n`;

  let grandTotal = 0;
  let totalCount = 0;

  for (const [key, item] of Object.entries(cart)) {
    const itemTotal = item.finalPrice * item.qty;
    grandTotal += itemTotal;
    totalCount += item.qty;

    message += `▪️ *${item.qty}x ${item.name}*\n   Unit: R$ ${item.finalPrice.toFixed(2).replace('.', ',')} | Subtotal: R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
    if (item.extras && item.extras.length > 0) {
      message += `   ➕ Adicionais: ${item.extras.join(', ')}\n`;
    }
    if (item.itemObs) {
      message += `   📝 Obs item: ${item.itemObs}\n`;
    }
  }

  message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *Total de Itens:* ${totalCount} un.\n`;
  message += `💰 *VALOR TOTAL: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n`;

  if (obs) {
    message += `📝 *Observações gerais:* ${obs}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `✨ *Pedido gerado pelo Cardápio Digital!* Aguardo confirmação.`;

  const phone = "5591982025980";
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encoded}`;

  window.open(whatsappUrl, '_blank');
}