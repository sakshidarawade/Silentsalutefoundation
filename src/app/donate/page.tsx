// 'use client';

// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Icon from '@/components/ui/AppIcon';

// const presetAmounts = [500, 1000, 2500, 5000];

// const causes = [
//   {
//     value: 'education',
//     label: 'Education — Scholarships & School Support',
//   },
//   {
//     value: 'healthcare',
//     label: 'Healthcare — Medical Aid & Camps',
//   },
//   {
//     value: 'general',
//     label: 'General Support — Where Needed Most',
//   },
// ];

// export default function DonatePage() {
//   const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
//   const [customAmount, setCustomAmount] = useState('');
//   const [cause, setCause] = useState('general');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const finalAmount = customAmount
//     ? parseInt(customAmount) || 0
//     : selectedAmount || 0;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <main>
//       <Navbar />

//       {/* =========================================
//           HERO BANNER
//       ========================================= */}
//       <section
//         className="relative overflow-hidden pt-32 pb-16"
//         style={{
//           background:
//             'linear-gradient(135deg, #08111A 0%, #0D1B2A 60%, #1A3050 100%)',
//         }}
//       >
//         {/* Background Glow */}
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             background:
//               'radial-gradient(ellipse at 60% 50%, rgba(201,145,42,0.3) 0%, transparent 60%)',
//           }}
//         />

//         <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
//           {/* Eyebrow */}
//           <p
//             className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#D6A64C] sm:text-[13px]"
//             style={{
//               fontFamily:
//                 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//             }}
//           >
//             MAKE A DIFFERENCE TODAY
//           </p>

//           {/* Heading */}
//           <h1
//             className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
//             style={{
//               fontFamily: '"Cormorant Garamond", Georgia, serif',
//             }}
//           >
//             Support a Family Today
//           </h1>

//           {/* Gold Divider */}
//           <div className="mx-auto mb-5 h-[2px] w-[72px] bg-[#D6A64C]" />

//           {/* Description */}
//           <p
//             className="mx-auto max-w-xl text-[15px] leading-[1.75] text-white/70 sm:text-[16px]"
//             style={{
//               fontFamily:
//                 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//             }}
//           >
//             100% of your donation reaches the families directly.
//             Transparent, secure, and tax-exempt under Section 80G.
//           </p>
//         </div>
//       </section>

//       {/* =========================================
//           DONATION FORM SECTION

//           LARGE EMPTY SPACE ABOVE FORM
//       ========================================= */}
//       <section className="bg-secondary pt-28 pb-16 sm:pt-32 sm:pb-20">
//         <div className="mx-auto max-w-3xl px-4 sm:px-6">
//           {submitted ? (
//             /* =========================================
//                 SUCCESS STATE
//             ========================================= */
//             <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-xl sm:p-12">
//               <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
//                 <Icon
//                   name="CheckCircleIcon"
//                   size={40}
//                   className="text-accent"
//                 />
//               </div>

//               <h2
//                 className="mb-3 text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground"
//                 style={{
//                   fontFamily: '"Cormorant Garamond", Georgia, serif',
//                 }}
//               >
//                 Thank You!
//               </h2>

//               <p
//                 className="mb-2 text-[15px] leading-[1.75] text-muted-foreground sm:text-[16px]"
//                 style={{
//                   fontFamily:
//                     'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 }}
//               >
//                 Your generous contribution of{' '}
//                 <strong className="font-semibold text-accent">
//                   ₹{finalAmount.toLocaleString('en-IN')}
//                 </strong>{' '}
//                 has been received.
//               </p>

//               <p
//                 className="mb-8 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px]"
//                 style={{
//                   fontFamily:
//                     'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 }}
//               >
//                 A confirmation will be sent to <strong>{email}</strong>.
//                 Your 80G certificate will be issued within 7 working days.
//               </p>

//               <button
//                 type="button"
//                 onClick={() => setSubmitted(false)}
//                 className="btn-gold"
//                 style={{
//                   fontFamily:
//                     'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                 }}
//               >
//                 Donate Again
//               </button>
//             </div>
//           ) : (
//             /* =========================================
//                 DONATION FORM
//             ========================================= */
//             <form
//               onSubmit={handleSubmit}
//               className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl"
//             >
//               {/* =========================================
//                   FORM HEADER
//               ========================================= */}
//               <div className="bg-[#0D1B2A] p-6 sm:p-7">
//                 <h2
//                   className="text-[clamp(1.8rem,2.5vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-white"
//                   style={{
//                     fontFamily: '"Cormorant Garamond", Georgia, serif',
//                   }}
//                 >
//                   Your Donation Details
//                 </h2>

//                 <p
//                   className="mt-2 text-[13px] leading-[1.7] text-white/65 sm:text-[14px]"
//                   style={{
//                     fontFamily:
//                       'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                   }}
//                 >
//                   Fill in your details and choose how you want to contribute.
//                 </p>
//               </div>

//               {/* =========================================
//                   FORM CONTENT
//               ========================================= */}
//               <div className="space-y-8 p-6 sm:p-8">
//                 {/* =========================================
//                     CAUSE SELECTION
//                 ========================================= */}
//                 <div>
//                   <label
//                     className="form-label"
//                     style={{
//                       fontFamily:
//                         'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       fontSize: '14px',
//                     }}
//                   >
//                     Select a Cause
//                   </label>

//                   <select
//                     value={cause}
//                     onChange={(e) => setCause(e.target.value)}
//                     className="form-input"
//                     style={{
//                       fontFamily:
//                         'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       fontSize: '14px',
//                     }}
//                   >
//                     {causes.map((item) => (
//                       <option key={item.value} value={item.value}>
//                         {item.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* =========================================
//                     AMOUNT SELECTION
//                 ========================================= */}
//                 <div>
//                   <label
//                     className="form-label"
//                     style={{
//                       fontFamily:
//                         'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       fontSize: '14px',
//                     }}
//                   >
//                     Donation Amount (₹)
//                   </label>

//                   <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
//                     {presetAmounts.map((amount) => (
//                       <button
//                         key={amount}
//                         type="button"
//                         className={`amount-btn ${
//                           selectedAmount === amount && !customAmount
//                             ? 'selected'
//                             : ''
//                         }`}
//                         onClick={() => {
//                           setSelectedAmount(amount);
//                           setCustomAmount('');
//                         }}
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       >
//                         ₹{amount.toLocaleString('en-IN')}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Custom Amount */}
//                   <div className="relative">
//                     <span
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px] font-semibold text-muted-foreground"
//                       style={{
//                         fontFamily:
//                           'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       }}
//                     >
//                       ₹
//                     </span>

//                     <input
//                       type="number"
//                       placeholder="Enter custom amount"
//                       value={customAmount}
//                       min="100"
//                       onChange={(e) => {
//                         setCustomAmount(e.target.value);
//                         setSelectedAmount(null);
//                       }}
//                       className="form-input pl-8"
//                       style={{
//                         fontFamily:
//                           'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                         fontSize: '14px',
//                       }}
//                     />
//                   </div>

//                   {finalAmount > 0 && (
//                     <p
//                       className="mt-3 text-[14px] font-semibold text-accent"
//                       style={{
//                         fontFamily:
//                           'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                       }}
//                     >
//                       You are donating: ₹
//                       {finalAmount.toLocaleString('en-IN')}
//                     </p>
//                   )}
//                 </div>

//                 {/* =========================================
//                     DONOR DETAILS
//                 ========================================= */}
//                 <div>
//                   <h3
//                     className="mb-5 text-[clamp(1.6rem,2vw,1.9rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground"
//                     style={{
//                       fontFamily: '"Cormorant Garamond", Georgia, serif',
//                     }}
//                   >
//                     Your Details
//                   </h3>

//                   <div className="space-y-4">
//                     {/* Full Name */}
//                     <div>
//                       <label
//                         className="form-label"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       >
//                         Full Name *
//                       </label>

//                       <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         placeholder="Your full name"
//                         className="form-input"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       />
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label
//                         className="form-label"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       >
//                         Email Address *
//                       </label>

//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         placeholder="your@email.com"
//                         className="form-input"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       />
//                     </div>

//                     {/* Phone */}
//                     <div>
//                       <label
//                         className="form-label"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       >
//                         Phone Number
//                       </label>

//                       <input
//                         type="tel"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         placeholder="+91 98765 43210"
//                         className="form-input"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                           fontSize: '14px',
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* =========================================
//                     TRUST INDICATORS
//                 ========================================= */}
//                 <div className="grid grid-cols-3 gap-3 border-y border-border py-5 sm:gap-4">
//                   {[
//                     {
//                       icon: 'ShieldCheckIcon',
//                       label: '100% Transparent',
//                     },
//                     {
//                       icon: 'LockClosedIcon',
//                       label: 'Secure Payment',
//                     },
//                     {
//                       icon: 'DocumentCheckIcon',
//                       label: '80G Exempt',
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="flex flex-col items-center gap-2 text-center"
//                     >
//                       <Icon
//                         name={
//                           item.icon as
//                             | 'ShieldCheckIcon'
//                             | 'LockClosedIcon'
//                             | 'DocumentCheckIcon'
//                         }
//                         size={22}
//                         className="text-accent"
//                       />

//                       <span
//                         className="text-[11px] font-medium text-muted-foreground sm:text-[12px]"
//                         style={{
//                           fontFamily:
//                             'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                         }}
//                       >
//                         {item.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* =========================================
//                     SUBMIT BUTTON
//                 ========================================= */}
//                 <button
//                   type="submit"
//                   disabled={finalAmount < 100}
//                   className="btn-gold w-full justify-center py-4 text-[15px] font-semibold disabled:cursor-not-allowed disabled:opacity-50"
//                   style={{
//                     fontFamily:
//                       'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                   }}
//                 >
//                   <Icon name="CurrencyRupeeIcon" size={18} />

//                   Pay ₹
//                   {finalAmount > 0
//                     ? finalAmount.toLocaleString('en-IN')
//                     : '—'}{' '}
//                   Now
//                 </button>

//                 {/* Terms */}
//                 <p
//                   className="text-center text-[12px] leading-[1.7] text-muted-foreground"
//                   style={{
//                     fontFamily:
//                       'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
//                   }}
//                 >
//                   By donating, you agree to our Terms &amp; Conditions.
//                   This is a mock payment form — no real transaction will occur.
//                 </p>
//               </div>
//             </form>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export default function DonatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* =========================================
          HERO BANNER
      ========================================= */}
      <section
        className="relative overflow-hidden pt-32 pb-16"
        style={{
          background:
            'linear-gradient(135deg, #08111A 0%, #0D1B2A 60%, #1A3050 100%)',
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 60% 50%, rgba(201,145,42,0.3) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          {/* Eyebrow */}
          <p
            className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#D6A64C] sm:text-[13px]"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            MAKE A DIFFERENCE TODAY
          </p>

          {/* Heading */}
          <h1
            className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Support a Family Today
          </h1>

          {/* Gold Divider */}
          <div className="mx-auto mb-5 h-[2px] w-[72px] bg-[#D6A64C]" />

          {/* Description */}
          <p
            className="mx-auto max-w-xl text-[15px] leading-[1.75] text-white/70 sm:text-[16px]"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Your contribution can help create meaningful change in the
            lives of families who need support.
          </p>
        </div>
      </section>

      {/* =========================================
          DONATION FORM SECTION
      ========================================= */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">

          {submitted ? (
            /* =========================================
                SUCCESS STATE
            ========================================= */
            <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-xl sm:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Icon
                  name="CheckCircleIcon"
                  size={40}
                  className="text-accent"
                />
              </div>

              <h2
                className="mb-3 text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                Thank You!
              </h2>

              <p
                className="mb-8 text-[15px] leading-[1.75] text-muted-foreground sm:text-[16px]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Thank you for reaching out to Silent Salute Foundation.
                We have received your details and will connect with you soon.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setPhone('');
                  setMessage('');
                }}
                className="btn-gold"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            /* =========================================
                DONATION FORM
            ========================================= */
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl"
            >

              {/* =========================================
                  FORM HEADER
              ========================================= */}
              <div className="bg-[#0D1B2A] p-6 sm:p-7">
                <h2
                  className="text-[clamp(1.8rem,2.5vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-white"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                  }}
                >
                  Get in Touch
                </h2>

                <p
                  className="mt-2 text-[13px] leading-[1.7] text-white/65 sm:text-[14px]"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  Share your details and message with us.
                </p>
              </div>

              {/* =========================================
                  FORM CONTENT
              ========================================= */}
              <div className="space-y-6 p-6 sm:p-8">

                {/* FULL NAME */}
                <div>
                  <label
                    className="form-label"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    Full Name *
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="form-label"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    Email Address *
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="form-input"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  />
                </div>

                {/* CONTACT NUMBER */}
                <div>
                  <label
                    className="form-label"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    Contact Number *
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    className="form-label"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    Message *
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="form-input resize-none py-3"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '14px',
                    }}
                  />
                </div>

                {/* =========================================
                    DONATE BUTTON
                ========================================= */}
                <button
                  type="submit"
                  className="btn-gold flex w-full items-center justify-center gap-2 py-4 text-[15px] font-semibold"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <Icon name="HeartIcon" size={18} />
                  Send
                </button>

              </div>
            </form>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}