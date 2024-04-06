import './index.css'

const Header = () => {
  return (
    <nav className="height head-text-btn-img-container">
      <div>
        <img
          className="webist-nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      </div>
      <ul className="header-d-flex">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <button className="btn btn-header">Log Out</button>
      </ul>
    </nav>
  )
}
export default Header
