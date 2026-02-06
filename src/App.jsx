import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Workflows from './components/Workflows'
import Impact from './components/Impact'
import LogoSlider from './components/LogoSlider'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism background base */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white/30 to-indigo-50/20 backdrop-blur-3xl -z-10" />

      {/* Glass texture overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_500px_at_20%_30%,rgba(165,216,255,0.15),transparent_70%),radial-gradient(circle_500px_at_80%_70%,rgba(208,188,255,0.15),transparent_70%)] -z-10" />

      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(90deg,transparent_90%,rgba(59,130,246,0.02)_100%),linear-gradient(transparent_90%,rgba(99,102,241,0.02)_100%)] bg-[size:200px_200px] -z-10" />

      {/* Floating glass blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/20 to-transparent backdrop-blur-3xl -top-60 -left-60 animate-float-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-200/20 to-transparent backdrop-blur-3xl top-1/2 -right-60 animate-float-slower" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-indigo-200/20 to-transparent backdrop-blur-3xl bottom-20 left-1/3 animate-float-medium" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Workflows />
        <Impact />
        <LogoSlider />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  )
}