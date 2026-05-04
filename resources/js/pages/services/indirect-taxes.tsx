import ServiceDetail from '@/components/service-detail';

export default function IndirectTaxes() {
    const data = {
        title: 'Indirect Taxation (GST) Services',
        description: 'End-to-end GST advisory, compliance, and departmental audit support solutions.',
        overview: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-primary">Indirect Taxes (GST & IDT) Advisory</h3>
                    <p>
                        Our Indirect Tax practice delivers end-to-end advisory and compliance solutions under Goods and Services Tax (GST) and other Indirect Tax laws in India. We partner with businesses to navigate evolving regulations, optimise tax positions, and ensure seamless compliance across operations.
                    </p>
                    <p>
                        With a sector-focused approach, our team undertakes in-depth business analysis to design practical, compliant, and tax-efficient strategies—covering GST planning, reporting, and risk management for domestic and cross-border operations.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {[
                        { title: 'Registration & Structuring', desc: 'End-to-end support for regular taxpayers, ISD, TDS/TCS, and e-commerce operators.' },
                        { title: 'Returns & Compliance', desc: 'Accurate preparation and filing of monthly, quarterly, and annual returns; ongoing health checks.' },
                        { title: 'Advisory & Retainerships', desc: 'Strategic GST consultancy for corporates and non-resident entities on a retainer basis.' },
                        { title: 'Audits & Certifications', desc: 'GST audits, certifications (ITC and refunds), and representation before authorities.' },
                        { title: 'Refunds & Litigation', desc: 'Handling refund claims and representation across adjudication and appellate stages.' },
                        { title: 'Operational Compliance', desc: 'Advisory for e-way bill systems and related procedural compliance.' },
                        { title: 'Legal Opinions', desc: 'Research-backed written opinions and advance ruling applications.' },
                        { title: 'Business Restructuring', desc: 'GST implications on mergers, demergers, and transaction valuations.' }
                    ].map((service, i) => (
                        <div key={i} className="p-5 rounded-xl bg-surface border border-border group hover:border-gold/30 transition-colors">
                            <h4 className="font-bold text-primary group-hover:text-gold transition-colors mb-1">{service.title}</h4>
                            <p className="text-sm text-primary/70 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
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
                                Specialised <span className="text-gold italic">Enforcement Support</span>
                            </h3>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                "Cross-Border & Customs Advisory",
                                "Anti-Profiteering & Investigations",
                                "Search, Seizure & DGGI Support",
                                "Training & Capacity Building"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h3 className="text-2xl font-display font-bold text-primary">GST Audit & Departmental Audit Support</h3>
                        <p className="text-lg text-primary/80 leading-relaxed">
                            We provide comprehensive assistance during departmental audits, ensuring accurate documentation, timely responses, and regulatory alignment. Under <strong>Section 65 of the Central Goods and Services Tax Act, 2017</strong>, authorities are empowered to conduct audits of registered taxpayers to verify turnover, tax payments, refunds, and Input Tax Credit claims.
                        </p>
                        <p className="text-lg text-primary/80 leading-relaxed font-bold italic">
                            Our team ensures structured audit preparedness, minimises litigation risks, and facilitates smooth interaction with tax authorities—enabling businesses to remain compliant and audit-ready at all times.
                        </p>
                    </div>
                </div>
            </div>
        ),
        features: [
            {
                title: 'GST Registration',
                description: 'End-to-end support for all categories including ISD, TDS/TCS, and E-commerce.'
            },
            {
                title: 'Return Filing',
                description: 'Accurate and timely preparation of monthly, quarterly, and annual GST returns.'
            },
            {
                title: 'Audit Support',
                description: 'Expert assistance during Section 65 departmental audits and internal health checks.'
            },
            {
                title: 'Refund Processing',
                description: 'End-to-end handling of GST refund claims with meticulous documentation.'
            },
            {
                title: 'Litigation Support',
                description: 'Representation in adjudication, appeals, and before GST tribunals.'
            }
        ],
        faqs: [
            {
                question: 'What is a Section 65 audit?',
                answer: 'Under Section 65, tax authorities can conduct an audit of a registered person to verify their records and returns for a specific period.'
            },
            {
                question: 'How do you help with GST refunds?',
                answer: 'We assist in identifying eligible refunds, preparing the application, documentation, and follow-up with the department until disbursement.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
