import React, { useState, useEffect } from "react";

const MouseFollowCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the position state as the mouse moves
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Add the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y, // Adjust circle's center
        left: position.x, // Adjust circle's center
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "rgba(128, 128, 128, 0.5)", // Transparent grey
        pointerEvents: "none", // Prevent interfering with clicks
        transform: "translate(-50%, -50%)", // Center the circle exactly under the cursor
        zIndex: 9999, // Ensure it's on top of other elements
      }}
    />
  );
};

export default MouseFollowCircle;
