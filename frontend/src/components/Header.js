import React from "react";

function Header() {
  return (
    <div className=" hidden lg:block px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Ecommerce Built For HITK.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We make online selling superbly easy. More than just a reliable
              e-commerce platform. Ensuring the best welfare of the buyers.
              <br></br>
              <br></br>
              <h1>Our Team: </h1>
              <p>Amit Kumar Kewot, Debayan Kumar Ghost,</p>
              <p>Anirban Dutta, Tamoghna Shadhukhan, Adri Karmakar</p>
            </p>
          </div>
          {/* <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div> */}
          {/* <div class="flex">
          <button type="button" class="text-white bg-green-500 hover:bg-green-300 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Download for Android 
</button>
<button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  <svg class="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
  Download for IOS
</button>
          </div> */}
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            {/* <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://source.unsplash.com/9RpDzXTlNh8?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            /> */}
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://college4u.in/wp-content/uploads/2017/01/heritage-830x551.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              // src="https://source.unsplash.com/FnR2U1lXsBQ?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              // src="https://source.unsplash.com/KWgaJ_iQVYY?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              src="https://images.shiksha.com/mediadata/images/1527155250phpJNFx7P.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
