"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { MapPin, School, FileText, ExternalLink } from "lucide-react"
import { TextScramble } from "@/components/text-scramble"

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono text-base leading-relaxed">
      <div className="container max-w-4xl mx-auto px-6 py-8">
        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-300">
              [h] home
            </Link>
            <Link href="#work" className="hover:text-cyan-400 transition-colors duration-300">
              [w] selected work
            </Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
              [c] contact
            </Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors duration-300">
              [?] about
            </Link>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-400 animate-pulse">$</span>
            <h1 className="text-3xl text-white font-normal">whoami</h1>
          </div>

          <div className="ml-4 mb-6">
            <h2 className="text-2xl text-red-400 mb-3">
              {isLoaded ? <TextScramble text="aishan irfan" /> : "aishan irfan"}
            </h2>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>calgary, canada</span>
              </div>
              <div className="flex items-center gap-2">
                <School className="h-4 w-4 text-cyan-400" />
                <span>cs @ ucalgary</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-400" />
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors hover:underline"
                >
                  resume.pdf
                </a>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-gray-700 pl-4 ml-2">
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              passionate full-stack developer who loves building things and solving complex problems. i enjoy working
              with modern web technologies. when i'm not coding, i'm probably exploring new frameworks or obsessing over watches
            </p>
          </div>
        </header>

        {/* Selected Work Section */}
        <section id="work" className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-cyan-400">$</span>
            <h2 className="text-xl text-white">ls -la selected_work/</h2>
          </div>

          <div className="ml-4 space-y-6">
            {/* Projects */}
            <div>
              <div className="text-orange-400 mb-4 text-sm">// PROJECTS</div>

              <div className="space-y-6">
                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredItem("neural")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-400">→</span>
                    <a
                      href="https://casesandcovers.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg group-hover:text-cyan-400 transition-colors hover:underline"
                    >
                      cases_and_covers.store
                    </a>
                    <span className="text-gray-500 text-sm">[2024]</span>
                    <span className="text-gray-500 text-sm">↗</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 mb-2 text-sm">e-commerce platform </p>
                    <p className="text-gray-300 leading-relaxed">
                    built a customizable ecommerce store that lets you design and buy your own cases
                    </p>
                    {hoveredItem === "neural" && (
                      <div className="mt-2 text-sm text-gray-500">
                        <span className="text-orange-400">stack:</span> next.js, typescript, prisma, stripe, tailwind
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredItem("quantum")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-400">→</span>
                    <a
                      href="https://lingo-orpin-gamma.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg group-hover:text-cyan-400 transition-colors hover:underline"
                    >
                      lingo_learn.app
                    </a>
                    <span className="text-gray-500 text-sm">[2024]</span>
                    <span className="text-gray-500 text-sm">↗</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 mb-2 text-sm">language learning SaaS</p>
                    <p className="text-gray-300 leading-relaxed">
                      developed a language learning platform with gamified progress tracking
                    </p>
                    {hoveredItem === "quantum" && (
                      <div className="mt-2 text-sm text-gray-500">
                        <span className="text-orange-400">stack:</span> next.js, postgres, drizzle, vercel, stripe
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredItem("void")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-400">→</span>
                    <a
                      href="https://github.com/aiishaan/Jungle-Rumble"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg group-hover:text-cyan-400 transition-colors hover:underline"
                    >
                      jungle_rumble.pi
                    </a>
                    <span className="text-gray-500 text-sm">[2023]</span>
                    <span className="text-gray-500 text-sm">↗</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 mb-2 text-sm">retro arcade game</p>
                    <p className="text-gray-300 leading-relaxed">
                      created a captivating retro platformer game inspired by donkey kong for Raspberry Pi
                    </p>
                    {hoveredItem === "void" && (
                      <div className="mt-2 text-sm text-gray-500">
                        <span className="text-orange-400">stack:</span> c, gimp, raspberry pi, linux
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredItem("terminal")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-400">→</span>
                    <a
                      href="https://github.com/aiishaan/SelfCheckOut-software"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg group-hover:text-cyan-400 transition-colors hover:underline"
                    >
                      selfcheckout_core.jar
                    </a>
                    <span className="text-gray-500 text-sm">[2023]</span>
                    <span className="text-gray-500 text-sm">↗</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 mb-2 text-sm">checkout control system</p>
                    <p className="text-gray-300 leading-relaxed">
                      built a control software designed for self checkout systems
                    </p>
                    {hoveredItem === "terminal" && (
                      <div className="mt-2 text-sm text-gray-500">
                        <span className="text-orange-400">stack:</span> java, git, mockito, junit
                      </div>
                    )}
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-cyan-400" />
                    <a
                      href="https://github.com/aiishaan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors hover:underline"
                    >
                      all projects
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-cyan-400">$</span>
            <h2 className="text-xl text-white">cat about.txt</h2>
          </div>

          <div className="ml-4 border-l-2 border-gray-800 pl-4">
            <div className="space-y-4">
              <div>
                <span className="text-orange-400">skills:</span>
                <div className="ml-2 text-gray-300">
                  react, next.js, typescript, node.js, postgresql, mongodb, aws, docker, git, redis, python, c, go, java, tailwind, cpp
                </div>
              </div>
              <div>
                <span className="text-orange-400">interests:</span>
                <div className="ml-2 text-gray-300">
                  f1, watches, music
                </div>
              </div>
              <div>
                <span className="text-orange-400">currently:</span>
                <div className="ml-2 text-gray-300">
                  leetcoding, building side projects
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-cyan-400">$</span>
            <h2 className="text-xl text-white">ls -la contact/</h2>
          </div>

          <div className="ml-4 space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">email:</span>
              <a
                href="mailto:aishanirfan6@gmail.com"
                className="text-white hover:text-cyan-400 transition-colors hover:underline"
              >
                aishanirfan6@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">github:</span>
              <a
                href="https://github.com/aiishaan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors hover:underline"
              >
                github.com/aiishaan ↗
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">linkedin:</span>
              <a
                href="https://www.linkedin.com/in/aishan-irfan-b49b37136/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors hover:underline"
              >
                linkedin.com/in/aishan ↗
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">twitter:</span>
              <a
                href="https://twitter.com/sannpanis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors hover:underline"
              >
                @sannpanis ↗
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-6 mt-12">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">$</span>
              <span>© {new Date().getFullYear()} aishan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">built with</span>
              <span className="text-gray-400">next.js</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
