import "./product-info.css";
const ProductInfo = ({image, name, description})=> {
    return (
        <>
            <div className="product-container">
                <div className="product-info">
                    <span><input type="checkbox"></input></span>
                    <span >
                        <img className="product-info__image" src={image} alt="user avatar"></img>
                    </span>
                    <span className="product-info__name">{name}</span>
                    <div>{description}</div>
                </div>
            </div>
        </>
    )
}
export default ProductInfo;