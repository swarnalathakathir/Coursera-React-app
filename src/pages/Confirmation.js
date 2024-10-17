import { Link } from "react-router-dom";
const Confirmation = () => {
    return (
        <div className="confirmationPage">
            <div className="container">
                <h1>Booking has been confirmed!</h1>
                <p>Return to <Link to="/">Home Page</Link></p>
            </div>
        </div>
    )
}

export default Confirmation;
