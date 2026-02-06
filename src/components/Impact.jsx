import { motion } from 'framer-motion'

const metrics = [
  {
    value: '10x',
    label: 'Faster Screening',
    desc: 'AI parses and ranks 250+ applications per day vs 25 manually',
    color: '#0B82F1',
    height: 85,
  },
  {
    value: '70%',
    label: 'Faster Time-to-Hire',
    desc: 'Average hiring timeline drops from 42 days to just 12 days',
    color: '#A78BFA',
    height: 75,
  },
  {
    value: '25x',
    label: 'Interview Capacity',
    desc: 'AI conducts 200+ automated screening interviews daily vs 8 manual calls',
    color: '#93C5FD',
    height: 95,
  },
  {
    value: '95%',
    label: 'Application Completion',
    desc: 'Smart application forms reduce candidate drop-off dramatically',
    color: '#FFFFFF',
    height: 100,
  },
  {
    value: '89%',
    label: 'Qualified Applications',
    desc: 'AI job description optimizer attracts higher-quality pipelines',
    color: '#5ED1D1',
    height: 90,
  },
  {
    value: '80%',
    label: 'Lower Costs',
    desc: 'Reduced recruitment agencies and software subscriptions',
    color: '#000000',
    height: 80,
  },
  {
    value: '50%',
    label: 'Bad Hires Reduced',
    desc: 'Better skill and culture matching',
    color: '#A855F7',
    height: 65,
  },
]

export default function Impact() {
  return (
    <section id="impact" className="py-20 md:py-28 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            The RecruiterAI Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real impact, measured across the hiring funnel
          </p>
        </div>

        {/* Glass Container */}
        <div className="glass-panel rounded-3xl p-6 md:p-12">
          {/* Chart */}
          <div className="flex items-end justify-between gap-6 h-[320px] overflow-x-auto md:overflow-visible pb-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="relative min-w-[80px] md:min-w-[110px] h-full flex flex-col items-center group"
              >
                {/* Bar Wrapper */}
                <div className="relative w-full h-full flex items-end">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${metric.height}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.7,
                      ease: 'easeOut',
                    }}
                    className="w-full rounded-xl shadow-lg relative"
                    style={{
                      backgroundColor: metric.color,
                      border:
                        metric.color === '#FFFFFF'
                          ? '1px solid rgba(0,0,0,0.15)'
                          : 'none',
                    }}
                  >
                    {/* Value */}
                    <div
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold px-2 py-0.5 rounded-md shadow backdrop-blur-md
                        ${metric.color === '#000000'
                          ? 'text-white bg-black/80'
                          : 'text-gray-900 bg-white/80'
                        }`}
                    >
                      {metric.value}
                    </div>
                  </motion.div>
                </div>

                {/* Label */}
                <div className="text-center mt-4 text-xs md:text-sm font-semibold text-gray-800 leading-tight">
                  {metric.label}
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20">
                  <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl max-w-[220px] text-center">
                    {metric.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
