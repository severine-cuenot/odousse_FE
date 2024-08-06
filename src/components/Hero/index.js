// Other imports
import SearchBar from '../SearchBar';
import './style.scss';

function Hero() {
  return (
    <section className="hero__bg-img p-5">
      <h1 className="hero__mainTitle">Trouvez les habitants parfaits pour vos aquariums</h1>
      <SearchBar />
    </section>
  );
}

export default Hero;
