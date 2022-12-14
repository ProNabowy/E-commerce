import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delteFromCart, find_card_from_cart, set_card_to_chart } from "../../slices/cart_slice";

import "./card.modules.css";


export default function Card(props)
{
    const { card_data, gendar } = props;
    const dispatch = useDispatch();


    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="men-box text-center">
                    <div className="image mb-3">
                        <Link to={`/${gendar}/${card_data.id}`} ><img src={card_data.images["lg-one"]} alt={card_data.descrption} /></Link>
                    </div>
                    <div className="info position-relative">
                        <h3>{card_data.title}</h3>
                        <div className="price d-flex justify-content-around align-items-center w-50">
                            <h4>{card_data.price}</h4>

                            <i onClick={(e) =>
                            {
                                if (e.target.classList.contains("fa-regular"))
                                {
                                    e.target.classList.toggle("fa-solid");
                                }
                                if (e.target.classList.contains("fa-solid"))
                                {
                                    dispatch(set_card_to_chart(card_data));
                                } else
                                {
                                    dispatch(delteFromCart(card_data));
                                }
                            }} className="fa-regular fa-heart fs-5" style={{ "cursor": "pointer" }}></i>
                        </div>
                        <div className="size mt-3 position-relative">Size</div>
                        <ul className="size-items d-flex justify-content-center mt-2">
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                        <Link className="btn btn-outline-info pe-5 ps-5" to={`/${gendar}/${card_data.id}`}>More Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
