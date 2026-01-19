export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  companyUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jay Coleman Consulting has been an invaluable asset to Blendid. Their team seamlessly adapted to our growth trajectory, providing essential support as we onboarded new partners and conducted thorough business audits for fundraising purposes. Jay Coleman Consulting is truly a trusted partner of ours.",
    author: 'Vipin Jain',
    title: 'Co-Founder & CEO',
    company: 'Blendid',
    companyUrl: 'https://www.blendid.com/',
  },
  {
    quote:
      "I'm truly impressed by the responsiveness, expertise, and collaborative approach of Jay Coleman Consulting. Their guidance as a trusted partner has been invaluable in navigating complex financial matters. I highly recommend them to any startup seeking professional accounting support.",
    author: 'Leo Grady',
    title: 'Founder & CEO',
    company: 'Jona',
    companyUrl: 'https://jona.health/',
  },
  {
    quote:
      "Partnering with Jay Coleman Consulting is proving to be a great decision for our startup. Their unmatched expertise and dedication to excellence have empowered us to focus on our business. I highly recommend them to any startup seeking top-notch accounting support.",
    author: 'Michael Tafuro',
    title: 'COO',
    company: 'Intelex',
    companyUrl: 'https://www.intelexltd.com/',
  },
  {
    quote:
      "We've absolutely loved working with the team at Jay Coleman! They are professional and accessible, and the team is highly experienced and effective at covering our accounting needs. I would strongly recommend Jay Coleman to anyone considering their services!",
    author: 'Kevin Hedrick',
    title: 'Business Operations',
    company: 'Stytch',
    companyUrl: 'https://stytch.com/',
  },
  {
    quote:
      "Jay Coleman Consulting has provided our fast-growing cleantech start-up with an agile combination of in-depth accounting expertise, responsiveness, and on-time-on-point professionalism. Big-name accounting firms just didn't deliver as well.",
    author: 'Todd Brix',
    title: 'Co-Founder & CEO',
    company: 'OCO',
    companyUrl: 'https://ocochem.com/',
  },
  {
    quote:
      "Jay Coleman Consulting has exceeded our expectations as a trusted partner in managing our Financial and HR needs. The responsiveness is unparalleled, always providing timely and insightful advice. We highly value their professionalism.",
    author: 'Pepe Davis',
    title: 'President',
    company: 'Ziteo',
  },
];
