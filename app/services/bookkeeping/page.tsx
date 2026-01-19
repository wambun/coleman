import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  PieChart,
  Receipt,
  ClipboardCheck,
  DollarSign,
  Search,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bookkeeping & Accounting',
  description:
    'Cloud-based bookkeeping and accounting services for startups. From accounts payable to financial reporting, we scale with your growth.',
};

const subServices = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    icon: FileText,
    description:
      "We'll setup your accounting operations and optimize your bookkeeping from the start.",
    features: [
      {
        title: 'Accounts Payable',
        description:
          'We implement cloud-based tools and manage best practices to ensure your bills are paid on-time.',
      },
      {
        title: 'Collections / Accounts Receivable',
        description:
          "We reduce the amount of time you have to spend collecting from your customers. You'll see a reduction in late payments.",
      },
      {
        title: 'Bank Accounts',
        description:
          'We help manage your bank accounts by ensuring balances are accurate and perform reconciliations to internal accounting systems.',
      },
      {
        title: 'Credit Cards & ACH',
        description:
          'We implement online feeds to automatically import credit card and ACH payment information directly into your accounting system.',
      },
      {
        title: 'Online Expense Reporting',
        description:
          'We implement cloud-based expense reporting solutions that automatically transfer expenses into your accounting system.',
      },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting & Planning',
    icon: PieChart,
    description:
      'Our experts will guide you through your financial reports using cloud-based tools empowering you to make future business decisions.',
    features: [
      {
        title: 'Financial Reporting',
        description:
          'Monthly, quarterly, and annual reports including Profit & Loss, Balance Sheet, and Statement of Cash Flows.',
      },
      {
        title: 'Financial Planning & Analysis',
        description:
          'Financial modeling, FP&A analysis, KPI and metric tracking tailored to your business needs.',
      },
    ],
  },
  {
    id: 'tax-prep',
    title: 'Tax Prep',
    icon: Receipt,
    description:
      "We've got the experience startups need to prepare you for tax filings. W2s, 1099s and more.",
    features: [
      {
        title: 'Complete Tax Prep',
        description:
          'Sales & use taxes, property taxes, franchise taxes, federal and state income tax, R&D tax credit, 1099s, and W2s.',
      },
    ],
  },
  {
    id: 'audit-prep',
    title: 'Audit Prep',
    icon: ClipboardCheck,
    description:
      'From financials to audits - we have the experience to plan and prepare for successful outcomes.',
    features: [
      {
        title: 'Audit Preparation',
        description:
          'Financial statements, trial balances, tax returns, employment agreements, and all needed documentation.',
      },
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: DollarSign,
    description:
      "We're here to help you implement the right systems and processes for paying your employees and managing benefits.",
    features: [
      {
        title: 'Payroll Services',
        description:
          'Time & attendance, payroll policies, data entry, R&D tax credits against payroll, benefits, and tax reports.',
      },
    ],
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    icon: Search,
    description:
      'For you or your investor, we help provide the transparency and data to confirm business performance.',
    features: [
      {
        title: 'Due Diligence Services',
        description:
          'Monthly financials, ARR analysis, inventory, deferred revenue, cash runway, burn rate, variance reports, and compliance review.',
      },
    ],
  },
];

export default function BookkeepingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-ui mb-6 transition-colors hover:opacity-80"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Services
            </Link>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Bookkeeping & Accounting
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              You have big ambitions for growth - we&apos;ll keep your books and
              financials in sync to help you scale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#f68212',
                color: '#ffffff',
              }}
            >
              Request Information
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-16">
            {subServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
                  >
                    <service.icon
                      className="h-7 w-7"
                      style={{ color: '#3498db' }}
                    />
                  </div>
                  <div>
                    <h2
                      className="font-display text-2xl lg:text-3xl font-light mb-2"
                      style={{ color: '#0d1c29' }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-lg"
                      style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 lg:ml-20">
                  {service.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-6 rounded-xl"
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <h3
                        className="font-ui font-semibold mb-2"
                        style={{ color: '#0d1c29' }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#ffffff' }}
          >
            Ready to Streamline Your Finances?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Let us handle your bookkeeping so you can focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#f68212',
              color: '#ffffff',
            }}
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
