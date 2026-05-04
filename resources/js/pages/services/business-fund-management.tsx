import ServiceDetail from '@/components/service-detail';

export default function BusinessFundManagement() {
    const data = {
        title: 'Business & Fund Management',
        description: 'Empowering enterprises with strategic access to capital and long-term financial stability.',
        overview: (
            <div className="space-y-8">
                <p>
                    At <strong>Tax Filing Hub</strong>, we deliver strategic Business & Fund Management solutions designed to empower enterprises with seamless access to capital and long-term financial stability. Our comprehensive financing support spans Mudra Loans, Business Loans, Term Loans, Personal Loans, and Housing Loans, tailored to meet the evolving needs of startups, MSMEs, and growing businesses.
                </p>

                <p>
                    We specialize in assisting businesses in securing government-backed funding schemes, including Mudra loans, ensuring simplified access to affordable credit. Our team of seasoned professionals provides end-to-end guidance—from eligibility assessment and documentation to application filing and loan disbursement—ensuring a smooth, compliant, and efficient process.
                </p>

                <p>
                    With deep domain expertise and a client-focused approach, we go beyond traditional advisory. We analyze your financial profile, structure the most suitable funding strategy, and connect you with the right lending institutions to maximize approval success. Whether you are launching a new venture, expanding operations, or managing working capital, our solutions are designed to support sustainable growth.
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
                                Our <span className="text-gold italic">Philosophy</span>
                            </h3>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Transparency, integrity, and precision are the cornerstones of our service philosophy. We ensure that every client is well-informed, financially aware, and strategically positioned to make sound funding decisions. Our commitment to excellence enables businesses to unlock opportunities, optimize cash flow, and achieve their financial objectives with confidence.
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-14 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden text-center">
                    <p className="text-2xl text-primary font-display font-bold leading-relaxed">
                        "If you are seeking a reliable partner for business financing and fund management services, Tax Filing Hub stands as your trusted advisor."
                    </p>
                    <p className="mt-4 text-muted-foreground text-lg italic">
                        Connect with us today to explore tailored funding solutions and accelerate your business growth journey.
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'Government Schemes',
                description: 'End-to-end guidance for securing Mudra loans and other government-backed funding.'
            },
            {
                title: 'CMA Data & Reports',
                description: 'Expert preparation of Credit Monitoring Arrangement (CMA) data for bank loan approvals.'
            },
            {
                title: 'Capital Structuring',
                description: 'Analyzing financial profiles to design the most suitable funding and growth strategies.'
            },
            {
                title: 'Strategic Lending',
                description: 'Connecting your business with the right lending institutions to maximize approval rates.'
            },
            {
                title: 'Disbursement Support',
                description: 'Complete assistance from documentation and eligibility checks to final loan disbursement.'
            }
        ],
        faqs: [
            {
                question: 'What types of loans do you assist with?',
                answer: 'We provide support for Mudra Loans, Business Loans, Term Loans, Personal Loans, and Housing Loans.'
            },
            {
                question: 'How do you help in the loan approval process?',
                answer: 'We handle everything from financial profile analysis and CMA data preparation to documentation and liaison with lenders.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
