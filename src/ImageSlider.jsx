import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import AllImg from "./small-component/Allimg";

const ImageSlider = () => {
  const images = useMemo(() => AllImg(), []);
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const showNextImage = useCallback(() => {
    setImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    resetInterval(); 
  }, [images.length]);


  const showPrevImage = useCallback(() => {
    setImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetInterval(); 
  }, [images.length]);

  const setupInterval = () => {
    intervalRef.current = setInterval(showNextImage, 3000);
  };

 
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setupInterval();
  };

  useEffect(() => {
    setupInterval();

     return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]); 
  return (
    <div className="ImageSlider">
      <div className="headline-container">
        <div className="headline-wrapper" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`headline-image ${idx === imageIndex ? "active" : ""}`}
            >
              <img src={imgUrl} alt={`headline ${idx}`} />
            </div>
          ))}
        </div>
        <button onClick={showPrevImage} className="button-left">
        <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} className="button-right">
          <ArrowBigRight/>
        </button>
      </div>
      <div className="headline-context">
        <img src="logo/logo.png" alt="" width="300px" height="300px" />
        <h2>
          Hello! Welcome to our Little Shop ✨
        </h2>
        <p>
          <em>Little Dylan's US Goods Shop</em> serving you a 100% original products ❤️
        </p>
        <p>
          <em>Little Dylan's  Shop</em> are glad to announce that we are featuring original items from Riyadh, Saudi Arabia! Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
