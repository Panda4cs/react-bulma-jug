import React, { Component } from "react";
import Logo from "../imgs/logo.svg";
export class Header extends Component {
  render() {
    return (
      <div className='container is-fluid '>
        <div className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item 	' href='https://bulma.io'>
              <img src={Logo} width='112' fill='green' height='50' alt='ha' />
              <h1 className='is-size-4	is-uppercase	has-text-weight-bold lotus'>
                Lotus Moda
              </h1>
            </a>

            <div
              role='button'
              className='navbar-burger burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
              href='1'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </div>
          </div>

          <div id='navbarBasicExample' className='navbar-menu '>
            <div className='navbar-end'>
              <div className='navbar-item ara'>تواصل معنا</div>

              <div className='navbar-item ara'>الرئيسيه</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default Header;
