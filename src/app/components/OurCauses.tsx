import React from 'react'; 
import Link from '@/components/ui/Link'; 
import Icon from '@/components/ui/AppIcon'; 
 
export default function OurCauses() { 
  const impactSteps = [ 
    { 
      num: '01', 
      icon: '/assets/images/icon6.png', 
      title: 'Understand the Need', 
      desc: 'We understand each family’s situation and what support they need.', 
    }, 
    { 
      num: '02', 
      icon: '/assets/images/icon7.png', 
      title: 'Provide Support', 
      desc: 'We connect families with the right help, resources and opportunities.', 
    }, 
    { 
      num: '03', 
      icon: '/assets/images/icon8.png', 
      title: 'Build a Better Life', 
      desc: 'We help families build a better life.', 
    }, 
  ]; 
 
  return ( 
    <section className="relative overflow-hidden bg-[#f4efe8] py-20"> 
 
      {/* ========================================================= 
          BACKGROUND WATERMARKS 
      ========================================================= */} 
 
      {/* LEFT - EDUCATION WATERMARK */} 
      <div 
        className=" 
          pointer-events-none 
          absolute 
          left-[15px] 
          top-[5px] 
          z-0 
          hidden 
          h-[430px] 
          w-[430px] 
          overflow-hidden 
          lg:block 
        " 
      > 
        <img 
          src="/assets/images/watermark6.png" 
          alt="" 
          aria-hidden="true" 
          className=" 
            h-full 
            w-full 
            object-contain 
            object-left-top 
            opacity-[0.4] 
          " 
        /> 
      </div> 
 
      {/* RIGHT - HEALTHCARE WATERMARK */} 
      <div 
        className=" 
          pointer-events-none 
          absolute 
          right-[15px] 
          top-[5px] 
          z-0 
          hidden 
          h-[430px] 
          w-[430px] 
          overflow-hidden 
          lg:block 
        " 
      > 
        <img 
          src="/assets/images/watermark5.png" 
          alt="" 
          aria-hidden="true" 
          className=" 
            h-full 
            w-full 
            object-contain 
            object-right-top 
            opacity-[0.22] 
          " 
        /> 
      </div> 
 
      {/* ========================================================= 
          MAIN CONTENT 
      ========================================================= */} 
 
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"> 
 
        {/* ========================================================= 
            SECTION HEADER 
        ========================================================= */} 
 
        <div className="mb-10 text-center"> 
 
          <p className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[#c8912c] sm:text-[0.9rem]"> 
            OUR CAUSES 
          </p> 
 
          <h2 
            className="text-[clamp(2.4rem,3.8vw,4.2rem)] leading-[1] tracking-[-0.04em] text-[#0d1b2a]" 
            style={{ 
              fontFamily: 'Cormorant Garamond, Georgia, serif', 
              fontWeight: 700, 
              letterSpacing: '-0.04em', 
            }} 
          > 
            Two causes. One commitment. 
          </h2> 
 
        </div> 
 
        {/* ========================================================= 
            CAUSE CARDS 
        ========================================================= */} 
 
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2"> 
 
          {/* EDUCATION */} 
          <div className="group relative overflow-hidden rounded-[24px] border border-[#d6a64c]/80 bg-[#0d4236] shadow-[0_20px_40px_rgba(13,27,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a64c] hover:shadow-[0_24px_52px_rgba(13,27,42,0.18)]"> 
 
            <div className="absolute inset-0"> 
 
              <img 
                src="/assets/images/causeEdu.png" 
                alt="Education support" 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" 
              /> 
 
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,29,0.1)_0%,rgba(4,20,29,0.28)_35%,rgba(4,20,29,0.82)_100%)]" /> 
 
            </div> 
 
            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-6 md:p-8"> 
 
              <div className="flex items-center justify-start"> 
 
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2px] border-[#d6a64c] bg-[#0a2530]/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(214,166,76,0.35)]"> 
 
                  <Icon 
                    name="AcademicCapIcon" 
                    size={30} 
                    className="text-[#d6a64c]" 
                  /> 
 
                </div> 
 
              </div> 
 
              <div> 
 
                <h3 
                  className="mb-2 text-[clamp(2rem,2.8vw,2.8rem)] leading-[0.98] text-white" 
                  style={{ 
                    fontFamily: 'Cormorant Garamond, Georgia, serif', 
                    fontWeight: 700, 
                    letterSpacing: '-0.04em', 
                  }} 
                > 
                  Education 
                </h3> 
 
                <p className="mb-4 text-[1.05rem] font-medium text-[#d6a64c]"> 
                  Creates Possibility 
                </p> 
 
                <p className="mb-6 max-w-[28rem] text-[0.95rem] leading-[1.7] text-white/80"> 
                  We help children and youth access quality education, skills 
                  and opportunities to build independent and confident futures. 
                </p> 
 
                <Link 
                  href="/causes/education" 
                  className="btn-gold inline-flex items-center gap-2" 
                > 
                  Explore Education 
 
                  <Icon 
                    name="ArrowRightIcon" 
                    size={16} 
                  /> 
 
                </Link> 
 
              </div> 
 
            </div> 
 
          </div> 
 
          {/* HEALTHCARE */} 
          <div className="group relative overflow-hidden rounded-[24px] border border-[#d6a64c]/80 bg-[#0d4236] shadow-[0_20px_40px_rgba(13,27,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a64c] hover:shadow-[0_24px_52px_rgba(13,27,42,0.18)]"> 
 
            <div className="absolute inset-0"> 
 
              <img 
                src="/assets/images/causeHealth.png" 
                alt="Healthcare support" 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" 
              /> 
 
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,29,0.1)_0%,rgba(4,20,29,0.28)_35%,rgba(4,20,29,0.82)_100%)]" /> 
 
            </div> 
 
            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-6 md:p-8"> 
 
              <div className="flex items-center justify-start"> 
 
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2px] border-[#d6a64c] bg-[#0a2530]/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(214,166,76,0.35)]"> 
 
                  <Icon 
                    name="HeartIcon" 
                    size={30} 
                    className="text-[#d6a64c]" 
                  /> 
 
                </div> 
 
              </div> 
 
              <div> 
 
                <h3 
                  className="mb-2 text-[clamp(2rem,2.8vw,2.8rem)] leading-[0.98] text-white" 
                  style={{ 
                    fontFamily: 'Cormorant Garamond, Georgia, serif', 
                    fontWeight: 700, 
                    letterSpacing: '-0.04em', 
                  }} 
                > 
                  Healthcare 
                </h3> 
 
                <p className="mb-4 text-[1.05rem] font-medium text-[#d6a64c]"> 
                  Brings Hope 
                </p> 
 
                <p className="mb-6 max-w-[28rem] text-[0.95rem] leading-[1.7] text-white/80"> 
                  We support access to essential healthcare and care-related 
                  assistance for families when they need it most. 
                </p> 
 
                <Link 
                  href="/causes/healthcare" 
                  className="btn-gold inline-flex items-center gap-2" 
                > 
                  Explore Healthcare 
 
                  <Icon 
                    name="ArrowRightIcon" 
                    size={16} 
                  /> 
 
                </Link> 
 
              </div> 
 
            </div> 
 
          </div> 
 
        </div> 
 
        {/* ========================================================= 
            HOW WE CREATE IMPACT 
        ========================================================= */} 
 
        <div className="mt-20"> 
 
          <div className="mb-8 text-center"> 
 
            <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[#c8912c] sm:text-[0.9rem]"> 
              HOW WE CREATE IMPACT 
            </p> 
 
            <p className="mx-auto max-w-[760px] text-[1.25rem] leading-relaxed text-[#0d1b2a]"> 
              Our approach is simple: understand what families need, provide 
              the right support and help them build a better future. 
            </p> 
 
          </div> 
 
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3"> 
 
            {impactSteps.map((step, index) => ( 
 
              <div 
                key={step.num} 
                className="relative h-full" 
              > 
 
                {index < 2 && ( 
 
                  <div className="absolute left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] top-8 hidden h-px bg-gradient-to-r from-[#c8912c]/80 via-[#d6a64c]/70 to-transparent md:block" /> 
 
                )} 
 
                <div className="relative z-10 flex h-full min-h-[290px] flex-col items-center rounded-[20px] border border-[#e0d6c1] bg-[#f6f0e8] p-6 px-5 text-center shadow-[0_8px_22px_rgba(35,32,25,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(35,32,25,0.08)]"> 
 
                  {/* NUMBER */} 
                  <div 
                    className="mb-5 text-[2.7rem] leading-none text-[#c8912c]" 
                    style={{ 
                      fontFamily: 'Cormorant Garamond, Georgia, serif', 
                      fontWeight: 700, 
                    }} 
                  > 
                    {step.num} 
                  </div> 
 
                  {/* ICON */} 
                  <div className="mb-5 flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-full border-[2px] border-[#c8912c] bg-[#f8f1e9]"> 
 
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      className="h-12 w-12 object-contain" 
                    /> 
 
                  </div> 
 
                  {/* TITLE */} 
                  <h3 
                    className="mb-3 text-[1.9rem] leading-none text-[#0d1b2a]" 
                    style={{ 
                      fontFamily: 'Cormorant Garamond, Georgia, serif', 
                      fontWeight: 700, 
                      letterSpacing: '-0.025em', 
                    }} 
                  > 
                    {step.title} 
                  </h3> 
 
                  {/* DESCRIPTION */} 
                  <p className="max-w-[230px] text-[0.8rem] leading-[1.7] text-[#4a4a45]"> 
                    {step.desc} 
                  </p> 
 
                </div> 
 
              </div> 
 
            ))} 
 
          </div> 
 
        </div> 
 
      </div> 
 
    </section> 
  ); 
}