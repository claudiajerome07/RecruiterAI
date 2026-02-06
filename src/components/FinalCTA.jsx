export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-20 md:py-28 px-4 relative"
    >
      {/* Soft neutral background (very subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Glass card */}
        <div className="relative backdrop-blur-xl bg-white/65 rounded-2xl border border-white/60 shadow-xl p-8 md:p-12 text-center">

          {/* Thin accent line (signature detail) */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-primary mb-4">
            Hire better. Without the chaos.
          </h2>

          <p className="text-lg text-dark-secondary max-w-2xl mx-auto mb-10">
            RecruiterAI handles screening, interviews, and follow-ups — so your team can focus on people, not pipelines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-primary text-white font-medium text-lg transition hover:bg-primary/90"
            >
              Start free
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-lg border border-gray-300 text-dark-primary font-medium text-lg transition hover:bg-gray-100/60"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
