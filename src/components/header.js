import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
    <div className="flex items-center justify-between mb-4 md:mb-0">
      <h1 className="leading-none text-2xl text-grey-darkest">
        <Link
          className="no-underline text-grey-darkest hover:text-black"
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <form className="mb-4 w-full md:mb-0 md:w-1/4">
      <label className="hidden" for="search-form">
        Search
      </label>
      <input
        className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
        placeholder="Search"
        type="text"
      ></input>
      <button className="hidden">Submit</button>
    </form>

    <nav>
      <ul className="list-reset md:flex text-center">
        <li className="md:ml-4">
          <Link
            className="border-b-2 border-t-2 border-transparent block no-underline hover:border-black py-2 text-grey-darkest hover:text-black md:py-2"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="md:ml-4">
          <Link
            className="border-b-2 border-t-2 border-transparent block no-underline hover:border-black py-2 text-grey-darkest hover:text-black md:py-2"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
