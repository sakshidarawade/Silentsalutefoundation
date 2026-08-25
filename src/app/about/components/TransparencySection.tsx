'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Icon from '@/components/ui/AppIcon';

const fundAllocation = [
  { name: 'Education Programs', value: 38, color: '#C9912A' },
  { name: 'Healthcare Programs', value: 32, color: '#1A4A3A' },
  { name: 'Family Welfare', value: 18, color: '#112236' },
  { name: 'Operations', value: 8, color: '#6B7280' },
  { name: 'Awareness & Outreach', value: 4, color: '#E8B84B' },
];

const reports = [
  { year: '2023-24', title: 'Annual Report 2023-24', size: '2.4 MB' },
  { year: '2022-23', title: 'Annual Report 2022-23', size: '2.1 MB' },
  { year: '2021-22', title: 'Annual Report 2021-22', size: '1.8 MB' },
];

export default function TransparencySection() {
  return (
    <section id="transparency" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-14">

          {/* Section Label */}

          <p
            className="
              mb-3
              uppercase
              text-[12px]
              font-semibold
              tracking-[0.3em]
              text-[#d6a64c]
              text-accent
              sm:text-[13px]
            "
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            TRANSPARENCY
          </p>

          {/* Main Heading */}

          <h2
            className="
              mb-4
              text-[clamp(2rem,3.2vw,3rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.02em]
              text-foreground
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Open Books. Full Accountability.
          </h2>

          {/* Gold Divider */}

          <div className="divider-gold mx-auto mb-5" />

          {/* Description */}

          <p
            className="
              text-muted-foreground
              max-w-lg
              mx-auto
              text-[14px]
              leading-[1.75]
              sm:text-[15px]
            "
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            We believe donors deserve complete visibility into how every rupee
            is used. Here is our fund allocation breakdown.
          </p>
        </div>

        {/* ================= CHART + BREAKDOWN ================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* ================= CHART ================= */}

          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">

            <h3
              className="
                text-foreground
                text-[28px]
                font-semibold
                leading-[1.1]
                tracking-[-0.015em]
                mb-6
                text-center
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
              }}
            >
              Fund Allocation 2023-24
            </h3>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>

                <Pie
                  data={fundAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {fundAllocation.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>

                {/* Hover Tooltip */}

                <Tooltip
                  formatter={(value: number) => [`${value}%`, '']}
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '13px',
                  }}
                />

                <Legend
                  wrapperStyle={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '13px',
                  }}
                />

              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* ================= BREAKDOWN ================= */}

          <div>

            <h3
              className="
                text-foreground
                text-[28px]
                font-semibold
                leading-[1.1]
                tracking-[-0.015em]
                mb-6
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
              }}
            >
              Where Your Money Goes
            </h3>

            <div className="space-y-4">

              {fundAllocation.map((item) => (

                <div
                  key={item.name}
                  className="flex items-center gap-4"
                >

                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      background: item.color,
                    }}
                  />

                  <div className="flex-1">

                    <div className="flex justify-between mb-1">

                      <span
                        className="
                          text-foreground
                          text-[14px]
                          font-medium
                        "
                        style={{
                          fontFamily:
                            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        {item.name}
                      </span>

                      <span
                        className="
                          text-accent
                          text-[14px]
                          font-bold
                        "
                        style={{
                          fontFamily:
                            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        {item.value}%
                      </span>

                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">

                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.value}%`,
                          background: item.color,
                        }}
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* ================= TAX INFO ================= */}

            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-xl">

              <p
                className="
                  text-accent
                  font-semibold
                  text-[14px]
                "
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                ✓ Registered under Section 12A & 80G of Income Tax Act
              </p>

              <p
                className="
                  text-muted-foreground
                  text-[12px]
                  mt-1
                  leading-[1.6]
                "
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Donors can claim tax exemption on contributions.
              </p>

            </div>

          </div>

        </div>

        {/* ================= ANNUAL REPORTS ================= */}

        <div>

          <h3
            className="
              text-foreground
              text-[30px]
              font-semibold
              leading-[1.1]
              tracking-[-0.015em]
              mb-6
            "
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Annual Reports
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">

            {reports.map((r) => (

              <div
                key={r.year}
                className="
                  bg-white
                  rounded-xl
                  p-5
                  border
                  border-border
                  flex
                  items-center
                  gap-4
                  hover:border-accent
                  transition-all
                  group
                "
              >

                {/* Report Icon */}

                <div className="icon-circle w-12 h-12 flex-shrink-0 group-hover:bg-accent/20">

                  <Icon
                    name="DocumentArrowDownIcon"
                    size={22}
                    className="text-accent"
                  />

                </div>

                {/* Report Details */}

                <div className="flex-1">

                  <div
                    className="
                      font-semibold
                      text-foreground
                      text-[14px]
                      leading-[1.4]
                    "
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {r.title}
                  </div>

                  <div
                    className="
                      text-muted-foreground
                      text-[12px]
                      mt-1
                    "
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {r.size}
                  </div>

                </div>

                {/* Download Button */}

                <button
                  className="
                    text-accent
                    hover:text-foreground
                    transition-colors
                  "
                  aria-label={`Download ${r.title}`}
                >
                  <Icon
                    name="ArrowDownTrayIcon"
                    size={18}
                  />
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}