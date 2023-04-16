import React, {useState, useEffect} from 'react';
import '../../App/App.css'

const HeroContainerComponent = () => {
  
  const heroLinks = ["https://i.imgur.com/8MbyiN2.jpeg", "https://i.imgur.com/UEHdTy1.jpeg", "", "https://i.imgur.com/UEHdTy1.jpeg"]
  

  let [index, setIndex] = useState(0);

  const numOfPics = heroLinks.length - 1;

  const nextSlide = () => {
    setIndex(index === numOfPics ? 0 : index + 1)
  }

  const previousSlide = () => {
    setIndex(index > 0 ? index - 1 : numOfPics)
  }
  
  return (
      <section className='hero-container'>
        {/* <h1 className='hero-title'>Better <br /> Beef</h1> */}
        <img className='hero-pic' src={heroLinks[index]} alt="hero item image" />
        <div className='arrow-container'>
          <i className="fas fa-angle-left hero-left-arrow" onClick={previousSlide}></i>
          <i className="fas fa-angle-right hero-right-arrow" onClick={nextSlide}></i>
        </div>
    </section>
  );
}

export default HeroContainerComponent;