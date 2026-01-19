export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  linkedIn?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Joanna Coleman',
    title: 'Founder & CEO',
    bio: 'Joanna has helped build a successful public accounting firm, as well as been a part of the core management team within many small businesses and startups, both private and public, over her 25+ year career. She excels in both strategic and tactical initiatives which are highly effective in moving companies forward to achieving their goals. Joanna helped raise over $100 million directly for startups in non-dilutive and equity financing rounds. She is well versed in board and investor relations as well as corporate governance.',
    linkedIn: 'https://www.linkedin.com/in/joanna-coleman-cpa-42b20817/',
    image: '/team/joanna-coleman.jpg',
  },
  {
    name: 'Brad Hunt',
    title: 'Controller',
    credentials: 'CPA',
    bio: "Brad has many years of experience in accounting and auditing with a focus on manufacturing and distribution clients as well as commercial service organizations. He has earned a Bachelor's degree in Accounting from Morehead State University and a Master's of Accountancy degree from Northern Kentucky University. Brad strives to provide exceptional service by taking the time to understand his clients' businesses, goals, and needs.",
    linkedIn: 'https://www.linkedin.com/in/brad-hunt-cpa-0bb778260/',
    image: '/team/brad-hunt.jpg',
  },
  {
    name: 'Jennifer Finley',
    title: 'Controller',
    credentials: 'MBA',
    bio: 'Jennifer has a knack for turning complex financial systems into smooth, efficient operations. With over two decades of experience, she has helped organizations of all sizes optimize cash flow, fine-tune reporting processes, and streamline workflows. Backed by an MBA in Accounting and proven experience across corporate, entrepreneurial, and educational settings, she is the trusted partner businesses turn to for results.',
    linkedIn: 'https://www.linkedin.com/in/jennifer-d-finley/',
    image: '/team/jennifer-finley.jpg',
  },
  {
    name: 'Kimberly Kleeberg',
    title: 'Controller',
    bio: 'Kimberly is a highly motivated and experienced professional with 22 years of experience in accounting and finance leadership, as well as operations, inventory and supply chain management. She has worked in various industries ranging from manufacturing, electronic commerce, and food and beverage, to SaaS, Non-Profit, and Consumer Electronics. Kimberly has demonstrated long-term success in partnering with operations leaders to move start-ups experiencing rapid growth towards their goals.',
    linkedIn: 'https://www.linkedin.com/in/kimberlykleeberg/',
    image: '/team/kimberly-kleeberg.jpg',
  },
  {
    name: 'Dana McMillon',
    title: 'Controller & Onboarding Specialist',
    credentials: 'MBA',
    bio: "A seasoned financial leader with over 15 years of experience, Dana specializes in financial reporting, budgeting, compliance, and business operations. She holds a Bachelor's degree in Accounting from Athens State University and an MBA from the University of Alabama in Huntsville. Dana is known for her analytical mindset, attention to detail, and problem-solving abilities.",
    linkedIn: 'https://www.linkedin.com/in/dana-mcmillon-52a0003a/',
    image: '/team/dana-mcmillon.jpg',
  },
  {
    name: 'Joe Schaller',
    title: 'Controller',
    bio: 'Joe has twenty-five plus years as a financial leader and innovator with senior-level accounting and operations experience. Has worked across a variety of industries from healthcare, construction, service, and manufacturing. He is a strong, hands-on, and approachable director who understands the value of being a team-player and a motivator who inspires staff to achieve optimal results.',
    image: '/team/joe-schaller.jpg',
  },
  {
    name: 'Sarah McLaughlin',
    title: 'Controller',
    bio: "Sarah holds a B.S. degree in Business Administration from SUNY Buffalo, as well as a B.S. degree in Accounting and Master's Degree in Professional Accountancy & Audit from Daemen University. Sarah brings experience in financial management, auditing, tax assistance and full-cycle Accounting. She specializes in accounting compliance for start-ups, SaaS Companies and government contractors.",
    image: '/team/sarah-mclaughlin.jpg',
  },
  {
    name: 'Heather Mitchell',
    title: 'Controller',
    credentials: 'CPA',
    bio: 'Heather brings over 20 years of accounting and finance expertise to help startups and growing companies transform financial complexity into clarity and confidence. As a dual-licensed CPA in Georgia and North Carolina, her career spans public accounting, private industry, and Fortune 500 environments. She specializes in controllership, financial reporting, taxation, and building real-time data systems.',
    linkedIn: 'https://www.linkedin.com/in/heather-mitchell-cpa-macc-192945196/',
    image: '/team/heather-mitchell.jpg',
  },
];

export const coreValues = [
  {
    title: 'Integrity',
    description:
      'At our accounting firm, integrity forms the cornerstone of everything we do. We hold ourselves to the highest ethical standards, ensuring transparency, honesty, and accountability in all our interactions.',
  },
  {
    title: 'Trusted Partner',
    description:
      'We strive to be more than just an accounting service provider. As your trusted partner, we commit to deeply understanding your business goals, challenges, and aspirations.',
  },
  {
    title: 'Empathy',
    description:
      'Building a startup can be an emotionally and intellectually taxing journey. We approach our work with empathy, recognizing the unique challenges and pressures you face.',
  },
  {
    title: 'Quality',
    description:
      'Quality is non-negotiable in our firm. We are dedicated to delivering excellence in every service we provide, from basic bookkeeping to complex financial analysis.',
  },
  {
    title: 'Collaboration',
    description:
      'We believe in the power of collaboration to achieve mutual success. As your accounting partner, we view ourselves as an extension of your team.',
  },
];
