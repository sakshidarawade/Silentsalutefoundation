'use client';

import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Icon from '@/components/ui/AppIcon';
import { stories } from '@/data/stories';

export default function StoriesSection() {
  const visibleStories = stories.slice(0, 4);

  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(
    null
  );

  const selectedStory =
    selectedStoryIndex !== null
      ? visibleStories[selectedStoryIndex]
      : null;

  /* =========================================================
     OPEN STORY
  ========================================================= */

  const openStory = (index: number) => {
    setSelectedStoryIndex(index);
  };

  /* =========================================================
     CLOSE STORY
  ========================================================= */

  const closeStory = () => {
    setSelectedStoryIndex(null);
  };

  /* =========================================================
     NEXT STORY
  ========================================================= */

  const nextStory = () => {
    if (selectedStoryIndex === null) return;

    setSelectedStoryIndex(
      (selectedStoryIndex + 1) % visibleStories.length
    );
  };

  /* =========================================================
     PREVIOUS STORY
  ========================================================= */

  const previousStory = () => {
    if (selectedStoryIndex === null) return;

    setSelectedStoryIndex(
      (selectedStoryIndex - 1 + visibleStories.length) %
        visibleStories.length
    );
  };

  /* =========================================================
     ESCAPE KEY + BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedStoryIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeStory();
      }

      if (event.key === 'ArrowRight') {
        nextStory();
      }

      if (event.key === 'ArrowLeft') {
        previousStory();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedStoryIndex]);

  return (
    <>
      {/* =========================================================
          STORIES SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#061f35] py-20 text-white">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 xl:grid-cols-[0.92fr_2.15fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div className="max-w-[500px] xl:pl-7">
              <p className="mb-4 text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-[#d6a64c]">
                REAL STORIES. REAL STRENGTH.
              </p>

              <h2
                className="
                  text-[clamp(2rem,2.5vw,3.2rem)]
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-white
                "
                style={{
                  fontFamily:
                    'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                }}
              >
                Every family has a story.
                <br />
                Together, we can shape
                <br />
                what comes next.
              </h2>

              <div className="my-6 h-[3px] w-[110px] bg-[#d6a64c]" />

              <p className="max-w-[420px] text-[0.92rem] leading-[1.6] text-white/80">
                Behind every act of service is a story of courage,
                sacrifice and love. Your support can help turn
                challenges into new beginnings.
              </p>

              <button
                type="button"
                onClick={() => openStory(0)}
                className="btn-gold mt-8 inline-flex items-center gap-2"
              >
                Explore Stories

                <Icon
                  name="ArrowRightIcon"
                  size={16}
                />
              </button>
            </div>

            {/* =====================================================
                STORY CARDS
            ===================================================== */}

            <div className="flex justify-end xl:translate-x-[20px]">
              <div className="grid w-full max-w-[930px] gap-4 md:grid-cols-2 xl:grid-cols-4">

                {visibleStories.map((story) => (
                  <RouterLink
                    key={story.id}
                    to={`/stories/${story.id}`}
                    className="
                      group
                      relative
                      block
                      h-[360px]
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/10
                      bg-[#0a2135]
                      text-left
                      shadow-[0_14px_28px_rgba(0,0,0,0.2)]
                      transition-all
                      duration-500
                      hover:border-[#f3b659]/70
                    "
                  >
                    {/* IMAGE */}

                    <div className="absolute inset-0">
                      <img
                        src={story.image}
                        alt={`${story.name}'s story`}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-[1.04]
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-[linear-gradient(
                            180deg,
                            rgba(12,27,36,0.12)_0%,
                            rgba(12,27,36,0.18)_28%,
                            rgba(12,27,36,0.72)_100%
                          )]
                        "
                      />
                    </div>

                    {/* CARD CONTENT */}

                    <div className="absolute inset-x-3 bottom-2 z-10 flex justify-center">
                      <div className="w-full max-w-[82%] rounded-[16px] border border-white/10 bg-[#0d2236]/55 p-2.5 text-center backdrop-blur-[1px]">

                        {/* BENEFICIARY NAME */}

                        <div
                          className="
                            mb-1
                            text-[clamp(1.15rem,1.3vw,1.7rem)]
                            leading-[0.95]
                            tracking-[-0.04em]
                            text-[#f3b659]
                          "
                          style={{
                            fontFamily:
                              'Cormorant Garamond, Georgia, serif',
                            fontWeight: 700,
                          }}
                        >
                          {story.name}'s Story
                        </div>

                        {/* SHORT STORY DESCRIPTION */}

                        <p className="mx-auto max-w-[200px] text-[0.7rem] leading-[1.45] text-white/80 line-clamp-3">
                          {story.excerpt}
                        </p>
                      </div>
                    </div>
                  </RouterLink>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY DETAIL SLIDE
      ========================================================= */}

      {selectedStory && (
        <div className="fixed inset-0 z-[200]">

          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close story"
            onClick={closeStory}
            className="
              absolute
              inset-0
              h-full
              w-full
              cursor-default
              bg-black/70
              backdrop-blur-[6px]
            "
          />

          {/* RIGHT SIDE STORY PANEL */}

          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              max-w-[820px]
              flex-col
              overflow-hidden
              bg-[#061f35]
              shadow-[-20px_0_70px_rgba(0,0,0,0.45)]
              animate-[slideIn_0.45s_ease-out]
            "
          >

            {/* TOP BAR */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-30
                flex
                items-center
                justify-between
                px-5
                py-5
                sm:px-8
              "
            >
              <div
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-[#061f35]/75
                  px-4
                  py-2
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#f3b659]
                  backdrop-blur-md
                "
              >
                Real Story
              </div>

              <button
                type="button"
                onClick={closeStory}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-[#061f35]/75
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:border-[#f3b659]
                  hover:text-[#f3b659]
                "
                aria-label="Close story"
              >
                <Icon
                  name="XMarkIcon"
                  size={22}
                />
              </button>
            </div>

            {/* STORY IMAGE */}

            <div
              className="
                relative
                flex
                h-[42vh]
                min-h-[320px]
                max-h-[500px]
                flex-shrink-0
                items-center
                justify-center
                overflow-hidden
                bg-[#041a2c]
              "
            >
              <img
                src={selectedStory.image}
                alt={`${selectedStory.name}'s story`}
                className="
                  block
                  h-full
                  w-full
                  object-contain
                  object-center
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#061f35]
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-32
                  bg-gradient-to-b
                  from-black/30
                  to-transparent
                "
              />

              {/* BENEFICIARY NAME ON IMAGE */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  sm:left-8
                  sm:right-8
                "
              >
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#d6a64c]">
                  SILENT SALUTE FOUNDATION
                </p>

                <h2
                  className="
                    text-[clamp(2.4rem,5vw,4.3rem)]
                    leading-[0.9]
                    tracking-[-0.04em]
                    text-white
                  "
                  style={{
                    fontFamily:
                      'Cormorant Garamond, Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  {selectedStory.name}'s Story
                </h2>
              </div>
            </div>

            {/* STORY CONTENT */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-6
                py-7
                sm:px-8
                sm:py-9
              "
            >

              {/* STORY NUMBER */}

              <div className="mb-6 flex items-center gap-4">
                <span
                  className="
                    text-[0.7rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d6a64c]
                  "
                >
                  STORY{' '}
                  {String(
                    (selectedStoryIndex ?? 0) + 1
                  ).padStart(2, '0')}
                </span>

                <div className="h-px flex-1 bg-[#d6a64c]/30" />
              </div>

              {/* ACTUAL STORY TITLE */}

              <h3
                className="
                  mb-5
                  text-[clamp(1.8rem,3vw,2.8rem)]
                  leading-[1]
                  text-white
                "
                style={{
                  fontFamily:
                    'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                }}
              >
                {selectedStory.title}
              </h3>

              {/* STORY DESCRIPTION */}

              <p className="mb-7 text-[0.95rem] leading-[1.85] text-white/75">
                {selectedStory.excerpt}
              </p>

              {/* WHY THIS MATTERS */}

              <div
                className="
                  mb-8
                  rounded-2xl
                  border
                  border-[#d6a64c]/20
                  bg-[#0a2b43]
                  p-6
                  sm:p-7
                "
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d6a64c]/60
                      text-[#f3b659]
                    "
                  >
                    <Icon
                      name="HeartIcon"
                      size={19}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[0.68rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#d6a64c]
                      "
                    >
                      Why this matters
                    </p>

                    <p className="text-sm text-white/60">
                      Every family deserves a chance to move forward.
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-[1.8] text-white/75">
                  Behind every story is a family that has faced
                  uncertainty with strength. Our work is about
                  standing beside them, connecting them with
                  meaningful support and helping create a future
                  filled with dignity, stability and hope.
                </p>
              </div>

              {/* IMPACT HIGHLIGHTS */}

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <Icon
                    name="HandRaisedIcon"
                    size={20}
                    className="mb-3 text-[#f3b659]"
                  />

                  <p className="text-xs leading-relaxed text-white/65">
                    Standing beside families
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <Icon
                    name="UserGroupIcon"
                    size={20}
                    className="mb-3 text-[#f3b659]"
                  />

                  <p className="text-xs leading-relaxed text-white/65">
                    Supporting communities
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <Icon
                    name="ArrowTrendingUpIcon"
                    size={20}
                    className="mb-3 text-[#f3b659]"
                  />

                  <p className="text-xs leading-relaxed text-white/65">
                    Building stronger futures
                  </p>
                </div>

              </div>

              {/* READ FULL STORY */}

              <RouterLink
                to={`/stories/${selectedStory.id}`}
                onClick={closeStory}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#d6a33b]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#e7b64e]
                  hover:shadow-lg
                "
              >
                Read Full Story

                <Icon
                  name="ArrowRightIcon"
                  size={16}
                />
              </RouterLink>

            </div>

            {/* PREVIOUS / NEXT */}

            <div
              className="
                flex
                flex-shrink-0
                items-center
                justify-between
                border-t
                border-white/10
                bg-[#041a2c]
                px-6
                py-4
                sm:px-8
              "
            >

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={previousStory}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-left
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-white
                    transition-all
                    group-hover:border-[#f3b659]
                    group-hover:text-[#f3b659]
                  "
                >
                  <Icon
                    name="ArrowLeftIcon"
                    size={15}
                  />
                </span>

                <span className="hidden text-xs text-white/60 sm:block">
                  Previous
                </span>
              </button>

              {/* COUNTER */}

              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#f3b659]">
                  {String(
                    (selectedStoryIndex ?? 0) + 1
                  ).padStart(2, '0')}
                </span>

                <span className="mx-2 text-white/20">
                  /
                </span>

                <span className="text-xs text-white/40">
                  {String(
                    visibleStories.length
                  ).padStart(2, '0')}
                </span>
              </div>

              {/* NEXT */}

              <button
                type="button"
                onClick={nextStory}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-right
                "
              >
                <span className="hidden text-xs text-white/60 sm:block">
                  Next Story
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-white
                    transition-all
                    group-hover:border-[#f3b659]
                    group-hover:text-[#f3b659]
                  "
                >
                  <Icon
                    name="ArrowRightIcon"
                    size={15}
                  />
                </span>
              </button>

            </div>
          </aside>
        </div>
      )}

      {/* =========================================================
          SLIDE ANIMATION
      ========================================================= */}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }

          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}