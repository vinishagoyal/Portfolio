import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vinisha Goyal",
  initials: "VG",
  url: "https://vinisha.vercel.app",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  description:
    "Product management candidate with experience in research, PRDs, MVP scoping, analytics, and AI-assisted rapid prototyping.",
  summary:
    "Product management candidate who turns TAM and competitor teardowns into JTBD, PRDs, and measurable MVP scope. At Filo, designed SAT/ACT taxonomies and LLM eval rubrics; at Numismatics Academy, shipped 12 insight reports and a 1,000+ item catalog (+25% tracking accuracy) with growth tests (22% open, 5% conversion). Hands-on with SQL, Advanced Excel, Jira, Git/GitHub, Vercel, Supabase; comfortable with prompt engineering and AI-assisted rapid prototyping.",
  avatarUrl: "/me.png",
  skills: [
    // Product Management & Strategy
    "Requirements Gathering",
    "Stakeholder Management",
    "Product Strategy",
    "User Story Writing",
    "Market Research",
    "Competitive Analysis",
    "KPI Definition & Tracking",
    "A/B Testing",
    "Cross-functional Collaboration",
    "Product Roadmapping",
    
    // AI & Technology
    "Generative AI",
    "RAG (Retrieval Augmented Generation)",
    "Agentic AI",
    "LLM Integration",
    "AI Product Strategy",
    
    // Data & Analytics
    "Research",
    "Data Analysis",
    "Data Visualization",
    "Database Management",
    "Data Storytelling",
    "Business Intelligence",
    "Advanced Excel",
    "SQL",
    "Power BI",
    "E-Views",
    "R",
    "Python",
    "Social Analytics",
    
    // Technical & Tools
    "Git",
    "GitHub",
    "Jira",
    "GPT Agents",
    "Vercel",
    "Supabase",
    "Cline",
    "Rapid Prototyping",
    "Gen AI Prompt Engineering",
    "Documentation (BRD/PRD)",
    "Microsoft Powerpoint",
    
    // Soft Skills
    "Ownership",
    "Problem Solving",
    "Project Management",
    "Adaptability",
    "Creativity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mailtovinishagoyal@gmail.com",
    tel: "+91 9340873313",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vinishagoyal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vinisha-goyal",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vinisha_goyal",
        icon: Icons.x,

        navbar: true,
      },
      Gmail: {
        name: "Gmail",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=mailtovinishagoyal@gmail.com",
        icon: Icons.gmail,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mailtovinishagoyal@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Filo",
      href: "",
      badges: [],
      location: "Gurugram",
      title: "Product Research - Internship",
      logoUrl: "/filo.svg",
      start: "Sep 2025",
      end: "Apr 2026",
      description:
        "Led pre-launch SAT/ACT research, including market sizing, competitor teardowns, and scope recommendations. Turned research into problem statements, user/job stories, and acceptance criteria for v1. Built Excel trackers with tables, pivots, and lookups to standardize exam/curriculum data and speed decision docs and backlog grooming. Created LLM evaluation rubrics for accuracy, reasoning, hallucinations, and tone; logged failure modes with reproducible test cases and verified fixes. Ran student surveys, interviews, and usability checks on new SAT/ACT flows, captured top friction points, and prioritized fixes with product and content teams to improve first-time task completion and clarity.",
    },
    {
      company: "Numismatics Academy",
      href: "",
      badges: [],
      location: "Gurugram",
      title: "Marketing Research Analyst: Product - Internship",
      logoUrl: "/NAC.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Produced 12 weekly insight reports from primary and secondary research on the education market, surfacing 3 high-impact differentiation themes. Ran competitor teardowns across 5 institutions and converted findings into MVP feature hypotheses, JTBD, and success metrics. Designed and maintained a 1,000+ rare-currency catalog schema, improving inventory tracking efficiency by 25% and enabling BI dashboards for trend analysis. Operated growth experiments across email and social, achieving a 22% email open rate, 5% conversion rate, and 40% engagement lift across 3 platforms. Synthesized research into prioritized roadmap proposals and stakeholder briefs to guide product market-fit experiments.",
    },
  ],
  education: [
    {
      school: "Institute of Technology and Management",
      href: "",
      degree: "Master of Business Administration",
      logoUrl: "/ITM.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Jiwaji University",
      href: "",
      degree: "Bachelor of Commerce",
      logoUrl: "/Jiwaji_University_logo.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Carmel Convent School",
      href: "",
      degree: "Standard - XII, CBSE - 70.8%",
      logoUrl: "/CARMEL2023NEWLOGO.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "Carmel Convent School",
      href: "",
      degree: "Standard - X, CBSE - 85.5%",
      logoUrl: "/CARMEL2023NEWLOGO.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Personal Website / Portfolio",
      href: "https://vinisha.vercel.app/",
      dates: "September 2025",
      active: true,
      description:
        "Built and deployed my portfolio site using modern development tools: wrote code locally, version-controlled via Git/GitHub, and shipped live using Vercel. Demonstrates end-to-end project ownership from documentation to publishing a clean, user-friendly web experience.",
      technologies: [
        "Vibe Coding",
        "Vercel",
        "Git",
        "GitHub",
        "Cline",
        "AI-assisted Development",
      ],
      links: [
        {
          type: "Live Site",
          href: "https://vinisha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/vinishagoyal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Health360 AI Customer Chatbot",
      href: "/projects/health360-chatbot",
      dates: "September 2025",
      active: true,
      description:
        "Conceptualized and delivered an AI-powered customer support solution from ideation to production for Health360 Health Supplements. Conducted market research, stakeholder interviews, and requirements gathering. Designed product architecture, managed development lifecycle, and implemented intelligent query routing with real-time analytics. Achieved 40-60% deflection rate and <2min response times while ensuring regulatory compliance for health supplement industry.",
      technologies: [
        "Product Management",
        "AI Strategy",
        "Generative AI",
        "RAG",
        "Stakeholder Management",
        "Requirements Gathering",
        "Analytics",
      ],
      links: [
        {
          type: "Live App",
          href: "https://health360-ai-customer-chatbot.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/vinishagoyal/Health360_AI_customer_chatbot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo Video",
          href: "https://youtu.be/equGpnMKYx8?si=mUVd0p-WWrTROgU5",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "BRD Document",
          href: "https://docs.google.com/document/d/1z1zIDr27pgcMZdyzygvX54X5GfciW0VLgDAIVlAFKkA/edit?usp=sharing",
          icon: <Icons.googleDocs className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/equGpnMKYx8?si=mUVd0p-WWrTROgU5",
    },
    {
      title: "Dividend Policy Analysis",
      href: "",
      dates: "March 2024",
      active: false,
      description:
        "Performed a comprehensive financial analysis of MRF's dividend policy, including historical data, industry comparisons, and qualitative factors. Calculated dividend payout ratios, yields, and growth rates to assess the company's dividend performance. Investigated the drivers behind MRF's dividend policy and their potential to enhance shareholder value.",
      technologies: [
        "Financial Analysis",
        "Dividend Policy Evaluation",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Sales Dashboard",
      href: "http://bit.ly/3IiFERT",
      dates: "November 2023",
      active: false,
      description:
        "Leveraged advanced data analytics to drive sales strategy, evidenced by dissecting trends across categories, regions, and customer segments from a comprehensive sales dashboard. Demonstrated expertise in data visualization, creating an actionable sales dashboard that tracked performance metrics, forecasted sales, and highlighted growth opportunities. Utilized various chart types (bar charts, line graphs, map visualizations, and pie charts) to effectively communicate complex sales data, demonstrating strong data visualization skills.",
      technologies: [
        "Data Visualization",
        "Sales Data Analysis",
        "Forecasting",
      ],
      links: [
        {
          type: "Dashboard",
          href: "http://bit.ly/3IiFERT",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Road Accident Dashboard",
      href: "http://bit.ly/3KxRhF5",
      dates: "October 2023",
      active: false,
      description:
        "Analyzed and visualized casualties by various factors, including road surface, light condition, current year vs previous year casualties, and locations. Provide the facility to navigate from dashboard to data analysis sheet and vice-versa. Used slicer and timeline to determine casualties by various factors, display casualties by different types of charts, and provide the facility to drop a mail to the creator.",
      technologies: [
        "Data Visualization",
        "Communication Integration",
      ],
      links: [
        {
          type: "Dashboard",
          href: "http://bit.ly/3KxRhF5",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "General Store Analysis Dashboard",
      href: "",
      dates: "September 2023",
      active: false,
      description:
        "Created a comprehensive dashboard to analyze and visualize critical business trends, such as order count, status, sales distribution by age group and gender, and top-selling states. Implemented slicers, enabling users to filter data by various factors like channel and gender to gain valuable insights into business trends.",
      technologies: [
        "Business Metric Analysis",
        "Interactive Reporting",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  achievements: [
    {
      title: "Excel Certificate",
      issuer: "Code Basics",
      date: "",
      description: "Achieved Excel certificate from Code Basics",
      logoUrl: "",
    },
    {
      title: "SQL Certificate",
      issuer: "Data Camp",
      date: "",
      description: "Achieved a SQL certificate from Data Camp",
      logoUrl: "/imageDC.png",
    },
    {
      title: "Chat GPT Certificate",
      issuer: "Data Camp",
      date: "",
      description: "Achieved a Chat GPT certificate from Data Camp",
      logoUrl: "/imageDC.png",
    },
    {
      title: "Introduction to R Certificate",
      issuer: "Data Camp",
      date: "",
      description: "Achieved an introduction to R certificate from Data Camp",
      logoUrl: "/imageDC.png",
    },
    {
      title: "CA Foundation",
      issuer: "",
      date: "",
      description: "Cleared CA Foundation",
      logoUrl: "/CA.webp",
    },
  ],
} as const;
