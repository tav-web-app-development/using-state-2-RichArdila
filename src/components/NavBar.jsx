export default function NavBar({ user, itemsInCart }) {
  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <span>
        {itemsInCart !== 0 && `${itemsInCart} in your cart`}
      </span>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
