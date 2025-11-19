import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 drop-shadow"
        >
          THE LAZY VIRTUOSO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-purple-100/90"
        >
          A digital gallery of art, emotion, and thought — enter the Ebroverse.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#gallery" className="pointer-events-auto inline-flex items-center rounded-full bg-white/10 backdrop-blur px-5 py-2 text-purple-100 hover:bg-white/20 transition">Explore Gallery</a>
          <a href="/store" className="pointer-events-auto inline-flex items-center rounded-full bg-fuchsia-500/90 px-5 py-2 text-white hover:bg-fuchsia-500 transition">Visit Store</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
