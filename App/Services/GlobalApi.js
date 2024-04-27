// Services/GlobalApi.js
import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyDyi5Lu-0c4-HKC6zYcRcWvepnja5zf6sM";

const nearByPlace = () =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${API_KEY}`
  );

export default {
  nearByPlace,
};
