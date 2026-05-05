import React from 'react';
import {
	FiCheckCircle,
	FiClipboard,
	FiLock,
	FiPhoneCall,
	FiRefreshCw,
	FiShield,
} from 'react-icons/fi';

const trustItems = [
	{
		Icon: FiLock,
		title: 'HIPAA Certified',
		desc: 'Full HIPAA compliance with BAA agreements for all clients',
	},
	{
		Icon: FiCheckCircle,
		title: 'SOC 2 Type II',
		desc: 'Audited security controls and continuous monitoring',
	},
	{
		Icon: FiShield,
		title: 'Data Encryption',
		desc: 'End-to-end encryption for all data in transit and at rest',
	},
	{
		Icon: FiClipboard,
		title: 'State Licensing',
		desc: 'Licensed medical billing agents in all 50 states',
	},
	{
		Icon: FiRefreshCw,
		title: '99.8% Uptime',
		desc: 'Redundant systems and 24/7 monitoring for reliability',
	},
	{
		Icon: FiPhoneCall,
		title: '24/7 Support',
		desc: 'Dedicated support team available round the clock',
	},
];

function ComplianceHbs() {
	return (
		<section className="trust">
			<style>{`
				.trust {
					padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 48px);
					background: radial-gradient(circle at top left, #ecfdf5 0%, #f8fafc 48%, #ffffff 100%);
				}

				.trust .section-container {
					max-width: 1100px;
					margin: 0 auto;
				}

				.trust .section-header {
					text-align: center;
					margin-bottom: 32px;
				}

				.trust .section-header h2 {
					font-family: 'Inter', 'Open Sans', Arial, sans-serif;
					font-size: clamp(1.8rem, 3vw, 2.6rem);
					font-weight: 900;
					color: #0f172a;
					letter-spacing: -0.02em;
					margin: 0 0 10px 0;
				}

				.trust .section-header p {
					font-family: 'Inter', 'Open Sans', Arial, sans-serif;
					font-size: 1rem;
					color: #475569;
					margin: 0;
				}

				.trust-grid {
					display: grid;
					/* Force six columns on wide screens to show all six trust items in one row */
					grid-template-columns: repeat(6, minmax(0, 1fr));
					gap: 20px;
					margin-top: 24px;
				}

				/* Responsive fallbacks */
				@media (max-width: 1200px) {
					.trust-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
				}
				@media (max-width: 900px) {
					.trust-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
				}
				@media (max-width: 640px) {
					.trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
				}
				@media (max-width: 420px) {
					.trust-grid { grid-template-columns: 1fr; }
				}

				.trust-item {
					background: #ffffff;
					padding: 22px 20px;
					border-radius: 16px;
					text-align: center;
					border: 1px solid #e2e8f0;
					box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
					transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
				}

				.trust-item:hover {
					transform: translateY(-6px);
					box-shadow: 0 16px 36px rgba(25, 154, 111, 0.14);
					border-color: #199a6f;
				}

				.trust-icon {
					font-size: 2.2rem;
					margin-bottom: 12px;
					display: inline-flex;
					width: 52px;
					height: 52px;
					align-items: center;
					justify-content: center;
					border-radius: 14px;
					background: #ecfdf5;
					color: #199a6f;
				}

				.trust-item h3 {
					font-family: 'Inter', 'Open Sans', Arial, sans-serif;
					font-size: 1.05rem;
					margin: 0 0 6px 0;
					color: #0f172a;
				}

				.trust-item p {
					font-family: 'Inter', 'Open Sans', Arial, sans-serif;
					color: #475569;
					font-size: 0.92rem;
					margin: 0;
					line-height: 1.5;
				}

				@media (max-width: 600px) {
					.trust {
						padding: 40px 18px;
					}

					.trust-grid {
						gap: 16px;
					}
				}
			`}</style>
			<div className="section-container">
				<div className="section-header">
					<h2 style={{ display: 'inline-block', lineHeight: 1.1 }}>
						<span
							style={{
								background: '#3498db',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							Built for healthcare&nbsp;
						</span>
						<span
							style={{
								background: '#1abc9c',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							compliance
						</span>
					</h2>
					<p>Your data security and privacy are our foundation</p>
				</div>
				<div className="trust-grid">
					{trustItems.map((item) => (
						<div className="trust-item" key={item.title}>
							<div className="trust-icon" aria-hidden="true">
								<item.Icon size="1.6em" />
							</div>
							<h3>{item.title}</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ComplianceHbs;
