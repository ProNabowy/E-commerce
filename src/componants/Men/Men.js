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
import Shirts from "../catogries/TShirts";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../../slices/card_slice";
import { useEffect } from "react";


export default function Men()
{
    const jacket = useSelector(state => state.card.jacket);
    const sweatshirts = useSelector(state => state.card.sweatshirts);
    const shirts = useSelector(state => state.card["t-shirt"]);
    const dispatch = useDispatch();

    // Call API to get data
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { dispatch(getDataFromAPI()) }, []);
    return (
        <Container className="pt-3 mt-2 pb-5">
            <h1 className="mt-5 mb-5 text-center ">Jackets</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <JacketUi data={jacket} gendar={"men"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <JacketUi data={jacket} gendar={"men"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
            <h1 className="mt-5 mb-5 text-center">Sweatshirts</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <Sweatshirts data={sweatshirts} gendar={"men"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <Sweatshirts data={sweatshirts} gendar={"men"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
            <h1 className="mt-5 mb-5 text-center">T-Shirts</h1>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="mb-5">
                    <Row>
                        <Shirts data={shirts} gendar={"men"} check={true} />
                    </Row>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                    <Row>
                        <Shirts data={shirts} gendar={"men"} check={false} />
                    </Row>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
