import { useEffect, useRef } from "react";
import RouteAnnouncer from "./RouteAnnouncer";

function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      <RouteAnnouncer title="About" />

      <h2
        ref={headingRef}
        tabIndex="-1"
        className="text-3xl text-center font-semibold mb-4 mt-50 outline-none"
      >
        About Page
      </h2>

      <p className="text-gray-700 text-center">
        This page demonstrates accessibility patterns in an SPA.
      </p>
    </>
  );
}

export default About;
