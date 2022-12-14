// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Container, Row } from "react-bootstrap";
import JacketUi from "../catogries/Jacket_Ui";
import Sweatshirts from "../catogries/Sweatshirts";
import T_Shirts from "../catogries/TShirts";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../../slices/card_slice";
import { useEffect } from "react";


export default function Women()
{
    const jacket = useSelector(state => state.card.women_jacket);
    const sweatshirts = useSelector(state => state.card.women_sweatshirts);
    const dress = useSelector(state => state.card.dress);

    const dispatch = useDispatch();

    // Call API to get data
    useEffect(() => { dispatch(getDataFromAPI()) }, []);
    return (
        <Container className="pt-3 mt-2 pb-5">
            <h1 className="mt-5 mb-5 text-center">Jackets</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <JacketUi data={jacket} gendar={"women"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <JacketUi data={jacket} gendar={"women"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
            <h1 className="mt-5 mb-5 text-center">Sweatshirts</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <Sweatshirts data={sweatshirts} gendar={"women"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <Sweatshirts data={sweatshirts} gendar={"women"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
            <h1 className="mt-5 mb-5 text-center">Dress</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <T_Shirts data={dress} gendar={"women"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <T_Shirts data={dress} gendar={"women"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
