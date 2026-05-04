import ServiceDetail from '@/components/service-detail';

export default function MiscellaneousServices() {
    const data = {
        title: 'Miscellaneous Services',
        description: 'Essential compliance and registration services designed to support individuals, startups, and established businesses.',
        overview: (
            <div className="space-y-8">
                <p>
                    At <strong>Tax Filing Hub</strong>, we provide a wide range of essential compliance and registration services designed to support individuals, startups, and established businesses. Our team ensures a smooth, accurate, and timely process—from application to final approval—so you can focus on growing your business.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: 'DSC Application', desc: 'Class 2 / Class 3 Digital Signature Certificates for individuals and directors.' },
                        { title: 'IEC Registration', desc: 'Mandatory Import Export Code for businesses in international trade.' },
                        { title: 'FSSAI License', desc: 'Registration and licensing for food businesses of all sizes.' },
                        { title: 'Society Registration', desc: 'Registering societies for charitable, educational, and social purposes.' },
                        { title: 'Trust Registration', desc: 'Complete support for creating and registering Public and Private Trusts.' },
                        { title: 'TDS Return Filing', desc: 'Accurate quarterly filing (24Q, 26Q, 27Q) and reconciliation.' }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-surface border border-border group hover:border-gold/30 transition-colors">
                            <h4 className="font-bold text-primary mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                            <p className="text-sm text-primary/70 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        extraContent: (
            <div className="space-y-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                        <h3 className="text-xl font-display font-bold text-primary mb-6">Digital Signature (DSC)</h3>
                        <ul className="space-y-3">
                            {[
                                "End-to-end application and documentation",
                                "Class 2 / Class 3 DSC registration",
                                "Renewal and update of DSC",
                                "Quick approval and activation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-primary/70">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface border border-border">
                        <h3 className="text-xl font-display font-bold text-primary mb-6">FSSAI Registration</h3>
                        <ul className="space-y-3">
                            {[
                                "Restaurants & food stalls",
                                "Food manufacturers & distributors",
                                "Cloud kitchens & online food businesses",
                                "Basic, State, or Central License support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-primary/70">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden group text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h3 className="text-white font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                            Import Export <span className="text-gold italic">Code (IEC)</span>
                        </h3>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Required for all import/export activities, the IEC offers lifetime validity with no renewal required. We provide hassle-free documentation and fast processing to get you trade-ready.
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary text-xl">Society & Trust Registration</h4>
                            <p className="text-primary/70 leading-relaxed">
                                We assist in drafting MOAs, Rules and Regulations, and Trust Deeds for social and charitable organizations, ensuring end-to-end registration support with appropriate authorities.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary text-xl">TDS Return Filing</h4>
                            <p className="text-primary/70 leading-relaxed">
                                Accurate and timely filing of forms 24Q, 26Q, 27Q, etc. We handle calculation, reconciliation, and correction returns to keep your business compliant with Income Tax regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Digital Signatures',
                description: 'Class 2/3 DSC for individuals and directors, essential for all government portals.'
            },
            {
                title: 'Food Licenses',
                description: 'FSSAI registration for cloud kitchens, restaurants, and manufacturers.'
            },
            {
                title: 'Trade Codes',
                description: 'Swift Import Export Code (IEC) registration with lifetime validity.'
            },
            {
                title: 'Social Entities',
                description: 'End-to-end support for Society and Trust registrations including deed drafting.'
            },
            {
                title: 'TDS Management',
                description: 'Quarterly return filing and reconciliation to ensure zero compliance gaps.'
            }
        ],
        faqs: [
            {
                question: 'What is the validity of an IEC?',
                answer: 'Import Export Code (IEC) has lifetime validity and does not require any renewal.'
            },
            {
                question: 'Where is a DSC required?',
                answer: 'DSC is essential for MCA filings, Income Tax returns, GST filings, and e-tendering processes.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
