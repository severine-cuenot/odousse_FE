/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../button';
import './style.scss';

function HeroSearch() {
  return (
    <div className="hero__panel">
      <h1 className="hero__title">Votre Recherche</h1>
      <section className="hero__section">
        <form>
          <fieldset>
            <div className="hero__form">
              <div className="hero__form-header">
                <div className="active">Poissons</div>
                <div>Invertébrés</div>
                <div>Plantes</div>
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
        </form>
      </section>
    </div>
  );
}

export default HeroSearch;
