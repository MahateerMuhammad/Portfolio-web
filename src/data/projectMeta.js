export const PROJECT_META = [
  {
    id: 1,
    slug: "multi-agent-debate",
    title: "Multi-Agent Debate Framework",
    category: "Production LLM Orchestration",
    color: "bg-cyan-400",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "medtrust",
    title: "MedTrust",
    category: "LLM Fine-Tuning / DPO",
    color: "bg-purple-400",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "deepvision",
    title: "DeepVision",
    category: "Interactive ML Tooling",
    color: "bg-emerald-400",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "clinical-digital-twin",
    title: "Clinical Digital Twin",
    category: "Data Engineering & RAG",
    color: "bg-blue-400",
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 6,
    slug: "brain-tumor-detection",
    title: "Brain Tumor Detection",
    category: "Medical Imaging / Explainable AI",
    color: "bg-pink-400",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "konexea",
    title: "Konexea (Social-Swap)",
    category: "Social Media App",
    color: "bg-indigo-400",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "calinga",
    title: "CALiNGA",
    category: "On-Demand Healthcare",
    color: "bg-teal-400",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    slug: "al-safeena",
    title: "Al-Safeena",
    category: "HVAC Service Ecosystem",
    color: "bg-sky-400",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    slug: "chw-tb-tracker",
    title: "CHW TB Tracker",
    category: "Health Data Collection",
    color: "bg-amber-400",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    slug: "joytox",
    title: "Joytox",
    category: "Next-Gen Social Platform",
    color: "bg-rose-400",
    img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    slug: "inner-armor",
    title: "Inner Armor Tactical Coach",
    category: "Mental Resilience Training",
    color: "bg-slate-400",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    slug: "zeene",
    title: "ZEENE",
    category: "E-Commerce Platform",
    color: "bg-lime-400",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
  }
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
