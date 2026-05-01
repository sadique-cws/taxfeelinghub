import ServiceDetail from '@/components/service-detail';

export default function AccountingSupport() {
    const data = {
        title: 'Accounting Support Services',
        description: 'End-to-end bookkeeping and accounting partner for SMEs and startups.',
        overview: 'In today’s fast-paced business environment, accurate Accounting and Bookkeeping Services are essential for sustainable growth and financial stability. At Tax Filing Hub, we help businesses streamline their accounting processes, minimize errors, and maintain full compliance. Our experienced professionals bring deep industry knowledge and a systematic approach to managing your financial data, providing critical insights for informed decision-making.',
        features: [
            {
                title: 'Bookkeeping Services',
                description: 'Accurate recording and maintenance of daily financial transactions in a systematic manner.'
            },
            {
                title: 'Financial Statements',
                description: 'Preparation of Balance Sheets, Profit & Loss Accounts, and cash flow statements to monitor performance.'
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
                question: 'What is the importance of proper bookkeeping?',
                answer: 'Proper bookkeeping is crucial for maintaining financial transparency, ensuring statutory compliance, and monitoring business performance.'
            },
            {
                question: 'What is the difference between Accounting and Bookkeeping?',
                answer: 'Bookkeeping is the foundation—recording and organizing transactions. Accounting involves interpreting and analyzing that data into meaningful financial statements.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
