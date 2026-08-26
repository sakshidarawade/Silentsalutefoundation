// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Link from '@/components/ui/Link';
// import AppImage from '@/components/ui/AppImage';
// import Icon from '@/components/ui/AppIcon';

// const aboutDropdown = [
//   { label: 'Who We Are', href: '/about/who-we-are' },
//   { label: 'How We Work', href: '/about/how-we-work' },
//   { label: 'Partners', href: '/about/partners' },
//   { label: 'Leaders & Team', href: '/about/team' },
//   { label: 'Transparency', href: '/about/transparency' },
// ];

// const causesDropdown = [
//   { label: 'Education', href: '/causes/education' },
//   { label: 'Healthcare', href: '/causes/healthcare' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [causesOpen, setCausesOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
//   const [mobileCausesOpen, setMobileCausesOpen] = useState(false);
//   const [logoPreviewOpen, setLogoPreviewOpen] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);

//     window.addEventListener('scroll', handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   // Lock scroll and allow Escape to close the logo preview
//   useEffect(() => {
//     if (logoPreviewOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setLogoPreviewOpen(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.body.style.overflow = '';
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [logoPreviewOpen]);

//   useEffect(() => {
//     setAboutOpen(false);
//     setCausesOpen(false);
//   }, [location.pathname]);

//   const isActive = (href: string) => {
//     if (href === '/') {
//       return location.pathname === '/';
//     }

//     return location.pathname.startsWith(href.split('#')[0]);
//   };

//   const openAbout = () => {
//     setAboutOpen(true);
//     setCausesOpen(false);
//   };

//   const openCauses = () => {
//     setCausesOpen(true);
//     setAboutOpen(false);
//   };

//   // Menu items: navy blue before scrolling, white once scrolled
//   const navLinkColor = scrolled
//     ? 'text-white/90 hover:text-accent'
//     : 'text-[#173A5E] hover:text-[#C9912A]';

//   const navChevronColor = scrolled
//     ? 'text-white/90 hover:text-accent'
//     : 'text-[#173A5E] hover:text-[#C9912A]';

//   // Hindi subtitle: navy blue only before scrolling, back to white once scrolled
//   const hindiColor = scrolled ? 'text-white/70' : 'text-[#173A5E]';

//   // Silent Salute logo text: navy blue only before scrolling, white once scrolled
//   const logoTextColor = scrolled ? 'text-white' : 'text-[#173A5E]';

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-[#0D1B2A]/95 shadow-lg shadow-black/30'
//             : 'bg-[#0D1B2A]/20 backdrop-blur-md border-b border-white/10'
//         }`}
//         style={{ height: '94px' }}
//       >
//         <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 flex-shrink-0"
//             onClick={(event) => {
//               event.preventDefault();
//               setLogoPreviewOpen(true);
//             }}
//           >
//             <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/90 shadow-sm ring-2 ring-white/20 sm:h-[68px] sm:w-[68px]">
//               <AppImage
//                 src="/assets/images/logo.png"
//                 alt="Silent Salute Foundation Logo"
//                 width={72}
//                 height={72}
//                 className="h-full w-full object-cover"
//                 priority
//               />
//             </div>

//             <div className="hidden sm:block">
//               <div className={`font-display text-[0.9rem] leading-[1.05] tracking-[0.08em] uppercase sm:text-[1rem] transition-colors ${logoTextColor}`}>
//                 Silent Salute
//               </div>

//               <div className="font-display text-[#F4D08B] text-[0.9rem] leading-[1.05] tracking-[0.08em] uppercase sm:text-[1rem]">
//                 Foundation
//               </div>

//               <div className={`mt-2 text-[14px] leading-[1.3] max-w-[180px] font-medium transition-colors ${hindiColor}`}>
//                 वीर परिवारों का संबल
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">

//             {/* Home */}
//             <Link
//               href="/"
//               className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
//                 isActive('/')
//                   ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
//                   : `${navLinkColor} border-b-2 border-transparent`
//               }`}
//             >
//               Home
//             </Link>

//             {/* About Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={openAbout}
//               onMouseLeave={() => setAboutOpen(false)}
//             >
//               <div className="flex items-center">

//                 {/* CLICKING ABOUT US GOES TO ABOUT PAGE */}
//                 <Link
//                   href="/about"
//                   className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
//                     isActive('/about')
//                       ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
//                       : `${navLinkColor} border-b-2 border-transparent`
//                   }`}
//                   onClick={() => {
//                     setAboutOpen(false);
//                     setCausesOpen(false);
//                   }}
//                 >
//                   About Us
//                 </Link>

//                 {/* ONLY ARROW OPENS / CLOSES DROPDOWN */}
//                 <button
//                   type="button"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     event.stopPropagation();

//                     setAboutOpen(!aboutOpen);
//                     setCausesOpen(false);
//                   }}
//                   className={`py-2 pr-3 transition-colors ${
//                     isActive('/about') ? 'text-[#F4D08B]' : navChevronColor
//                   }`}
//                   aria-label="Toggle About Us menu"
//                 >
//                   <Icon
//                     name={aboutOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
//                     size={16}
//                   />
//                 </button>

//               </div>

//               {aboutOpen && (
//                 <>
//                   {/* Invisible hover bridge */}
//                   <div className="absolute left-0 right-0 top-full h-2" />

//                   <div
//                     className="nav-dropdown z-[100]"
//                     onMouseEnter={() => setAboutOpen(true)}
//                     onMouseLeave={() => setAboutOpen(false)}
//                   >
//                     {aboutDropdown.map((item) => (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         className={
//                           isActive(item.href)
//                             ? 'bg-white/5 text-white'
//                             : 'text-white/80'
//                         }
//                         onClick={() => setAboutOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Causes Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={openCauses}
//               onMouseLeave={() => setCausesOpen(false)}
//             >
//               <div className="flex items-center">

//                 {/* CLICKING OUR CAUSES GOES TO CAUSES PAGE */}
//                 <Link
//                   href="/causes"
//                   className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
//                     isActive('/causes')
//                       ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
//                       : `${navLinkColor} border-b-2 border-transparent`
//                   }`}
//                   onClick={() => {
//                     setCausesOpen(false);
//                     setAboutOpen(false);
//                   }}
//                 >
//                   Our Causes
//                 </Link>

//                 {/* ONLY ARROW OPENS / CLOSES DROPDOWN */}
//                 <button
//                   type="button"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     event.stopPropagation();

//                     setCausesOpen(!causesOpen);
//                     setAboutOpen(false);
//                   }}
//                   className={`py-2 pr-3 transition-colors ${
//                     isActive('/causes') ? 'text-[#F4D08B]' : navChevronColor
//                   }`}
//                   aria-label="Toggle Our Causes menu"
//                 >
//                   <Icon
//                     name={causesOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
//                     size={16}
//                   />
//                 </button>

//               </div>

//               {causesOpen && (
//                 <>
//                   {/* Invisible hover bridge */}
//                   <div className="absolute left-0 right-0 top-full h-2" />

//                   <div
//                     className="nav-dropdown z-[100]"
//                     onMouseEnter={() => setCausesOpen(true)}
//                     onMouseLeave={() => setCausesOpen(false)}
//                   >
//                     {causesDropdown.map((item) => (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         className={
//                           isActive(item.href)
//                             ? 'bg-white/5 text-white'
//                             : 'text-white/80'
//                         }
//                         onClick={() => setCausesOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Impact */}
//             <Link
//               href="/impact"
//               className={`px-3 py-2 text-[1rem] font-medium transition-colors border-b-2 ${
//                 isActive('/impact')
//                   ? 'text-[#F4D08B] border-[#C9912A]'
//                   : `${navLinkColor} border-transparent`
//               }`}
//             >
//               Impact &amp; Stories
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/contact"
//               className={`px-3 py-2 text-[1rem] font-medium transition-colors border-b-2 ${
//                 isActive('/contact')
//                   ? 'text-[#F4D08B] border-[#C9912A]'
//                   : `${navLinkColor} border-transparent`
//               }`}
//             >
//               Contact
//             </Link>

//           </div>

//           {/* Donate + Hamburger */}
//           <div className="flex items-center gap-3">

//             <Link
//               href="/donate"
//               className="btn-gold hidden sm:inline-flex px-7 py-3.5 text-[0.95rem] font-semibold"
//             >
//               Donate
//             </Link>

//             <button
//               className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-white' : 'text-[#173A5E]'}`}
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//             >
//               <Icon
//                 name="Bars3Icon"
//                 size={20}
//               />
//             </button>

//           </div>

//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="mobile-menu-overlay flex flex-col">

//           <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

//             <Link
//               href="/"
//               className="flex items-center gap-3"
//               onClick={() => setMobileOpen(false)}
//             >
//               <AppImage
//                 src="/assets/images/logo.png"
//                 alt="Silent Salute Foundation"
//                 width={45}
//                 height={45}
//                 className="w-10 h-10 object-contain"
//               />

//               <div>
//                 <div className="font-display font-bold text-white">
//                   Silent Salute Foundation
//                 </div>
//               </div>
//             </Link>

//             <button
//               className="text-white p-2"
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close menu"
//             >
//               <Icon
//                 name="XMarkIcon"
//                 size={24}
//               />
//             </button>

//           </div>

//           <div className="flex-1 px-6 py-6 space-y-1">

//             <Link
//               href="/"
//               className="block py-3 text-white font-medium border-b border-white/10 text-lg"
//               onClick={() => setMobileOpen(false)}
//             >
//               Home
//             </Link>

//             {/* Mobile About */}
//             <div>

//               <div className="flex items-center justify-between border-b border-white/10">

//                 {/* ABOUT US OPENS ABOUT PAGE */}
//                 <Link
//                   href="/about"
//                   className="flex-1 py-3 text-white font-medium text-lg"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   About Us
//                 </Link>

//                 <button
//                   className="p-3 text-white"
//                   onClick={() =>
//                     setMobileAboutOpen(!mobileAboutOpen)
//                   }
//                   aria-label="Toggle About Us submenu"
//                 >
//                   <Icon
//                     name={
//                       mobileAboutOpen
//                         ? 'ChevronUpIcon'
//                         : 'ChevronDownIcon'
//                     }
//                     size={18}
//                   />
//                 </button>

//               </div>

//               {mobileAboutOpen && (
//                 <div className="pl-4 py-2 space-y-1">

//                   {aboutDropdown.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       className="block py-2 text-white/70 hover:text-accent transition-colors"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}

//                 </div>
//               )}

//             </div>

//             {/* Mobile Causes */}
//             <div>

//               <div className="flex items-center justify-between border-b border-white/10">

//                 {/* OUR CAUSES OPENS CAUSES PAGE */}
//                 <Link
//                   href="/causes"
//                   className="flex-1 py-3 text-white font-medium text-lg"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   Our Causes
//                 </Link>

//                 <button
//                   className="p-3 text-white"
//                   onClick={() =>
//                     setMobileCausesOpen(!mobileCausesOpen)
//                   }
//                   aria-label="Toggle Our Causes submenu"
//                 >
//                   <Icon
//                     name={
//                       mobileCausesOpen
//                         ? 'ChevronUpIcon'
//                         : 'ChevronDownIcon'
//                     }
//                     size={18}
//                   />
//                 </button>

//               </div>

//               {mobileCausesOpen && (
//                 <div className="pl-4 py-2 space-y-1">

//                   {causesDropdown.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       className="block py-2 text-white/70 hover:text-accent transition-colors"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}

//                 </div>
//               )}

//             </div>

//             {[
//               {
//                 label: 'Impact & Stories',
//                 href: '/impact',
//               },
//               {
//                 label: 'Contact',
//                 href: '/contact',
//               },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="block py-3 text-white font-medium border-b border-white/10 text-lg"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//           </div>

//           <div className="px-6 pb-8">

//             <Link
//               href="/donate"
//               className="btn-gold w-full justify-center text-base py-4"
//               onClick={() => setMobileOpen(false)}
//             >
//               Donate Now
//             </Link>

//           </div>

//         </div>
//       )}

//       {/* Logo Preview Modal */}
//       {/* Logo Preview Modal */}
// {logoPreviewOpen && (
//   <div
//     className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
//     onClick={() => setLogoPreviewOpen(false)}
//   >
//     {/* Close button */}
//     <button
//       type="button"
//       className="absolute top-6 right-6 z-[210] text-white p-2 hover:text-[#F4D08B] transition-colors"
//       onClick={() => setLogoPreviewOpen(false)}
//       aria-label="Close preview"
//     >
//       <Icon name="XMarkIcon" size={28} />
//     </button>

//     {/* Logo */}
//     <div
//       className="relative flex items-center justify-center w-[85vw] h-[85vw] max-w-[650px] max-h-[650px]"
//       onClick={(event) => event.stopPropagation()}
//     >
//       <AppImage
//         src="/assets/images/logo.png"
//         alt="Silent Salute Foundation Logo"
//         width={800}
//         height={800}
//         className="w-full h-full object-contain"
//       />
//     </div>
//   </div>
// )}
//     </>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '@/components/ui/Link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const aboutDropdown = [
  { label: 'Who We Are', href: '/about/who-we-are' },
  { label: 'How We Work', href: '/about/how-we-work' },
  { label: 'Partners', href: '/about/partners' },
  { label: 'Leaders & Team', href: '/about/team' },
  { label: 'Transparency', href: '/about/transparency' },
];

const causesDropdown = [
  { label: 'Education', href: '/causes/education' },
  { label: 'Healthcare', href: '/causes/healthcare' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCausesOpen, setMobileCausesOpen] = useState(false);
  const [logoPreviewOpen, setLogoPreviewOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (logoPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLogoPreviewOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [logoPreviewOpen]);

  useEffect(() => {
    setAboutOpen(false);
    setCausesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(href.split('#')[0]);
  };

  const openAbout = () => {
    setAboutOpen(true);
    setCausesOpen(false);
  };

  const openCauses = () => {
    setCausesOpen(true);
    setAboutOpen(false);
  };

  const navLinkColor = scrolled
    ? 'text-white/90 hover:text-accent'
    : 'text-[#173A5E] hover:text-[#C9912A]';

  const navChevronColor = scrolled
    ? 'text-white/90 hover:text-accent'
    : 'text-[#173A5E] hover:text-[#C9912A]';

  const hindiColor = scrolled
    ? 'text-white/70'
    : 'text-[#173A5E]';

  const logoTextColor = scrolled
    ? 'text-white'
    : 'text-[#173A5E]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D1B2A]/95 shadow-lg shadow-black/30'
            : 'bg-[#0D1B2A]/20 backdrop-blur-md border-b border-white/10'
        }`}
        style={{ height: '94px' }}
      >
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0"
            onClick={(event) => {
              event.preventDefault();
              setLogoPreviewOpen(true);
            }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/90 shadow-sm ring-2 ring-white/20 sm:h-[68px] sm:w-[68px]">
              <AppImage
                src="/assets/images/logo.png"
                alt="Silent Salute Foundation Logo"
                width={72}
                height={72}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Logo Name + Subtitle - NOW VISIBLE ON MOBILE */}
            <div className="block min-w-0">
              <div
                className={`font-display text-[0.68rem] leading-[1.05] tracking-[0.06em] uppercase sm:text-[1rem] sm:tracking-[0.08em] transition-colors ${logoTextColor}`}
              >
                Silent Salute
              </div>

              <div className="font-display text-[#F4D08B] text-[0.68rem] leading-[1.05] tracking-[0.06em] uppercase sm:text-[1rem] sm:tracking-[0.08em]">
                Foundation
              </div>

              <div
                className={`mt-1 text-[9px] leading-[1.25] max-w-[130px] font-medium sm:mt-2 sm:text-[14px] sm:max-w-[180px] transition-colors ${hindiColor}`}
              >
                वीर परिवारों का संबल
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
                  : `${navLinkColor} border-b-2 border-transparent`
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/about"
                  className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
                    isActive('/about')
                      ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
                      : `${navLinkColor} border-b-2 border-transparent`
                  }`}
                  onClick={() => {
                    setAboutOpen(false);
                    setCausesOpen(false);
                  }}
                >
                  About Us
                </Link>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    setAboutOpen(!aboutOpen);
                    setCausesOpen(false);
                  }}
                  className={`py-2 pr-3 transition-colors ${
                    isActive('/about')
                      ? 'text-[#F4D08B]'
                      : navChevronColor
                  }`}
                  aria-label="Toggle About Us menu"
                >
                  <Icon
                    name={
                      aboutOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={16}
                  />
                </button>
              </div>

              {aboutOpen && (
                <>
                  <div className="absolute left-0 right-0 top-full h-2" />

                  <div
                    className="nav-dropdown z-[100]"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={
                          isActive(item.href)
                            ? 'bg-white/5 text-white'
                            : 'text-white/80'
                        }
                        onClick={() => setAboutOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Causes Dropdown */}
            <div
              className="relative"
              onMouseEnter={openCauses}
              onMouseLeave={() => setCausesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/causes"
                  className={`px-3 py-2 text-[1rem] font-medium transition-colors ${
                    isActive('/causes')
                      ? 'text-[#F4D08B] border-b-2 border-[#C9912A]'
                      : `${navLinkColor} border-b-2 border-transparent`
                  }`}
                  onClick={() => {
                    setCausesOpen(false);
                    setAboutOpen(false);
                  }}
                >
                  Our Causes
                </Link>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    setCausesOpen(!causesOpen);
                    setAboutOpen(false);
                  }}
                  className={`py-2 pr-3 transition-colors ${
                    isActive('/causes')
                      ? 'text-[#F4D08B]'
                      : navChevronColor
                  }`}
                  aria-label="Toggle Our Causes menu"
                >
                  <Icon
                    name={
                      causesOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={16}
                  />
                </button>
              </div>

              {causesOpen && (
                <>
                  <div className="absolute left-0 right-0 top-full h-2" />

                  <div
                    className="nav-dropdown z-[100]"
                    onMouseEnter={() => setCausesOpen(true)}
                    onMouseLeave={() => setCausesOpen(false)}
                  >
                    {causesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={
                          isActive(item.href)
                            ? 'bg-white/5 text-white'
                            : 'text-white/80'
                        }
                        onClick={() => setCausesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Impact */}
            <Link
              href="/impact"
              className={`px-3 py-2 text-[1rem] font-medium transition-colors border-b-2 ${
                isActive('/impact')
                  ? 'text-[#F4D08B] border-[#C9912A]'
                  : `${navLinkColor} border-transparent`
              }`}
            >
              Impact &amp; Stories
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 text-[1rem] font-medium transition-colors border-b-2 ${
                isActive('/contact')
                  ? 'text-[#F4D08B] border-[#C9912A]'
                  : `${navLinkColor} border-transparent`
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Donate + Hamburger */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <Link
              href="/donate"
              className="btn-gold hidden sm:inline-flex px-7 py-3.5 text-[0.95rem] font-semibold"
            >
              Donate
            </Link>

            <button
              className={`lg:hidden p-2 transition-colors ${
                scrolled
                  ? 'text-white'
                  : 'text-[#173A5E]'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Icon
                name="Bars3Icon"
                size={20}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu-overlay flex flex-col">

          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <AppImage
                src="/assets/images/logo.png"
                alt="Silent Salute Foundation"
                width={45}
                height={45}
                className="w-10 h-10 object-contain"
              />

              <div>
                <div className="font-display font-bold text-white">
                  Silent Salute Foundation
                </div>
              </div>
            </Link>

            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <Icon
                name="XMarkIcon"
                size={24}
              />
            </button>

          </div>

          <div className="flex-1 px-6 py-6 space-y-1">

            <Link
              href="/"
              className="block py-3 text-white font-medium border-b border-white/10 text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Mobile About */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10">

                <Link
                  href="/about"
                  className="flex-1 py-3 text-white font-medium text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>

                <button
                  className="p-3 text-white"
                  onClick={() =>
                    setMobileAboutOpen(!mobileAboutOpen)
                  }
                  aria-label="Toggle About Us submenu"
                >
                  <Icon
                    name={
                      mobileAboutOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={18}
                  />
                </button>

              </div>

              {mobileAboutOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-white/70 hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Causes */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10">

                <Link
                  href="/causes"
                  className="flex-1 py-3 text-white font-medium text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Causes
                </Link>

                <button
                  className="p-3 text-white"
                  onClick={() =>
                    setMobileCausesOpen(!mobileCausesOpen)
                  }
                  aria-label="Toggle Our Causes submenu"
                >
                  <Icon
                    name={
                      mobileCausesOpen
                        ? 'ChevronUpIcon'
                        : 'ChevronDownIcon'
                    }
                    size={18}
                  />
                </button>

              </div>

              {mobileCausesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {causesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-white/70 hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              {
                label: 'Impact & Stories',
                href: '/impact',
              },
              {
                label: 'Contact',
                href: '/contact',
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-white font-medium border-b border-white/10 text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          </div>

          <div className="px-6 pb-8">

            <Link
              href="/donate"
              className="btn-gold w-full justify-center text-base py-4"
              onClick={() => setMobileOpen(false)}
            >
              Donate Now
            </Link>

          </div>

        </div>
      )}

      {/* Logo Preview Modal */}
      {logoPreviewOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={() => setLogoPreviewOpen(false)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 z-[210] text-white p-2 hover:text-[#F4D08B] transition-colors"
            onClick={() => setLogoPreviewOpen(false)}
            aria-label="Close preview"
          >
            <Icon
              name="XMarkIcon"
              size={28}
            />
          </button>

          <div
            className="relative flex items-center justify-center w-[85vw] h-[85vw] max-w-[650px] max-h-[650px]"
            onClick={(event) => event.stopPropagation()}
          >
            <AppImage
              src="/assets/images/logo.png"
              alt="Silent Salute Foundation Logo"
              width={800}
              height={800}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}