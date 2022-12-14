import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./LandingPage/landing.module.css"
const Header = () =>
{
    const carts_data = useSelector(state => state.cart).length;
    return (
        <Navbar expand="lg" className='text-center' style={{ "background": "#0b051d" }}>
            <Container>
                <Link className='text-white text-center navbar-brand fs-5' to="/">E-Commerce Website</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-white nav-link fs-5' to="/">Home</Link>
                        <Link className='text-white nav-link fs-5' to="/men">Men</Link>
                        <Link className='text-white nav-link fs-5' to="/women">Women</Link>
                        <Link className='text-white nav-link fs-5' to="/about">About</Link>
                        <Link className='text-white nav-link fs-5' to="/cart"><i className="fa-solid fa-cart-plus"></i>-{carts_data}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header;