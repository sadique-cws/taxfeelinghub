import ServiceDetail from '@/components/service-detail';

export default function TaxLitigation() {
    const data = {
        title: 'Tax Litigation Services',
        description: 'Result-driven representation across Direct & Indirect Tax domains before judicial & quasi-judicial forums.',
        overview: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <p>
                        At <strong>Tax Filing Hub</strong>, we deliver comprehensive and result-driven tax litigation services across both Direct Tax and Indirect Tax domains. Our firm has successfully represented clients before multiple judicial and quasi-judicial forums, handling some of the most complex and high-stakes tax disputes under domestic as well as international taxation frameworks.
                    </p>
                    <p>
                        With a strong blend of legal expertise, technical proficiency, and strategic insight, our team is recognized for effectively resolving intricate tax controversies, safeguarding client interests, and ensuring optimal outcomes in contentious matters.
                    </p>
                    <p>
                        We possess extensive experience in handling sensitive investigation proceedings, including cases involving foreign asset disclosures, cross-border financial information, proceedings under the Black Money Act, 2015, and matters arising from Suspicious Transaction Reports (STRs).
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm">
                    <p className="italic text-primary/80">
                        "Our objective is to provide end-to-end litigation support, enabling clients to assert their legal rights while ensuring efficient and timely resolution of disputes. We combine legal acumen with commercial awareness to present compelling arguments backed by strong foundations."
                    </p>
                </div>
            </div>
        ),
        extraContent: (
            <div className="space-y-16">
                {/* Direct Tax Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-2xl font-display font-bold text-primary">Direct Tax Litigation</h3>
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Representation & Advocacy",
                                items: ["Assessing Officers", "CIT (Appeals)", "ITAT", "High Courts & Supreme Court", "Section 143(3) / 147 assessments", "Search & Seizure Assessments"]
                            },
                            {
                                title: "Investigation & Enforcement",
                                items: ["Investigation Wing Representation", "Foreign Asset Investigations", "International Info Exchange", "STR-based inquiries", "I&CI Division Matters"]
                            },
                            {
                                title: "Faceless Assessment & Appeals",
                                items: ["NFAC Responses", "Faceless Appellate Authorities", "Virtual Representation", "Litigation Management"]
                            },
                            {
                                title: "Special Advisory Areas",
                                items: ["Black Money Law", "Benami Transactions", "PMLA Compliance", "M&A Restructuring", "Vivad Se Vishwas Scheme 2024"]
                            }
                        ].map((box, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                <h4 className="font-bold text-primary mb-4 text-lg">{box.title}</h4>
                                <ul className="space-y-2">
                                    {box.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-primary/70">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indirect Tax Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-2xl font-display font-bold text-primary">Indirect Tax Litigation</h3>
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Pre-Litigation & Adjudication",
                                items: ["Risk Evaluation & Strategy", "SCN Drafting & Filing", "Proper Officer Representation", "Personal Hearings"]
                            },
                            {
                                title: "Appeals & Tribunal",
                                items: ["Section 107 Appeals", "GSTAT & CESTAT Representation", "Stay Applications", "Final Hearings"]
                            },
                            {
                                title: "Investigations & Higher Judiciary",
                                items: ["DGGI Investigation Support", "High Court Writ Petitions", "Supreme Court SLPs", "Search & Seizure Defense"]
                            },
                            {
                                title: "Relief & Settlement",
                                items: ["Stay of Demand", "Interim Relief & Bail", "Amnesty Scheme Advisory", "Compliance Monitoring"]
                            }
                        ].map((box, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-surface border border-border">
                                <h4 className="font-bold text-primary mb-4 text-lg">{box.title}</h4>
                                <ul className="space-y-2">
                                    {box.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-primary/70">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Section */}
                <div className="p-10 md:p-14 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                        <div>
                            <div className="gold-rule mb-6" />
                            <h3 className="text-white font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                                Why <span className="text-gold italic">Tax Litigation?</span>
                            </h3>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "Deep expertise in Direct & Indirect Tax Laws",
                                "Proven track record in handling complex and high-value disputes",
                                "Strong representation across all judicial forums in India",
                                "Strategic, client-focused, and compliance-driven approach",
                                "Seamless integration of legal, financial, and regulatory insights"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/80">
                                    <div className="h-2 w-2 rounded-full bg-gold" />
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Judicial Representation',
                description: 'Expert advocacy before ITAT, GSTAT, High Courts, and the Supreme Court of India.'
            },
            {
                title: 'Investigation Defense',
                description: 'Support during Search & Seizure, DGGI investigations, and foreign asset inquiries.'
            },
            {
                title: 'Dispute Strategy',
                description: 'Formulating robust litigation strategies to safeguard client interests and ensure optimal outcomes.'
            },
            {
                title: 'Faceless Appeals',
                description: 'Meticulous drafting and management of responses for Faceless Assessment & Appeals.'
            },
            {
                title: 'Settlement Advisory',
                description: 'Guidance on Vivad Se Vishwas 2024 and other dispute resolution programs.'
            }
        ],
        faqs: [
            {
                question: 'What is the role of the Settlement Commission?',
                answer: 'It provides a mechanism for taxpayers to settle their tax disputes at an early stage by making a true and full disclosure of their income.'
            },
            {
                question: 'Can you assist in GST anti-profiteering cases?',
                answer: 'Yes, we provide advisory and representation in anti-profiteering cases and other enforcement-related investigations.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
