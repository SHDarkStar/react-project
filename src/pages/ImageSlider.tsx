import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './skillsStyle.css';
// استفاده از کتابخانه icons  برای ساخت دو کلید برای حرکت صفحه ها

// دادن لینک عکس ها برای ساخت اسلایدر
const sliderData = [
  {image: "http://localhost:5173/image1.webp"},
  {image: "http://localhost:5173/image2.jpg"},
  {image: "http://localhost:5173/image3.webp"},
  {image: "http://localhost:5173/image4.png"},
  {image: "http://localhost:5173/image5.webp"}
];

//درست کردن یک hook  به اندازه تعداد  عکس ها برای ساخت دکمه های ورق زدن به چپ و راست
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = 5;
//تابع که با کلیک روی ان در صورتی که روی صفحه اخر باشیم به عکس اول برمیگردد و در غیر صورت شماره صفحه را افزایش میدهد
  const nextSlide = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
  };
//تابع که با کلیک روی ان در صورتی که روی صفحه اول باشیم به عکس اخر برمیگردد و در غیر صورت شماره صفحه را کاهش میدهد
  const previousSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">

      <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
      <FaArrowAltCircleLeft className="leftArrow" onClick={previousSlide} />
      {sliderData.map((slide, index) => {
        // همراه ساختن شماره صفحه ها به ترتیب با لینک انها در sliderData
        return (
          <div className={index == current ? "activeSlide" : "slide"} key={index}>
            {index === current && (<img src={slide.image} className="image" />)
          }          
          </div>
// اگر روی عکس قرار داریم که نمایش داده میشود style  های مربوط به ان اجرا شود و برای حرکت به عکس بعدی که فعال نیست انیمیشن اجرا میشود          
        );
      })}
    </div>
  );
};

export default ImageSlider;
