import ServiceDetail from '@/components/service-detail';

export default function AccountingServices() {
    const data = {
        title: 'Accounting and Bookkeeping Services',
        description: 'Comprehensive financial record-keeping and strategic advisory for businesses in India.',
        overview: 'In today’s fast-paced and compliance-driven business environment, Accounting and Bookkeeping Services are essential for sustainable growth and financial stability. Businesses often find these processes complex and time-consuming, especially when maintaining accurate financial records in real time. Effective bookkeeping and accounting not only ensure compliance but also provide critical insights for informed decision-making. At Tax filing hub, we deliver comprehensive Accounting and Bookkeeping Services for startups, SMEs, and large enterprises. With a strong focus on accuracy, transparency, and regulatory compliance, our expert team ensures that your financial records are maintained efficiently, enabling you to focus on core business operations.',
        features: [
            {
                title: 'Bookkeeping Services',
                description: 'Accurate recording and maintenance of daily financial transactions in a systematic manner.'
            },
            {
                title: 'Financial Statement Preparation',
                description: 'Preparation of Balance Sheets, Profit & Loss Accounts, and cash flow statements for a true view of performance.'
            },
            {
                title: 'AR/AP Management',
                description: 'Efficient tracking of receivables and payables to maintain healthy cash flow and vendor relations.'
            },
            {
                title: 'Bank Reconciliation',
                description: 'Ensuring accuracy between bank statements and financial records to prevent errors and fraud.'
            },
            {
                title: 'Analysis & Forecasting',
                description: 'Data-driven insights and projections to support strategic decision-making and business growth.'
            }
        ],
        faqs: [
            {
                question: 'What is the difference between Accounting and Bookkeeping?',
                answer: 'Bookkeeping is the chronological recording of transactions. Accounting involves interpreting, analyzing, and summarizing that data into financial reports.'
            },
            {
                question: 'Why are these services crucial for my business?',
                answer: 'They ensure statutory compliance, provide financial transparency, and offer critical insights for monitoring performance and expansion.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
