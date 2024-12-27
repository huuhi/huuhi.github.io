import AboutHero from '../components/AboutHero'
import AboutContent from '../components/AboutContent'
import AboutComments from '../components/AboutComments'

export default function About() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <AboutComments />
      </div>
    </main>
  )
}

