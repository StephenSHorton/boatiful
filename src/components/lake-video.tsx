'use client'

import { motion } from 'motion/react'

export default function LakeVideo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 2,
      }}
      className="pointer-events-none h-[800px] flex items-center justify-center overflow-hidden"
    >
      <iframe
        className="w-full h-[1000px]"
        src="https://www.youtube.com/embed/F9d2hF5O7i0?autoplay=1&mute=1&loop=1&playlist=F9d2hF5O7i0&controls=0&rel=0&iv_load_policy=3&playsinline=1"
        title="lake"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={false}
        data-ruffle-polyfilled=""
      ></iframe>
    </motion.div>
  )
}
