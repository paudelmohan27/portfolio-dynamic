import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import CV from "@/components/cv"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <CV />
      </main>
      <Footer />
    </>
  )
}
