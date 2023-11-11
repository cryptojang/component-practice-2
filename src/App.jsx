import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import OtherSide from "./components/OtherSide";
import Side from "./components/Side";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex grow">
        <Side />
        <Main />
        <OtherSide />
      </div>

      <Footer />
    </div>
  );
};

export default App;
