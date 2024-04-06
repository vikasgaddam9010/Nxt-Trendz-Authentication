import './index.css'
import Header from '../Header'

const Home = () => {
  return (
    <>
      <div className="bg-container">
        <Header />
        <div className="head-text-btn-img-container">
          <div className="semi-container">
            <h1 className="home-head-text">Clothes That Get YOU Noticed</h1>
            <p className="home-para-text">
              Fashion is part of the daily air major disruptor in the retail
              industry[3] as consumers can now search for product information
              and place product orders across different regions. Online
              retailers deliver their products directly to the consumers' home,
              offices, or wherever they want. The B2C (business to consumer)
              process has made it easy for consumers to select any product
              online from a retailer's website and to have it delivered
              relatively quickly. Using online shopping methods, consumers do
              not need to consume energy by physically visiting physical stores.
              This way they save time and the cost of traveling. A retailer or a
              shop is a business that presents a selection of goods and offers
              to trade or sell them to customers for money or other goods.
            </p>
            <button className="btn">Shop Now</button>
          </div>
          <img
            className="home-shoping-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    </>
  )
}
export default Home
