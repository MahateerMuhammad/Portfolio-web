// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "multi-agent-debate": {
    title: "Multi-Agent Debate Framework",
    category: "Production LLM Orchestration",
    tagline: "A single API call, 25 nested LLM calls, and enough hardening to survive contact with the real world.",
    overview: "This project provides a robust, production-ready framework for orchestrating complex Multi-Agent LLM debates. It manages up to 25 nested LLM calls concurrently, featuring distributed rate limiting, prompt injection defense, and asynchronous connection pooling, all within a heavily secured Docker environment.",
    year: "2024",
    stack: ["Python", "FastAPI", "Docker", "Redis", "slowapi"],
    features: [
      "Spawns up to 25 nested LLM calls across Proponent/Opponent agents.",
      "Distributed rate limiting (slowapi + Redis, cross-worker/pod safe).",
      "Prompt injection defense via XML delimiter encapsulation and input tag-stripping.",
      "Request tracing with correlation IDs and structured JSON logs.",
      "Docker hardened with non-root user and cap_drop: ALL."
    ],
    impact: [
      "Demonstrates complex, multi-agent LLM orchestration in a production-ready environment.",
      "Provides robust security against common LLM vulnerabilities like prompt injection.",
      "Ensures high availability and scalability through asynchronous connection pooling."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/multi-agent-debate" }
  },
  "medtrust": {
    title: "MedTrust",
    category: "LLM Fine-Tuning / DPO",
    tagline: "Teaching a 7B model to stop confidently making things up in clinical answers using Direct Preference Optimization.",
    overview: "MedTrust is a fine-tuned clinical LLM optimized to reduce medical hallucinations. By applying Direct Preference Optimization (DPO) on Qwen2.5-7B-Instruct with matched grounded vs. hallucinated PubMedQA answers, the model learns to prioritize factual grounding over confident guesses in high-stakes healthcare scenarios.",
    year: "2024",
    stack: ["PyTorch", "Unsloth", "Kaggle", "Qwen2.5-7B-Instruct", "4-bit QLoRA"],
    features: [
      "Fine-tunes Qwen2.5-7B-Instruct with Direct Preference Optimization (DPO).",
      "Uses matched grounded vs. hallucinated PubMedQA answers.",
      "Efficient training using 4-bit QLoRA and 40.3M trainable LoRA params (0.53% of total weights).",
      "Trained end-to-end on a single free Kaggle T4 GPU in ~2 hours."
    ],
    impact: [
      "Improved overall F1 score on MedHallu benchmark from 0.535 to 0.650 (+11.5).",
      "Hard-tier score (0.586) lands close to GPT-4o's reported ~0.625 on the same split.",
      "Successfully prevents the model from giving dangerous, hallucinated medical advice."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/MedTrust" }
  },
  "deepvision": {
    title: "DeepVision",
    category: "Interactive ML Tooling",
    tagline: "Interactive Neural Network Visualizer — Neural networks, explained by the network itself.",
    overview: "DeepVision is an advanced, interactive tool designed to demystify neural networks. Instead of relying on static diagrams or simplified mock data, it hooks directly into PyTorch to visualize live activations, gradients, and receptive fields. With zero faked data, it serves as both an educational platform and a powerful debugging tool for ML engineers.",
    year: "2024",
    stack: ["PyTorch", "React 19", "D3.js", "Python"],
    features: [
      "Network Canvas with semantic-zoom D3 graph and VCR-style stepping.",
      "Activation Lab and CNN Lab featuring a filter factory, receptive fields, and saliency maps.",
      "Optimizer Arena and BatchNorm Tracker for deep model inspection.",
      "Backed by 255 tests to ensure correctness.",
      "Zero faked data — every number is pulled live from PyTorch hooks."
    ],
    impact: [
      "Provides deep, interactive insights into how neural networks learn and make decisions.",
      "Serves as an educational and debugging tool for AI engineers to visualize activations and gradients.",
      "Bridges the gap between complex mathematical models and intuitive visual understanding."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/DeepVision" }
  },
  "clinical-digital-twin": {
    title: "Clinical Digital Twin",
    category: "Data Engineering & RAG",
    tagline: "Patient Risk & Decision-Support System turning 40GB of raw hospital data into a risk-scoring RAG agent.",
    overview: "The Clinical Digital Twin system processes massive amounts of raw hospital data (MIMIC-IV) to construct real-time patient risk profiles. It combines traditional machine learning (XGBoost) with an LLM-powered RAG agent to provide interpretable decision support, clinical guideline retrieval, and counterfactual 'what-if' simulations for doctors.",
    year: "2024",
    stack: ["Pandas", "XGBoost", "SHAP", "Python"],
    features: [
      "Production pipeline processing 546K+ MIMIC-IV hospital stays (40GB+ raw temporal tables) into ML-ready Parquet datasets.",
      "5-Stage Pipeline: Load → Clean → EDA → Feature Engineering → Datasets.",
      "LLM/RAG decision-support agent with SHAP TreeExplainer interpretability and counterfactual 'what-if' simulation.",
      "Clinical guideline retrieval for KDIGO and Surviving Sepsis.",
      "Patient embedding layer for similar-patient retrieval."
    ],
    impact: [
      "Achieved 0.949 AUROC for 24-hour mortality prediction.",
      "Achieved 0.897 AUROC for 6-hour ward deterioration.",
      "Provides actionable, interpretable decision support for clinical environments."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/Clinical-Digital-Twin" }
  },

  "brain-tumor-detection": {
    title: "Brain Tumor Detection",
    category: "Medical Imaging / Explainable AI",
    tagline: "Healthcare AI that shows its work using ResNet50 and Grad-CAM explainability.",
    overview: "This project tackles the critical need for explainability in medical AI. By applying transfer learning to a ResNet50 architecture, it classifies brain tumors into 4 categories with high accuracy. Crucially, it layers Grad-CAM over every prediction, visually highlighting the specific regions of the MRI that influenced the model's decision, building trust with clinicians.",
    year: "2024",
    stack: ["TensorFlow", "ResNet50", "Streamlit", "Python"],
    features: [
      "4-class tumor classification using ResNet50 transfer learning.",
      "Grad-CAM explainability layered on top of every prediction.",
      "Interactive Streamlit dashboard for easy upload and analysis.",
      "Five-notebook pipeline: EDA → Preprocessing → Custom CNN → Transfer Learning → Grad-CAM."
    ],
    impact: [
      "Achieved 90.69% accuracy on tumor classification.",
      "Builds trust in AI diagnosis by visually highlighting the regions the model used.",
      "Demonstrates a complete end-to-end medical imaging pipeline."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/Brain-Tumor-Detection-and-Classification-using-Deep-Learning" }
  },
  "konexea": {
    title: "Konexea (Social-Swap)",
    category: "Social Media App",
    tagline: "A modern social media application built with Flutter, featuring AI-powered interactions and seamless user experience.",
    overview: "Konexea (formerly Social-Swap) is a cutting-edge social media platform that natively integrates generative AI. Built with Flutter and backed by Supabase, it offers a highly responsive feed, real-time messaging, and an integrated marketplace. The standout feature is its deep integration with Google Gemini AI, providing users with an intelligent chat assistant directly within their social workflow.",
    year: "2024",
    stack: ["Flutter", "Supabase", "Google Gemini AI", "Provider"],
    features: [
      "User Authentication with secure login and signup.",
      "Social Feed with dynamic post sharing, liking, and real-time updates.",
      "AI Chat Assistant powered by Google Gemini AI for intelligent interactions.",
      "Real-time Messaging and chat capabilities.",
      "Integrated E-Commerce marketplace."
    ],
    impact: [
      "Provides a seamless, modern social media experience with high performance across platforms.",
      "Integrates cutting-edge AI directly into user workflows.",
      "Demonstrates advanced Flutter architecture with custom Material Design 3 widgets."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/Konexea" }
  },
  "calinga": {
    title: "CALiNGA",
    category: "On-Demand Healthcare",
    tagline: "On-demand healthcare platform with live location tracking and provider matching.",
    overview: "CALiNGA is a modern mobile platform designed to bridge the gap between patients and healthcare providers. It features real-time location tracking via Google Maps API, intelligent provider matching, and secure booking infrastructure, ensuring patients can get the care they need exactly when they need it.",
    year: "2024",
    stack: ["Flutter", "Firebase", "Dart", "Google Maps API"],
    features: [
      "Real-time location tracking for healthcare providers.",
      "Intelligent provider matching algorithm.",
      "Secure backend infrastructure using Firebase.",
      "Cross-platform mobile application."
    ],
    impact: [
      "Connects patients with healthcare providers instantly.",
      "Improves healthcare accessibility through on-demand service delivery.",
      "Streamlines the booking and tracking process for medical professionals."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/calinga" }
  },
  "al-safeena": {
    title: "Al-Safeena",
    category: "HVAC Service Ecosystem",
    tagline: "A dual-role mobile application designed to revolutionize the HVAC service industry, built with Flutter.",
    overview: "Al-Safeena acts as a digital bridge in the HVAC industry, seamlessly connecting consumers who need professional repair and maintenance services with verified, expert technicians ready to provide solutions. It leverages a dual-role MVCS architecture with real-time WebSocket integration to handle booking, tracking, and workforce management simultaneously.",
    year: "2024",
    stack: ["Flutter", "Dart", "Node.js", "MongoDB", "Socket.IO", "Provider"],
    features: [
      "Dual-role system for Consumers (Service Seekers) and Providers (Technicians).",
      "Location-Aware Discovery using integrated GPS technology.",
      "Interactive Booking and real-time tracking.",
      "Workforce Management and Earnings Analytics for technicians.",
      "Layered MVCS Architecture with real-time WebSocket integration."
    ],
    impact: [
      "Bridges the gap between consumers and verified HVAC professionals.",
      "Ensures transparent, efficient, and secure service bookings.",
      "Provides a highly scalable architecture capable of supporting complex real-time operations."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/Al-Safeena" }
  },
  "chw-tb-tracker": {
    title: "CHW TB Tracker",
    category: "Health Data Collection",
    tagline: "Offline-first Flutter app for community health workers to register TB patients, log GPS-tagged visits, and track adherence.",
    overview: "Designed for extreme field conditions, the CHW TB Tracker is a robust data-collection tool for community health workers. It uses an offline-first architecture with Firebase to allow workers to register patients, map households, log GPS-tagged visits, and track pill counts without requiring an active internet connection. Data seamlessly syncs once connectivity is restored.",
    year: "2024",
    stack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Provider"],
    features: [
      "Offline-first architecture using Cloud Firestore local caching for areas with unreliable connectivity.",
      "Patient registration, household mapping, and contact screening workflows.",
      "GPS-tagged home visits with photo capture via Firebase Storage.",
      "Treatment adherence tracking with pill counts and side-effects logs.",
      "Strict audit boundaries logging every mutation."
    ],
    impact: [
      "Empowers community health workers to operate efficiently in low-connectivity areas.",
      "Ensures data integrity and accountability through centralized audit logging.",
      "Streamlines TB contact tracing and treatment monitoring."
    ],
    links: { repo: "https://github.com/Mahad-Ghauri/Community-Health-Worker--User" }
  },
  "joytox": {
    title: "Joytox",
    category: "Next-Gen Social Platform",
    tagline: "A cutting-edge social platform that brings together live streaming, short video reels, and social feed in one seamless experience.",
    overview: "Joytox pushes the boundaries of mobile media applications by unifying three massive feature sets into one cohesive platform: real-time live broadcasting (via Zego Express Engine), a TikTok-style short video reels feed, and a traditional social feed. It includes complex on-device video processing with FFmpeg and end-to-end encrypted messaging.",
    year: "2024",
    stack: ["Flutter", "Firebase", "Zego Express Engine", "GetX", "FFmpeg"],
    features: [
      "Real-time Live Streaming powered by Zego Express Engine.",
      "Video Reels creation and discovery.",
      "Built-in video editor and filters using FFmpeg.",
      "End-to-end encrypted messaging and real-time chat.",
      "Social feed for sharing moments and interacting with the network."
    ],
    impact: [
      "Delivers native performance across multiple platforms.",
      "Provides a comprehensive content creation suite for creators.",
      "Ensures secure and fast real-time communication at scale."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/joytox" }
  },
  "inner-armor": {
    title: "Inner Armor Tactical Coach",
    category: "Mental Resilience Training",
    tagline: "A mobile application providing tactical coaching and mental resilience training based on Andrew D. Wittman's doctrine.",
    overview: "Inner Armor Tactical Coach is a comprehensive mental training platform that combines tactical psychology with practical exercises to help users build resilience, clarity, and tactical decision-making capabilities. The app is built around the concept of 'identity-first coaching' and provides various tactical flows to enhance performance in high-stress situations.",
    year: "2024",
    stack: ["Flutter", "Supabase", "Dart", "Google Fonts"],
    features: [
      "Core Tactical Flows: Identity Protocol, Execution Formula, Morning Armor, Crap Filter.",
      "Subscription tier system (Free, Responder, Warrior) managed via Supabase.",
      "A3 Tracker for performance metrics and reflection logging.",
      "Offline-capable architecture with dark, tactical-themed UI.",
      "Secure authentication and user profile management."
    ],
    impact: [
      "Helps military, first responders, and individuals build mental fortitude and tactical decision-making skills.",
      "Provides structured protocols for high-stress situations.",
      "Demonstrates complex user management and premium content gating."
    ],
    links: { repo: "https://github.com/igmoiiz/inner_armor_tactical_coach" }
  },
  "zeene": {
    title: "ZEENE",
    category: "E-Commerce Platform",
    tagline: "A Curated E-Commerce Platform for Modern Lifestyle Essentials built with Next.js and Supabase.",
    overview: "ZEENE is a production-ready, highly secure full-stack e-commerce application. Utilizing the power of Next.js 16 and Supabase, it delivers a lightning-fast customer storefront alongside a comprehensive admin dashboard. Features include robust Row-Level Security, complex schema validation with Zod, and a highly polished UI powered by Tailwind CSS and Framer Motion.",
    year: "2024",
    stack: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS", "Supabase", "Zod"],
    features: [
      "Dynamic product catalog with categories, filtering, and search.",
      "Persistent shopping cart, wishlists, and product reviews.",
      "Comprehensive Admin Dashboard for full CRUD operations on products and orders.",
      "Secure authentication using Supabase Auth (magic links) and Row-Level Security (RLS).",
      "Optimized performance with Next.js SSR, Image Optimization, and code splitting."
    ],
    impact: [
      "Provides a production-ready, highly secure storefront.",
      "Empowers administrators with rich analytics and management tools.",
      "Delivers a fast, modern shopping experience for curated lifestyle products."
    ],
    links: { repo: "https://github.com/MahateerMuhammad/zeene-hair-oil" }
  }
};
