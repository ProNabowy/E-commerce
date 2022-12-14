import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../../../slices/card_slice";
import { useParams } from "react-router-dom"
import { Button, Carousel, Container, Row } from "react-bootstrap";
import "./cardDetails.modules.css";
import { set_card_to_chart } from "../../../slices/cart_slice";

const CardDetails = () =>
{
    const prams = useParams();
    const { cardId } = prams;
    const data = useSelector(state => state.card);
    const dispatch = useDispatch();
    // Call API to get data
    useEffect(() => { dispatch(getDataFromAPI()) }, []);

    const every_cards = [...data.jacket, ...data.sweatshirts, ...data["t-shirt"], ...data.women_jacket, ...data.women_sweatshirts, ...data.dress];

    const current_Card = every_cards.filter(card => Number(card.id) === Number(cardId));
    const darw_Current_Card = current_Card.map(card =>
    {
        return (
            <div key={Math.random()} data-aos="zoom-in" className="card-details text-white">
                <Container className="pt-5 card-details-container">
                    <Row>
                        <div className="col-lg-8">
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block"
                                        src={card.images["lg-one"]}
                                        alt={card.decrption}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block"
                                        src={card.images["lg-two"]}
                                        alt={card.decrption}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={card.images["lg-three"]}
                                        alt={card.decrption}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={card.images["lg-four"]}
                                        alt={card.decrption}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-lg-4 text d-flex justify-content-center  flex-column">
                            <h3>{card.title}</h3>
                            <h5 className="mb-4">Black and White {card.title}</h5>
                            <h5 className="mb-4">{card.price} <span style={{ "textDecoration": "line-through", "opacity": "0.5" }}>${parseInt(card.price.slice(1)) - 5}</span></h5>
                            <h6 className="mb-3">{card.decrption}</h6>
                            <p style={{ "color": "#ffff00b0" }}>4.5 <i className="fa-solid fa-star"></i> | 95 Ratings</p>
                            <Button variant="success" onClick={() => dispatch(set_card_to_chart(card))} className="pe-3 ps-3"><i className="fa-solid fa-cart-plus"></i> Add To Cart</Button>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    });
    return (
        <Fragment>
            {darw_Current_Card}
        </Fragment>
    );
}

export default CardDetails