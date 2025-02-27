import "./styles.css";
import "./scroll_handler.js";
import "./logo_switcher.js";
import scrollToTop from "./scroll_to_top.js";

console.log("Hello world");

document.addEventListener("DOMContentLoaded", (e) => {
  scrollToTop(".scroll-top-btn");
});
