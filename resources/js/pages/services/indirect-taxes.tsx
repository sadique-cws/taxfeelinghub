import ServiceDetail from '@/components/service-detail';

export default function IndirectTaxes() {
    const data = {
        title: 'Indirect Taxes (GST)',
        description: 'GST registration, returns, audits and advisory under one roof.',
        overview: 'GST compliance is a recurring and complex requirement for modern businesses. Our GST experts handle everything from registration and monthly returns to annual audits and reconciliation. We help you maximize Input Tax Credit (ITC) while ensuring you are fully compliant with the latest GST laws and notifications.',
        features: [
            {
                title: 'GST Registration',
                description: 'New registrations, amendments, and cancellations of GST numbers.'
            },
            {
                title: 'Monthly Returns',
                description: 'Timely filing of GSTR-1, GSTR-3B, and other monthly/quarterly returns.'
            },
            {
                title: 'GST Audit',
                description: 'Conducting annual GST audits and preparation of GSTR-9/9C reconciliation statements.'
            },
            {
                title: 'ITC Optimization',
                description: 'Rigorous reconciliation of purchase registers with GSTR-2A/2B to ensure maximum ITC claim.'
            }
        ],
        faqs: [
            {
                question: 'Is GST registration mandatory for everyone?',
                answer: 'It is mandatory if your turnover exceeds the specified threshold (currently ₹40 Lakhs for goods and ₹20 Lakhs for services in most states).'
            },
            {
                question: 'What is GSTR-9?',
                answer: 'GSTR-9 is the annual return that every registered GST taxpayer must file, summarizing all monthly/quarterly returns filed during the year.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
