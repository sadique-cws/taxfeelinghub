import ServiceDetail from '@/components/service-detail';

export default function DirectTaxes() {
    const data = {
        title: 'Direct Taxation Services',
        description: 'Strategic tax planning, accurate filing, and expert representation for individuals and corporates.',
        overview: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold text-primary">Strategic Income Tax Advisory & Compliance Solutions</h3>
                    <p>
                        Navigating the evolving landscape of income tax regulations requires precision, foresight, and expert guidance. At <strong>Tax Filing Hub</strong>, we deliver end-to-end Direct Tax services designed to ensure seamless compliance, strategic tax planning, and robust litigation support.
                    </p>
                    <p>
                        Our approach is rooted in accuracy, transparency, and proactive advisory—helping individuals, professionals, partnerships, and corporate entities optimize their tax liabilities while remaining fully compliant with applicable laws and regulatory frameworks.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm space-y-4">
                    <h4 className="font-bold text-primary">Income Tax Filing Services – Accurate, Timely & Hassle-Free</h4>
                    <p className="text-primary/80">
                        Welcome to Tax Filing Hub, your trusted partner for comprehensive income tax filing and compliance management. We specialize in delivering a streamlined, efficient, and stress-free tax filing experience—ensuring that deadlines are never missed and tax exposures are effectively minimized.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['ITR-1 (Sahaj)', 'ITR-2', 'ITR-3', 'ITR-4 (Sugam)', 'ITR-5', 'ITR-6', 'ITR-7'].map((itr) => (
                            <div key={itr} className="px-3 py-2 rounded-lg bg-primary/5 text-primary text-sm font-medium border border-primary/10 text-center">
                                {itr}
                            </div>
                        ))}
                    </div>
                </div>

                <p>
                    Whether you are a salaried individual, freelancer, business owner, partnership firm, or corporate entity, our team provides tailored tax solutions aligned with your financial profile and regulatory requirements.
                </p>

                <p>
                    We recognize that income tax compliance can often be complex and time-intensive. Our mission is to simplify this process through expert consultation, technology-driven workflows, and continuous client support. Our professionals guide you through every stage—from documentation and computation to filing and post-filing support—ensuring complete clarity on your tax position, eligible deductions, and compliance obligations.
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
                                Why Choose <span className="text-gold italic">Tax Filing Hub?</span>
                            </h3>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "Expert-Led Advisory: Backed by experienced tax professionals",
                                "Customized Solutions: Tailored strategies for individuals and businesses",
                                "Compliance Assurance: Adherence to the latest tax laws and updates",
                                "Litigation Support: Representation and assistance in tax matters",
                                "End-to-end Service: From planning to filing and beyond"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/80">
                                    <div className="h-2 w-2 rounded-full bg-gold" />
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden text-center">
                    <h3 className="text-2xl font-display font-bold text-primary mb-4 text-balance">Your Trusted Tax Partner</h3>
                    <p className="text-xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
                        At Tax Filing Hub, quality, integrity, and client satisfaction are at the core of everything we do. Our dedicated team remains readily accessible to address your queries and provide ongoing support throughout your tax journey.
                    </p>
                    <p className="mt-6 text-primary font-bold italic">
                        Whether you are an individual taxpayer or managing a growing business, rely on us for accurate filings, strategic planning, and complete peace of mind.
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'ITR Filing',
                description: 'Expert preparation and filing of ITR-1 to ITR-7 for all categories of taxpayers.'
            },
            {
                title: 'Tax Planning',
                description: 'Strategic advice to optimize tax liabilities while remaining fully compliant.'
            },
            {
                title: 'TDS Compliance',
                description: 'Quarterly TDS return filing and issue of Form 16/16A certificates.'
            },
            {
                title: 'Litigation Support',
                description: 'Representation and assistance in tax matters, assessments, and appeals.'
            },
            {
                title: 'Post-Filing Support',
                description: 'Ongoing assistance and clarification on your tax position and obligations.'
            }
        ],
        faqs: [
            {
                question: 'Which ITR form should I file?',
                answer: 'It depends on your source of income. For example, ITR-1 is for salaried individuals, while ITR-3/4 are for business/professional income. We help you choose the correct form.'
            },
            {
                question: 'How do you ensure tax optimization?',
                answer: 'We analyze your financial profile and ensure all eligible deductions and exemptions are claimed as per the latest tax laws.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
