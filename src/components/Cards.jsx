import CardItems from './CardItems.jsx';
import './Cards.css';

function Cards() {
  return(
    <div className='cards'>
      <h1>Special Offers & Packages</h1>
      <h2 className="wow fadeInUp" data-wow-delay=".5s">What we offer</h2>
      <article>
					<p>For a taste of luxury, a relaxing getaway in Acuatico is always something to ponder and look
						forward to. Experience the height of comfort and leisure with our exclusive offers.</p>
				</article>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems 
            src="images/1.png"
            text="Explore the hidden rejuvenating spa"
            label='Adventure'
            path='Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;