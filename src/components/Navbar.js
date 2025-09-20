import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid nav-style">
        <Link className="navbar-brand" to="/" style={{fontWeight: 700, fontSize: '2rem'}}>Bhagavad Gita</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Chapters
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/chapter/1"> <i className="fa-solid fa-file"></i> Chapter 1</Link></li>
                <li><Link className="dropdown-item" to="/chapter/2"> <i className="fa-solid fa-file"></i> Chapter 2</Link></li>
                <li><Link className="dropdown-item" to="/chapter/3"> <i className="fa-solid fa-file"></i> Chapter 3</Link></li>
                <li><Link className="dropdown-item" to="/chapter/4"> <i className="fa-solid fa-file"></i> Chapter 4</Link></li>
                <li><Link className="dropdown-item" to="/chapter/5"> <i className="fa-solid fa-file"></i> Chapter 5</Link></li>
                <li><Link className="dropdown-item" to="/chapter/6"> <i className="fa-solid fa-file"></i> Chapter 6</Link></li>
                <li><Link className="dropdown-item" to="/chapter/7"> <i className="fa-solid fa-file"></i> Chapter 7</Link></li>
                <li><Link className="dropdown-item" to="/chapter/8"> <i className="fa-solid fa-file"></i> Chapter 8</Link></li>
                <li><Link className="dropdown-item" to="/chapter/9"> <i className="fa-solid fa-file"></i> Chapter 9</Link></li>
                <li><Link className="dropdown-item" to="/chapter/10"> <i className="fa-solid fa-file"></i> Chapter 10</Link></li>
                <li><Link className="dropdown-item" to="/chapter/11"> <i className="fa-solid fa-file"></i> Chapter 11</Link></li>
                <li><Link className="dropdown-item" to="/chapter/12"> <i className="fa-solid fa-file"></i> Chapter 12</Link></li>
                <li><Link className="dropdown-item" to="/chapter/13"> <i className="fa-solid fa-file"></i> Chapter 13</Link></li>
                <li><Link className="dropdown-item" to="/chapter/14"> <i className="fa-solid fa-file"></i> Chapter 14</Link></li>
                <li><Link className="dropdown-item" to="/chapter/15"> <i className="fa-solid fa-file"></i> Chapter 15</Link></li>
                <li><Link className="dropdown-item" to="/chapter/16"> <i className="fa-solid fa-file"></i> Chapter 16</Link></li>
                <li><Link className="dropdown-item" to="/chapter/17"> <i className="fa-solid fa-file"></i> Chapter 17</Link></li>
                <li><Link className="dropdown-item" to="/chapter/18"> <i className="fa-solid fa-file"></i> Chapter 18</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/quotes">Quotes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About Gita</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Gita AI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Donate</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;