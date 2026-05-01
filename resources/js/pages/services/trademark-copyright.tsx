import ServiceDetail from '@/components/service-detail';

export default function TrademarkCopyright() {
    const data = {
        title: 'Trademark Registration Services',
        description: 'Secure your brand identity through efficient, legally compliant, and strategically guided solutions.',
        overview: 'Welcome to Tax Filing Hub — your reliable partner for professional trademark registration. We recognize that securing a brand identity can often seem complex and time-intensive. Our goal is to simplify this journey by offering a streamlined, hassle-free process. While we take care of the legal and procedural complexities, from in-depth search to addressing objections, you can stay focused on scaling and managing your business operations.',
        features: [
            {
                title: 'Search & Analysis',
                description: 'In-depth trademark search to verify availability and significantly reduce the risk of rejection.'
            },
            {
                title: 'Drafting & Filing',
                description: 'Complete assistance in drafting and filing your trademark application with the relevant authorities.'
            },
            {
                title: 'Objection Handling',
                description: 'Expert support in addressing examination reports, objections, or oppositions throughout the process.'
            },
            {
                title: 'Application Management',
                description: 'Continuous monitoring and management of your application to ensure it progresses smoothly at every stage.'
            },
            {
                title: 'Brand Protection',
                description: 'Strategic advisory to safeguard your intellectual property and strengthen your brand value in the market.'
            }
        ],
        faqs: [
            {
                question: 'Why is trademark search important before filing?',
                answer: 'It helps identify potential conflicts early, ensuring your brand name is unique and minimizing the chances of legal disputes or application rejection.'
            },
            {
                question: 'How does Tax Filing Hub help with objections?',
                answer: 'Our legal experts analyze the examiner\'s report and draft precise responses to resolve objections and keep your registration on track.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
