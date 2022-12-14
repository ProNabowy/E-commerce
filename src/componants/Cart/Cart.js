import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, delteFromCart } from '../../slices/cart_slice';
import styles from "./cart.module.css";


function Chart()
{
    const carts_data = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // This Var to Check if Cart Have Cards Or Not
    const isCarts = carts_data.length;

    // Get Total Price
    const totle_Price = carts_data && carts_data.reduce((acc, ele) =>
    {
        return acc += (Number(ele.price.slice(1)) * Number(ele.count));
    }, 0).toFixed(2);

    const darw_carts = carts_data.map(chart =>
    {
        return (
            <tr key={Math.random()}>
                <td><p className="d-flex justify-content-center align-items-center">{chart.id}</p></td>
                <td>{chart.title}</td>
                <td>{chart.descrption}</td>
                <td>{chart.count}</td>
                <td>{chart.price}</td>
                <td><img style={{ "width": "30px" }} src={chart.images.sm} alt={chart.title} /></td>
                <td className='text-center'><Button onClick={() => dispatch(delteFromCart(chart))} variant="danger">Delete</Button></td>
            </tr>
        );
    })
    return (
        <div className='d-flex' data-aos="fade-up" style={{ "background": "#1f2334", "minHeight": "calc(100vh - 340px)" }}>
            <Container className='pt-5'>
                <Table striped bordered hover variant="dark" className={styles.cartTable}>
                    <thead>
                        <tr>
                            <th><span className="d-flex justify-content-center align-items-center">id</span></th>
                            <th>Title</th>
                            <th>Product Descrption</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {darw_carts && darw_carts}
                        {darw_carts &&
                            <tr>
                                <td className='text-center'>Totle Price</td>
                                <td colSpan={6}>Totel Price: ${totle_Price}</td>
                            </tr>
                        }
                    </tbody>
                </Table>
                {isCarts ? <Button variant="danger" onClick={() => dispatch(clearCart())} className='d-block w-75 m-auto mb-3 fw-bold'>Clear</Button> : null}
            </Container>
        </div>
    );
}

export default Chart;