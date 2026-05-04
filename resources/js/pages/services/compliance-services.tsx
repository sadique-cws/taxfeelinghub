import ServiceDetail from '@/components/service-detail';

export default function ComplianceServices() {
    const data = {
        title: 'Compliance Services',
        description: 'Navigate complex statutory requirements with precision, confidence, and expert guidance.',
        overview: (
            <div className="space-y-8">
                <p>
                    In today’s dynamic regulatory landscape, maintaining timely and accurate compliance is not just a legal necessity—it is a critical pillar of sustainable business growth. At <strong>Tax Filing Hub</strong>, we offer comprehensive compliance management solutions designed to help businesses seamlessly navigate complex statutory requirements with precision and confidence.
                </p>

                <p>
                    Our expert team ensures end-to-end management of all regulatory filings, including ROC annual returns, Income Tax returns, GST filings and reports, EPF, ESI, TDS, and other applicable statutory obligations. We adopt a proactive, technology-driven approach to monitor compliance deadlines, minimize risks, and ensure complete adherence to evolving laws and regulations.
                </p>

                <p>
                    By acting as your dedicated compliance partner, we eliminate the burden of tracking multiple due dates and procedural requirements. Our structured compliance calendar, real-time updates, and meticulous review processes safeguard your business from penalties, legal complications, and reputational risks.
                </p>

                <p>
                    With a focus on accuracy, transparency, and efficiency, our compliance services empower you to concentrate on your core business operations while we handle the regulatory complexities. Whether you are a startup, SME, or established enterprise, our tailored compliance solutions ensure that your organization remains fully compliant, audit-ready, and future-focused.
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
                                Why Choose Our <span className="text-gold italic">Compliance?</span>
                            </h3>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "Timely and accurate statutory filings",
                                "End-to-end compliance management",
                                "Expert handling of ROC, GST, Income Tax, EPF, ESI, and TDS",
                                "Automated compliance tracking and alerts",
                                "Risk mitigation and penalty avoidance",
                                "Dedicated professional support"
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
                    <p className="text-2xl text-primary font-display font-bold leading-relaxed italic">
                        "Stay compliant. Stay confident. Grow without interruptions."
                    </p>
                </div>
            </div>
        ),
        features: [
            {
                title: 'ROC & Annual Filings',
                description: 'End-to-end management of annual returns and statutory registers as per MCA guidelines.'
            },
            {
                title: 'GST & Income Tax',
                description: 'Timely filing of returns and reports with absolute accuracy and transparency.'
            },
            {
                title: 'Payroll Compliance',
                description: 'Expert handling of EPF, ESI, and TDS obligations to ensure employee-related compliance.'
            },
            {
                title: 'Compliance Tracking',
                description: 'Automated monitoring of deadlines and proactive alerts to avoid penalties and risks.'
            },
            {
                title: 'Audit Readiness',
                description: 'Tailored solutions ensuring your organization is always audit-ready and future-focused.'
            }
        ],
        faqs: [
            {
                question: 'Why is a compliance partner essential for my business?',
                answer: 'A dedicated partner ensures you never miss a deadline, stay up-to-date with changing laws, and avoid costly penalties, allowing you to focus on growth.'
            },
            {
                question: 'What happens if my business misses a statutory filing?',
                answer: 'Missing filings can lead to heavy financial penalties, legal complications, and potential reputational damage or loss of good standing.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
