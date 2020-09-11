import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <h1 id="title">Select a Puppy!</h1>
            <section id="puppy-names">
                <Link style={{ textDecoration: "none" }} to="/Nova">
                    <button className="dog-name">Nova</button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Revan">
                    <button className="dog-name">Revan</button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Quigley">
                    <button className="dog-name">Quigley</button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Homer">
                    <button className="dog-name">Homer</button>
                </Link>
            </section>
        </header>
    );
}

export default Header;