import ServiceDetail from '@/components/service-detail';

export default function MiscellaneousServices() {
    const data = {
        title: 'Registration & Miscellaneous Services',
        description: 'Essential compliance and registration services designed to support individuals, startups, and established businesses.',
        overview: 'At Tax Filing Hub, we provide a wide range of essential compliance and registration services. Our team ensures a smooth, accurate, and timely process — from application to final approval — so you can focus on growing your business. Whether you need digital signatures, import-export codes, or food licenses, we handle the end-to-end documentation and filing with various authorities.',
        features: [
            {
                title: 'DSC Application',
                description: 'Obtaining Digital Signature Certificates (Class 2/3) for individuals, directors, and organizations for e-filing needs.'
            },
            {
                title: 'IEC Registration',
                description: 'Mandatory Import Export Code for businesses involved in international trade with lifetime validity.'
            },
            {
                title: 'FSSAI License',
                description: 'End-to-end support for food business registration and licensing (Basic, State, or Central).'
            },
            {
                title: 'Society & Trust',
                description: 'Registering societies and trusts for charitable, educational, cultural, and social purposes including deed drafting.'
            },
            {
                title: 'TDS Return Filing',
                description: 'Accurate and timely quarterly TDS return filing (24Q, 26Q, 27Q) and reconciliation services.'
            }
        ],
        faqs: [
            {
                question: 'Why is a Digital Signature Certificate (DSC) essential?',
                answer: 'DSC is mandatory for MCA filings, Income Tax returns, GST filings, and e-tendering processes in India.'
            },
            {
                question: 'Who needs an FSSAI registration?',
                answer: 'Any business involved in food manufacturing, distribution, or sales, including restaurants, cloud kitchens, and online food businesses.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
