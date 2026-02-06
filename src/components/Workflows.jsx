const ArrowDown = () => (
  <div className="flex justify-center py-1">
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
)

const Flowchart1 = () => (
  <div className="space-y-2">
    <div className="rounded-xl backdrop-blur-lg bg-white/70 border-2 border-white/60 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-md">New Application</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-lg bg-accent-1/60 border-2 border-accent-1/50 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-md">AI Resume Screening</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-sm bg-white/60 border border-white/40 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Auto-send screening questions</div>
    <ArrowDown />
    <div className="flex justify-center">
      <div className="w-16 h-16 rotate-45 backdrop-blur-lg bg-accent-2/70 border-2 border-primary/60 flex items-center justify-center -rotate-45 scale-75 shadow-lg">
        <span className="rotate-45 text-xs font-bold text-dark-primary">Score&gt;75%?</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div>
        <div className="rounded-lg backdrop-blur-md bg-accent-1/60 border-2 border-accent-1/50 px-3 py-2 text-xs font-medium text-dark-primary shadow-md">YES → Schedule</div>
      </div>
      <div>
        <div className="rounded-lg backdrop-blur-md bg-white/60 border-2 border-white/50 px-3 py-2 text-xs font-medium text-dark-secondary shadow-md">NO → Thank you</div>
      </div>
    </div>
  </div>
)

const Flowchart2 = () => (
  <div className="space-y-2">
    <div className="rounded-xl backdrop-blur-sm bg-white/60 border border-white/40 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Interview invite accepted</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-sm bg-accent-1/40 border border-accent-1/30 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Round 1: AI video interview</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-sm bg-white/60 border border-white/40 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">AI scores responses</div>
    <ArrowDown />
    <div className="flex justify-center">
      <div className="w-16 h-16 rotate-45 backdrop-blur-lg bg-accent-2/70 border-2 border-primary/60 flex items-center justify-center -rotate-45 scale-75 shadow-lg">
        <span className="rotate-45 text-xs font-bold text-dark-primary">Score&gt;80%?</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div>
        <div className="rounded-lg backdrop-blur-sm bg-accent-1/40 border border-accent-1/30 px-3 py-2 text-xs font-medium text-dark-primary shadow-sm">YES → Round 2</div>
        <div className="rounded-lg backdrop-blur-md bg-primary/40 border-2 border-primary/40 px-3 py-2 text-xs font-medium text-dark-primary mt-1 shadow-md">Hire/Reject</div>
      </div>
      <div>
        <div className="rounded-lg backdrop-blur-sm bg-white/40 border border-white/30 px-3 py-2 text-xs font-medium text-dark-secondary shadow-sm">NO → Reject</div>
      </div>
    </div>
  </div>
)

const Flowchart3 = () => (
  <div className="space-y-2">
    <div className="rounded-xl backdrop-blur-sm bg-white/60 border border-white/40 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Rejected (60-74%)</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-sm bg-accent-1/40 border border-accent-1/30 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Add to Future Talent DB</div>
    <ArrowDown />
    <div className="rounded-xl backdrop-blur-sm bg-white/60 border border-white/40 px-4 py-3 text-center text-sm font-medium text-dark-primary shadow-sm">Wait 3 months</div>
    <ArrowDown />
    <div className="flex justify-center">
      <div className="w-16 h-16 rotate-45 backdrop-blur-lg bg-accent-2/70 border-2 border-primary/60 flex items-center justify-center -rotate-45 scale-75 shadow-lg">
        <span className="rotate-45 text-xs font-bold text-dark-primary">New role?</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <div>
        <div className="rounded-lg backdrop-blur-sm bg-accent-1/40 border border-accent-1/30 px-3 py-2 text-xs font-medium text-dark-primary shadow-sm">YES → Re-engage</div>
        <div className="rounded-lg backdrop-blur-md bg-primary/30 border-2 border-primary/30 px-3 py-2 text-xs font-medium text-dark-primary mt-1 shadow-md">Fast-track</div>
      </div>
      <div>
        <div className="rounded-lg backdrop-blur-sm bg-white/40 border border-white/30 px-3 py-2 text-xs font-medium text-dark-secondary shadow-sm">NO → Next quarter</div>
      </div>
    </div>
  </div>
)

const flowcharts = [
  {
    title: 'Automated Candidate Screening & Interview Scheduling',
    benefit: 'Screen 250+ applications in minutes vs. 8 hours manually',
    content: Flowchart1,
  },
  {
    title: 'Multi-Stage AI Interview & Hiring Decision',
    benefit: 'Reduce time-to-hire from 42 days to 12 days',
    content: Flowchart2,
  },
  {
    title: 'Passive Candidate Re-engagement System',
    benefit: 'Build a qualified talent pipeline automatically—never start from zero',
    content: Flowchart3,
  },
]

export default function Workflows() {
  const cardStyles = [
    'rounded-t-[3rem] rounded-b-2xl', // First card - curved top
    'rounded-2xl', // Second card - standard
    'rounded-b-[3rem] rounded-t-2xl', // Third card - curved bottom
  ]
  
  return (
    <section id="workflows" className="py-20 md:py-28 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Unique header with asymmetric design */}
        <div className="text-center mb-16 relative">
          <div className="backdrop-blur-2xl bg-white/75 rounded-[2.5rem] p-8 md:p-10 border-2 border-white/70 shadow-2xl shadow-primary/25 inline-block relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-1/20 rounded-br-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-3/20 rounded-tl-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mb-4">
                AI Recruiting Software That Works Like Your Own HR Team
              </h2>
              <p className="text-lg text-dark-secondary max-w-2xl mx-auto">
                Build custom hiring workflows in minutes. No coding required.
              </p>
            </div>
          </div>
        </div>

        {/* Cards with unique shapes - NOT just boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {flowcharts.map((flow, index) => (
            <div
              key={flow.title}
              className={`relative ${cardStyles[index]} backdrop-blur-2xl bg-white/75 p-6 shadow-2xl shadow-primary/20 border-2 border-white/70 hover:shadow-2xl hover:shadow-primary/30 hover:bg-white/85 transition-all duration-300 group`}
            >
              {/* Floating accent dot */}
              {index === 0 && <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent-1/60 backdrop-blur-sm" />}
              {index === 1 && <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-accent-2/60 backdrop-blur-sm" />}
              {index === 2 && <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-accent-3/60 backdrop-blur-sm" />}
              
              {/* Unique corner decoration */}
              {index === 1 && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent-2/10 rounded-bl-full" />
              )}
              
              <h3 className="font-bold text-dark-primary mb-3 text-lg relative z-10">{flow.title}</h3>
              <div className="backdrop-blur-xl bg-white/60 rounded-xl p-4 border-2 border-white/70 mb-4 min-h-[280px] flex flex-col justify-center shadow-lg relative overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-1/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <flow.content />
                </div>
              </div>
              <p className="text-sm text-primary font-semibold relative z-10">{flow.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
