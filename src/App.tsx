import { useState } from "react";
import icon from "./main/images/icon-cart.svg";
import productImage from "./main/images/image-product-desktop.jpg";
import "./App.css";

function App() {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={productImage} alt="chanel perfume" />
			</div>
			<div className="content-container">
				<title>Perfume</title>
				<div className="name"> Gabrielle Essence Eau De Parfum</div>
				<div className="description">
					A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
				</div>
				<div className="price">$149.99 $169.99</div>
				<button>
					<img src={icon} alt="shopping cart icon" />
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default App;
