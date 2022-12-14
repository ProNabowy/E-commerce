import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) =>
{
    const { box_Shadow } = props;
    return (
        <div style={{ "background": "rgb(31, 35, 52)", "boxShadow": box_Shadow }}>
            <Container className="pt-5 text-white text-center">
                <Row>
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <h4 className="mb-4 mt-3 fw-bold">About Us</h4>
                        <ul>
                            <li className="text-white-50 mb-3" style={{ "fontSize": "13px" }}>
                                As we take our first steps with our page we promise to continue delighting you as our customer.
                            </li>
                            <li className="text-white-50 mb-3" style={{ "fontSize": "13px" }}>
                                the entire website team is looking to improve and build on our service so that we can provide you with the best possible shopping experience
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h4 className="mb-4 mt-3 fw-bold">Contact Info</h4>
                        <ul>
                            <li className="text-white-50 mb-3">Address: <a href="https://web.nabowy.online/" target={"_blank"} className="text-white-50" style={{ "textDecoration": "none" }} rel="noreferrer">web.nabowy.online</a></li>
                            <li className="text-white-50 mb-3">Phone: +01125480514</li>
                            <li className="text-white-50 mb-3">Info: nabowy.work@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h4 className="mb-4 mt-3 fw-bold">Important Link</h4>
                        <ul>
                            <li className="text-white-50 mb-3"><a href="https://web.nabowy.online/" target={"_blank"} className="text-white-50" style={{ "textDecoration": "none" }} rel="noreferrer">web.nabowy.online</a></li>
                            <li className="text-white-50 mb-3"><a href="https://react-app-d38da.web.app/" target={"_blank"} className="text-white-50" style={{ "textDecoration": "none" }} rel="noreferrer">react-app-d38da.web.app</a></li>
                            <li className="text-white-50 mb-3"><a href="https://dashboard.nabowy.online/" target={"_blank"} className="text-white-50" style={{ "textDecoration": "none" }} rel="noreferrer">dashboard.nabowy.online</a></li>
                            <li className="text-white-50 mb-3"><a href="https://pronabowy.github.io/E-Sports/" target={"_blank"} className="text-white-50" style={{ "textDecoration": "none" }} rel="noreferrer">E-Sports</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h4 className="mb-4 mt-3 fw-bold">Pages</h4>
                        <ul>
                            <li className="text-white-50 mb-3"><Link to="/" className="text-white-50" style={{ "textDecoration": "none" }}>Home Page</Link></li>
                            <li className="text-white-50 mb-3"><Link to="/men" className="text-white-50" style={{ "textDecoration": "none" }}>Men Page</Link></li>
                            <li className="text-white-50 mb-3"><Link to="/women" className="text-white-50" style={{ "textDecoration": "none" }}>Women Page</Link></li>
                            <li className="text-white-50 mb-3"><Link to="/cart" className="text-white-50" style={{ "textDecoration": "none" }}>Cart Page</Link></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;