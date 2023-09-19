import {useContext} from "react";
import {dataContext} from "../Context/DataContext";
import "./Products.css"
const Products = () => {
    const{data, buyProducts} = useContext(dataContext);

        return data.map((product)=> {
            return(
                <div key = {product.id} className="card">
                    
                    <img src={product.img} alt="img-product-card" height={"250px"} />
                    <h3>{product.name}</h3>
                    <h4>{product.price} $ </h4>
                    <button onClick={()=> buyProducts(product)}>Buy</button>
                </div>
            );

        });
};
export default Products;