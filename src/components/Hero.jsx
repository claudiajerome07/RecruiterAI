import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const painPoints = [
  {
    id: 'delay',
    description:
      'Candidates wait weeks for feedback, leading to drop-offs and lost talent.',
    person: 'Sarah K.',
    role: 'Startup Founder',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    x: 20,
    y: 35,
  },
  {
    id: 'screening',
    description:
      'Recruiters waste hours filtering resumes instead of engaging with candidates.',
    person: 'Amit R.',
    role: 'HR Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    x: 80,
    y: 32,
  },
  {
    id: 'coordination',
    description:
      'Endless emails just to schedule one interview slows everything down.',
    person: 'Linda M.',
    role: 'Talent Lead',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    x: 25,
    y: 70,
  },
  {
    id: 'dropoff',
    description:
      'Top candidates accept other offers due to slow communication.',
    person: 'James P.',
    role: 'Hiring Manager',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    x: 75,
    y: 72,
  },
]

export default function Hero() {
  const [activeBubble, setActiveBubble] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleBubbleClick = (id, e) => {
    e.stopPropagation()
    setActiveBubble(prev => (prev === id ? null : id))
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-4 pt-28 pb-32 overflow-hidden"
      onClick={() => setActiveBubble(null)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://i.pinimg.com/1200x/b0/8a/06/b08a06274a53cd90bedfb117ccfe20fa.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-black/50 backdrop-blur-2xl border border-white/20 rounded-3xl px-8 py-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              AI-POWERED RECRUITING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Every Hire,
            <span className="block mt-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Faster & Better
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Stop losing top talent to slow hiring processes.
            RecruiterAI automates screening, scheduling, and interviews —
            so you can focus on hiring the right people.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE PAIN POINTS */}
      {isMobile && (
        <div className="relative z-10 mt-16 max-w-md mx-auto space-y-4">
          {painPoints.map(point => (
            <div
              key={point.id}
              className="flex gap-4 items-start bg-white/90 rounded-xl p-4 shadow-lg"
            >
              <img
                src={point.avatar}
                alt={point.person}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-800 mb-1">
                  “{point.description}”
                </p>
                <p className="text-xs font-semibold text-gray-600">
                  {point.person} • {point.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DESKTOP FLOATING BUBBLES */}
      {!isMobile && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {painPoints.map((point, index) => {
            const isActive = activeBubble === point.id

            return (
              <div
                key={point.id}
                className="absolute pointer-events-auto"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  onClick={e => handleBubbleClick(point.id, e)}
                  whileHover={{ scale: 1.15 }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-20 h-20 rounded-full bg-white overflow-hidden shadow-2xl border border-gray-200 cursor-pointer"
                >
                  <img
                    src={point.avatar}
                    alt={point.person}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {isActive && (
                  <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-72">
                    <div className="bg-white rounded-xl shadow-xl p-4">
                      <p className="text-sm text-gray-800 mb-2">
                        “{point.description}”
                      </p>
                      <div className="text-xs font-semibold text-gray-600">
                        {point.person} • {point.role}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
