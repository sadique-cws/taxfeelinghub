import ServiceDetail from '@/components/service-detail';

export default function DirectTaxes() {
    const data = {
        title: 'Direct Taxes',
        description: 'Income tax planning, filing and representation for individuals & corporates.',
        overview: 'Navigate the complexities of Income Tax with our expert advisory. We provide comprehensive solutions for tax planning, return filing, and litigation support. Whether you are an individual professional, a partnership firm, or a large corporate, we ensure your tax liability is optimized and your compliance is perfect.',
        features: [
            {
                title: 'ITR Filing',
                description: 'Accurate preparation and filing of Income Tax Returns for all categories of taxpayers.'
            },
            {
                title: 'Tax Planning',
                description: 'Strategic advice on investments and deductions to minimize your legal tax liability.'
            },
            {
                title: 'TDS Compliance',
                description: 'Quarterly TDS return filing and issue of Form 16/16A certificates.'
            },
            {
                title: 'Tax Representation',
                description: 'Representing clients before Income Tax authorities for assessments and appeals.'
            }
        ],
        faqs: [
            {
                question: 'When is the deadline for ITR filing?',
                answer: 'For individuals, it is usually July 31st. For businesses requiring audit, it is October 31st. However, these dates can vary based on government notifications.'
            },
            {
                question: 'Can you help with tax notices?',
                answer: 'Yes, we specialize in responding to tax notices and representing clients in assessments and scrutiny cases.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
