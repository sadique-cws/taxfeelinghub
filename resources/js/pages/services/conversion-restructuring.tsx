import ServiceDetail from '@/components/service-detail';

export default function ConversionRestructuring() {
    const data = {
        title: 'Conversion & Restructuring',
        description: 'Seamless business entity conversion and constitutional modifications for evolving enterprises.',
        overview: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <p>
                        At <strong>Tax Filing Hub</strong>, we specialize in providing seamless and legally compliant business restructuring and entity conversion services. Whether you are planning to upgrade your business structure, improve regulatory compliance, or enhance credibility in the market, our expert team ensures a smooth transition with minimal disruption to your operations.
                    </p>
                    <p>
                        We offer end-to-end assistance in conversion of business entities and modification of constitutional documents, enabling businesses to evolve in line with growth, funding requirements, and statutory obligations.
                    </p>
                    <p>
                        Our approach combines legal precision, regulatory expertise, and strategic advisory, ensuring that every conversion is executed efficiently, transparently, and in full compliance with applicable laws.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm">
                    <p className="italic text-primary/80">
                        "We understand that business restructuring is not just a legal process, but a strategic decision. Our team ensures that your transition is smooth, compliant, and aligned with your long-term objectives."
                    </p>
                </div>
            </div>
        ),
        extraContent: (
            <div className="space-y-16">
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: "Partnership to LLP",
                            desc: "Benefits of limited liability and separate legal identity.",
                            items: ["Eligibility Advisory", "Name Reservation", "LLP Agreement Drafting", "ROC Form Filing", "Asset/Liability Transfer"]
                        },
                        {
                            title: "Private to Public",
                            desc: "Structure support for scaling or raising public capital.",
                            items: ["MOA & AOA Alteration", "Director Requirements", "ROC Compliance", "Capital Restructuring", "Governance Advisory"]
                        },
                        {
                            title: "OPC to Private Ltd",
                            desc: "Essential for expansion and investment opportunities.",
                            items: ["Procedural Advisory", "Member/Director Increase", " MOA Amendment", "ROC Approvals", "End-to-end Compliance"]
                        }
                    ].map((box, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:border-gold/30 transition-all group">
                            <h4 className="font-bold text-primary group-hover:text-gold transition-colors mb-2 text-lg">{box.title}</h4>
                            <p className="text-xs text-primary/60 mb-6 font-medium uppercase tracking-wider">{box.desc}</p>
                            <ul className="space-y-3">
                                {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-primary/70">
                                        <div className="h-1 w-1 rounded-full bg-gold mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                        <div>
                            <div className="gold-rule mb-6" />
                            <h3 className="text-white font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                                Constitutional <span className="text-gold italic">Modification</span>
                            </h3>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                "Change in Business Objects",
                                "Company Name Change",
                                "Registered Office Change",
                                "Admission/Retirement of Directors",
                                "Capital Structure Changes",
                                "Revised Agreement Drafting"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden text-center">
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Why Choose Tax Filing Hub?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Expert guidance on Companies & LLP Act",
                            "End-to-end documentation & filings",
                            "Quick turnaround with assurance",
                            "Tailored growth-stage solutions",
                            "Transparent & professional approach"
                        ].map((item, i) => (
                            <div key={i} className="px-6 py-3 rounded-full bg-white border border-border shadow-sm text-primary font-medium text-sm">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Entity Conversion',
                description: 'Seamlessly transition from Partnership to LLP, or Private Limited to Public Limited.'
            },
            {
                title: 'MOA & AOA Alteration',
                description: 'Expert modification of constitutional documents to reflect business evolution.'
            },
            {
                title: 'Statutory Filings',
                description: 'End-to-end management of all required forms and approvals with the ROC.'
            },
            {
                title: 'Governance Advisory',
                description: 'Strategic guidance on corporate governance for scaling and public requirements.'
            },
            {
                title: 'Agreement Drafting',
                description: 'Drafting and execution of revised LLP agreements and company constitutions.'
            }
        ],
        faqs: [
            {
                question: 'Why convert a Partnership firm into an LLP?',
                answer: 'LLPs offer limited liability, a separate legal identity, and greater credibility, protecting personal assets of partners.'
            },
            {
                question: 'Can I change my business objects later?',
                answer: 'Yes, you can modify your MOA to change business objects, which requires a special resolution and ROC filing.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
