import ServiceDetail from '@/components/service-detail';

export default function ComplianceServices() {
    const data = {
        title: 'Compliance Services',
        description: 'Stay ahead of every ROC, tax and regulatory deadline.',
        overview: 'Running a business involves juggling multiple statutory deadlines. Our compliance services ensure that you never miss a filing, whether it is ROC annual returns, Income Tax filings, or GST reports. We act as your compliance calendar, giving you peace of mind and protecting you from heavy penalties.',
        features: [
            {
                title: 'Annual ROC Filings',
                description: 'Expert preparation of AOC-4, MGT-7 and other mandatory secretarial records.'
            },
            {
                title: 'Audit Support',
                description: 'Coordinating with statutory auditors to ensure smooth year-end audits.'
            },
            {
                title: 'Regulatory Updates',
                description: 'Proactive notification about changes in laws that affect your specific industry.'
            },
            {
                title: 'Minutes & Registers',
                description: 'Maintenance of statutory registers and drafting minutes of board/general meetings.'
            }
        ],
        faqs: [
            {
                question: 'What happens if I miss a filing deadline?',
                answer: 'Missing deadlines can lead to heavy daily penalties, disqualification of directors, and in extreme cases, striking off of the company. Our goal is to ensure 100% on-time filing.'
            },
            {
                question: 'Do you handle compliance for LLPs?',
                answer: 'Yes, we handle Form 8 and Form 11 filings for LLPs, along with Income Tax returns and other regulatory needs.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
