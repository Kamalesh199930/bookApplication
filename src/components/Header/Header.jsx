import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">find your book </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Welcome to your gateway to a world of literary exploration and
            discovery! Our book recommendation application is here to
            revolutionize the way you discover, explore, and indulge in the
            written word. With our intuitive platform, tailored just for you,
            embark on a journey through a vast universe of books that cater to
            your unique tastes and preferences.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
