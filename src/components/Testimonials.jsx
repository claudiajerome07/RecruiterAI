const testimonials = [
  {
    quote:
      "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
    name: 'Rahul Mehta',
    role: 'Founder',
    company: 'TechStart Solutions',
    initials: 'RM',
    accent: '#0B82F1', // blue
  },
  {
    quote:
      "Finally stopped drowning in resumes. The AI shortlisted candidates who actually matched our stack. Our first hire through RecruiterAI is still one of our best.",
    name: 'Anjali Patel',
    role: 'CTO',
    company: 'ScaleFirst',
    initials: 'AP',
    accent: '#A78BFA', // purple
  },
  {
    quote:
      "I was skeptical about AI interviews. But the quality of candidates we're seeing now? Night and day. We've cut bad hires in half.",
    name: 'Vikram Singh',
    role: 'Head of Talent',
    company: 'GrowthLabs',
    initials: 'VS',
    accent: '#5ED1D1', // teal
  },
]

export default function Testimonials() {
  const cardRotations = ['rotate-[-1.25deg]', 'rotate-0', 'rotate-[1.25deg]']
  const cardShapes = [
    'rounded-t-[2.25rem] rounded-b-xl',
    'rounded-[2rem]',
    'rounded-b-[2.25rem] rounded-t-xl',
  ]

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="glass-panel inline-block px-10 py-8 rounded-[2.5rem]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted by Teams Who Ship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from founders and hiring leaders
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`relative ${cardRotations[index]} hover:rotate-0 transition-transform duration-300`}
            >
              <div
                className={`${cardShapes[index]} glass-panel p-6 md:p-8 flex flex-col relative overflow-hidden`}
              >
                {/* Soft accent glow */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${t.accent}, transparent 70%)`,
                  }}
                />

                {/* Quote mark */}
                <div className="absolute top-5 right-6 text-5xl font-serif text-gray-200 leading-none">
                  “
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6 relative z-10">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Avatar */}
                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold shadow-md"
                      style={{
                        backgroundColor: t.accent,
                        color: t.accent === '#000000' ? '#FFFFFF' : '#FFFFFF',
                      }}
                    >
                      {t.initials}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
