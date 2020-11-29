import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qbvS8hzzIty0GtjhaE1vm5KDneGgaWSsSWDma_Ok_Vs",
  },
});
