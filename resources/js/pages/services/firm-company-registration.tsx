import ServiceDetail from '@/components/service-detail';

export default function FirmCompanyRegistration() {
    const data = {
        title: 'Company Registration & Conversion',
        description: 'Comprehensive incorporation and business restructuring solutions for modern enterprises.',
        overview: 'At Tax Filing Hub, we deliver end-to-end company registration and compliance solutions. Our expertise spans Private Limited, Public Limited, LLP, OPC, Section 8, Nidhi, and Chit Fund Company registration. We also specialize in business entity conversion and constitutional modifications, enabling your business to evolve in line with growth, funding requirements, and statutory obligations.',
        features: [
            {
                title: 'New Incorporation',
                description: 'End-to-end management of documentation, name approval, and incorporation for all types of business entities.'
            },
            {
                title: 'Business Conversion',
                description: 'Assisting in transitioning Partnership firms to LLPs, or Private Limited to Public Limited companies for scaling.'
            },
            {
                title: 'Constitutional Modification',
                description: 'Alteration of MOA & AOA, change in business objects, name, or registered office with full ROC compliance.'
            },
            {
                title: 'Strategic Advisory',
                description: 'Expert guidance on the Companies Act and LLP Act to ensure your business structure is optimized for growth.'
            },
            {
                title: 'Capital Restructuring',
                description: 'Assistance in changing capital structure and admission or retirement of partners and directors.'
            }
        ],
        faqs: [
            {
                question: 'Why should I convert my Partnership firm into an LLP?',
                answer: 'LLPs provide the benefits of limited liability and a separate legal identity, enhancing credibility and protecting personal assets.'
            },
            {
                question: 'What is involved in modifying a company\'s constitution?',
                answer: 'It involves altering the Memorandum or Articles of Association (MOA/AOA) to reflect changes in business goals or structure, requiring formal ROC filings.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
