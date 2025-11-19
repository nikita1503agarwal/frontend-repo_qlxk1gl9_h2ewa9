export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 text-purple-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} THE LAZY VIRTUOSO — Ebroverse</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
          <a href="https://x.com" target="_blank" className="hover:text-white">Threads/X</a>
          <a href="https://tiktok.com" target="_blank" className="hover:text-white">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
