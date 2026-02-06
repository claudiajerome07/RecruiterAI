const platforms = [
  'LinkedIn',
  'Naukri',
  'Indeed',
  'AngelList',
  'Wellfound',
  'Glassdoor',
  'Monster',
  'Cutshort',
]

export default function LogoSlider() {
  const logos = [...platforms, ...platforms]

  return (
    <section className="py-16 md:py-24 overflow-hidden px-4 relative">
      {/* ✅ Centered Heading */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-center">
        <div className="backdrop-blur-2xl bg-white/70 rounded-3xl p-8 border-2 border-white/60 shadow-2xl shadow-primary/20 glass-effect-strong text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">
            Post Once, Reach Everywhere
          </h2>
          <p className="text-lg text-dark-secondary max-w-2xl mx-auto">
            RecruiterAI automatically syncs your job postings across all major platforms
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="flex animate-scroll w-max">
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 py-4 px-6 rounded-xl backdrop-blur-2xl bg-white/70 border-2 border-white/60 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center min-w-[140px] md:min-w-[160px] shadow-2xl hover:bg-white/80 glass-effect-strong"
            >
              <span className="font-bold text-dark-secondary text-lg">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
