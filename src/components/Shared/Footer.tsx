'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="bg-white dark:border-gray-700 dark:bg-gray-900/40 backdrop-blur-md pt-10"
    >
      <div className="w-full">
        <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8 px-4 sm:px-4 lg:px-4">
          {/* Brand Section */}
          <div className="w-full md:w-[45%] lg:w-[22%] space-y-4">
            <h3
              className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Tohidul Islam Sobuj
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[45%] lg:w-[22%] space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Project', 'About', 'Skill', 'Contact'].map((item) => (
                <div key={item} >
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-gray-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-[45%] lg:w-[22%] space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h4>
            <div className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'API Development', 'Database Design'].map((service) => (
                <div key={service}>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[45%] lg:w-[22%] space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect Me</h4>
            <div className="space-y-3">
              <div className="flex flex-col space-y-1">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Email:
                </p>
                <a
                  href="mailto:sobuj033@gmail.com"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-gray-500"
                >
                  sobuj033@gmail.com
                </a>
              </div>
              <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>Location: Rajshahi, Bangladesh</p>
              <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>Phone: +8801744662126</p>
              <div className="flex space-x-4 pt-2">
                {/* Social Media Icons - replaced with SVG placeholders */}
                <a
                  href="https://github.com/sopnilali"
                  target="_blank"
                  rel="noopener noreferrer"
                  title='Github'
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-500"
                >
                  {/* Github SVG */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ami-abdul-adud"
                  target="_blank"
                  rel="noopener noreferrer"
                  title='Linkedin'
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-500"
                >
                  {/* Linkedin SVG */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/cse.wadud"
                  target="_blank"
                  rel="noopener noreferrer"
                  title='Facebook'
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-500"
                >
                  {/* Facebook SVG */}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.733-.593-1.325-1.326-1.325z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-4 border-t flex justify-center items-center border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 pb-4">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
