import ServiceDetail from '@/components/service-detail';

export default function TrademarkCopyright() {
    const data = {
        title: 'Trademark & Copyright',
        description: 'Protect your brand identity with end-to-end IP registration.',
        overview: 'Your brand is your most valuable asset. Our IP experts help you secure your trademarks and copyrights, ensuring that your intellectual property is protected from infringement. From initial search and advisory to filing and handling oppositions, we manage the entire lifecycle of your IP protection.',
        features: [
            {
                title: 'Trademark Search',
                description: 'Comprehensive search across the IP database to ensure your brand name/logo is unique and registrable.'
            },
            {
                title: 'Application Filing',
                description: 'Expert preparation and filing of trademark and copyright applications to minimize the risk of objection.'
            },
            {
                title: 'Prosecution & Response',
                description: 'Handling examination reports and responding to objections raised by the IP registrar.'
            },
            {
                title: 'Opposition Handling',
                description: 'Representing your interests in case of oppositions filed by third parties against your trademark.'
            }
        ],
        faqs: [
            {
                question: 'How long does trademark registration take?',
                answer: 'While you can start using the "TM" mark immediately after filing, the full registration process usually takes 6-12 months, depending on government processing times and objections.'
            },
            {
                question: 'What is the difference between Trademark and Copyright?',
                answer: 'Trademarks protect brand names, logos, and slogans. Copyrights protect original creative works like software code, designs, literature, and music.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
