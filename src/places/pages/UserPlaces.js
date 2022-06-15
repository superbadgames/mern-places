import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    addr: "20 W 34th St., New York, NY 10001",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    addr: "20 W 34th St., New York, NY 10001",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
  {
    id: "p3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    addr: "20 W 34th St., New York, NY 10001",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
