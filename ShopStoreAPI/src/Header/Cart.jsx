
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
export default function Cart(props) {

  return (
    <>
    <main className="card-index">
      <div className="card">
        <img src={props.image} alt="" />
        <main className="mainSection">
          <div className="card-top">
            <p className="products-name">{props.title}</p>
            <div className="card-details">
              <div>
                {Array(Math.ceil(props.rating.rate)).fill(0).map(item=>(
                  <MdStarRate style={{color:"#edc40e"} }/>
                ))

                }
                {Array(5 - Math.ceil(props.rating.rate)).fill(0).map(item=>(
                  <MdOutlineStarRate style={{color:"#edc40e"} } />                ))

                }


              
              
              </div>
              <p>{props.price}$</p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="product-count">
              <p>count:{props.rating.count}</p>
              
              
            </div>
            <button >Add To Your Basket</button>
          </div>

        </main>

      </div>

    </main>
    </>
  );
}
