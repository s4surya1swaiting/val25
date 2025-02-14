"use client"

import { motion } from "framer-motion"

export default function IntroSection() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Mammam,</h1>
        <p className="text-lg md:text-xl leading-relaxed">
         Tui jokhon chocolate niye dariye chhili, shei moment ta amar jonne alada chhilo. 
          Unexpected, but perfect. Ei site ta shei moment er ekta digital version—chhoto chhoto moment gulo ek jaigay. 
          Just scroll kor, bujhte parbi.
        </p>
      </motion.div>
    </section>
  )
}

