import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '@/components/ui/AppIcon';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to section top"
      title="Back to section top"
      onClick={handleTopClick}
      className={`
        fixed
        bottom-[calc(1rem+env(safe-area-inset-bottom))]
        right-3
        z-[120]
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#F4D08B]/70
        bg-[#0D1B2A]/95
        text-[#F4D08B]
        shadow-lg
        shadow-black/30
        transition-all
        duration-300
        hover:bg-[#C9912A]
        hover:text-[#0D1B2A]
        focus:outline-none
        focus:ring-2
        focus:ring-[#F4D08B]
        focus:ring-offset-2
        focus:ring-offset-[#0D1B2A]
        sm:bottom-8
        sm:right-8
        sm:h-12
        sm:w-12
        ${showButton ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}
      `}
    >
      <Icon name="ArrowUpIcon" size={22} />
    </button>
  );
}