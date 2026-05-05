import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const rows = [
  'Full-time, dedicated employees',
  'Industry-specific certification',
  'HIPAA compliance & BAA',
  'Secure equipment & IT',
  'Physical campus workspaces',
  'Payroll, HR & benefits included',
  "Top leading EHR's training (Athenahealth, Epic)",
  'Dedicated Customer Success Manager',
  '97%+ talent retention rate',
];

const colors = {
  green: '#199A6F',
  blue: '#3498db',
  neutral: '#f1f5f9',
  text: '#0f172a',
  muted: '#64748b',
  danger: '#ef4444',
};

export default function Difference() {
  return (
    <section style={{ padding: 'clamp(40px, 6vw, 64px) 1.25rem', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ display: 'inline-block', lineHeight: 1.1 }}>
						<span
							style={{
								background: '#3498db',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							The difference is&nbsp;
						</span>
						<span
							style={{
								background: '#1abc9c',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							everything else
						</span>
					</h2>
          <p style={{ marginTop: 8, color: colors.muted }}>They find you a freelancer. We build you a team.</p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 920 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '18px 20px', background: '#fff', border: '1px solid #eef2f7', borderTopLeftRadius: 12 }}>WHAT YOU GET</th>
                <th style={{ textAlign: 'center', padding: '18px 20px', background: '#fff', border: '1px solid #eef2f7' }}>
                  <div style={{ color: colors.blue, fontWeight: 800 }}>HBS</div>
                </th>
                <th style={{ textAlign: 'center', padding: '18px 20px', background: '#fff', border: '1px solid #eef2f7', borderTopRightRadius: 12 }}>VA / STAFFING</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r} style={{ background: i % 2 === 0 ? '#fff' : colors.neutral }}>
                  <td style={{ padding: '16px 20px', border: '1px solid #eef2f7', color: colors.text }}>{r}</td>
                  <td style={{ padding: '16px 20px', border: '1px solid #eef2f7', textAlign: 'center' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center', color: colors.green }}>
                      <span style={{ width: 28, height: 28, borderRadius: 9999, background: 'rgba(25,154,111,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaCheckCircle style={{ color: colors.green }} />
                      </span>
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', border: '1px solid #eef2f7', textAlign: 'center' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center', color: colors.danger }}>
                      <span style={{ width: 28, height: 28, borderRadius: 9999, background: 'rgba(239,68,68,0.06)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaTimesCircle style={{ color: colors.danger }} />
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          table { min-width: 720px; }
        }
        @media (max-width: 640px) {
          table { min-width: 560px; }
        }
      `}</style>
    </section>
  );
}
