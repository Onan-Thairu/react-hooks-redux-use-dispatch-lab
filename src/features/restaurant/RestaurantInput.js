import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux"

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault();
    const restaurant = { name: name, location:location }

    dispatch(addRestaurant(restaurant))

    // add missing code
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
