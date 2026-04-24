import ServiceDetail from '@/components/service-detail';

export default function AccountingSupport() {
    const data = {
        title: 'Accounting Support',
        description: 'End-to-end bookkeeping and accounting partner for SMEs and startups.',
        overview: 'Maintaining accurate financial records is the backbone of any successful business. Our accounting support services provide you with a dedicated team of professionals who handle your daily bookkeeping, bank reconciliations, and financial reporting, ensuring your books are always audit-ready and providing you with clear insights into your business performance.',
        features: [
            {
                title: 'Daily & Monthly Bookkeeping',
                description: 'We handle all your day-to-day transactions, ensuring every expense and income is correctly categorized.'
            },
            {
                title: 'Bank Reconciliations',
                description: 'Regular matching of your bank statements with your internal records to prevent errors and fraud.'
            },
            {
                title: 'Financial Statements',
                description: 'Preparation of Balance Sheets, P&L Statements, and Cash Flow reports on a monthly basis.'
            },
            {
                title: 'MIS Reporting',
                description: 'Customized Management Information System reports to help you make data-driven decisions.'
            }
        ],
        faqs: [
            {
                question: 'What accounting software do you use?',
                answer: 'We are experts in Tally, Zoho Books, QuickBooks, and SAP. We can work with your existing setup or help you migrate to a more efficient cloud platform.'
            },
            {
                question: 'How often will I receive financial reports?',
                answer: 'By default, we provide monthly reporting packages. However, for clients requiring more frequent updates, we can provide weekly or even real-time dashboards.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
