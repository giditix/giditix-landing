import React from "react";

export default function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans">
      {/* LEFT SIDE */}
      <div className="bg-black text-green-400 flex flex-col justify-center items-center px-6">
        <div className="text-6xl mb-6">🎟️</div>
        <h1 className="text-4xl font-bold mb-2">giditix</h1>
        <p className="text-sm tracking-wider text-center max-w-xs">
          GidiTix is Africa’s all-in-one digital ticketing solution
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-green-300 text-black flex flex-col justify-between px-10 py-8">
        {/* Nav */}
        <nav className="flex justify-end space-x-6 text-sm font-medium">
          <a href="#home" className="hover:underline">HOME</a>
          <a href="#about" className="hover:underline">ABOUT US</a>
          <a href="#services" className="hover:underline">OUR SERVICES</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>

        {/* Main Content */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Welcome</h2>
          <p className="text-base max-w-md leading-relaxed">
            Since our opening, we have become masters of our craft. Our commitment to quality products,
            exceptional services and incomparable customer care keep our community coming back again and again.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm mt-16 space-y-2" id="contact">
          <p>Email: <a href="mailto:hello@giditix.com" className="underline">info@mysite.com</a></p>
          <p>123-456-7890</p>
          <div className="flex space-x-4 text-xl pt-2">
            <a href="#"><i className="fab fa-facebook"></i>🌐</a>
            <a href="#"><i className="fab fa-twitter"></i>🐦</a>
            <a href="#"><i className="fab fa-instagram"></i>📸</a>
          </div>
        </div>
      </div>
    </div>
  );
}
