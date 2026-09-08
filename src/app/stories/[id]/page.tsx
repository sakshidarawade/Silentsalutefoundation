'use client';

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoryById } from '@/data/stories';
import Icon from '@/components/ui/AppIcon';

export default function StoryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const story = getStoryById(id);

  return (
    <main className="min-h-screen bg-[#061f35] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#d6a64c]/60
            bg-[#0a2135]
            px-4
            py-2
            text-sm
            font-medium
            text-[#f3b659]
            transition
            hover:bg-[#0d2a3d]
          "
        >
          <Icon
            name="ArrowLeftIcon"
            size={16}
          />

          Back to stories
        </button>

        {/* =====================================================
            STORY CARD
        ===================================================== */}
        <div
          className="
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-[#0a2135]
            shadow-[0_22px_44px_rgba(0,0,0,0.2)]
          "
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.15fr]">

            {/* =================================================
                STORY IMAGE
            ================================================= */}
            <div className="min-h-[420px] p-4 sm:p-5 lg:p-6">
              <div
                className="
                  h-full
                  min-h-[420px]
                  overflow-hidden
                  rounded-[22px]
                  bg-[#10283a]
                "
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            </div>

            {/* =================================================
                STORY CONTENT
            ================================================= */}
            <div
              className="
                flex
                flex-col
                justify-center
                px-5
                py-8
                sm:px-7
                sm:py-10
                lg:px-10
                lg:py-12
              "
            >
              {/* =================================================
                  BENEFICIARY LABEL
              ================================================= */}
              <p
                className="
                  mb-3
                  text-[0.7rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#d6a64c]
                "
              >
                BENEFICIARY STORY
              </p>

              {/* =================================================
                  BENEFICIARY NAME — RENDERED ONLY ONCE
              ================================================= */}
              <h1
                className="
                  mb-6
                  text-[clamp(3rem,4vw,5.5rem)]
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-[#f3b659]
                "
                style={{
                  fontFamily:
                    'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                }}
              >
                {story.name}
              </h1>

              {/* =================================================
                  STORY TITLE
              ================================================= */}
              <h2
                className="
                  mb-7
                  text-[clamp(1.7rem,2.2vw,2.7rem)]
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
                style={{
                  fontFamily:
                    'Cormorant Garamond, Georgia, serif',
                  fontWeight: 700,
                }}
              >
                {story.title}
              </h2>

              {/* =================================================
                  DIVIDER
              ================================================= */}
              <div className="mb-8 h-[2px] w-[90px] bg-[#d6a64c]" />

              {/* =================================================
                  FULL STORY
              ================================================= */}
              <div
                className="
                  space-y-5
                  text-[1rem]
                  leading-[1.85]
                  text-white/85
                "
              >
                {story.text
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}