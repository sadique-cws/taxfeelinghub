import ServiceDetail from '@/components/service-detail';

export default function FirmCompanyRegistration() {
    const data = {
        title: 'Firm & Company Registration',
        description: 'Incorporate the right entity for your goals — fast and compliant.',
        overview: 'Choosing the right business structure is critical for future growth, fundability, and liability protection. We help entrepreneurs register Private Limited Companies, LLPs, OPCs, and Partnership firms with speed and precision, handling all the paperwork from DIN to Certificate of Incorporation.',
        features: [
            {
                title: 'Private Limited / LLP',
                description: 'End-to-end incorporation including name approval, MOA/AOA drafting, and spice+ filing.'
            },
            {
                title: 'Post-Incorp Compliance',
                description: 'PAN, TAN, and GST registration bundled with your company formation.'
            },
            {
                title: 'MSME / Startup India',
                description: 'Getting you recognized by the government to avail tax holidays and easier funding.'
            },
            {
                title: 'Digital Signatures',
                description: 'Procurement of DSCs and DINs for all directors/partners.'
            }
        ],
        faqs: [
            {
                question: 'What documents are required for company registration?',
                answer: 'You typically need PAN, Aadhaar, Photo, and Address Proof (Utility bill) of all directors, along with proof of registered office address.'
            },
            {
                question: 'Can one person start a company?',
                answer: 'Yes, through an One Person Company (OPC) or a Sole Proprietorship. However, for growth and funding, we usually recommend a Private Limited structure.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
