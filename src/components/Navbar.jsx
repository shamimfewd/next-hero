import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-center space-x-4 bg-red-600 p-4 text-lg">
          <li>home</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
}
