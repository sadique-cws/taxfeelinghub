import ServiceDetail from '@/components/service-detail';

export default function AuditAssurance() {
    const data = {
        title: 'Audit & Assurance Services',
        description: 'Ensuring financial transparency, regulatory compliance, and operational efficiency.',
        overview: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <p>
                        Auditing plays a pivotal role in ensuring financial transparency, regulatory compliance, and operational efficiency for businesses and individuals alike. In India, audit services encompass a wide spectrum of engagements—some mandated by law, while others are voluntarily undertaken to strengthen governance and build stakeholder confidence.
                    </p>
                    <p>
                        Our comprehensive audit solutions are designed to help you navigate the complex regulatory landscape while providing actionable insights for growth and risk mitigation.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {[
                        {
                            title: 'Statutory Audits',
                            desc: 'Legally mandated examinations under Income Tax, Companies Act, Banking, and GST laws.'
                        },
                        {
                            title: 'Internal Audits',
                            desc: 'Continuous evaluation of internal controls, risk management, and operational processes.'
                        },
                        {
                            title: 'Management Audits',
                            desc: 'Evaluating strategic decisions and resource utilization against long-term objectives.'
                        },
                        {
                            title: 'Specialized Audits',
                            desc: 'Tailored solutions including stock audits, due diligence, and forensic audits.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-surface border border-border hover:border-gold/30 transition-colors group">
                            <h4 className="font-bold text-primary mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                            <p className="text-sm text-primary/70 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        extraContent: (
            <div className="space-y-16">
                <div className="p-10 md:p-14 rounded-[2.5rem] bg-secondary text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_2fr] items-center">
                        <div>
                            <div className="gold-rule mb-6" />
                            <h3 className="text-white font-bold text-3xl md:text-4xl font-display tracking-tight leading-tight">
                                Statutory Audit <span className="text-gold italic">Framework</span>
                            </h3>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-white/80 leading-relaxed">
                                In India, statutory audits are conducted annually for each financial year (1st April to 31st March). These are essential for maintaining legal compliance and presenting a true and fair view of an entity’s financial position.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Company audits are governed by the <strong>Companies Act, 2013</strong>, and are designed to evaluate and report financial statements to regulatory authorities and stakeholders with complete objectivity and credibility.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden text-center">
                    <p className="text-xl text-primary leading-relaxed max-w-4xl mx-auto italic">
                        "The audit process, reporting standards, and formats are strictly prescribed by the government. We uphold the highest standards of transparency and independence in our appointment and execution."
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Company Audits',
                description: 'Independent evaluation of financial statements as per Companies Act, 2013 guidelines.'
            },
            {
                title: 'Tax Audits',
                description: 'Statutory examinations required under the Income Tax Act to ensure accurate tax reporting.'
            },
            {
                title: 'Risk Assessment',
                description: 'Identifying inefficiencies and potential risks through rigorous internal control evaluations.'
            },
            {
                title: 'Due Diligence',
                description: 'Specialized audits providing deep insights for business transactions and acquisitions.'
            },
            {
                title: 'Compliance Assurance',
                description: 'Ensuring your organization meets all mandatory reporting and governance standards.'
            }
        ],
        faqs: [
            {
                question: 'What is the financial year for audits in India?',
                answer: 'The financial year for statutory audits runs from April 1st to March 31st of the following year.'
            },
            {
                question: 'Are internal audits mandatory?',
                answer: 'Internal audits are compulsory for certain classes of entities, but many businesses adopt them voluntarily to strengthen governance.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
