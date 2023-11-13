import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./partel/Header";
import Body from "./partel/Body";
import Footer from "./partel/Footer";

const App = () => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(<App />);
