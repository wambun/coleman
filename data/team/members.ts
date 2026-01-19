export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  fullBio?: string;
  highlights?: string[];
  linkedIn?: string;
  image?: string;
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Joanna Coleman',
    title: 'Founder & CEO',
    bio: 'Joanna founded Jay Coleman Consulting with a vision to provide startups with the financial expertise they need to scale confidently. With over 25 years of experience in accounting and finance leadership, she has become a trusted advisor to founders navigating the complexities of startup growth.',
    fullBio: `Joanna founded Jay Coleman Consulting with a vision to provide startups with the financial expertise they need to scale confidently. With over 25 years of experience in accounting and finance leadership, she has become a trusted advisor to founders navigating the complexities of startup growth.

Throughout her career, Joanna has helped build a successful public accounting firm and served as part of the core management team within many small businesses and startups, both private and public. She excels in both strategic and tactical initiatives, bringing a unique combination of big-picture thinking and hands-on execution that moves companies forward toward achieving their goals.

Joanna has directly helped raise over $100 million for startups through non-dilutive and equity financing rounds. Her deep understanding of investor expectations and board dynamics makes her an invaluable partner during fundraising and beyond. She is well-versed in board and investor relations, corporate governance, and the financial storytelling that resonates with stakeholders.

Her approach combines rigorous financial discipline with genuine empathy for the challenges founders face. Joanna believes that strong financial foundations don't just support growth—they accelerate it. Under her leadership, Jay Coleman Consulting has helped dozens of startups transform their financial operations from a pain point into a competitive advantage.`,
    highlights: [
      'Raised $100M+ for startups in non-dilutive and equity financing',
      '25+ years of accounting and finance leadership',
      'Expert in board relations and corporate governance',
      'Built and scaled multiple successful accounting practices',
    ],
    linkedIn: 'https://www.linkedin.com/in/joanna-coleman-cpa-42b20817/',
    image: '/team/joanna-coleman.jpg',
    featured: true,
  },
  {
    name: 'Brad Hunt',
    title: 'Controller',
    credentials: 'CPA',
    bio: "Brad brings deep expertise in accounting and auditing, with a particular focus on manufacturing, distribution, and commercial service organizations. His methodical approach and commitment to understanding each client's unique business needs ensures exceptional service delivery.",
    fullBio: `Brad brings deep expertise in accounting and auditing, with a particular focus on manufacturing, distribution, and commercial service organizations. His methodical approach and commitment to understanding each client's unique business needs ensures exceptional service delivery.

He earned his Bachelor's degree in Accounting from Morehead State University and a Master's of Accountancy from Northern Kentucky University. This strong academic foundation, combined with years of hands-on experience, gives Brad the technical depth to handle complex accounting challenges while maintaining the practical perspective needed to support growing businesses.

Brad believes that truly exceptional service comes from taking the time to understand each client's business, goals, and needs. He works closely with founders and leadership teams to ensure financial operations align with business objectives, providing insights that go beyond the numbers.`,
    linkedIn: 'https://www.linkedin.com/in/brad-hunt-cpa-0bb778260/',
    image: '/team/brad-hunt.jpg',
  },
  {
    name: 'Jennifer Finley',
    title: 'Controller',
    credentials: 'MBA',
    bio: 'Jennifer has a talent for turning complex financial systems into smooth, efficient operations. With over two decades of experience, she has helped organizations of all sizes optimize cash flow, streamline reporting, and build scalable financial processes.',
    fullBio: `Jennifer has a talent for turning complex financial systems into smooth, efficient operations. With over two decades of experience, she has helped organizations of all sizes optimize cash flow, streamline reporting, and build scalable financial processes.

Backed by an MBA in Accounting and proven experience across corporate, entrepreneurial, and educational settings, Jennifer brings a versatile skill set to every engagement. She understands that startups need financial systems that can grow with them, and she specializes in building the infrastructure that supports sustainable scale.

Jennifer is the trusted partner businesses turn to for results. Her ability to fine-tune reporting processes and streamline workflows has helped numerous companies transform their financial operations from a bottleneck into an accelerator for growth.`,
    linkedIn: 'https://www.linkedin.com/in/jennifer-d-finley/',
    image: '/team/jennifer-finley.jpg',
  },
  {
    name: 'Kimberly Kleeberg',
    title: 'Controller',
    bio: 'Kimberly brings 22 years of experience spanning accounting, finance leadership, operations, inventory, and supply chain management. Her cross-functional expertise makes her particularly valuable for startups experiencing rapid growth.',
    fullBio: `Kimberly brings 22 years of experience spanning accounting, finance leadership, operations, inventory, and supply chain management. Her cross-functional expertise makes her particularly valuable for startups experiencing rapid growth.

She has worked across diverse industries including manufacturing, e-commerce, food and beverage, SaaS, non-profit, and consumer electronics. This breadth of experience gives her a unique perspective on the operational and financial challenges that different types of businesses face.

Kimberly has demonstrated long-term success in partnering with operations leaders to move startups through periods of rapid growth. She understands that scaling a company requires more than just tracking numbers—it requires building systems and processes that can handle increasing complexity while maintaining accuracy and insight.`,
    linkedIn: 'https://www.linkedin.com/in/kimberlykleeberg/',
    image: '/team/kimberly-kleeberg.jpg',
  },
  {
    name: 'Dana McMillon',
    title: 'Controller & Onboarding Specialist',
    credentials: 'MBA',
    bio: 'Dana is a seasoned financial leader with over 15 years of experience in financial reporting, budgeting, compliance, and business operations. Her dual role as Controller and Onboarding Specialist ensures new clients transition smoothly.',
    fullBio: `Dana is a seasoned financial leader with over 15 years of experience in financial reporting, budgeting, compliance, and business operations. Her dual role as Controller and Onboarding Specialist ensures new clients transition smoothly into working with Jay Coleman Consulting.

She holds a Bachelor's degree in Accounting from Athens State University and an MBA from the University of Alabama in Huntsville. This combination of academic credentials and real-world experience gives Dana the foundation to handle complex financial challenges with confidence.

Dana is known for her analytical mindset, attention to detail, and problem-solving abilities. She approaches each engagement with a focus on understanding the client's current state and building a clear path to where they want to be. Her onboarding expertise ensures that new clients experience a seamless transition and quickly see the value of professional financial management.`,
    linkedIn: 'https://www.linkedin.com/in/dana-mcmillon-52a0003a/',
    image: '/team/dana-mcmillon.jpg',
  },
  {
    name: 'Joe Schaller',
    title: 'Controller',
    bio: 'Joe brings 25+ years as a financial leader and innovator with senior-level accounting and operations experience. His hands-on, approachable style makes him an effective team player and motivator.',
    fullBio: `Joe brings 25+ years as a financial leader and innovator with senior-level accounting and operations experience. His hands-on, approachable style makes him an effective team player and motivator who inspires staff to achieve optimal results.

He has worked across a variety of industries including healthcare, construction, service, and manufacturing. This diverse background gives Joe the ability to quickly understand new business models and identify the financial metrics that matter most for each company's success.

Joe is a strong, hands-on director who understands the value of being accessible and collaborative. He believes that the best financial insights come from being deeply engaged with the business, not sitting in an ivory tower. His leadership style fosters open communication and builds trust with the teams he works with.`,
    image: '/team/joe-schaller.jpg',
  },
  {
    name: 'Sarah McLaughlin',
    title: 'Controller',
    bio: 'Sarah combines strong academic credentials with practical experience in financial management, auditing, and full-cycle accounting. She specializes in accounting compliance for startups, SaaS companies, and government contractors.',
    fullBio: `Sarah combines strong academic credentials with practical experience in financial management, auditing, and full-cycle accounting. She specializes in accounting compliance for startups, SaaS companies, and government contractors.

She holds a B.S. degree in Business Administration from SUNY Buffalo, a B.S. degree in Accounting from Daemen University, and a Master's Degree in Professional Accountancy & Audit, also from Daemen University. This extensive education provides Sarah with deep technical knowledge across all areas of accounting and finance.

Sarah brings experience in financial management, auditing, tax assistance, and full-cycle accounting. Her specialization in compliance for startups, SaaS companies, and government contractors makes her particularly valuable for clients operating in regulated environments or pursuing government contracts.`,
    image: '/team/sarah-mclaughlin.jpg',
  },
  {
    name: 'Heather Mitchell',
    title: 'Controller',
    credentials: 'CPA',
    bio: 'Heather brings over 20 years of accounting and finance expertise, helping startups transform financial complexity into clarity and confidence. As a dual-licensed CPA, she specializes in controllership and building real-time data systems.',
    fullBio: `Heather brings over 20 years of accounting and finance expertise, helping startups and growing companies transform financial complexity into clarity and confidence. As a dual-licensed CPA in Georgia and North Carolina, she brings credibility and deep technical knowledge to every engagement.

Her career spans public accounting, private industry, and Fortune 500 environments, giving her a comprehensive understanding of financial operations at every scale. This breadth of experience allows Heather to bring best practices from larger organizations while adapting them to the realities of startup life.

Heather specializes in controllership, financial reporting, taxation, and building real-time data systems. She understands that modern startups need financial visibility that keeps pace with rapid decision-making, and she excels at creating the systems and processes that provide it.`,
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
