import { useEffect, useRef } from "react";
import RouteAnnouncer from "./RouteAnnouncer";

function Home() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      <RouteAnnouncer title="Home" />

      <h2
        ref={headingRef}
        tabIndex="-1"
        className="text-3xl font-semibold mb-4 mt-50 text-center outline-none"
      >
        Home Page
      </h2>

      <p className="text-gray-700 text-center">
        Welcome to the accessible home page.
      </p>
    </>
  );
}

export default Home;
