import React from "react";

export default function GidiTixHome() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      {/* Left Side */}
      <div className="bg-black text-green-400 flex flex-col items-center justify-center p-10">
        <div className="text-6xl mb-4">🎟️</div>
        <h1 className="text-4xl font-bold mb-2">giditix</h1>
        <p className="text-sm tracking-wide text-green-400 text-center">
          GidiTix is Africa’s all-in-one digital ticketing solution
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-green-300 text-black flex flex-col justify-between p-10">
        <nav className="flex justify-end gap-8 mb-10 font-medium">
          <a href="#about" className="hover:underline">ABOUT US</a>
          <a href="#services" className="hover:underline">OUR SERVICES</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>

        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="text-lg max-w-md">
            GidiTix is revolutionizing ticketing across Africa by offering seamless digital access to events in local and international currencies. We’re committed to secure payments, cultural celebration, and community connection.
          </p>
        </div>

        <div className="mt-10 space-y-1 text-sm" id="contact">
          <p>Email: <a href="mailto:hello@giditix.com" className="underline">hello@giditix.com</a></p>
          <p>Phone: +234-812-345-6789</p>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="https://instagram.com/giditix" target="_blank" rel="noreferrer">📸</a>
            <a href="https://twitter.com/giditix" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://facebook.com/giditix" target="_blank" rel="noreferrer">📘</a>
          </div>
        </div>
      </div>
    </div>
  );
}
