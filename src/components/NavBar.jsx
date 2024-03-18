import React, { useState } from 'react';

export default function NavBar({ user, itemsInCart }) {
  const [showForm, setShowForm] = useState(false);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [billingFirstName, setBillingFirstName] = useState('');
  const [billingLastName, setBillingLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingPostalCode, setBillingPostalCode] = useState('');
  const [useShippingAddress, setUseShippingAddress] = useState(false);

  const handleCheckoutClick = () => {
    setShowForm(!showForm);
  };

  const handleCheckboxChange = (e) => {
    setUseShippingAddress(e.target.checked);
    if (!e.target.checked) {
      setShowBillingForm(true);
    } else {
      setShowBillingForm(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Remove whitespace from inputs
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedAddress = address.trim();
    const trimmedCity = city.trim();
    const trimmedState = state.trim();
    const trimmedPostalCode = postalCode.trim();
    const trimmedBillingFirstName = billingFirstName.trim();
    const trimmedBillingLastName = billingLastName.trim();
    const trimmedBillingAddress = billingAddress.trim();
    const trimmedBillingCity = billingCity.trim();
    const trimmedBillingState = billingState.trim();
    const trimmedBillingPostalCode = billingPostalCode.trim();
    // Do something with the form data, like submit it to a server
    console.log('Form submitted!');
  };

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
      <button onClick={handleCheckoutClick}>Checkout</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="checkbox"
            id="useShippingAddress"
            checked={useShippingAddress}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="useShippingAddress">Use shipping address as billing address</label>
          {showBillingForm && !useShippingAddress && (
            <>
              <h3>Billing Address</h3>
              <label htmlFor="billingFirstName">First Name:</label>
              <input
                type="text"
                id="billingFirstName"
                value={billingFirstName}
                onChange={(e) => setBillingFirstName(e.target.value)}
              />
              <label htmlFor="billingLastName">Last Name:</label>
              <input
                type="text"
                id="billingLastName"
                value={billingLastName}
                onChange={(e) => setBillingLastName(e.target.value)}
              />
              <label htmlFor="billingAddress">Address:</label>
              <input
                type="text"
                id="billingAddress"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
              <label htmlFor="billingCity">City:</label>
              <input
                type="text"
                id="billingCity"
                value={billingCity}
                onChange={(e) => setBillingCity(e.target.value)}
              />
              <label htmlFor="billingState">State:</label>
              <input
                type="text"
                id="billingState"
                value={billingState}
                onChange={(e) => setBillingState(e.target.value)}
              />
              <label htmlFor="billingPostalCode">Postal Code:</label>
              <input
                type="text"
                id="billingPostalCode"
                value={billingPostalCode}
                onChange={(e) => setBillingPostalCode(e.target.value)}
              />
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
