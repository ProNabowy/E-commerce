import Carousel from 'react-bootstrap/Carousel';
import styles from "./landing.module.css";
function Landing()
{
    return (
        <Carousel className={styles.carosuel_wrapper} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-one.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-two.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-three.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-four.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-five.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://github.com/ProNabowy/e-commerce-img/blob/main/landing-six.webp?raw=true"}
                    alt="E-commerce Landing Page"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Landing;