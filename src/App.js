import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './componants/LandingPage/Landing';
import Header from './componants/Header';
import Men from './componants/Men/Men';
import CardDetails from './componants/Card/Card_Details/CardDetails';
import Chart from './componants/Cart/Cart';
import Footer from './componants/Footer/Footer';
import { Fragment } from 'react';
import Women from './componants/Women/Women';
import NotFound from './componants/Not_Found/NotFound';
import About from './componants/About/About';


function App()
{
  return (
    <div className="App" style={{ "minWidth": "100vw" }}>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='men' element={
          <Fragment>
            <Men />
            <Footer />
          </Fragment>
        } ></Route>
        <Route path='men/:cardId' element={
          <Fragment>
            <CardDetails />
            <Footer />
          </Fragment>
        } ></Route>
        <Route path='women' element={
          <Fragment>
            <Women />
            <Footer />
          </Fragment>
        } ></Route>
        <Route path='women/:cardId' element={
          <Fragment>
            <CardDetails />
            <Footer />
          </Fragment>
        } ></Route>
        <Route path='cart' element={
          <Fragment>
            <Chart />
            <Footer box_Shadow={"0  0  3px  5px #2e3344"} />
          </Fragment>
        } ></Route>
        <Route path='about' element={
          <Fragment>
            <About />
            <Footer />
          </Fragment>
        } ></Route>
        <Route path='/*' element={
          <Fragment>
            <NotFound />
            <Footer box_Shadow={"0  0  3px  5px #2e3344"} />
          </Fragment>
        } ></Route>
      </Routes>

    </div>
  );
}

export default App;
