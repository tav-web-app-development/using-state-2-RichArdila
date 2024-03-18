import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products, onAddToCart }) {
  const productsJsx = products.map((product) => (
    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
