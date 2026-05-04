import ServiceDetail from '@/components/service-detail';

export default function TrademarkCopyright() {
    const data = {
        title: 'Trademark Registration Services',
        description: 'Protect your brand identity with professional, end-to-end trademark solutions and strategic IP protection.',
        overview: (
            <div className="space-y-8">
                <p>
                    Welcome to <strong>Tax Filing Hub</strong> — your reliable partner for seamless and professional trademark registration services. We specialize in helping businesses secure their brand identity through efficient, legally compliant, and strategically guided trademark solutions. Our experienced team is committed to delivering end-to-end support to protect your intellectual property and strengthen your brand value in a competitive market.
                </p>

                <p>
                    At Tax Filing Hub, we recognize that trademark registration can often seem complex, technical, and time-intensive. Our goal is to simplify this journey by offering a streamlined, hassle-free process tailored to your business needs. While we take care of the legal and procedural complexities, you can stay focused on scaling and managing your business operations.
                </p>

                <p>
                    Our comprehensive trademark services include in-depth trademark search and analysis to verify availability and reduce the risk of rejection. We provide complete assistance in drafting, filing, and managing your trademark application with the relevant authorities. From documentation to addressing objections, examination reports, or oppositions, our experts ensure that your application progresses smoothly at every stage.
                </p>

                <p>
                    With Tax Filing Hub, your brand is backed by a team that understands the nuances of trademark law and compliance. Our professionals bring practical expertise and a detail-oriented approach to safeguard your intellectual assets with precision and efficiency.
                </p>
            </div>
        ),
        extraContent: (
            <div className="space-y-12">
                <div className="p-10 md:p-14 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                        <div>
                            <div className="gold-rule mb-6" />
                            <h3 className="text-white font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                                Beyond <span className="text-gold italic">Trademark</span>
                            </h3>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Beyond trademark registration, we offer a wide spectrum of business support services, including company incorporation, tax filing, regulatory compliance, and financial advisory. Our integrated approach ensures that your business remains protected, compliant, and growth-ready.
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden">
                    <p className="text-xl text-primary leading-relaxed">
                        We are dedicated to delivering high-quality services at competitive pricing, ensuring maximum value for our clients. At Tax Filing Hub, we combine professionalism, transparency, and efficiency to make trademark registration simple, reliable, and result-driven—so you can confidently build and grow your brand.
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Trademark Search',
                description: 'In-depth analysis to verify availability and significantly reduce the risk of rejection.'
            },
            {
                title: 'Drafting & Filing',
                description: 'Complete assistance in drafting and filing your application with relevant authorities.'
            },
            {
                title: 'Objection Handling',
                description: 'Expert management of examination reports, objections, and legal oppositions.'
            },
            {
                title: 'End-to-End Support',
                description: 'Continuous monitoring and management of your application at every single stage.'
            },
            {
                title: 'IP Strategy',
                description: 'Strategic advisory to safeguard intellectual assets and strengthen brand value.'
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
