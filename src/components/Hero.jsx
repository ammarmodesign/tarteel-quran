import { isDesktop } from "react-device-detect";

const Hero = () => {
  return (
    <section className="bg-[#212121]">
      <div className="relative wrapper py-16 flex items-center justify-between">
        <div className="sm:max-w-[350px] md:max-w-[450px] flex flex-col gap-2 relative">
          <h1 className="text-4xl leading-loose font-bold text-white z-20">
            إقرأ القرآن و إستمع إلي{" "}
            <span className="text-greeny-gradient text-5xl">أفضل</span> الشيوخ.
          </h1>
          <p className="text-light-blacky max-w-[300px] z-20">
            تمتع بأفضل التلاوات المختارة وأحتفظ بها لوقت لاحق.
          </p>
          <svg
            className="animate-round absolute top-12 right-16 md:top-28 md:right-0 lg:top-12 lg:right-0 z-10"
            width="120"
            height="130"
            viewBox="0 0 204 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156.506 19.3131C124.593 -6.02457 63.2278 -1.73792 31.7289 20.4338C17.3836 30.5316 -9.06891 59.7901 7.02754 87.4138C9.86654 92.2862 13.3175 96.2445 16.8879 99.6696C56.1818 137.363 110.987 133.524 153.158 110.97C159.447 107.607 165.636 103.613 171.33 98.1863C175.589 94.1272 179.706 89.0962 183.022 83.225C192.73 66.037 190.194 48.7396 179.749 34.168C167.639 17.2732 151.079 12.0376 135.454 9.17034C121.79 6.66313 108.144 6.18168 94.4157 7.20495C68.6696 9.12374 38.999 12.1769 17.4056 35.2751C7.97417 45.364 -2.15866 66.9224 5.92575 84.3709C14.6863 103.278 35.3425 109.4 49.2361 113.39C86.7168 124.154 146.021 118.817 180.161 90.5713C183.843 87.5253 187.573 84.6867 190.866 80.6813C193.468 77.5164 195.96 73.9076 198.121 70.0021C213.439 42.324 179.259 24.9213 167.204 21.9327C129.283 12.5311 73.1575 -1.03648 38.2339 23.9737"
              stroke="#818181"
              strokeWidth="3"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            id="mark-icon"
            className="animate-wiggle absolute top-12 right-32 md:top-32 md:right-20 lg:top-16 lg:right-20 z-10"
            width="60"
            height="60"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_108)">
              <path
                d="M26.0733 30.0399C32.1351 28.1441 35.5123 21.6933 33.6165 15.6316C31.7208 9.56981 25.2699 6.19261 19.2082 8.08836C13.1464 9.98412 9.76924 16.435 11.665 22.4967C13.5608 28.5585 20.0116 31.9357 26.0733 30.0399Z"
                fill="url(#paint0_linear_1_108)"
                stroke="#2E2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.2865 29.7714L22.7956 44.6859L29.4354 37.4395L39.0207 39.6117L32.5802 25.9094"
                fill="#FCF6F5"
              />
              <path
                d="M20.2865 29.7714L22.7956 44.6859L29.4354 37.4395L39.0207 39.6117L32.5802 25.9094"
                stroke="#FCF6F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_108"
                x1="11.665"
                y1="22.4967"
                x2="33.6165"
                y2="15.6316"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2BAE66" />
                <stop offset="1" stopColor="#007635" />
              </linearGradient>
              <clipPath id="clip0_1_108">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0 12) rotate(-17.3666)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* Desktop only */}
        {isDesktop && (
          <div className="hidden relative md:block max-w-[400px]">
            <svg
              className="absolute top-4 right-16"
              width="50"
              height="50"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_116_153)">
                {" "}
                <path
                  d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                  fill="url(#paint0_linear_116_153)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_116_153"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#2BAE66" />{" "}
                  <stop offset="1" stopColor="#007635" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_116_153">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <svg
              className="absolute bottom-4 left-16"
              width="50"
              height="50"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_116_153)">
                {" "}
                <path
                  d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                  fill="url(#paint0_linear_116_153)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_116_153"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#2BAE66" />{" "}
                  <stop offset="1" stopColor="#007635" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_116_153">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <img
              src="/images/green-quran-hero.png"
              className="w-full h-full object-contain z-10"
              alt=""
            />
          </div>
        )}
        {/* Mobile and above */}
        {!isDesktop && (
          <div className="md:hidden h-full opacity-50 select-none">
            <img
              className="absolute opacity-20 w-16 h-24 left-32 bottom-8 rounded object-cover rotate-12 select-none"
              src="/images/yasser-doasri.png"
              alt=""
            />
            <img
              className="absolute opacity-20 w-16 h-24 left-32 top-8 rounded object-cover -rotate-12 select-none"
              src="/images/sudais.png"
              alt=""
            />
            <img
              className="absolute opacity-20 w-16 h-24 right-16 bottom-8 rounded object-cover -rotate-12 select-none"
              src="/images/sheikh-1.png"
              alt=""
            />
            <img
              className="absolute opacity-20 w-16 h-24 right-5 top-8 rounded object-cover rotate-12 select-none"
              src="/images/saud-sherim.png"
              alt=""
            />
            <img
              className="absolute opacity-20 w-16 h-24 top-24 right-48 rounded object-cover rotate-12 select-none"
              src="/images/maher-meiqly.png"
              alt=""
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
