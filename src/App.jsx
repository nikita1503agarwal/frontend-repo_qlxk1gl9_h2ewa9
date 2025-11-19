import Nav from './components/Nav'
import Hero from './components/Hero'
import NeuralGrid from './components/NeuralGrid'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      {/* Subtle neural grid behind sections */}
      <div className="relative">
        <div className="absolute inset-0 -z-[0] opacity-60">
          <NeuralGrid />
        </div>
        <div className="relative z-10">
          <Gallery />

          {/* About section placeholder */}
          <section id="about" className="py-20 bg-[#0b0613]">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Ebro 👽</h2>
              <p className="text-purple-200/90 max-w-3xl">
                The Ebroverse is a nexus where lazy thoughts crystallize into luminous artifacts. This
                space merges visual art, poetry, and sound to tell stories that shimmer between worlds.
              </p>
            </div>
          </section>

          {/* Contact section placeholder */}
          <section id="contact" className="py-20 bg-[#0f0a1a]">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
              <p className="text-purple-200/90">Tell me what you’re seeking — art, collaboration, commissions, or just to say hello.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="bg-white/5 border border-white/10 rounded px-4 py-3" placeholder="Name" />
                <input className="bg-white/5 border border-white/10 rounded px-4 py-3" placeholder="Email" />
                <select className="bg-white/5 border border-white/10 rounded px-4 py-3">
                  <option>Art</option>
                  <option>Collaboration</option>
                  <option>Commissions</option>
                  <option>General</option>
                </select>
                <button className="bg-fuchsia-600 hover:bg-fuchsia-500 transition rounded px-4 py-3">Send</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
