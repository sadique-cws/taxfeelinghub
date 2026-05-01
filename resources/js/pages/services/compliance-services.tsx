import ServiceDetail from '@/components/service-detail';

export default function ComplianceServices() {
    const data = {
        title: 'Compliance & Audit Services',
        description: 'Comprehensive compliance management and assurance solutions for sustainable growth.',
        overview: 'In today’s dynamic regulatory landscape, maintaining timely and accurate compliance is a critical pillar of business growth. At Tax Filing Hub, we offer comprehensive compliance management and audit solutions. Our expert team ensures end-to-end management of all regulatory filings, including ROC annual returns, Income Tax, GST, EPF, ESI, and TDS. Beyond mandatory filings, our audit services — including Statutory, Internal, and Management Audits — play a pivotal role in ensuring financial transparency, regulatory compliance, and operational efficiency.',
        features: [
            {
                title: 'Statutory Audits',
                description: 'Legally mandated examinations under the Income Tax Act, Companies Act, and GST laws to ensure financial integrity.'
            },
            {
                title: 'Internal Audits',
                description: 'Continuous evaluation of internal controls and risk management to identify inefficiencies and mitigate potential risks.'
            },
            {
                title: 'Management Audits',
                description: 'Evaluating the effectiveness of strategic decisions and resource utilization to ensure alignment with long-term objectives.'
            },
            {
                title: 'Regulatory Filings',
                description: 'Proactive management of ROC annual returns, GST reports, EPF/ESI, and other statutory obligations.'
            },
            {
                title: 'Specialized Audits',
                description: 'Tailored solutions including stock audits, due diligence, and forensic audits for deeper business insights.'
            }
        ],
        faqs: [
            {
                question: 'What is the statutory audit framework in India?',
                answer: 'Statutory audits are conducted annually (April 1st to March 31st) to maintain compliance and present a true and fair view of an entity’s financial position.'
            },
            {
                question: 'How do internal audits benefit my organization?',
                answer: 'They provide an early detection system for errors or fraudulent activities and help in optimizing operational processes and risk management.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
