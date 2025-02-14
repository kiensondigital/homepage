import React, { useState, useEffect } from "react";

const MouseFollowCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true); // Track if it's a desktop

  useEffect(() => {
    // Detect if the user is on a mobile device
    const checkIfMobile = () => {
      if (window.innerWidth < 768 || "ontouchstart" in window) {
        setIsDesktop(false); // Disable for mobile
      } else {
        setIsDesktop(true);
      }
    };

    checkIfMobile(); // Run check on mount
    window.addEventListener("resize", checkIfMobile); // Check on resize

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Prevent mouse tracking on mobile

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Don't render the component on mobile

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollowCircle;
