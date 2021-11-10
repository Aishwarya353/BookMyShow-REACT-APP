import Carousel from "react-bootstrap/Carousel";
import "./SliderImages.css";

function SliderImages() {
  return (
    <div>
      <Carousel fade variant="light" style={{ height: "40%", width: "100%" }}>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://cdn.pixabay.com/photo/2015/09/21/14/47/banner-949944__340.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__340.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
