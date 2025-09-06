import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vinisha Goyal",
  initials: "VG",
  url: "http://localhost:3000",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  description:
    "Marketing Research Analyst with expertise in data analysis and visualization.",
  summary:
    "I am a Marketing Research Analyst with experience in analyzing market trends, creating data visualizations, and managing social media campaigns. I have a strong background in business intelligence and financial analysis, with a Master of Business Administration degree in progress and a Bachelor of Commerce already completed.",
  avatarUrl: "/me.png",
  skills: [
    "Research",
    "Data Analysis",
    "Data Visualization",
    "Database Management",
    "Business Intelligence",
    "Advance Excel",
    "SQL",
    "Power BI",
    "GitHub",
    "E-Views",
    "R",
    "Microsoft Powerpoint",
    "Social Analytics",
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
      company: "Numismatics Academy",
      href: "",
      badges: [],
      location: "Gurugram",
      title: "Marketing Research Analyst",
      logoUrl: "/NAC.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Analyzed market trends in the education industry, producing 12 weekly reports that informed strategic decisions. Increased social media engagement by 40% across 3 platforms through targeted content creation and campaign management. Assisted in organizing a currency exhibition, attracting over 1,500 attendees and generating 75+ qualified leads. Conducted competitor analysis of 5 major numismatic institutions, identifying 3 key areas for differentiation. Created and managed a database of 1,000+ rare currencies, improving inventory tracking efficiency by 25%. Developed and implemented an email marketing campaign that achieved a 22% open rate and 5% conversion rate.",
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
      degree: "Standard - XII, CBSE",
      logoUrl: "/CARMEL2023NEWLOGO.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "Carmel Convent School",
      href: "",
      degree: "Standard - X, CBSE",
      logoUrl: "/CARMEL2023NEWLOGO.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Sales Dashboard",
      href: "",
      dates: "November 2023",
      active: false,
      description:
        "Leveraged advanced data analytics to drive sales strategy, evidenced by dissecting trends across categories, regions, and customer segments from a comprehensive sales dashboard. Demonstrated expertise in data visualization, creating an actionable sales dashboard that tracked performance metrics, forecasted sales, and highlighted growth opportunities. Utilized various chart types (bar charts, line graphs, map visualizations, and pie charts) to effectively communicate complex sales data, demonstrating strong data visualization skills.",
      technologies: [
        "Data Visualization",
        "Sales Data Analysis",
        "Forecasting",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Road Accident Dashboard",
      href: "",
      dates: "October 2023",
      active: false,
      description:
        "Analyzed and visualized casualties by various factors, including road surface, light condition, current year vs previous year casualties, and locations. Provide the facility to navigate from dashboard to data analysis sheet and vice-versa. Used slicer and timeline to determine casualties by various factors, display casualties by different types of charts, and provide the facility to drop a mail to the creator.",
      technologies: [
        "Data Visualization",
        "Communication Integration",
      ],
      links: [],
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
