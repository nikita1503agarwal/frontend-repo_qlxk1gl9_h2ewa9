import { Menu } from 'lucide-react'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="/" className="text-white font-bold tracking-widest">EBROVERSE</a>
        <nav className="hidden md:flex items-center gap-6 text-purple-100">
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/store" className="hover:text-white">Store</a>
        </nav>
        <button className="md:hidden text-white"><Menu size={20} /></button>
      </div>
    </header>
  )
}
