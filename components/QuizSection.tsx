"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const questions = [
  {
    question: "What is the brand of chocolate Mammam gave Momo for the first time?",
    options: ["Bonville", "Dairy Milk", "Amul Dark", "Campco"],
    answer: "Bonville",
  },
  {
    question: "What is the brand of chocolate Momo gave Mammam for the first time?",
    options: ["Bonville", "Dairy Milk", "Amul Dark", "Campco"],
    answer: "Dairy Milk",
  },
]

export default function QuizSection() {
  const [answers, setAnswers] = useState<string[]>(["", ""])
  const [showStars, setShowStars] = useState(false)

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answer
    setAnswers(newAnswers)

    if (newAnswers.every((ans, index) => ans === questions[index].answer)) {
      setShowStars(true)
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Chocolate Memory Test</h2>
      <div className="space-y-8 max-w-md w-full">
        {questions.map((q, index) => (
          <div key={index}>
            <p className="text-xl mb-4">{q.question}</p>
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(index, option)}
                  className={`px-4 py-2 rounded ${
                    answers[index] === option ? "bg-purple-600" : "bg-purple-800"
                  } hover:bg-purple-700 transition-colors`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showStars && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-8">
          <p className="text-2xl text-glow">✨ Tui shob mone rekhechish! ✨</p>
        </motion.div>
      )}
    </section>
  )
}

