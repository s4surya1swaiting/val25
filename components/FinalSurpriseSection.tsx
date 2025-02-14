"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function FinalSurpriseSection() {
  const [showHeart, setShowHeart] = useState(false)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-6xl mb-4"
        >
          ☕
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Tui amar cup of hot chocolate</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Tor jodi konodin mon kharap hoy, ei site ta khule dekhis karon amar kache tor mane ekta chocolate er moto 
          shobcheye priyo, shobcheye shokto, ar shobcheye beshi energy dayok.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowHeart(true)}
          className="px-6 py-3 bg-purple-600 rounded-full text-xl hover:bg-purple-700 transition-colors"
        >
          Click for a surprise
        </motion.button>
      </motion.div>
      {showHeart && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-9xl text-red-500 text-glow"
          >
          
            ❤️
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

