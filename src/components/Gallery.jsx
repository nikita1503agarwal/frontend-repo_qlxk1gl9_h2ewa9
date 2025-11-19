import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Gallery() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/api/artworks`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  return (
    <section id="gallery" className="relative py-16 bg-gradient-to-b from-black to-[#0b0613]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interactive Gallery</h2>
        <p className="text-purple-200/80 mb-10">Hover to reveal poetry. Click to view details.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.button
              key={it.id}
              onClick={() => setSelected(it)}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <img src={it.image_url} alt={it.title} className="h-60 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition text-left">
                <h3 className="text-white font-semibold">{it.title}</h3>
                {it.poem_snippet && <p className="text-purple-200 text-sm line-clamp-2">{it.poem_snippet}</p>}
              </div>
            </motion.button>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
            <div className="max-w-3xl w-full bg-[#0f0a1a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative">
                <img src={selected.image_url} alt={selected.title} className="w-full max-h-[60vh] object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full">Close</button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                {selected.description && <p className="text-purple-200 mt-2">{selected.description}</p>}
                {selected.poem_snippet && (
                  <blockquote className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 text-purple-100 italic">{selected.poem_snippet}</blockquote>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
