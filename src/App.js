import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import tw from 'twin.macro';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="grid grid-cols-2 px-[6%] py-6 items-center w-[100vw]">
            <div>
              <h1 className="text-xl font-black">My Cute Kittens</h1>
            </div>
            <ul className="flex justify-end">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/kittens">Kittens</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/kittens" element={<Kittens />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
const Home = () => (
  <div tw="">
    <h1 className="text-7xl text-center font-black">Home</h1>
  </div>
);

const About = () => (
  <div tw="">
    <h1 className="text-7xl text-center font-black">About</h1>
  </div>
);
const Kittens = () => (
  <div tw="">
    <h1 className="text-7xl text-center font-black">Kittens</h1>
  </div>
);
const Contact = () => (
  <div tw="">
    <h1 className="text-7xl text-center font-black">Contact</h1>
  </div>
);
