/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import Button from '../button';
import './style.scss';

function HeroSearch() {
  return (
    <div className="hero__container">
      <h1 className="hero__title">Votre Recherche</h1>
      <section className="hero__section">
        {/* <form>
          <fieldset>
            <div className="hero__form">
              <div className="hero__form-header">
                <legend className="active">Poissons</legend>
                <legend>Invertébrés</legend>
                <legend>Plantes</legend>
              </div>
              <div className="hero__form-body">
                <div className="hero__form-fish active">
                  <div className="hero__input">
                    <label htmlFor="litres" className="hero__input-label">Litrage de votre aquarium</label>
                    <span className="hero__input-span"><input type="number" name="litres" id="litres" className="hero__input-box" /> Litres </span>
                  </div>
                  <div className="hero__input">
                    <label htmlFor="ph" className="hero__input-label">PH de votre eau</label>
                    <span className="hero__input-span"><input type="number" name="ph" id="ph" className="hero__input-box" /> PH</span>
                  </div>
                  <Button label="Lancer la recherche" type="submit" />
                </div>
                <div className="hero__form-invertebrate">
                  <div className="hero__input">
                    <label htmlFor="litres" className="hero__input-label">Litrage de votre aquarium</label>
                    <span className="hero__input-span"><input type="number" name="litres" id="litres" className="hero__input-box" /> Litres </span>
                  </div>
                  <div className="hero__input">
                    <label htmlFor="ph" className="hero__input-label">PH de votre eau</label>
                    <span className="hero__input-span"><input type="number" name="ph" id="ph" className="hero__input-box" /> PH</span>
                  </div>
                  <Button label="Lancer la recherche" type="submit" />
                </div>
                <div className="hero__form-plant">
                  <div className="hero__input">
                    <label htmlFor="litres" className="hero__input-label">Litrage de votre aquarium</label>
                    <span className="hero__input-span"><input type="number" name="litres" id="litres" className="hero__input-box" /> Litres </span>
                  </div>
                  <div className="hero__input">
                    <label htmlFor="ph" className="hero__input-label">PH de votre eau</label>
                    <span className="hero__input-span"><input type="number" name="ph" id="ph" className="hero__input-box" /> PH</span>
                  </div>
                  <Button label="Lancer la recherche" type="submit" />
                </div>
              </div>
            </div>
          </fieldset>
        </form> */}
        <div className="hero__box">
          <div>
            <input className="hero__input" name="tabs" type="radio" id="tab-1" defaultChecked="checked" />
            <label className="hero__label" htmlFor="tab-1">Poissons</label>
            <div className="hero__panel">
              <p>Arlina Design (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae</p>
              <p>The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus × aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
            </div>
          </div>
          <div>
            <input className="hero__input" name="tabs" type="radio" id="tab-2" />
            <label className="hero__label" htmlFor="tab-2">Invertébrés</label>
            <div className="hero__panel">
              blablablabla crevettes
            </div>
          </div>
          <div>
            <input className="hero__input" name="tabs" type="radio" id="tab-3" />
            <label className="hero__label" htmlFor="tab-3">Plantes</label>
            <div className="hero__panel">
              blablablabla plantes
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSearch;
