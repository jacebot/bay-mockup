import Search from 'src/components/Search'
import './style.css'
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container-fluid">
        <div className="text-intro">
          <Search />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
