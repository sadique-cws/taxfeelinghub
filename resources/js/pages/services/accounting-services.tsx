import ServiceDetail from '@/components/service-detail';

export default function AccountingServices() {
    const data = {
        title: 'Accounting and Bookkeeping Services',
        description: 'Comprehensive financial record-keeping and strategic advisory for businesses in Hyderabad, Purnea and across India.',
        overview: (
            <div className="space-y-8">
                <p>
                    At Tax filing hub, we deliver comprehensive Accounting and Bookkeeping Services in Hyderabad for startups, SMEs, and large enterprises. With a strong focus on accuracy, transparency, and regulatory compliance, our expert team ensures that your financial records are maintained efficiently, enabling you to focus on core business operations.
                </p>

                <div>
                    <h3 className="text-primary font-bold text-xl mb-4">Why Choose Our Accounting and Bookkeeping Services?</h3>
                    <p>
                        Our experienced professionals bring deep industry knowledge and a systematic approach to managing financial data. We help businesses streamline their accounting processes, minimize errors, and maintain full compliance with applicable laws and regulations.
                    </p>
                </div>

                <div>
                    <h3 className="text-primary font-bold text-xl mb-4">Importance of Accounting and Bookkeeping</h3>
                    <p>Proper accounting and bookkeeping are crucial for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Maintaining financial transparency</li>
                        <li>Ensuring statutory and tax compliance</li>
                        <li>Monitoring business performance</li>
                        <li>Supporting business growth and expansion</li>
                    </ul>
                </div>
            </div>
        ),
        extraContent: (
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -mr-32 -mt-32" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                    <div>
                        <div className="gold-rule mb-6" />
                        <h3 className="text-primary font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                            Accounting & Bookkeeping in <span className="text-gold italic">Purnea, Bihar</span>
                        </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        As a trusted Accounting and Bookkeeping Company in Purnia Bihar, Tax filing hub is committed to delivering high-quality financial services tailored to your business needs. Our goal is to provide reliable, scalable, and technology-driven solutions that enhance financial efficiency and compliance.
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Bookkeeping Services',
                description: 'Accurate recording and maintenance of daily financial transactions.'
            },
            {
                title: 'Financial Statement Preparation',
                description: 'Preparation of Balance Sheets, Profit & Loss Accounts, and cash flow statements.'
            },
            {
                title: 'AR/AP Management',
                description: 'Efficient tracking of receivables and payables to maintain healthy cash flow.'
            },
            {
                title: 'Bank Reconciliation Services',
                description: 'Ensuring accuracy between bank statements and financial records.'
            },
            {
                title: 'Financial Analysis & Forecasting',
                description: 'Data-driven insights and projections to support strategic decision-making.'
            }
        ],
        faqs: [
            {
                question: 'What is the difference between Accounting and Bookkeeping?',
                answer: 'Bookkeeping is the process of recording, organizing, and maintaining all financial transactions in a systematic and chronological manner. It forms the foundation of the accounting process. Accounting involves interpreting, analyzing, summarizing, and reporting financial data. It converts recorded transactions into meaningful financial statements that reflect the financial position and performance of a business over a specific period.'
             }
        ]
    };

    return <ServiceDetail {...data} />;
}
