import React from "react";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1>
          Google Books
        </h1>
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/">
          Saved
        </a>
      </nav>
    );
  }
  
  export default Nav;