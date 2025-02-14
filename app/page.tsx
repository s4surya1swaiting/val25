"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import IntroSection from "@/components/IntroSection"
import QuizSection from "@/components/QuizSection"
import HiddenNotesSection from "@/components/HiddenNotesSection"
import FloatingStarsSection from "@/components/FloatingStarsSection"
import FinalSurpriseSection from "@/components/FinalSurpriseSection"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={scrollRef} className="h-screen overflow-y-auto overflow-x-hidden bg-black text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <IntroSection />
        <QuizSection />
        <HiddenNotesSection />
        <FloatingStarsSection />
        <FinalSurpriseSection />
      </motion.div>
    </div>
  )
}

