const MOCK_USERS = [
  {
    id: "u1",
    name: "Elric of Melnibone",
    image: "https://i.imgur.com/CVfope0.jpeg",
    places: 2,
  },
  {
    id: "u2",
    name: "Yyrkoon",
    image: "https://i.imgur.com/CVfope0.jpeg",
    places: 1,
  },
];

const MOCK_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    address: "20 W 34th St., New York, NY 10001",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    address: "20 W 34th St., New York, NY 10001",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    desc: "Super cool building I'm gonna get to see soon",
    address: "20 W 34th St., New York, NY 10001",
    creator: "u2",
    location: { lat: 40.7484405, lng: -73.9856644 },
  },
];

export { MOCK_USERS, MOCK_PLACES };
