import ServiceDetail from '@/components/service-detail';

export default function FirmCompanyRegistration() {
    const data = {
        title: 'Company Registration Services',
        description: 'End-to-end incorporation and compliance solutions for Private Limited, LLP, OPC, and more.',
        overview: (
            <div className="space-y-8">
                <p>
                    At <strong>Tax Filing Hub</strong>, we deliver comprehensive, end-to-end company registration and compliance solutions tailored for modern businesses. Our expertise spans Private Limited Company, Public Limited Company, LLP, OPC, Section 8 Company, Nidhi Company, and Chit Fund Company registration, ensuring a seamless and legally compliant setup.
                </p>

                <p>
                    From documentation and name approval to incorporation and post-registration formalities, our experienced professionals manage the entire process with precision. We simplify complex procedures and provide customized advisory aligned with your business structure, helping you start right and stay compliant from day one.
                </p>

                <p>
                    With deep domain knowledge and up-to-date regulatory insight, we ensure timely filings, accurate documentation, and cost-effective execution. Our proactive approach helps businesses avoid penalties, ensure regulatory compliance, and maintain good standing with authorities.
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
                                MCA & <span className="text-gold italic">Secretarial</span>
                            </h3>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Beyond incorporation, we offer integrated ROC and Secretarial Compliance services, including annual filings, statutory registers, board resolutions, and corporate governance support in accordance with Ministry of Corporate Affairs (MCA) guidelines. Our team ensures that all legal and procedural requirements are met efficiently and on time.
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden text-center">
                    <p className="text-2xl text-primary font-display font-bold leading-relaxed">
                        "Whether you are a startup, SME, or expanding enterprise, Tax Filing Hub acts as your trusted compliance partner—allowing you to focus on growth while we manage the legal and regulatory framework."
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'New Incorporation',
                description: 'End-to-end management of documentation, name approval, and incorporation for all business entities.'
            },
            {
                title: 'Secretarial Compliance',
                description: 'Annual filings, statutory registers, and board resolutions in accordance with MCA guidelines.'
            },
            {
                title: 'Regulatory Filings',
                description: 'Ensuring timely and accurate filings to maintain good standing and avoid heavy penalties.'
            },
            {
                title: 'Business Structuring',
                description: 'Customized advisory to ensure your business structure is optimized for long-term growth.'
            },
            {
                title: 'Post-Registration Support',
                description: 'Full assistance with all formalities required immediately after your company is incorporated.'
            }
        ],
        faqs: [
            {
                question: 'Which business structure is right for me?',
                answer: 'It depends on your goals, capital, and liability preferences. We provide customized advisory to help you choose between Pvt Ltd, LLP, OPC, or other structures.'
            },
            {
                question: 'What are post-registration formalities?',
                answer: 'These include opening a bank account, appointing auditors, and filing initial compliance documents with the ROC.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
