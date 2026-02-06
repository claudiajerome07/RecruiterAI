// // import { useEffect, useState } from 'react'

// // const painPoints = [
// //   {
// //     id: 1,
// //     title: "21 days wasted",
// //     description: "We spent 3 weeks screening 400 resumes manually. Lost 2 great candidates to faster companies.",
// //     person: "Sarah Chen",
// //     role: "Head of Talent at TechScale Inc",
// //     initials: "SC",
// //     color: "from-blue-500/20 to-blue-600/30",
// //     iconColor: "bg-blue-500",
// //     position: { top: "15%", left: "10%" }
// //   },
// //   {
// //     id: 2,
// //     title: "Scheduling nightmare",
// //     description: "Coordinating 15 interview slots across 3 time zones took me an entire day. Still got it wrong.",
// //     person: "Marcus Rivera",
// //     role: "Startup Founder at LaunchPad",
// //     initials: "MR",
// //     color: "from-purple-500/20 to-purple-600/30",
// //     iconColor: "bg-purple-500",
// //     position: { top: "10%", right: "15%" }
// //   },
// //   {
// //     id: 3,
// //     title: "Poor screening quality",
// //     description: "I interviewed 8 unqualified candidates because our screening process missed basic requirements.",
// //     person: "David Park",
// //     role: "Engineering Lead at CloudNexa",
// //     initials: "DP",
// //     color: "from-indigo-500/20 to-indigo-600/30",
// //     iconColor: "bg-indigo-500",
// //     position: { bottom: "25%", left: "8%" }
// //   },
// //   {
// //     id: 4,
// //     title: "Lost top candidate",
// //     description: "Our best candidate accepted another offer while we were still reviewing applications.",
// //     person: "Emily Watson",
// //     role: "HR Manager at GrowthCorp",
// //     initials: "EW",
// //     color: "from-teal-500/20 to-teal-600/30",
// //     iconColor: "bg-teal-500",
// //     position: { bottom: "20%", right: "12%" }
// //   }
// // ]

// // export default function Hero() {
// //   const [activeCard, setActiveCard] = useState(null)
// //   const [isMobile, setIsMobile] = useState(false)

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 1024)
// //     checkMobile()
// //     window.addEventListener('resize', checkMobile)
// //     return () => window.removeEventListener('resize', checkMobile)
// //   }, [])

// //   const handleCardClick = (id) => {
// //     setActiveCard(activeCard === id ? null : id)
// //   }

// //   const handleClose = () => {
// //     setActiveCard(null)
// //   }

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
// //       {/* Animated gradient background */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/50 to-indigo-50/40">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(165,216,255,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(192,132,252,0.2),transparent_50%)]" />
// //       </div>

// //       {/* Floating particles */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         {[...Array(20)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float-particles"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 5}s`,
// //               animationDuration: `${15 + Math.random() * 20}s`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Main content */}
// //       <div className="relative max-w-7xl mx-auto w-full">
// //         {/* Header section */}
// //         <div className="text-center mb-12 lg:mb-16">
// //           {/* Glass badge */}
// //           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-glass mb-8 animate-fade-in">
// //             <div className="relative">
// //               <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" />
// //               <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" />
// //             </div>
// //             <span className="text-sm font-semibold text-gray-800 tracking-wider">
// //               AI-POWERED RECRUITING PLATFORM
// //             </span>
// //           </div>

// //           {/* Main headline with gradient */}
// //           <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8">
// //             <span className="block text-gray-900">Every Hire,</span>
// //             <span className="relative inline-block mt-2">
// //               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">
// //                 Faster & Better
// //               </span>
// //               <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-purple-600/10 blur-3xl rounded-full animate-pulse-slow" />
// //             </span>
// //           </h1>

// //           {/* Description */}
// //           <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4 mb-10 lg:mb-12 leading-relaxed">
// //             Stop losing top talent to slow processes. RecruiterAI automates screening, scheduling, and interviewing—
// //             <span className="font-semibold text-gray-800"> so you can focus on what matters: finding the right people.</span>
// //           </p>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 lg:mb-20">
// //             <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
// //               <span className="relative z-10 flex items-center gap-2">
// //                 Start Free Trial
// //                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// //                 </svg>
// //               </span>
// //               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //             </button>

// //             <button className="group px-8 py-4 rounded-xl bg-white/20 backdrop-blur-lg border border-gray-200/50 text-gray-900 font-semibold hover:bg-white/30 hover:border-gray-300/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm">
// //               <span className="flex items-center gap-2">
// //                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                 </svg>
// //                 Watch Demo
// //               </span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Floating pain point cards - Desktop */}
// //         {!isMobile && (
// //           <div className="relative h-[400px]">
// //             {painPoints.map((point) => (
// //               <div
// //                 key={point.id}
// //                 className="absolute cursor-pointer transition-all duration-500 hover:scale-110"
// //                 style={point.position}
// //                 onClick={() => handleCardClick(point.id)}
// //               >
// //                 {/* Floating bubble */}
// //                 <div className={`relative rounded-full p-3 backdrop-blur-lg border-2 border-white/50 shadow-glass hover:shadow-glass-lg transition-all duration-300 ${activeCard === point.id
// //                     ? 'scale-125 ring-4 ring-white/30'
// //                     : 'hover:ring-4 hover:ring-white/20'
// //                   } bg-gradient-to-br ${point.color}`}>
// //                   {/* Avatar */}
// //                   <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
// //                     <span className="text-white font-bold text-lg lg:text-xl">
// //                       {point.initials}
// //                     </span>
// //                   </div>

// //                   {/* Badge */}
// //                   <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/80 shadow-sm`}>
// //                     <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
// //                       {point.title}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Card popup */}
// //                 {activeCard === point.id && (
// //                   <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 w-80 z-50 animate-slide-up">
// //                     {/* Arrow */}
// //                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-200/50" />

// //                     {/* Card */}
// //                     <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl overflow-hidden">
// //                       {/* Header */}
// //                       <div className={`bg-gradient-to-r ${point.color} p-4`}>
// //                         <div className="flex items-center gap-3">
// //                           <div className={`w-10 h-10 rounded-full ${point.iconColor} flex items-center justify-center shadow-md`}>
// //                             <span className="text-white font-bold">{point.initials}</span>
// //                           </div>
// //                           <div>
// //                             <h3 className="text-white font-bold">{point.person}</h3>
// //                             <p className="text-white/90 text-sm">{point.role}</p>
// //                           </div>
// //                           <button
// //                             onClick={(e) => {
// //                               e.stopPropagation()
// //                               handleClose()
// //                             }}
// //                             className="ml-auto w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
// //                           >
// //                             <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                             </svg>
// //                           </button>
// //                         </div>
// //                       </div>

// //                       {/* Content */}
// //                       <div className="p-4">
// //                         <p className="text-gray-700 leading-relaxed">"{point.description}"</p>
// //                         <div className="mt-4 pt-3 border-t border-gray-200/50">
// //                           <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/50 rounded-full">
// //                             <div className={`w-2 h-2 rounded-full ${point.iconColor}`} />
// //                             <span className="text-sm font-semibold text-gray-800">{point.title}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Mobile version */}
// //         {isMobile && (
// //           <div className="mt-12 px-4">
// //             <div className="grid grid-cols-2 gap-4">
// //               {painPoints.map((point) => (
// //                 <div
// //                   key={point.id}
// //                   className={`bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-4 cursor-pointer transition-all duration-300 ${activeCard === point.id ? 'ring-2 ring-blue-500/50' : ''
// //                     }`}
// //                   onClick={() => handleCardClick(point.id)}
// //                 >
// //                   <div className="flex items-start gap-3">
// //                     <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${point.color} flex items-center justify-center flex-shrink-0`}>
// //                       <span className="text-white font-bold text-sm">{point.initials}</span>
// //                     </div>
// //                     <div className="flex-1">
// //                       <h4 className="font-semibold text-gray-800 text-sm">{point.person}</h4>
// //                       <p className="text-xs text-gray-600 mt-1">{point.role}</p>
// //                       <div className="mt-2 inline-flex items-center gap-2 px-2 py-1 bg-white/50 rounded-full">
// //                         <div className={`w-1.5 h-1.5 rounded-full ${point.iconColor}`} />
// //                         <span className="text-xs font-semibold text-gray-800">{point.title}</span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Expanded content */}
// //                   {activeCard === point.id && (
// //                     <div className="mt-4 pt-4 border-t border-white/30 animate-fade-in">
// //                       <p className="text-sm text-gray-700 leading-relaxed">"{point.description}"</p>
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Scroll indicator */}
// //         <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
// //           <div className="flex flex-col items-center gap-2">
// //             <span className="text-sm text-gray-400/80 font-medium tracking-wider">Scroll to explore</span>
// //             <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent" />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// import { useState, useEffect } from 'react'

// const painPoints = [
//   {
//     id: 1,
//     title: "21 days wasted",
//     description: "We spent 3 weeks screening 400 resumes manually. Lost 2 great candidates to faster companies.",
//     person: "Sarah Chen",
//     role: "Head of Talent at TechScale Inc",
//     initials: "SC",
//     color: "bg-gradient-to-br from-blue-500 to-blue-600",
//     accent: "bg-blue-100 border-blue-200",
//     icon: "⏰"
//   },
//   {
//     id: 2,
//     title: "Scheduling nightmare",
//     description: "Coordinating 15 interview slots across 3 time zones took me an entire day. Still got it wrong.",
//     person: "Marcus Rivera",
//     role: "Startup Founder at LaunchPad",
//     initials: "MR",
//     color: "bg-gradient-to-br from-purple-500 to-purple-600",
//     accent: "bg-purple-100 border-purple-200",
//     icon: "🗓️"
//   },
//   {
//     id: 3,
//     title: "Poor screening quality",
//     description: "I interviewed 8 unqualified candidates because our screening process missed basic requirements.",
//     person: "David Park",
//     role: "Engineering Lead at CloudNexa",
//     initials: "DP",
//     color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
//     accent: "bg-indigo-100 border-indigo-200",
//     icon: "📊"
//   },
//   {
//     id: 4,
//     title: "Lost top candidate",
//     description: "Our best candidate accepted another offer while we were still reviewing applications.",
//     person: "Emily Watson",
//     role: "HR Manager at GrowthCorp",
//     initials: "EW",
//     color: "bg-gradient-to-br from-teal-500 to-teal-600",
//     accent: "bg-teal-100 border-teal-200",
//     icon: "🎯"
//   }
// ]

// export default function Hero() {
//   const [activeCard, setActiveCard] = useState(null)

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
//       {/* Clean background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

//       {/* Subtle accent gradients */}
//       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/20 to-blue-100/10 rounded-full blur-3xl" />

//       {/* Main content */}
//       <div className="relative max-w-6xl mx-auto w-full">
//         {/* Header section - Clean and bold */}
//         <div className="text-center mb-10 lg:mb-14">
//           {/* Professional badge */}
//           <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-8 shadow-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-500 rounded-full" />
//               <span className="text-sm font-semibold text-gray-800 tracking-wider">
//                 AI-POWERED RECRUITING PLATFORM
//               </span>
//             </div>
//           </div>

//           {/* Bold headline */}
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
//             Every Hire,
//             <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
//               Faster & Better
//             </span>
//           </h1>

//           {/* Strong description */}
//           <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto px-4 mb-10 lg:mb-12 leading-relaxed font-medium">
//             Stop losing top talent to slow processes. RecruiterAI automates screening, scheduling, and interviewing—so you can focus on what matters: finding the right people.
//           </p>

//           {/* Prominent CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
//             <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-w-[200px]">
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 Start Free Trial
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>

//             <button className="group px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-w-[200px] shadow-sm">
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Watch Demo
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Pain Points Section - Integrated below hero */}
//         <div className="mt-8 lg:mt-12">
//           <div className="text-center mb-8">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
//               Real Hiring Challenges Companies Face
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               These are the exact problems RecruiterAI solves
//             </p>
//           </div>

//           {/* Pain points grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//             {painPoints.map((point) => (
//               <div
//                 key={point.id}
//                 className={`relative rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${activeCard === point.id
//                     ? 'border-blue-300 bg-blue-50/50 shadow-md'
//                     : 'border-gray-100 bg-white hover:border-gray-200'
//                   }`}
//                 onClick={() => setActiveCard(activeCard === point.id ? null : point.id)}
//               >
//                 <div className="flex items-start gap-4">
//                   {/* Avatar */}
//                   <div className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center shadow-md flex-shrink-0`}>
//                     <span className="text-white font-bold text-lg">{point.initials}</span>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h3 className="font-semibold text-gray-900 text-lg mb-1">{point.person}</h3>
//                         <p className="text-sm text-gray-600 mb-2">{point.role}</p>
//                       </div>
//                       <span className="text-2xl">{point.icon}</span>
//                     </div>

//                     {/* Pain point badge */}
//                     <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${point.accent} mt-2`}>
//                       <div className="w-2 h-2 bg-current rounded-full opacity-70" />
//                       <span className="text-sm font-semibold text-gray-800">{point.title}</span>
//                     </div>

//                     {/* Description (shown when active) */}
//                     {activeCard === point.id && (
//                       <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
//                         <p className="text-gray-700 leading-relaxed text-sm">"{point.description}"</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* View details hint */}
//                 {activeCard !== point.id && (
//                   <div className="mt-4 pt-3 border-t border-gray-100">
//                     <p className="text-xs text-gray-500 text-center">
//                       Click to view details
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Stats below pain points */}
//           <div className="mt-10 lg:mt-14 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl p-6 border border-blue-100">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-900 mb-1">10x</div>
//                 <div className="text-sm text-gray-600 font-medium">Faster Screening</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-900 mb-1">70%</div>
//                 <div className="text-sm text-gray-600 font-medium">Faster Hiring</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-900 mb-1">50%</div>
//                 <div className="text-sm text-gray-600 font-medium">Less Bad Hires</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-900 mb-1">80%</div>
//                 <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// const painPoints = [
//   {
//     id: 'delay',
//     title: 'Slow Hiring',
//     description:
//       'Candidates wait weeks for feedback, leading to drop-offs and lost talent.',
//     initials: 'SH',
//     person: 'Sarah K.',
//     role: 'Startup Founder',
//     color: 'from-red-400 to-pink-500',
//     x: 20,
//     y: 35,
//   },
//   {
//     id: 'screening',
//     title: 'Manual Screening',
//     description:
//       'Recruiters waste hours filtering resumes instead of engaging with candidates.',
//     initials: 'MS',
//     person: 'Amit R.',
//     role: 'HR Manager',
//     color: 'from-blue-400 to-indigo-500',
//     x: 80,
//     y: 32,
//   },
//   {
//     id: 'coordination',
//     title: 'Scheduling Chaos',
//     description:
//       'Endless emails just to schedule one interview slows everything down.',
//     initials: 'SC',
//     person: 'Linda M.',
//     role: 'Talent Lead',
//     color: 'from-emerald-400 to-teal-500',
//     x: 25,
//     y: 70,
//   },
//   {
//     id: 'dropoff',
//     title: 'Candidate Drop-off',
//     description:
//       'Top candidates accept other offers due to slow communication.',
//     initials: 'CD',
//     person: 'James P.',
//     role: 'Hiring Manager',
//     color: 'from-yellow-400 to-orange-500',
//     x: 75,
//     y: 72,
//   },
// ]

// export default function Hero() {
//   const [activeBubble, setActiveBubble] = useState(null)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 1024)
//     check()
//     window.addEventListener('resize', check)
//     return () => window.removeEventListener('resize', check)
//   }, [])

//   const handleBubbleClick = (id, e) => {
//     e.stopPropagation()
//     setActiveBubble((prev) => (prev === id ? null : id))
//   }

//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-32 overflow-hidden"
//       onClick={() => setActiveBubble(null)}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://i.pinimg.com/1200x/b0/8a/06/b08a06274a53cd90bedfb117ccfe20fa.jpg')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//       </div>

//       {/* Content Core */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         {/* Badge */}
//         <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white">
//           <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//           AI-POWERED RECRUITING
//         </span>

//         {/* Headline */}
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
//           Every Hire,
//           <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
//             Faster & Better
//           </span>
//         </h1>

//         {/* Subtext Card */}
//         <div className="mt-8 mx-auto max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
//           <p className="text-xl text-white/90 leading-relaxed">
//             Stop losing top talent to slow processes. RecruiterAI automates
//             screening, scheduling, and interviewing — so you can focus on hiring
//             the right people.
//           </p>
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">
//             Get Started
//           </button>
//           <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition">
//             Watch Demo
//           </button>
//         </div>
//       </div>

//       {/* Desktop Pain Bubbles */}
//       {!isMobile && (
//         <div className="absolute inset-0 z-20 pointer-events-none">
//           {painPoints.map((point) => {
//             const isActive = activeBubble === point.id

//             return (
//               <div
//                 key={point.id}
//                 className="absolute pointer-events-auto"
//                 style={{
//                   left: `${point.x}%`,
//                   top: `${point.y}%`,
//                   transform: 'translate(-50%, -50%)',
//                 }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.12 }}
//                   onClick={(e) => handleBubbleClick(point.id, e)}
//                   className={`relative rounded-full p-3 bg-gradient-to-br ${point.color}
//                     border border-white/40 backdrop-blur-xl shadow-2xl cursor-pointer`}
//                 >
//                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
//                     <span className="text-white font-bold">
//                       {point.initials}
//                     </span>
//                   </div>

//                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white text-xs rounded-full whitespace-nowrap">
//                     {point.title}
//                   </div>
//                 </motion.div>

//                 {isActive && (
//                   <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-72 z-50">
//                     <div className="bg-white rounded-xl shadow-xl p-4 text-left">
//                       <p className="text-gray-800 text-sm mb-3">
//                         "{point.description}"
//                       </p>
//                       <div className="text-xs font-semibold text-gray-600">
//                         {point.person} • {point.role}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       )}

//       {/* Mobile Pain Cards */}
//       {isMobile && (
//         <div className="relative z-10 mt-16 grid gap-4 max-w-md mx-auto">
//           {painPoints.map((point) => (
//             <div
//               key={point.id}
//               className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-left"
//             >
//               <h3 className="text-white font-semibold mb-1">
//                 {point.title}
//               </h3>
//               <p className="text-white/80 text-sm">
//                 {point.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }


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
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-32 overflow-hidden"
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

      {/* HEADER CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-black/50 backdrop-blur-2xl border border-white/20 rounded-3xl px-8 py-12 text-center shadow-2xl">
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

      {/* FLOATING PAIN POINT BUBBLES */}
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
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-2xl border border-gray-200 overflow-hidden"
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
