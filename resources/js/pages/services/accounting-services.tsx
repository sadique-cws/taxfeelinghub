import ServiceDetail from '@/components/service-detail';

export default function AccountingServices() {
    const data = {
        title: 'Doorstep Accounting & Payroll',
        description: 'On-site bookkeeping, payroll and consultancy at your office.',
        overview: 'For businesses that prefer a more hands-on approach, we offer on-site accounting and payroll services. Our experts visit your office to manage your financial operations, process payroll, and handle employee-related compliance like PF and ESI, ensuring your team is paid on time and your records never leave your premises.',
        features: [
            {
                title: 'On-site Accounting',
                description: 'Our accountants work from your office periodically to maintain books and handle physical records.'
            },
            {
                title: 'Payroll Processing',
                description: 'Complete payroll cycle management including payslips, tax deductions, and disbursements.'
            },
            {
                title: 'PF & ESI Compliance',
                description: 'Handling registrations, monthly filings, and annual returns for social security schemes.'
            },
            {
                title: 'Internal Control',
                description: 'Setting up and monitoring internal financial controls at your place of business.'
            }
        ],
        faqs: [
            {
                question: 'How often will your team visit our office?',
                answer: 'Visitation frequency is customized based on your transaction volume — it can range from once a week to daily.'
            },
            {
                question: 'Do you provide payslips to employees?',
                answer: 'Yes, we provide digital payslips and maintain detailed payroll registers for each employee.'
            }
        ]
    };

    return <ServiceDetail {...data} />;
}
