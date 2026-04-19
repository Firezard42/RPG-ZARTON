// script.js - Arquivo JavaScript do site Contos Perdidos

// ====== KINGDOMS DATA ======
const kingdoms = [
  {
    name: 'Reino Central',
    link: 'central.html',
    icon: 'crown',
    description: 'O coração do continente. Um reino vasto e diverso onde ambição, poder e oportunidade caminham lado a lado. Aqui, qualquer um pode ascender… ou desaparecer nas sombras da própria cidade.',
    color: '#c9a84c',
    bg: 'from-amber-900/30 to-yellow-900/10',
    iconBg: 'bg-amber-900/40',
    iconGlow: '#c9a84c44',
    emoji: '👑'
  },
  {
    name: 'Aliança Arcana',
    icon: 'sparkles',
    link: 'Alianca Arcana.html',
    description: 'Uma coalizão de cidades onde a magia molda a realidade. Governada por sábios e estudiosos, é um lugar de conhecimento, mistério e perigos que nem todos compreendem.',
    color: '#9b7fd4',
    bg: 'from-purple-900/30 to-violet-900/10',
    iconBg: 'bg-purple-900/40',
    iconGlow: '#9b7fd444',
    emoji: '🧙'
  },
  {
    name: 'Reino de Verdália',
    icon: 'leaf',
    link: 'Reino de verdália.html',
    description: 'Terras férteis e tranquilas à primeira vista. Responsável por alimentar grande parte do continente, sua importância vai muito além do que aparenta.',
    color: '#2d6a4f',
    bg: 'from-green-900/30 to-emerald-900/10',
    iconBg: 'bg-green-900/40',
    iconGlow: '#2d6a4f44',
    emoji: '🌾'
  },
  {
    name: 'Império de Tauron',
    icon: 'shield',
    link: 'Imperio de Tauron.html',
    description: 'Uma potência militar disciplinada e implacável. Os minotauros acreditam na força como caminho para a ordem, expandindo seu domínio com estratégia e autoridade.',
    color: '#a0522d',
    bg: 'from-orange-900/30 to-red-900/10',
    iconBg: 'bg-orange-900/40',
    iconGlow: '#a0522d44',
    emoji: '🐂'
  },
  {
    name: 'Terras de Hipparion',
    icon: 'wind',
    link: 'Terras de Hipparion.html',
    description: 'Região selvagem onde tribos vivem em profunda conexão com a natureza e seus cavalos. Tradição, espiritualidade e rivalidade definem este território.',
    color: '#6b9e78',
    bg: 'from-teal-900/30 to-cyan-900/10',
    iconBg: 'bg-teal-900/40',
    iconGlow: '#6b9e7844',
    emoji: '🐎'
  },
  {
    name: 'República Industrial',
    icon: 'settings',
    link: 'Republica Industrial.html',
    description: 'Um centro de inovação onde a ciência supera a magia. Governada por grandes famílias industriais, é um lugar de progresso… e de ideias que podem mudar o mundo.',
    color: '#b8860b',
    bg: 'from-yellow-900/30 to-amber-900/10',
    iconBg: 'bg-yellow-900/40',
    iconGlow: '#b8860b44',
    emoji: '⚙️'
  },
  {
    name: 'Terras de Ragnar',
    icon: 'skull',
    link: 'terras de ragnar.html',
    description: 'Um domínio marcado pela morte — mas não pelo caos. Mortos-vivos e criaturas sombrias coexistem sob uma ordem própria, onde a linha entre vida e morte já não é clara.',
    color: '#4a5568',
    bg: 'from-gray-900/30 to-slate-900/10',
    iconBg: 'bg-gray-800/40',
    iconGlow: '#4a556844',
    emoji: '💀'
  },
  {
    name: 'Reino Glacial',
    icon: 'snowflake',
    link: 'reino glacial.html',
    description: 'Um território coberto por gelo eterno. Silencioso e imponente, guarda mistérios antigos que permanecem congelados… à espera de serem despertados.',
    color: '#4a8bb5',
    bg: 'from-blue-900/30 to-cyan-900/10',
    iconBg: 'bg-blue-900/40',
    iconGlow: '#4a8bb544',
    emoji: '❄️'
  },
  {
    name: 'Império Nefara',
    icon: 'sun',
    link: 'imperio nefara.html',
    description: 'Um império de areias e ruínas ancestrais. Sob o sol escaldante, segredos antigos e riquezas esquecidas aguardam aqueles que ousam explorá-los.',
    color: '#d4a843',
    bg: 'from-amber-900/30 to-orange-900/10',
    iconBg: 'bg-amber-900/40',
    iconGlow: '#d4a84344',
    emoji: '🏜️'
  },
  {
    name: 'Reinland',
    icon: 'users',
    link: 'reinland.html',
    description: 'Uma nação rígida e fechada, guiada por ideais de pureza e controle. Disciplina e ordem são levadas ao extremo — e nem todos são bem-vindos.',
    color: '#9ca3af',
    bg: 'from-slate-900/30 to-gray-900/10',
    iconBg: 'bg-slate-800/40',
    iconGlow: '#9ca3af44',
    emoji: '🧬'
  },
  {
    name: 'Império Jade',
    icon: 'swords',
    link: 'imperio jade.html',
    description: 'Uma terra de tradição e honra. Guerreiros disciplinados seguem códigos antigos, onde lealdade e dever são mais importantes que a própria vida.',
    color: '#dc2626',
    bg: 'from-red-900/30 to-rose-900/10',
    iconBg: 'bg-red-900/40',
    iconGlow: '#dc262644',
    emoji: '⚔'
  },
  {
    name: 'Reino do Grande Deus Dracarys',
    icon: 'cloud',
    link: 'imperio dracarys.html',
    description: 'Uma cidade que flutua nos céus, governada por um ser que exige devoção. Um lugar onde poder e fé se confundem… e desafiar isso pode ser fatal.',
    color: '#8b5cf6',
    bg: 'from-violet-900/30 to-purple-900/10',
    iconBg: 'bg-violet-900/40',
    iconGlow: '#8b5cf644',
    emoji: '🐉'
  },
  {
    name: 'Reino Oceânico',
    icon: 'waves',
    link: 'reino oceanico.html',
    description: 'Nas profundezas dos mares, existe um reino pouco visto pela superfície. Seus habitantes observam, protegem… e mantêm segredos antigos escondidos sob as águas.',
    color: '#0891b2',
    bg: 'from-cyan-900/30 to-teal-900/10',
    iconBg: 'bg-cyan-900/40',
    iconGlow: '#0891b244',
    emoji: '🌊'
  },
  {
    name: 'Campos de Lotus',
    icon: 'zap',
    link: 'campos de lotus.html',
    description: 'Uma terra corrompida onde a realidade parece distorcida. Sobreviver aqui exige mais do que força — exige resistência ao próprio mundo.',
    color: '#991b1b',
    bg: 'from-red-950/40 to-red-900/20',
    iconBg: 'bg-red-950/50',
    iconGlow: '#991b1b66',
    emoji: '🩸',
    danger: true
  }
];

// ====== RENDER KINGDOMS ======
const grid = document.getElementById('kingdoms-grid');
kingdoms.forEach((kingdom, index) => {
  const card = document.createElement('a');
  card.href = kingdom.link;
  card.className = `kingdom-card reveal ${kingdom.danger ? 'danger-card' : ''} bg-gradient-to-br ${kingdom.bg}`;
  card.style.textDecoration = 'none';
  card.style.display = 'block';
  card.style.setProperty('--icon-glow', kingdom.iconGlow);
  card.style.transitionDelay = `${(index % 4) * 0.1}s`;

  card.innerHTML = `
    <div class="card-icon ${kingdom.iconBg}" style="--icon-glow: ${kingdom.iconGlow}; border: 1px solid ${kingdom.color}33;">
      <i data-lucide="${kingdom.icon}" style="color: ${kingdom.color}; width: 24px; height: 24px;"></i>
    </div>
    <h3 class="font-cinzel text-base md:text-lg font-bold mb-2 tracking-wide" style="color: ${kingdom.color};">
      ${kingdom.emoji} ${kingdom.name}
    </h3>
    <p class="text-gray-400/80 text-sm leading-relaxed font-light">
      ${kingdom.description}
    </p>
    <div class="absolute bottom-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, ${kingdom.color}44, transparent);"></div>
  `;

  grid.appendChild(card);
});

// ====== LUCIDE ICONS ======
lucide.createIcons();

// ====== PARTICLES ======
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3 - 0.15;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.fadeSpeed = Math.random() * 0.005 + 0.002;
    this.growing = Math.random() > 0.5;
    this.color = Math.random() > 0.7 ? '#c9a84c' : '#4a8bb5';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.growing) {
      this.opacity += this.fadeSpeed;
      if (this.opacity >= 0.5) this.growing = false;
    } else {
      this.opacity -= this.fadeSpeed;
      if (this.opacity <= 0.05) this.reset();
    }

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Create particles
const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ====== SCROLL REVEAL ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ====== NAVBAR BACKGROUND ======
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.style.background = 'rgba(6, 6, 18, 0.9)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.borderBottom = '1px solid rgba(201, 168, 76, 0.1)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.borderBottom = 'none';
  }
});

// ====== MOBILE MENU ======
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('hidden');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}