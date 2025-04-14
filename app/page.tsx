"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleOpacity, setTitleOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect()
        const opacity = Math.max(0, Math.min(1, (titleRect.top - 8) / 50))
        setTitleOpacity(opacity)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden")
          } else {
            entry.target.classList.add("is-hidden")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-out").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
          <div className="text-xl text-[#00caff] header-font">Monaco Clean Fusion Forum</div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a
                onClick={() => scrollTo("about")}
                className="cursor-pointer hover:text-[#00caff] transition-colors duration-300 ease-in-out fade-out"
              >
                About
              </a>
              <a
                onClick={() => scrollTo("partners")}
                className="cursor-pointer hover:text-[#00caff] transition-colors duration-300 ease-in-out fade-out"
              >
                Partners
              </a>
              <a
                onClick={() => scrollTo("key-participants")}
                className="cursor-pointer hover:text-[#00caff] transition-colors duration-300 ease-in-out fade-out"
              >
                Key Participants
              </a>
              <a
                onClick={() => scrollTo("program")}
                className="cursor-pointer hover:text-[#00caff] transition-colors duration-300 ease-in-out fade-out"
              >
                Program
              </a>
            </div>
            <a
              href="https://docs.google.com/forms/d/1RXyOJmZ3nH7tondMY_7smr-xdc9VTVBmvqgASOPME2I/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00caff] hover:bg-[#00a0cc] text-gray-950 py-1 px-3 rounded transition-colors duration-300 ease-in-out fade-out text-sm"
            >
              Register
            </a>
          </div>
        </nav>
      </header>

      <section
        id="hero"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://alpharing.com/wp-content/uploads/2025/02/MONACO-COVER-REAL.webp")',
          backgroundPosition: "center 0%",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 flex h-screen w-full items-center">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
            <div className="text-left space-y-8">
              <h1 ref={titleRef} className="text-white">
                <span className="block">Monaco</span>
                <span className="block">Clean Fusion</span>
                <span className="block">Forum</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl">April 28, 2025 at 8:30 AM - 4:30 PM</p>
                <p className="text-xl max-w-[380px]">Yacht Club de Monaco Ballroom Quai Louis II, 98000 Monaco</p>
              </div>
              <a
                href="https://docs.google.com/forms/d/1RXyOJmZ3nH7tondMY_7smr-xdc9VTVBmvqgASOPME2I/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-[#00caff] hover:bg-[#00a0cc] text-gray-950 py-2 px-4 rounded fade-out transition-colors duration-300 ease-in-out"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer"
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#00caff]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h2 className="text-[#00caff] mb-8 fade-out text-center">About the Event</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-lg leading-relaxed fade-in fade-out">
              We are delighted to announce the 2nd Monaco Clean Fusion Forum, organized with the support of H.S.H.
              Prince Albert II and the Monaco Foundation bearing His name. Hosted in Monaco, a global hub for clean
              energy innovation and a meeting place for international leaders, this forum will explore nuclear fusion as
              a game-changing technology essential to achieving a sustainable, net zero future.
            </p>
            <p className="text-lg leading-relaxed mt-6 fade-in fade-out">
              Building on the success of its inaugural edition, this event aims to establish the Monaco Clean Fusion
              Forum as an annual gathering of world leaders, policymakers, industry innovators, and scientific experts
              dedicated to advancing fusion energy. The highlight of this year's forum will be a world-first live fusion
              demonstration, offering a groundbreaking opportunity to witness the immense potential of fusion technology
              firsthand.
            </p>
            <p className="text-lg leading-relaxed mt-6 fade-in fade-out">
              With its promise of virtually limitless, carbon-free energy, nuclear fusion is increasingly recognized as
              a cornerstone of the global energy transition. Recent advances in fusion technology have brought this
              transformative energy source closer than ever, with many companies targeting their first functional
              prototypes and initial energy contributions to the grid within the next five years. As investment and
              innovation in this field continue to accelerate, this forum will serve as a vital platform for
              collaboration, driving progress towards making fusion a reality for the benefit of our planet and future
              generations.
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="py-16" style={{ backgroundColor: "#24485F" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          {/* Initiative Section */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-8 fade-out">An initiative by</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-[450px] h-[200px] p-6 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[200px] mx-auto">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/ari-logo-blue-transparent.png"
                    alt="Alpha Ring International"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships Section */}
          <div className="text-center">
            <h2 className="text-white mb-8 fade-out">In partnership with</h2>

            {/* First row - Prince Albert, Yacht Club, and WI Harper */}
            <div className="flex justify-center items-center flex-wrap gap-2">
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/prince-albert-2-transparent-1.png"
                    alt="Prince Albert II of Monaco Foundation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/yacht-club-monaco.webp"
                    alt="Yacht Club de Monaco"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image src="https://alpharing.com/wp-content/uploads/2025/04/wi-harper-white-2.png" fill className="object-contain" />
                </div>
              </div>

              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image src="https://alpharing.com/wp-content/uploads/2025/04/LFT-full-white.png" fill className="object-contain" />
                </div>
              </div>
            </div>





            {/* Divider line */}
            <hr className="border-t border-gray-600 w-full max-w-4xl mx-auto my-8" />

            {/* Second row - IPEN, Oxford, OneWorld, FirstLight, Anthropocene */}
            <div className="flex justify-center items-center flex-wrap gap-2">
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/ipen-white-transparent.png"
                    alt="IPEN"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/02/oxford.webp"
                    alt="Oxford University"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/One-World-Logo_White-on-Garden-1.png"
                    alt="Yue Sai KanOneWorld"
                    fill
                    className="object-contain"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/firstlight-fusion.png"
                    alt="First Light Fusion"
                    fill
                    className="object-contain"
                    style={{ mixBlendMode: "screen" }}
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/03/anthropocene-1.png"
                    alt="Anthropocene Institute"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/beeon-logo.webp"
                    alt="BeeOn"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/chimei-logo.webp"
                    alt="Chimei"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/davos-logo.webp"
                    alt="Davos"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/eei-logo.webp"
                    alt="EEI"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/gingis-khan-logo.webp"
                    alt="Gingis Khan"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/lin-trust-2.png"
                    alt="Lin Trust"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/imagro-logo-scaled.webp"
                    alt="Imagro"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/kilazzi-logo.webp"
                    alt="Kilazzi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/pmc-white-red-scaled.webp"
                    alt="PMC"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/roadzen-logo.webp"
                    alt="Roadzen"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/techmation-logo.webp"
                    alt="Techmation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="
https://alpharing.com/wp-content/uploads/2025/04/chimei-logo.png "
                    alt="Chimei"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>


              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/tq-tech-logo.png"
                    alt="TQ"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>


              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/wenhao-logo.png"
                    alt="TQ"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>


              <div className="p-4 flex items-center justify-center h-[120px] w-[180px]">
                <div className="relative w-full h-full mx-auto flex items-center justify-center">
                  <Image
                    src="https://alpharing.com/wp-content/uploads/2025/04/LOGO-GIRAUDI-GROUP-WHITE.png"
                    alt="TQ"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="key-participants" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h2 className="text-[#00caff] mb-8 fade-out text-center">Key Participants</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: "H.S.H. Prince Albert II of Monaco",
                role: "",
                image: "https://alpharing.com/wp-content/uploads/2025/02/prince-albert.webp",
              },
              {
                name: "Peter Liu",
                role: "CEO of Alpha Ring International, Chairman of WI Harper",
                image: "https://alpharing.com/wp-content/uploads/2025/02/peter-liu.webp",
              },
              {
                name: "Olivier Wenden",
                role: "CEO of Foundation Prince Albert II of Monaco",
                image: "https://alpharing.com/wp-content/uploads/2025/02/olivier-wenden.webp",
              },
              {
                name: "Dr. Marco Casiraghi",
                role: "President of Engeco & FPFC, Monaco",
                image: "https://alpharing.com/wp-content/uploads/2025/02/marco-casiraghi.webp",
              },
              {
                name: "Dr. Roger Falcone",
                role: "Former President of the American Physical Society; Professor of Physics, UC Berkeley; CSO of Alpha Ring International",
                image: "https://alpharing.com/wp-content/uploads/2025/02/roger-falcone.webp",
              },
              {
                name: "Dr. Kimberly S. Budil",
                role: "Director of Lawrence Livermore National Laboratory",
                image: "https://alpharing.com/wp-content/uploads/2025/03/kim-budil.webp",
              },
              {
                name: "Dr. Heizo Takenaka",
                role: "Director of Global Security Research Instittue at Keio University",
                image: "https://alpharing.com/wp-content/uploads/2025/03/heizo-takenaka.webp",
              },
              {
                name: "Ambrogio Fasoli",
                role: "EPFL and former CEO of EUROfusion",
                image: "https://alpharing.com/wp-content/uploads/2025/03/ambrogio-fasoli.webp",
              },

              {
                name: "Dr. Ahmad Bahai",
                role: "CTO of Texas Instruments",
                image: "https://alpharing.com/wp-content/uploads/2025/02/ahmad-bahai.webp",
              },

              //Page 2
              {
                name: "Carl Page",
                role: "President of the Anthropocene Institute",
                image: "https://alpharing.com/wp-content/uploads/2025/03/carl-page.webp",
              },
              {
                name: "Alain Bécoulet",
                role: "Head of Engineering for ITER",
                image: "https://alpharing.com/wp-content/uploads/2025/03/alain-becoulet.webp",
              },
              {
                name: "Mark Thomas",
                role: "CEO of First Light Fusion",
                image: "https://alpharing.com/wp-content/uploads/2025/03/mark-thomas.webp",
              },
              {
                name: "Dr. Franco Cotana",
                role: "CEO of RSE, Ricera sul Sistema Energetico",
                image: "https://alpharing.com/wp-content/uploads/2025/03/franco-cotana.webp",
              },
              {
                name: "Dr. Alessandro Dodaro",
                role: "Directo of Nuclear Dept. (NUC) of ENEA",
                image: "https://alpharing.com/wp-content/uploads/2025/03/alessandro-dodaro.webp",
              },
              {
                name: "Dr. Gianluca Gregori",
                role: "Professor of Physics, Oxford University, UK",
                image: "https://alpharing.com/wp-content/uploads/2025/02/gianluca-gregori.webp",
              },
              {
                name: "Prof. Stefano Besseghini",
                role: "President of ARERA",
                image: "https://alpharing.com/wp-content/uploads/2025/03/stephano.webp",
              },
              {
                name: "Dr. Isolda Costa",
                role: "Director of Brazil's Nuclear and Energy Research Institute IPEN",
                image: "https://alpharing.com/wp-content/uploads/2025/02/milena-stocheva.webp",
              },
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 overflow-hidden rounded-full bg-gray-800">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm mb-1 fade-out">{person.name}</h3>
                <p className="text-xs text-gray-400 fade-out">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-24" style={{ backgroundColor: "#24485F" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h2 className="text-[#00caff] mb-8 fade-out text-center">Program</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    8:30-9:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Registration, Coffee, Networking
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    9:00-9:10
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Opening Speech</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Peter Liu (CEO of Alpha Ring), Ida Liu (Former Global Head of Citi Private Bank)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    9:10-9:20
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Why Fusion Matters
                      </div>
                      <div className="text-sm text-gray-300">Roger Falcone (Chief Scientist of Alpha Ring)</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    9:20-9:40
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Japan's Fusion Strategy
                      </div>
                      <div className="text-sm text-gray-300">
                        Heizo Takenaka (Former Minister of State for Financial Services, Japan)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    9:40-10:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Challenges in Fusion: Education and Workforce
                        Development
                      </div>
                      <div className="text-sm text-gray-300">
                        Ambrogio Fasoli (Vice President of EPFL, former CEO of EUROfusion)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    10:00-10:15
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Welcome Address by HSH Prince Albert II of Monaco
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    10:15-10:30
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Award and Signing Ceremony
                      </div>
                      <div className="text-sm text-gray-300">University Representatives</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    10:30-10:50
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Presentation:</span> Energy of the Next Generation: Driving
                        Fusion Education Globally with Alpha-E
                      </div>
                      <div className="text-sm text-gray-300">Alexander Gunn (Senior Scientist at Alpha Ring)</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    10:50-11:20
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Coffee Break
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    11:20-12:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Panel Discussion:</span> Education in Fusion
                      </div>
                      <div className="text-sm text-gray-300">
                        Ryan Ramsey (Co Chair of the Fusion Skills Council, UK), Dario Cruz (CEO of FuseNet), Jenny Su
                        (Chairman of NCKU Research and Development Foundation)
                        <br />
                        Moderator: Roger Falcone (Chief Scientist of Alpha Ring)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    12:00-13:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Networking Lunch
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    13:00-13:20
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> AI-Energy-Fusion
                      </div>
                      <div className="text-sm text-gray-300">
                        Ahmad Bahai (Chief Technology Officer of Texas Instruments)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    13:20-13:40
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Bringing Fusion to Public: Driving Public
                        Awareness & Industry Adoption
                      </div>
                      <div className="text-sm text-gray-300">
                        Mikhail Chudakov (Deputy Director General, Head of the Department of Nuclear Energy of IAEA)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    13:40-14:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Fusion Ignition: What Comes Next?
                      </div>
                      <div className="text-sm text-gray-300">
                        Kimberly S. Budil (Director of the Lawrence Livermore National Lab)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    14:00-14:15
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Keynote:</span> Zero Waste and Beyond
                      </div>
                      <div className="text-sm text-gray-300">Arthur Huang (Founder & CEO of Miniwiz)</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    14:15-15:00
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Roundtable:</span> Fusion as a Global Initiative: How Nations
                        are Shaping the Holy Grail of Energy
                      </div>
                      <div className="text-sm text-gray-300">
                        Isolda Costa (Director of IPEN), Luciano Martin (Director of RSE), Dan Kammen (Professor of
                        Energy, UC Berkeley), Alain Bécoulet (Deputy Director General of ITER)
                        <br />
                        Moderator: Stuart Allen (CEO of FusionX)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    15:00-15:15
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Coffee Break
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    15:15-15:45
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Fireside Chat:</span> Topic TBA
                      </div>
                      <div className="text-sm text-gray-300">
                        Carl Page (President of Anthropocene Institute), Stefano Besseghini (President of ARERA, Italy)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    15:45-16:30
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Panel:</span> First Markets in Fusion: Early Commercial
                        Opportunities in Fusion
                      </div>
                      <div className="text-sm text-gray-300">
                        Emanuele Massarelli (Vice President of EEI S.p.A.), Rajeev Pattathil (Head of Novel Accelerator
                        Science and Applications at Rutherford Appleton Laboratory), Alexander Gunn (Senior Scientist at
                        Alpha Ring)
                        <br />
                        Moderator: Gianluca Gregori (Professor of Physics at Oxford University)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    16:30-17:15
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        <span className="text-[#00caff]">Panel:</span> AI for Fusion & Fusion for AI
                      </div>
                      <div className="text-sm text-gray-300">
                        Mark Thomas (CEO of First Light Fusion), Frank Hiroshi Ling (Chief Scientist of Anthropocene
                        Institute), Tim Dodwell (Founder & CEO of digiLab), Aleksei Zollotarev (CEO & Founder of Next
                        Step Fusion)
                        <br />
                        Moderator: Giovanni Landi (Alpha Ring EMEA General Manager)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    17:15-17:30
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Closing Remarks
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="transition-colors h-16">
                  <td className="py-2 pr-6 pl-4 fade-out whitespace-nowrap text-xs" style={{ width: "120px" }}>
                    17:30-20:30
                  </td>
                  <td className="py-2 pl-6 fade-out">
                    <div className="rounded-md hover:bg-gray-800/50 p-2">
                      <div className="font-medium header-font" style={{ fontWeight: 500 }}>
                        Networking & Gala Dinner
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="register" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-[#00caff] mb-4 fade-out">Register Now</h2>
          <p className="text-lg mb-8 fade-out">
            Join us for this exclusive event at the Yacht Club de Monaco. Early bird registration is now open.
          </p>
          <a
            href="https://docs.google.com/forms/d/1RXyOJmZ3nH7tondMY_7smr-xdc9VTVBmvqgASOPME2I/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00caff] hover:bg-[#00a0cc] text-gray-950 py-2 px-4 rounded fade-out transition-colors duration-300 ease-in-out"
          >
            Register Now
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#00caff] mb-4">Monaco Clean Fusion Forum</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://alpharing.com" className="text-gray-300 hover:text-[#00caff]">
                    Alpha Ring International
                  </Link>
                </li>
                <li>
                  <Link href="https://www.fpa2.org/en/" className="text-gray-300 hover:text-[#00caff]">
                    Prince Albert II of Monaco Foundation
                  </Link>
                </li>
                <li>
                  <Link href="https://www.yacht-club-monaco.mc/en/" className="text-gray-300 hover:text-[#00caff]">
                    Yacht Club de Monaco
                  </Link>
                </li>
                <li>
                  <Link href="https://innovation.ox.ac.uk/" className="text-gray-300 hover:text-[#00caff]">
                    Oxford Innovation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00caff] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://docs.google.com/forms/d/1RXyOJmZ3nH7tondMY_7smr-xdc9ME2I/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#00caff]"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@monacofusionforum.com" className="text-gray-300 hover:text-[#00caff]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
