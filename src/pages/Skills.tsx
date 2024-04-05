// همراه کردن فایل imageslider  با صفحه نایش دهنده skills و اعمال استایل به کل صفحه
import ImageSlider from './ImageSlider';
import "./styles.css";
export default function Skills() {
  return (
    <div  className='skills'>
    <h1>My Skills:</h1>
    <div>
      <ImageSlider />
    </div>
  </div>
  );
}
