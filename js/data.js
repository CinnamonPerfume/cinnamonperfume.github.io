/* ── data.js — All portfolio content in one place ── */

document.getElementById('year').textContent = new Date().getFullYear();

const PROJECTS = [
  { id: 'rosejam-index',
    name: 'RoseJam Index',
    category: 'desktop',
    categoryLabel: 'Desktop App',
    tags: ['Electron', 'React', 'Node.js', 'RAWG API', 'SQLite'],
    images: [ 
    {
      src: 'assets/RoseJam Index Screenshot - Search.png',
      alt: 'Screenshot of RoseJam Index showing the search functionality.',
    },
    {
      src: 'assets/RoseJam Index Screenshot - Library.png',
      alt: 'Screenshot of RoseJam Index showing a list of games with thumbnails, ratings, and tags.',
    },
    {
      src: 'assets/RoseJam Index Screenshot - Archive.png',
      alt: 'Screenshot of RoseJam Index showing the archive list small game thumbnails, rating and notes.',
    }
    ],
    description: [
      'An offline-first desktop game library tracker built as part of the personal RoseJam suite. Lets you catalog, rate, and manage your personal game collection without relying on a cloud service.',
      'Integrates with the RAWG API for game metadata and thumbnails, caching everything locally so the app stays fast and fully functional without an internet connection.'
    ],
    highlights: [
      'Custom IPC bridge between Electron main and renderer processes',
      'Thumbnail caching pipeline with local disk storage',
      '4-tier rating system with contextual info tooltips',
      'Component-level CSS Modules and dedicated electron/ folder structure',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/RoseJam-Index', primary: true },
    ]
  },
];

const COURSEWORK = [
  { id: 'cisco-packet-tracer-semester-project',
    name: 'VLSM Network Simulation',
    category: 'networking',
    categoryLabel: 'Networking',
    tags: ['Cisco', 'Packet Tracer', 'VLSM', 'Subnetting', 'Static-Routing'],
    image: {
      src: 'assets/Cisco VLSM Project.jpg',
      alt: 'Screenshot of Cisco Packet Tracer showing a multi-router network topology with subnets and routing tables visible.',
    },
    description: [
      'Designed and simulated a multi-router IPv4 network across 8 subnets using Cisco Packet Tracer.',
      'Applied VLSM to subdivide a /20 address block (143.65.96.0/20) to fit varying host requirements ranging from 76 to 511 devices per subnet.',
      'Configured static routing on all routers via Cisco CLI and verified full end-to-end connectivity across every subnet using ICMP simulation.',
      'Inspector: Ing. Pavel Bezpalec, Ph.D.',
    ],
    highlights: [
      'VLSM allocation across 8 host subnets (/23, /24, /25) and 8 router-to-router /30 links',
      'Static routing configured manually on each router using ip route commands',
      'Full connectivity verified in Simulation mode with ICMP packet tracing',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/CPT-VLSM-Subnetting', primary: true },
    ],
  },
  { id: 'db-design-venustas',
    name: 'Relational Database Design',
    category: 'database',
    categoryLabel: 'SQL',
    tags: ['SQL', 'Oracle', 'Database Design', 'Relational Modeling', 'XML'],
    image: {
      src: 'assets/Relational Database Design Schema.png',
      alt: 'ER diagram of a relational database schema for a beauty products and services company, showing tables like Product, Service, Customer, Appointment, and their relationships.',
    },
    description: [
      'Designed a relational database for a fictional beauty products and services company as part of BIE-DBS (Database Systems) at ČVUT FEL.',
      'Modeled the domain from scratch: conceptual schema, relational schema, normalization, and a full Oracle SQL implementation with 11 tables and foreign key constraints.',
      'Wrote 40+ queries covering basic SELECT, multi-table JOINs, subqueries, relational algebra, views, DML updates, and a cross-table DELETE trigger.',
      'Inspector: Ing. Josef Pavlíček, Ph.D.',
    ],
    highlights: [
      '11-table schema with full referential integrity and CASCADE constraints',
      '40+ queries including division, Cartesian product, views, and DML',
      'Project documented in XML with DTD validation and XSL stylesheet rendering',
    ],
    links: [
      { label: 'GitHub →', href: '', primary: true },
    ],
  },
  { id: 'circle-position',
    name: 'Circle Position',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI', 'geometry', 'input-validation'],
    description: [
      'Analyzes the mutual position of two circles defined by center coordinates and radius.',
      'Detects all six possible spatial relationships: identical, one inside the other, internal touch, intersection, external touch, and fully separate.',
      'Computes and displays the overlapping area where applicable.',
    ],
    highlights: [
      'Handles all six circle-to-circle positional cases',
      'Computes overlap area with floating-point precision',
      'Validates all numeric inputs including non-numeric and non-positive radii',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Circle-Position', primary: true },
    ],
  },
  { id: 'shapes-in-2d',
    name: 'Shapes in 2D',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI'],
    description: [
      'Compares the area and perimeter of two 2D shapes: triangles, rectangles, and squares.',
      'Reads shape descriptors from stdin and outputs comparison results for both area and perimeter.',
      'Enforces all geometric validity rules including triangle inequality and non-square rectangles.',
    ],
    highlights: [
      'Supports three shape types: Triangle (T), Rectangle (R), Square (S)',
      'Validates triangle inequality and rejects degenerate rectangles',
      'Outputs precise area/perimeter comparisons with < = > symbols',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Shapes-in-2D', primary: true },
    ],
  },
  { id: 'marshal-commands',
    name: 'Marshal Commands',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI', 'Data Structures', 'Linked Lists', 'Pointers', 'Memory Management'],
    description: [
      'Implements a set of linked-list manipulation functions modeled as military drill commands.',
      'Functions include mergePlatoons (interleaved merge of two lists), splitPlatoon (even split), and destroyPlatoon (memory deallocation).',
      'All operations work in-place via pointer re-linking — no struct copying allowed.',
    ],
    highlights: [
      'In-place linked-list merge with strict interleaving order',
      'Even-split with odd-element discard semantics',
      'Handles empty lists and edge cases without crashing',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Marshal-Commands', primary: true },
    ],
  },
  { id: 'unique-visitors',
    name: 'Unique Visitors',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI', 'Data Structures', 'Hashing', 'Input Validation'],
    description: [
      'Processes a web server access log and answers range queries for unique visitor counts.',
      'Supports two command types: registration (+id) and analysis (?from to), interleaved in stdin.',
      'Handles up to 1,000,000 registration entries and validates all input thoroughly.',
    ],
    highlights: [
      'Mixed-command stream processing (register + query)',
      'Efficient unique visitor counting over arbitrary index ranges',
      'Full input validation including ID bounds, query range, and command syntax',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Unique-Visitors', primary: true },
    ],
  },
  { id: 'bank-account',
    name: 'Simple Bank Account Simulation',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI', 'Finance', 'Algorithms', 'Math'],
    description: [
      'Simulates a bank account with daily compound interest applied to both credit and debit balances.',
      'Processes deposit/withdrawal transactions sorted by day number, applying separate interest rates for positive and negative balances.',
      'Rounds interest to the nearest haller (1/100 CZK) truncating toward zero.',
    ],
    highlights: [
      'Separate credit and debit daily interest rates',
      'Interest computed at midnight; transactions take effect the next day',
      'Validates transaction ordering, numeric format, and separator presence',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Bank-Account', primary: true },
    ],
  },
  { id: 'points-in-2d',
    name: 'Points in 2D',
    category: 'Systems',
    categoryLabel: 'Systems / C',
    tags: ['C', 'CLI', 'Geometry', 'Math', 'Input Validation'],
    description: [
      'Reads three 2D points and determines their collinearity.',
      'Outputs whether all points are distinct and collinear (identifying the middle one), non-collinear, or whether any two are identical.',
    ],
    highlights: [
      'Detects collinearity with correct middle-point identification',
      'Handles identical point pairs and floating-point coordinates',
      'Strict input validation for non-numeric coordinates',
    ],
    links: [
      { label: 'GitHub →', href: 'https://github.com/CinnamonPerfume/Points-in-2D', primary: true },
    ],
  },
];

const EXPERIENCE = [
  {
    id: 'exp-anda-cunda',
    name: 'Anda Cunda Beach',
    tags: ['Waiter', 'Cashier', 'POS Systems', 'Customer Service'],
    description: [
      'Worked at a beach venue in a customer-facing role covering both front-of-house service and cashier duties. Also took on a technical side of helping set up and customize their point-of-sale system and managing electronic menu items.',
    ],
    highlights: [
      'Configured and customized POS system for orders and checkout flow',
      'Edited and maintained electronic menu items and pricing',
      'Handled cash and card transactions as cashier',
      'Front-of-house service in a fast-paced beach environment',
    ],
    links: [],
  },
];

const LANGUAGES = [
  {
    id: 'lang-turkish',
    name: 'Turkish',
    tags: ['Native'],
    description: [
      'Native language. Grew up speaking it.',
    ],
    highlights: [],
  },
  {
    id: 'lang-english',
    name: 'English',
    tags: ['Fluent', 'C1+'],
    description: [
      'Fluent and comfortable. All my technical reading, documentation, courses, and most of my day-to-day communication happens in English.',
      'Comfortable with both formal and informal communication, from academic papers to formal conversations.',
    ],
    highlights: [
      'Technical writing, documentation, academic papers',
      'Primary language for coding, tooling, and professional contexts',
    ],
  },
  {
    id: 'lang-czech',
    name: 'Czech',
    tags: ['Beginner', 'A1'],
    description: [
      'Beginner level. Currently learning through daily life in Prague and university courses. Can understand simple texts, but still working on building up vocabulary and grammar for more complex communication.',
    ],
    highlights: [
      'University environment (lectures, materials)',
    ],
  },
];

const SKILLS = [
  {
    category: 'Desktop & Frontend',
    dotClass: 'skill-dot--accent',
    dotColor: 'var(--accent)',
    items: [
      { name: 'Electron',    level: 'sec' },
      { name: 'React',       level: 'sec' },
      { name: 'Vite',        level: 'base' },
      { name: 'CSS Modules', level: 'sec' },
      { name: 'HTML / CSS',  level: 'sec' },
      { name: 'JavaScript',  level: 'base' },
    ]
  },
  {
    category: 'Backend & Runtime',
    dotClass: 'skill-dot--accent',
    dotColor: 'var(--blue)',
    items: [
      { name: 'Node.js',  level: 'sec' },
      { name: 'SQLite',   level: 'sec' },
      { name: 'ffmpeg',   level: 'base' },
      { name: 'REST APIs', level: 'base' },
      { name: 'IPC / Electron main', level: 'sec' },
    ]
  },
  {
    category: 'Systems & Languages',
    dotClass: 'skill-dot--accent',
    dotColor: 'var(--accent)',
    items: [
      { name: 'C',      level: 'sec' },
      { name: 'Python',      level: 'main' },
      { name: 'Data Structures', level: 'main' },
      { name: 'Bash / CLI',  level: 'sec' },
      { name: 'Artificial Intelligence', level: 'main' },
    ]
  },
  {
    category: 'Concepts & Fundamentals',
    dotClass: 'skill-dot--accent',
    dotColor: 'var(--accent)',
    items: [
      { name: 'OOP',  level: 'main' },
      { name: 'Algorithms',  level: 'sec' },
      { name: 'Data Structures', level: 'sec' },
    ]
  },
  {
    category: 'Other',
    dotClass: 'skill-dot--dim',
    dotColor: 'var(--border-hi)',
    items: [
      { name: 'Git',      level: 'main' },
      { name: 'npm',      level: 'sec' },
      { name: 'VS Code',  level: 'main' },
      { name: 'Linux',    level: 'sec' },
      { name: 'Cisco Packet Tracer', level: 'sec' },
      { name: 'Soldering', level: 'base' },
      { name: 'Debugging', level: 'main' },
      { name: 'Wireshark', level: 'sec' },
      { name: 'MS Excel', level: 'main' },
      { name: 'MS Powerpoint', level: 'main' },
      { name: 'MS Word', level: 'main' },
    ]
  },
];

const CERTIFICATES = [
  { id: 'cert-ml', name: 'Google AI Essentials', date: 'Jul 2026' },
];

function renderCertificates() {
  const container = document.getElementById('certificates-list');
  if (!container) return;
  container.innerHTML = '';
  CERTIFICATES.forEach(cert => {
    const el = document.createElement('div');
    el.className = 'folder fade-up folder-cert';
    el.dataset.id = cert.id;

    const paperIcon = `
      <svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path class="icon-body" d="M4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20V8.34162C20 7.8034 19.7831 7.28789 19.3982 6.91161L14.9579 2.56999C14.5842 2.20459 14.0824 2 13.5597 2L6 2C4.89543 2 4 2.89543 4 4Z"/>
        <path class="icon-body" d="M14 2V6C14 7.10457 14.8954 8 16 8H20"/>
      </svg>`;

    el.innerHTML = `
      <div class="folder-header">
        <div class="folder-icon">${paperIcon}</div>
        <div class="folder-meta">
          <span class="folder-name">${cert.name}</span>
        </div>
        <span class="folder-category">${cert.date}</span>
      </div>`;

    container.appendChild(el);
  });
}

renderCertificates();
