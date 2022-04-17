import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Text italic>TEXT italic</Text>
      <Text element="p" strong>
        TEXT strong
      </Text>
      <Text element="span" disabled>
        TEXT disabled
      </Text>
      <Footer />
      <div className="test"></div>
    </div>
  );
}

export default App;
