import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-6">
      <div className=" mx-auto px-6 md:px-20 lg:px-40">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="border border-gray-500 rounded-xl p-6 flex flex-col justify-center items-center">
            <h3 className="text-blue-400 font-semibold mb-3">CONNECT WITH US</h3>
            <p className="text-yellow-400"><i class="fa-solid fa-phone"></i> <span className='text-gray-600'>+91 9567843340</span></p>
            <p className="text-yellow-400"><i class="fa-regular fa-envelope"></i> <span className='text-gray-600'>info@deepnetsoft.com</span></p>
          </div>

          <div className="border border-gray-500 rounded-xl p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-400">DEEP</span> <span className="text-white">NET</span> <span className="text-gray-400">SOFT</span>
            </h2>
            <div className="mt-3 flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i class="fa-brands fa-youtube"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="border border-gray-500 rounded-xl p-6 flex flex-col justify-center items-center">
            <h3 className="text-blue-400 font-semibold mb-3">FIND US</h3>
            <p className="text-yellow-400"><i class="fa-solid fa-location-dot"></i> <span className='text-gray-400'>First floor, Geo Infopark, Infopark EXPY, Kakkanad</span></p>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-10 pt-4 text-center text-gray-400">
          <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
          <div className="mt-2 space-x-6">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
