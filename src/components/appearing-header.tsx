'use client'

import { motion } from 'motion/react'

export default function AppearingHeader() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 3 }}
      >
        <h1 className="font-extrabold text-[16rem] text-white">BOATIFUL</h1>
        <p className="absolute bottom-10 left-4 font-bold text-3xl">
          MAKE <span className="text-red-500">BOATS</span>{' '}
          <span className="text-blue-700">GREAT</span> AGAIN
        </p>
      </motion.div>
    </div>
  )
}
