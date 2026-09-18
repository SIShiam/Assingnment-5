import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'
import TechGrid from './components/TechGrid'
import YourStack from './components/YourStack'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  const stackIds = new Set(stack.map((t) => t.id))

const handleAdd = (tech) => {
  if (stackIds.has(tech.id)) {
    toast.warn(`${tech.name} is already in your stack!`)
    return
  }
  setStack((prev) => [...prev, tech])
  toast.success(`${tech.name} added to your stack!`)
}

const handleRemove = (id) => {
  const removed = stack.find((t) => t.id === id)
  setStack((prev) => prev.filter((t) => t.id !== id))
  if (removed) toast.info(`${removed.name} removed from your stack.`)
}
const handleRemoveAll = () => {
  setStack([])
  toast.info('All technologies removed from your stack.')
}

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Explore <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-gray-400">
            Pick the tools that fit your project and build your own stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>
      

      <Footer />
      <ToastContainer position="top-right" theme="dark" autoClose={2500} />
    </div>
  )
}

export default App