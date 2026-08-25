import React from 'react';

const partners = [
  { name: 'Sainik Welfare Board', type: 'Government Partner', state: 'National' },
  { name: 'Ex-Servicemen Contributory Health Scheme', type: 'Healthcare Partner', state: 'National' },
  { name: 'Indian Red Cross Society', type: 'Humanitarian Partner', state: 'National' },
  { name: 'Kendriya Sainik Board', type: 'Welfare Partner', state: 'New Delhi' },
  { name: 'Army Wives Welfare Association', type: 'Community Partner', state: 'National' },
  { name: 'National Skill Development Corporation', type: 'Skill Partner', state: 'National' },
  { name: 'Rajya Sainik Board (UP)', type: 'State Partner', state: 'Uttar Pradesh' },
  { name: 'Veer Nari Welfare Foundation', type: 'Welfare Partner', state: 'Rajasthan' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">OUR PARTNERS</p>
          <h2 className="section-heading text-foreground mb-4">
            Partners in Purpose
          </h2>
          <div className="divider-gold mx-auto mb-5" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            We work with government bodies, welfare organizations, and civil society partners to maximize impact for families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners?.map((p) => (
            <div key={p?.name} className="partner-card">
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.1), rgba(201,145,42,0.15))' }}
              >
                <span className="font-display font-bold text-accent text-xl">
                  {p?.name?.charAt(0)}
                </span>
              </div>
              <h4 className="font-semibold text-foreground text-sm text-center mb-1">{p?.name}</h4>
              <p className="text-accent text-xs text-center font-medium">{p?.type}</p>
              <p className="text-muted-foreground text-xs text-center mt-1">{p?.state}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}