import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () =>
{
    return (
        <div className="d-flex justify-content-center align-items-center text-center text-white" style={{ "backgroundImage": "url('https://github.com/ProNabowy/e-commerce-img/blob/main/not_found.webp?raw=true')", "backgroundSize": "cover", "backgroundPosition": "center center", "minHeight": "65vh" }}>
            <Container>
                <h1 style={{ "fontSize": "40px" }}>Oops Page Not Found</h1>
                <p className="text-white-50">This page you requested could not be found.</p>
                <p className="text-white-50">May the force be with you!</p>
                <Link to={"/"} className="pe-5 ps-5 btn btn-danger">Go Back</Link>
            </Container>
        </div>
    )
}

export default NotFound;