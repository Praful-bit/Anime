import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Praful Gahlot</h1>
          <a href='https://anime-khaki-phi.vercel.app/' className="text-lg">AniManGa.in</a>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/praful_gahlot_02?igsh=MTNvd3N4aWQyeDNmNA==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <img src="https://e7.pngegg.com/pngimages/704/270/png-clipart-social-media-instagram-login-graphy-ig-instagram-icon-rectangle-magenta.png" alt="Instagram" className="w-8 h-8 inline-block" />
            </a>
            <a href="https://www.facebook.com/praful.gahlot.7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <img src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" alt="Facebook" className="w-8 h-8 inline-block" />
            </a>
            <a href="https://github.com/prafulgahlot" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="GitHub" className="w-8 h-8 inline-block" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2">Contact Number: <a href="tel:8979012764" className="text-blue-400 hover:underline">8979012764</a></p>
          <p>WhatsApp: <a href="https://wa.me/8979012764" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">8979012764</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
