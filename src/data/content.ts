export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Article {
  title: string;
  tag: string;
  url: string;
}

export interface Stat {
  value: string;
}

export interface Identity {
  name: string;
  role: string;
  sub: string;
  location: string;
  github: string;
  medium: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
}

export const identity: Identity = {
  name: "Joseph Bright",
  role: "DevOps & AI Automation Engineer",
  sub: "I build intelligent, scalable systems that bridge DevOps, Cloud infrastructure, and AI/ML solutions with a secure foresight",
  location: "Lagos, Nigeria • Open to remote (global)",
  github: "https://github.com/Joey665",
  medium: "https://medium.com/@josephbright342",
  linkedin: "https://www.linkedin.com/in/joseph-bright-039079226",
  email: "josephbright342@gmail.com",
  // Drop your resume PDF at public/resume.pdf (filename must match exactly) and this will work.
  resumeUrl: "/resume.pdf",
};

export const stats: Stat[] = [
  { value: "13+ technical articles published" },
  { value: "4+ security & automation tools shipped" },
  { value: "Real-time CVE scanning via OSV API" },
  { value: "CI/CD: GitHub → Render → Streamlit Cloud" },
];

export const projects: Project[] = [
  {
    title: "CyberSentinel — Supply-Chain CVE Scanner",
    description:
      "Real-time NPM dependency risk auditor. Async FastAPI backend queries Google's live OSV database, scores packages 0–100, and a Streamlit + Plotly dashboard renders color-coded threat intel. Deploys automatically on every git push.",
    tags: ["Python", "FastAPI", "Streamlit", "Plotly", "OSV API", "CI/CD"],
    liveUrl: "https://cybersentinel-live.streamlit.app",
    repoUrl: "https://github.com/Joey665/cybersentinel",
  },
  {
    title: "CyberHound v1.0 — AI Intrusion Detection System",
    description:
      "Real-time IDS that sniffs network traffic with Scapy, classifies DoS / port-scan attacks with ML, and visualizes threats on a live web dashboard.",
    tags: ["Python", "Scapy", "Scikit-learn", "Flask", "Elasticsearch"],
    repoUrl: "https://github.com/Joey665/Cyber-Hound-v1.0",
  },
  {
    title: "Phishing Triage Automation — SOC Workflow",
    description:
      "Automated inbound phishing triage using n8n + VirusTotal intelligence + custom heuristics, with Slack alerts mapped to MITRE ATT&CK. Cuts SOC alert fatigue and stops BEC before the endpoint.",
    tags: ["n8n", "VirusTotal API", "Slack API", "MITRE ATT&CK"],
  },
  {
    title: "OSINT Intelligence Pipeline — Cloud Scraping",
    description:
      "Cloud-hosted OSINT scraping pipeline on an Azure Linux VM with proxy rotation and bot-protection evasion; cleans and structures data for analytics.",
    tags: ["Python", "Azure", "Proxies", "OSINT", "Automation"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Security & DevSecOps",
    skills: [
      "Threat Detection",
      "SIEM/SOAR",
      "MITRE ATT&CK",
      "Threat Hunting",
      "Supply-Chain Security",
      "CVE/OSV Analysis",
      "Incident Response",
      "VirusTotal",
    ],
  },
  {
    title: "Data & AI/ML",
    skills: [
      "Scikit-learn",
      "Data Analytics",
      "Data Visualization (Plotly)",
      "Statistical Analysis",
      "SQL",
      "Fraud Detection",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Azure",
      "Docker",
      "Linux",
      "CI/CD",
      "GitHub Actions",
      "Render",
      "Streamlit Cloud",
      "Terraform (learning)",
    ],
  },
  {
    title: "Languages & Web",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "React",
      "FastAPI",
      "Flask",
      "Tailwind CSS",
    ],
  },
];

export const articles: Article[] = [
  {
    title: "I Built an npm Supply Chain Detection Lab and the Reality is Uncomfortable",
    tag: "Supply Chain",
    url: "https://medium.com/@josephbright342/i-built-an-npm-supply-chain-detection-lab-and-the-reality-is-uncomfortable-97094edc2840",
  },
  {
    title: "North Korea Poisoned npm. Then Someone Published the Playbook.",
    tag: "Threat Intel",
    url: "https://medium.com/@josephbright342/north-korea-poisoned-npm-then-someone-published-the-playbook-551f0ebfd3b4",
  },
  {
    title: "Inside the Nx Console Supply Chain Attack",
    tag: "Malware Analysis",
    url: "https://medium.com/@josephbright342/poisoned-code-how-a-malicious-vs-code-extension-breached-githubs-internal-repositories-and-why-8811ef6fed03",
  },
  {
    title: "I Interviewed the Alleged Hacker Behind the EFCC Breach",
    tag: "OSINT Report",
    url: "https://medium.com/@josephbright342/i-interviewed-the-alleged-hacker-behind-the-efcc-breach-heres-what-nigeria-must-learn-now-0999d424f2f4",
  },
  {
    title: "How Supply Chain Attacks Became Cybersecurity's Biggest Threat",
    tag: "Research",
    url: "https://medium.com/@josephbright342/inside-the-supply-chain-attack-epidemic-from-trusting-trust-to-the-nx-console-github-breach-3c27d31dfe13",
  },
  {
    title: "Resilience Beyond the Crash: Business Continuity & Disaster Recovery",
    tag: "BCDR",
    url: "https://medium.com/@josephbright342/resilience-beyond-the-crash-a-guide-to-business-continuity-disaster-recovery-5e15ed5a14d7",
  },
];
