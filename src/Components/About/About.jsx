import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const imageUrl = 'https://media.licdn.com/dms/image/D5603AQG2xmfQTew0Fg/profile-displayphoto-shrink_800_800/0/1706972817477?e=1723075200&v=beta&t=YIoOCwoBFLX4pWzQAVPPhhSdX8kjClHNNOyM01LL1kU';

  return (
    <>
      <Link to="/about"></Link>
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
        <img src={imageUrl} alt="Profile" className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
        <p className="text-gray-700 text-center md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum exercitationem, nemo ullam velit modi similique perferendis laboriosam recusandae quaerat esse est, dolorum tempore non reprehenderit maxime in at perspiciatis sed ab quisquam omnis, ducimus voluptate veritatis? Dolorem molestias a incidunt beatae consectetur deleniti fugit impedit? Earum praesentium nulla laboriosam esse!
        </p>
      </div>
    </>
  );
}

export default About;
