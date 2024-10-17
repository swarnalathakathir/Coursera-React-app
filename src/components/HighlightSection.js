import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import DeliveryIcon from "../assets/dish-icon.svg"

const HighlightSection = () => {
    return (
        <div className="container highLightSection">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
            <section>
                <div className="card">
                    <div className="card-header">
                        <img src={GreekSalad} alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <h4>Greek salad</h4>
                            <span>$12.99</span>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>                            
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            <span>Order a delivery</span>
                            <img src={DeliveryIcon} alt="DeliveryIcon"/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src={Bruchetta} alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <h4>Bruchetta</h4>
                            <span>$5.99</span>
                            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>                            
                        </div>
                    </div>
                    <div className="card-footer">
                        <span>Order a delivery</span>
                        <img src={DeliveryIcon} alt="DeliveryIcon"/>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src={LemonDessert} alt=""/>
                    </div>
                    <div className="card-body">
                        <div>
                            <h4>Lemon Dessert</h4>
                            <span>$5.00</span>
                            <p>This comes straight from grandma's receipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>                            
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            <span>Order a delivery</span>
                            <img src={DeliveryIcon} alt="DeliveryIcon"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HighlightSection;