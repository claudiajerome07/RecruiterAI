import { useState } from 'react'

const faqs = [
  {
    q: 'How does AI screening work?',
    a: 'RecruiterAI uses advanced NLP to parse resumes, score candidates against your job requirements, and rank the top matches. You define the criteria—we handle the screening. Qualified candidates receive automated screening questions; top scorers get interview slots automatically.',
  },
  {
    q: 'Does RecruiterAI integrate with our existing ATS?',
    a: 'Yes. RecruiterAI integrates with popular ATS platforms via API. Your existing workflow stays intact—we add AI on top. Contact us to check compatibility with your current setup.',
  },
  {
    q: "What's the pricing structure?",
    a: 'We offer flexible plans based on team size and hiring volume. Start with a free trial to see the impact. Pricing scales with your needs—no long-term contracts required.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are live within 24–48 hours. Connect your job boards, define your workflows, and you’re ready. Our onboarding team helps with custom workflows if needed.',
  },
  {
    q: 'Is candidate data secure?',
    a: 'Absolutely. We’re SOC 2 compliant and use enterprise-grade encryption. Candidate data is stored securely and never shared. You retain full control and ownership of all data.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="glass-panel inline-block px-10 py-8 rounded-[2.5rem]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Questions, answered
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before getting started
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Questions rail */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <button
                key={faq.q}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-5 py-4 rounded-xl transition-all border
                  ${activeIndex === i
                    ? 'bg-white/70 backdrop-blur-md border-white shadow-md text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
              >
                <span className="font-medium">{faq.q}</span>
              </button>
            ))}
          </div>

          {/* Answer card */}
          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 min-h-[220px]">
              {/* Subtle accent */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at top right, #0B82F1, transparent 65%)',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faqs[activeIndex].q}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {faqs[activeIndex].a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
