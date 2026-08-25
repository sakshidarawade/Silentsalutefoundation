import React from 'react';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    quote: 'Silent Salute Foundation gave my children a chance at education when I had lost all hope. They didn\'t just help us financially — they gave us back our dignity.',
    name: 'Kavitha Rajendran',
    role: 'Wife of Martyr Naib Subedar Rajendran',
    location: 'Tamil Nadu',
    stars: 5,
  },
  {
    quote: 'When my husband was injured on duty, we didn\'t know how to manage medical expenses. The foundation\'s healthcare support covered everything. They truly care.',
    name: 'Anjali Thakur',
    role: 'Spouse of Ex-Serviceman, Indian Army',
    location: 'Himachal Pradesh',
    stars: 5,
  },
  {
    quote: 'My son is now pursuing engineering — something I never imagined possible after my husband\'s martyrdom. Silent Salute made this dream real.',
    name: 'Pushpa Yadav',
    role: 'Widow of CISF Constable Ramesh Yadav',
    location: 'Uttar Pradesh',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">TESTIMONIALS</p>
          <h2 className="section-heading text-foreground mb-4">
            Words from the families we serve.
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.stars })?.map((_, j) => (
                  <Icon key={j} name="StarIcon" size={16} variant="solid" className="text-accent" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display text-accent text-5xl leading-none mb-2 opacity-40">"</div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                {t?.quote}
              </p>

              <div className="border-t border-border pt-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  {t?.name?.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t?.name}</div>
                  <div className="text-muted-foreground text-xs">{t?.role}</div>
                  <div className="text-accent text-xs">{t?.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}