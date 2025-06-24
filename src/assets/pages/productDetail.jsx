import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import mockProducts from "../../data/productsdetaildata";
import "../../style/productDetail.css";
import { useCart } from "../../components/cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.images[0],
      quantity: 1,
    };
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="product-detail">
      {/* Product Gallery */}
      <div className="product-gallery">
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} thumbnail ${index + 1}`}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="main-image"
        />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <div className="product-header">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-sku">SKU: {product.sku}</p>
          <div className="product-price">
            <span className="current-prices">NRP. {product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">
                  NRP. {product.originalPrice}
                </span>
                <span className="discount-badge">
                  {discountPercentage}% OFF
                </span>
              </>
            )}
          </div>
        </div>
        {/* Product Tabs */}
        <div className="product-tabs">
          <div className="tab-header">
            <button
              className={`tab-btn ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
            <button
              className={`tab-btn ${
                activeTab === "specifications" ? "active" : ""
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && <p>{product.description}</p>}
            {activeTab === "details" && (
              <div dangerouslySetInnerHTML={{ __html: product.details }} />
            )}
            {activeTab === "specifications" && (
              <table>
                <tbody>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <tr key={key}>
                        <td
                          style={{ fontWeight: "bold", paddingRight: "1rem" }}
                        >
                          {key}:
                        </td>
                        <td>{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Product Meta */}
        <div className="product-meta">
          <div className="meta-item">
            <span className="meta-icon">★</span>
            <span>
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">✔</span>
            <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">↻</span>
            <span>30-Day Returns</span>
          </div>
        </div>

        {/* Color Variants */}
        <div className="variants-section">
          <p className="variant-title">COLOR: {selectedColor}</p>
          <div className="variant-options">
            {product.colors.map((color) => (
              <div
                key={color}
                className={`variant-option ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </div>
            ))}
          </div>
        </div>

        {/* Size Variants */}
        <div className="variants-section">
          <p className="variant-title">SIZE: {selectedSize}</p>
          <div className="variant-options">
            {product.sizes.map((size) => (
              <div
                key={size}
                className={`variant-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="add-to-cart-btn " onClick={handleAddToCart}>
            <span>🛒</span> Add to Cart
          </button>
          <button className="secondary-btn">♡ Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
