"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const notes = [
  "Tui chocolate er moto—simple, but ekbar taste korle bhola jay na.",
  "Ekta chhoto surpriseo kato boro energy dite pare, seta tui ajke bojhli?",
  "Kono ekta raat e jodi mone pore, ei site ta khule dekho.",
]

export default function HiddenNotesSection() {
  const [revealedNotes, setRevealedNotes] = useState<number[]>([])

  const revealNote = (index: number) => {
    if (!revealedNotes.includes(index)) {
      setRevealedNotes([...revealedNotes, index])
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Hidden Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => revealNote(index)}
            className="bg-purple-900 rounded-lg p-4 cursor-pointer h-40 flex items-center justify-center text-center"
          >
            {revealedNotes.includes(index) ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-glow text-lg"
              >
                {note}
              </motion.p>
            ) : (
              <p className="text-4xl">?</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

