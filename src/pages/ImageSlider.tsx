import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const SliderData = [
  {
    image:
      'http://localhost:5173/image1.webp'
  },
  {
    image:
      'http://localhost:5173/image2.jpg'
  },
  {
    image:
      'http://localhost:5173/image3.webp'
  },
  {
    image:
      'http://localhost:5173/image4.png'
  },
  {
    image:
      'http://localhost:5173/image5.webp'
  }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = 5;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
