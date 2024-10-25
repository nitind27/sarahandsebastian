import { useEffect, useState } from "react";
import MainHeader from "./component/layouts/Header/Mainheader";
import Homesection from "./component/Main/Homesection/Homesection";
import StickyHeader from "./component/layouts/Header/StickyHeader";
import Contectsection from "./component/Content/Contectsection";
import Blogpost from "./component/blogpost/Blogpost";
import Artists from "./component/Artist/Artists";

const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader />
      <div className="relative">
        <Homesection />

        {isSticky && (
          <div className="fixed top-0 left-0 right-0 z-50">
            <StickyHeader />
          </div>
        )}
        <Contectsection />
        <Blogpost />
        <Artists />
      </div>
    </>
  );
};

export default App;
