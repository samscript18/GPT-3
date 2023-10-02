import "./App.css";
import { Navbar, CTA, Brand } from "./components";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
