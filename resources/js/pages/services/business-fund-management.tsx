import ServiceDetail from '@/components/service-detail';

export default function BusinessFundManagement() {
    const data = {
        title: 'Business & Fund Management',
        description: 'Grow profits, reduce costs and arrange the right capital.',
        overview: 'Strategic financial management is the key to scaling your business. We help you with project reports, fund arrangement, and joint venture structuring. Our advisors work closely with you to optimize your capital structure, improve cash flows, and secure the necessary funding from banks or investors.',
        features: [
            {
                title: 'Project Reports',
                description: 'Detailed financial projections and project reports for bank loans and investor pitches.'
            },
            {
                title: 'Fund Arrangement',
                description: 'Assisting in securing working capital, term loans, and equity funding.'
            },
            {
                title: 'Cost Optimization',
                description: 'Analyzing your business operations to identify areas for cost reduction and margin improvement.'
            },
            {
                title: 'CMA Data Preparation',
                description: 'Preparation of Credit Monitoring Arrangement (CMA) data as per bank requirements.'
            }
        ],
        faqs: [
            {
                question: 'Do you help in getting bank loans?',
                answer: 'We assist in the entire process from document preparation and CMA data to liaison with bankers for term loans and working capital.'
            },
            {
                question: 'Can you help with equity fundraising?',
                answer: 'Yes, we help prepare pitch decks and financial models for startups seeking angel or VC investment.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
