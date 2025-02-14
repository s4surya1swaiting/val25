"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const memories = [
  "Tui khub excited chhili amake gift debar jonno on valentines day, your eyes said all",
  "Tui akash dekhe thakte pochondo korish, tai ei akasher moddhei amader moment likhe rakhlam.",
  "Ekta random moment, ekta simple kotha—sheguloi to actually special."
]

export default function FloatingStarsSection() {
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null)

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedMemory ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-center max-w-md p-4 bg-purple-900 bg-opacity-80 rounded-lg text-glow"
        >
          {selectedMemory}
        </motion.p>
      </div>
      {memories.map((memory, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedMemory(memory)}
        >
          ⭐
        </motion.div>
      ))}
    </section>
  )
}

