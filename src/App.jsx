import { useEffect, useState } from "react";
import Landing from "./Landing"; // Swap with your real site if needed
import "./App.css"; // Import the custom CSS below

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash">
          <img src="/logo.png" alt="GidiTix Logo" className="splash-logo" />
          <p className="splash-text">Africa’s all-in-one digital ticketing solution is coming soon...</p>
        </div>
      ) : (
        <Landing />
      )}
    </>
  );
}
