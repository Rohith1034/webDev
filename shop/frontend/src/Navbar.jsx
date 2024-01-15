import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="main-logo" src="./resources/shoplog.jpg" alt="main-logo"></img>
                <a className="navbar-brand" href="/">Sree Shakthi Silks</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <div className=" dropdown">
                                <a className="btn btn dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>

                                <ul className="dropdown-menu custom-dropdown-menu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3 className="dropdown-item">Hand loom</h3>
                                                <div className="dropdown-heading"></div>
                                                <a className="dropdown-item" href="#">Buttas</a>
                                                <a className="dropdown-item" href="#">Broket</a>
                                                <a className="dropdown-item" href="#">Jari Butta</a>
                                                <a className="dropdown-item" href="#">Jari Broket</a>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="dropdown-item">Power loom</h3>
                                                <div className="dropdown-heading"></div>
                                                <a className="dropdown-item" href="#">Buttas</a>
                                                <a className="dropdown-item" href="#">Broket</a>
                                                <a className="dropdown-item" href="#">Skirt Butta</a>
                                                <a className="dropdown-item" href="#">Skirt Broket</a>
                                                <a className="dropdown-item" href="#">Jari Butta</a>
                                                <a className="dropdown-item" href="#">Jari Broket</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My account<i className="user-icon fa-solid fa-user"></i>
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
