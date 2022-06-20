import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

import { MOCK_PLACES as places } from "../../shared/util/mocks";

const UserPlaces = () => {
  const userId = useParams().userId;
  const userPlaces = places.filter((place) => place.creator === userId);

  return <PlaceList items={userPlaces} />;
};

export default UserPlaces;
