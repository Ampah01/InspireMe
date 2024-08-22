const Footer = () => {
    return (
      <footer className="bg-[#1a1a3d] text-gray-300 p-10 w-full mt-14">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">InspireMe</h2>
          </div>
  
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
  
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.93 4.93 0 002.16-2.72c-.94.56-1.98.97-3.08 1.19A4.92 4.92 0 0016.68 3c-2.7 0-4.89 2.2-4.89 4.91 0 .38.04.76.13 1.11C7.72 8.79 4.1 6.91 1.67 3.96c-.42.73-.66 1.57-.66 2.48 0 1.71.87 3.22 2.2 4.1a4.92 4.92 0 01-2.22-.61v.06c0 2.38 1.7 4.36 3.95 4.81-.41.11-.85.16-1.3.16-.32 0-.63-.03-.93-.09.64 2 2.49 3.45 4.67 3.49a9.86 9.86 0 01-6.11 2.1c-.4 0-.79-.02-1.18-.07A13.93 13.93 0 008 21c9 0 13.93-7.5 13.93-13.98 0-.21 0-.43-.02-.64a9.9 9.9 0 002.45-2.53z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.2 3.8a4.2 4.2 0 014.2 4.2v8.4a4.2 4.2 0 01-4.2 4.2H7.8a4.2 4.2 0 01-4.2-4.2V8a4.2 4.2 0 014.2-4.2h8.4m0-2H7.8a6.2 6.2 0 00-6.2 6.2v8.4a6.2 6.2 0 006.2 6.2h8.4a6.2 6.2 0 006.2-6.2V8a6.2 6.2 0 00-6.2-6.2zM9 8h2v8H9V8zm1 9c.69 0 1.25-.56 1.25-1.25S10.69 14.5 10 14.5s-1.25.56-1.25 1.25S9.31 17 10 17zm7-9h2v8h-2V8zm1 9c.69 0 1.25-.56 1.25-1.25S18.69 14.5 18 14.5s-1.25.56-1.25 1.25S17.31 17 18 17z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48 0-.23-.01-.82-.01-1.61-2.75.6-3.34-1.33-3.34-1.33-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.2-.25-4.52-1.1-4.52-4.92 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.45 9.45 0 0112 7.88c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.68 0 3.84-2.33 4.67-4.54 4.91.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10 10 0 0012 2z"/>
              </svg>
            </a>
          </div>
        </div>
  
        <div className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} InspireMe. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  