export const PORTFOLIO_DATA = {
    profile: {
        name: "Mahateer Muhammad",
        role: "AI/ML Engineer | Applied LLM Systems | Full-Stack Developer",
        bio: "I build production-grade AI systems — LLM orchestration with real security hardening, preference-optimization fine-tunes, clinical data pipelines, and interactive ML tooling. Let's build something that doesn't hallucinate.",
        location: "Pakistan",
        email: "mahateermuhammad100@gmail.com",
        socials: {
            github: "https://github.com/MahateerMuhammad",
            linkedin: "https://www.linkedin.com/in/mahateer-muhammad-a74284356"
        }
    },
    experience: [
        {
            title: "Co-founder & Developer - UXELERATE",
            period: "Present",
            description: [
                "Leading technical development and building production-grade systems.",
                "Specializing in LLM Systems in Production, Preference Optimization, and Interactive ML Tooling."
            ]
        },
        {
            title: "Software Developer Intern - Bitbytes",
            period: "Jun 2023 - Sep 2023",
            description: [
                "Assisted in full-stack software development tasks and collaborated with cross-functional teams.",
                "Contributed to building scalable applications and resolving critical bugs."
            ]
        },
        {
            title: "Independent AI/ML Researcher & Engineer",
            period: "Continuous",
            description: [
                "Trained a DPO model on a single T4 in ~2 hours to drastically improve factual grounding.",
                "Developed a production pipeline processing 546K+ MIMIC-IV hospital stays into ML-ready datasets.",
                "Built an interactive Neural Network Visualizer with 255 tests and zero faked data."
            ]
        }
    ],
    techStack: [
        { name: "Python", category: "Language" },
        { name: "JavaScript", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "C++", category: "Language" },
        { name: "Dart", category: "Language" },
        
        { name: "PyTorch", category: "Deep Learning" },
        { name: "TensorFlow", category: "Deep Learning" },
        { name: "Keras", category: "Deep Learning" },
        { name: "HuggingFace", category: "Deep Learning" },
        { name: "Scikit-Learn", category: "Machine Learning" },
        
        { name: "React", category: "Frontend" },
        { name: "Vite", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "D3.js", category: "Frontend" },
        { name: "Flutter", category: "Mobile" },
        
        { name: "Apache Spark", category: "Data Engineering" },
        { name: "Pandas", category: "Data Engineering" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        
        { name: "FastAPI", category: "Backend" },
        { name: "Express", category: "Backend" },
        { name: "Node.js", category: "Backend" },
        { name: "Redis", category: "Backend" },
        { name: "Supabase", category: "Backend" },
        
        { name: "AWS", category: "Cloud" },
        { name: "Docker", category: "DevOps" },
        { name: "Firebase", category: "Cloud" }
    ],
    projects: [
        {
            slug: "multi-agent-debate",
            title: "Multi-Agent Debate Framework",
            category: "Production LLM Orchestration",
            description: "A single API call, 25 nested LLM calls, and enough hardening to survive contact with the real world."
        },
        {
            slug: "medtrust",
            title: "MedTrust",
            category: "LLM Fine-Tuning / DPO",
            description: "Teaching a 7B model to stop confidently making things up in clinical answers using Direct Preference Optimization."
        },
        {
            slug: "deepvision",
            title: "DeepVision",
            category: "Interactive ML Tooling",
            description: "Interactive Neural Network Visualizer — Neural networks, explained by the network itself."
        },
        {
            slug: "clinical-digital-twin",
            title: "Clinical Digital Twin",
            category: "Data Engineering & RAG",
            description: "Patient Risk & Decision-Support System turning 40GB of raw hospital data into a risk-scoring RAG agent."
        },
        {
            slug: "brain-tumor-detection",
            title: "Brain Tumor Detection",
            category: "Medical Imaging / Explainable AI",
            description: "Healthcare AI that shows its work via Grad-CAM explainability layered on every prediction."
        },
        {
            slug: "konexea",
            title: "Konexea (Social-Swap)",
            category: "Social Media App",
            description: "A modern social media application built with Flutter, featuring AI-powered interactions."
        },
        {
            slug: "calinga",
            title: "CALiNGA",
            category: "On-Demand Healthcare",
            description: "On-demand healthcare platform with live location tracking and provider matching."
        },
        {
            slug: "al-safeena",
            title: "Al-Safeena",
            category: "HVAC Service Ecosystem",
            description: "A dual-role mobile application connecting consumers with verified HVAC technicians."
        },
        {
            slug: "chw-tb-tracker",
            title: "CHW TB Tracker",
            category: "Health Data Collection",
            description: "Flutter/Firebase app for community health workers to register patients and log visits offline."
        },
        {
            slug: "joytox",
            title: "Joytox",
            category: "Next-Gen Social Platform",
            description: "Live streaming, short video reels, and social feed in one seamless experience."
        },
        {
            slug: "inner-armor",
            title: "Inner Armor Tactical Coach",
            category: "Mental Resilience Training",
            description: "Tactical coaching and mental resilience training based on Andrew D. Wittman's doctrine."
        },
        {
            slug: "zeene",
            title: "ZEENE",
            category: "E-Commerce Platform",
            description: "A Curated E-Commerce Platform for Modern Lifestyle Essentials built with Next.js."
        }
    ],
    achievements: [
        {
            title: "MedHallu Benchmark Improvement",
            project: "MedTrust",
            description: "Improved base F1 score from 0.535 to 0.650 on the MedHallu benchmark using Direct Preference Optimization (DPO) fine-tuning on a 7B model. Hard-tier score (0.586) landed close to GPT-4o's reported ~0.625.",
            team: "Mahateer Muhammad",
            track: "AI Research",
            techStack: ["PyTorch", "Unsloth", "Kaggle"],
            links: {
                github: "https://github.com/MahateerMuhammad/MedTrust"
            }
        }
    ],
    capabilities: [
        "LLM Systems in Production",
        "Preference Optimization (DPO)",
        "Interactive ML Tooling",
        "Clinical Data Engineering",
        "Medical Imaging",
        "Cross-Platform Mobile (Flutter)",
        "Full-Stack Web Development"
    ]
};
