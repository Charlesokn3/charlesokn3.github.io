const PROJECTS = [
  {
    id: "neural-cache",
    title: "Neural Cache",
    category: "web",
    date: "Jun 2026",
    pitch: "A cyberpunk budget tracker you can install on your phone.",
    about: "A personal budgeting app with a Cyberpunk 2077 look. It installs like a normal app on phones and computers, and syncs your data across devices.",
    features: [
      "Income and expense tracking with a 50/30/20 budget split",
      "Piggy bank and savings goals",
      "Weekly, biweekly and monthly views",
      "Email login, with data synced through Supabase",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "PWA"],
    live: "https://charlesokn3.github.io/neural-cache",
    liveLabel: "Open the app",
    code: "https://github.com/Charlesokn3/neural-cache",
    colors: ["#2a0f45", "#0b1630"],
    accent: "#fcee0a",
    icon: "coin",
    top: true,
  },
  {
    id: "fable-vault",
    title: "Fable Vault",
    category: "desktop",
    date: "Jul 2026",
    pitch: "A desktop EPUB reader with text-to-speech.",
    about: "An EPUB reader I built from scratch, packaged as a desktop app for Windows and Mac. It reads books aloud and keeps track of your reading habits.",
    features: [
      "Bookmarks, in-book search and word lookup",
      "Reading stats, an activity heatmap and daily streaks",
      "Text-to-speech with a sleep timer",
      "Installers for Windows and Mac",
    ],
    stack: ["JavaScript", "Electron"],
    live: "https://github.com/Charlesokn3/fable-vault/releases/latest",
    liveLabel: "Download",
    code: "https://github.com/Charlesokn3/fable-vault",
    colors: ["#7a3b12", "#3a1530"],
    accent: "#ffd27a",
    icon: "book",
    top: true,
  },
  {
    id: "historic-sites",
    title: "Canadian Historic Sites",
    category: "web",
    date: "Apr 2026",
    pitch: "A full-stack app for exploring Canada's historic sites.",
    about: "A Next.js app backed by a REST API I wrote with Express and MongoDB. You can browse historic sites, make an account, and save favourites.",
    features: [
      "Next.js and React front end with site details",
      "Express and MongoDB REST API",
      "Register, log in and save favourites, protected with JWT",
      "Front end and API both deployed on Vercel",
    ],
    stack: ["Next.js", "React", "Express", "MongoDB", "JWT"],
    live: "https://sites-app-theta.vercel.app",
    liveLabel: "Open the app",
    code: "https://github.com/Charlesokn3/sites-app",
    extraLinks: [{ label: "API code", url: "https://github.com/Charlesokn3/sites-api" }],
    colors: ["#d8322a", "#8c1414"],
    accent: "#ffffff",
    icon: "pin",
    top: true,
  },
  {
    id: "echoes-of-elaria",
    title: "Echoes of Elaria",
    category: "desktop",
    date: "Fall 2026",
    pitch: "A team game built in Unreal Engine.",
    about: "A game made by a team of three for a game development course at Seneca. The code lives in a private team repo, so there's no public link yet.",
    features: [
      "My role: (TODO: what you built or designed)",
      "Planned with a shared Game Design Document",
      "Large game assets handled with Git LFS",
    ],
    stack: ["Unreal Engine", "Git LFS"],
    note: "Screenshots are coming soon.",
    colors: ["#1b6d78", "#2b1d5c"],
    accent: "#9ff5e6",
    icon: "crystal",
    top: true,
  },
  {
    id: "practice-exercises",
    title: "Practice Tools",
    category: "practice",
    date: "Aug 2026",
    pitch: "Small tools I built to practise JavaScript and C++.",
    about: "A collection of small practice projects: a JSON to CSV converter, a border-radius previewer, and a binary to decimal converter written in C++.",
    features: [
      "JSON to CSV converter",
      "Border-radius previewer with sliders",
      "Binary to decimal converter in C++",
    ],
    stack: ["JavaScript", "HTML", "CSS", "C++"],
    code: "https://github.com/Charlesokn3/practice-exercises",
    colors: ["#2f9a3c", "#13552a"],
    accent: "#e8ffd0",
    icon: "code",
  },
  {
    id: "web222-assignment5",
    title: "Product Store",
    category: "practice",
    date: "Aug 2025",
    pitch: "A multi-page store site built for WEB222.",
    about: "A multi-page product store website with an About page, built with HTML and CSS for my WEB222 course at Seneca.",
    features: [
      "Product grid with images and prices",
      "Multiple linked pages",
      "Built with plain HTML and CSS",
    ],
    stack: ["HTML", "CSS"],
    code: "https://github.com/Charlesokn3/web222-assignment5",
    colors: ["#f39a1e", "#c2560c"],
    accent: "#fff3d6",
    icon: "bag",
  },
];

// Your GitHub username. Public repos that aren't in the list above are
// added to the grid automatically (they link straight to GitHub).
const GITHUB_USER = "Charlesokn3";
const SKIP_REPOS = [
  "charlesokn3.github.io",
  "sites-api",          // shown as part of Canadian Historic Sites
  "sites-app",
  ...PROJECTS.map((p) => p.id),
];

// Little drawings for the thumbnails
const ICONS = {
  coin: '<circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="5"/><path d="M38 23c-2-2-4-3-7-3-4 0-7 2-7 5 0 7 15 4 15 11 0 3-3 6-8 6-3 0-6-1-8-3M31 16v32" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
  book: '<path d="M8 16c8-3 16-3 24 2v32c-8-5-16-5-24-2zM56 16c-8-3-16-3-24 2v32c8-5 16-5 24-2z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>',
  pin: '<path d="M32 58S14 38 14 26a18 18 0 0 1 36 0c0 12-18 32-18 32z" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round"/><circle cx="32" cy="26" r="6" fill="currentColor"/>',
  crystal: '<path d="M32 6l14 18-14 34-14-34z M18 24h28 M32 6v52" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>',
  code: '<path d="M22 18L8 32l14 14M42 18l14 14-14 14M36 12l-8 40" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  bag: '<path d="M12 22h40l-4 34H16z M24 22v-4a8 8 0 0 1 16 0v4" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round"/>',
};

const CATEGORY_NAMES = {
  web: "Web apps",
  desktop: "Desktop and games",
  practice: "Practice and coursework",
};

// Extra repos loaded from GitHub get added here
let extraRepos = [];

// ---------- Small helpers ----------
const $ = (sel) => document.querySelector(sel);

function thumb(p, extraClass = "") {
  const style = `--a:${p.colors[0]};--b:${p.colors[1]};--ink:${p.accent}`;
  if (p.image) {
    return `<div class="thumb ${extraClass}" style="${style}"><img src="${p.image}" alt=""></div>`;
  }
  return `<div class="thumb ${extraClass}" style="${style}" aria-hidden="true">
    <svg class="thumb-icon" viewBox="0 0 64 64">${ICONS[p.icon] || ICONS.code}</svg>
    <span class="thumb-title">${p.title}</span>
  </div>`;
}

function card(p) {
  // Projects in the list get their own page; extra GitHub repos go to GitHub
  const href = p.external ? p.code : `#project/${p.id}`;
  return `<a class="card" href="${href}">
    ${thumb(p)}
    <span class="card-name">${p.title}</span>
    <span class="card-pitch">${p.pitch}</span>
  </a>`;
}

// Pages
const VIEWS = ["projects", "project", "about", "contact"];

function showView(name) {
  VIEWS.forEach((v) => { $(`#view-${v}`).hidden = v !== name; });

  // Highlight the matching tab (a project page counts as "Projects")
  const tabName = name === "project" ? "projects" : name;
  document.querySelectorAll(".tab").forEach((tab) => {
    if (tab.dataset.tab === tabName) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  });
}

function route() {
  const hash = location.hash.slice(1);          // "about", "project/neural-cache", ...

  if (hash.startsWith("project/")) {
    const p = PROJECTS.find((x) => x.id === hash.slice(8));
    if (p) {
      renderProjectPage(p);
      showView("project");
      document.title = `${p.title} - Charles Okonkwo`;
      window.scrollTo(0, 0);
      return;
    }
  }

  const view = hash === "about" || hash === "contact" ? hash : "projects";
  showView(view);
  document.title = view === "projects"
    ? "Charles Okonkwo - Projects"
    : `${view === "about" ? "About" : "Contact"} - Charles Okonkwo`;
}

window.addEventListener("hashchange", route);


const featured = PROJECTS.filter((p) => p.top);
let featureIndex = 0;

function showFeature(i) {
  featureIndex = (i + featured.length) % featured.length;
  const p = featured[featureIndex];
  $("#feature").innerHTML = `
    <a class="feature-art" href="#project/${p.id}" aria-label="${p.title} project page">
      ${thumb(p, "thumb-big")}
    </a>
    <div class="feature-info">
      <p class="feature-cat">${CATEGORY_NAMES[p.category]}</p>
      <h3>${p.title}</h3>
      <p>${p.about}</p>
      <div class="actions">
        ${p.live ? `<a class="btn btn-play btn-large" href="${p.live}">${p.liveLabel || "Open"}</a>` : ""}
        <a class="btn btn-blue btn-large" href="#project/${p.id}">More about it</a>
      </div>
    </div>`;

  document.querySelectorAll(".pager-dot").forEach((dot, n) => {
    dot.setAttribute("aria-current", n === featureIndex ? "true" : "false");
  });
}

function buildPager() {
  $("#feature-dots").innerHTML = featured
    .map((p, n) => `<button type="button" class="pager-dot" aria-label="Show ${p.title}">${n + 1}</button>`)
    .join("");
  document.querySelectorAll(".pager-dot").forEach((dot, n) => {
    dot.addEventListener("click", () => showFeature(n));
  });
  $("#feature-prev").addEventListener("click", () => showFeature(featureIndex - 1));
  $("#feature-next").addEventListener("click", () => showFeature(featureIndex + 1));
}


// Filter Search
let currentFilter = "all";

function renderGrid() {
  const q = $("#search-input").value.trim().toLowerCase();
  const all = [...PROJECTS, ...extraRepos];

  const shown = all.filter((p) => {
    const inCategory = currentFilter === "all" || p.category === currentFilter;
    const text = [p.title, p.pitch, p.about, ...(p.stack || []), ...(p.features || [])]
      .join(" ").toLowerCase();
    return inCategory && (!q || text.includes(q));
  });

  $("#grid").innerHTML = shown.map(card).join("");

  // Heading says what's being shown
  let heading = currentFilter === "all" ? "All projects" : CATEGORY_NAMES[currentFilter];
  if (q) heading += ` matching "${$("#search-input").value.trim()}"`;
  $("#grid-heading").textContent = heading;

  const empty = $("#grid-empty");
  empty.hidden = shown.length > 0;
  empty.textContent = "No projects match. Try another word, or pick All.";
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll(".filter").forEach((b) =>
      b.setAttribute("aria-pressed", b === btn ? "true" : "false")
    );
    renderGrid();
    goToGrid();
  });
});

$("#search-input").addEventListener("input", () => {
  // Searching always looks through every project
  currentFilter = "all";
  document.querySelectorAll(".filter").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.filter === "all" ? "true" : "false")
  );
  renderGrid();
  if (location.hash.slice(1) && location.hash !== "#projects") location.hash = "projects";
});

// Filters and search work from any page: they bring you back to the grid
function goToGrid() {
  if (location.hash.slice(1) && location.hash !== "#projects") location.hash = "projects";
  requestAnimationFrame(() =>
    $("#grid-heading").scrollIntoView({ behavior: "smooth", block: "start" })
  );
}


// One Project per Page
function renderProjectPage(p) {
  const links = [
    p.live ? `<a class="btn btn-play btn-large" href="${p.live}">${p.liveLabel || "Open"}</a>` : "",
    p.code ? `<a class="btn btn-blue btn-large" href="${p.code}">View code</a>` : "",
    ...(p.extraLinks || []).map((l) => `<a class="btn btn-blue btn-large" href="${l.url}">${l.label}</a>`),
  ].join("");

  // "More projects": same category first, then the rest
  const others = PROJECTS.filter((x) => x.id !== p.id)
    .sort((a, b) => (b.category === p.category) - (a.category === p.category))
    .slice(0, 4);

  $("#view-project").innerHTML = `
    <p class="crumbs"><a href="#projects">Projects</a> / ${p.title}</p>

    <div class="panel">
      <h2 class="panel-head">${p.title}</h2>
      <div class="panel-body project-page">
        <div class="project-art">${thumb(p, "thumb-big")}</div>
        <div class="project-info">
          <p class="feature-cat">${CATEGORY_NAMES[p.category]}, ${p.date}</p>
          <p class="project-about">${p.about}</p>
          <div class="actions">${links}</div>
          ${p.note ? `<p class="muted">${p.note}</p>` : ""}

          <h3>What it does</h3>
          <ul class="features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>

          <h3>Built with</h3>
          <ul class="chips">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
      </div>
    </div>

    <div class="panel">
      <h2 class="panel-head panel-head-orange">More projects</h2>
      <div class="panel-body"><div class="grid">${others.map(card).join("")}</div></div>
    </div>`;
}

// EXTRA REPOS FROM GITHUB (added to the grid if there are any)
async function loadExtraRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`);
    if (!res.ok) return;
    const repos = await res.json();
    extraRepos = repos
      .filter((r) => !r.fork && !SKIP_REPOS.includes(r.name.toLowerCase()))
      .map((r) => ({
        id: r.name,
        title: r.name,
        category: "practice",
        pitch: r.description || `${r.language || "Code"} project on GitHub`,
        about: r.description || "",
        stack: r.language ? [r.language] : [],
        code: r.html_url,
        external: true,
        colors: ["#7f93a6", "#4c6073"],
        accent: "#ffffff",
        icon: "code",
      }));
    if (extraRepos.length) renderGrid();
  } catch (err) {
    console.error(err); // the grid still works without these
  }
}


// ---------- Start ----------
buildPager();
showFeature(0);
renderGrid();
route();
loadExtraRepos();
