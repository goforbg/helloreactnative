import axios from "axios";
let debug = require("debug");
debug.enable("axios");

export default axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
