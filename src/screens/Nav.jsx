import React from "react";
import Buttons from "../components/Buttons";

const Nav = () => {
  return (
    <nav className=" pb-2 pt-6 w-full bg-transpatent">
      {/* logo */}
      <div className="flex justify-between items-center">
        <svg
          width="95"
          height="42"
          viewBox="0 0 106 52"
          fill="none"
          className="mb-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7526 51.0226C13.8917 51.0226 16.0229 49.7115 17.3764 47.7304L17.8948 50.6438H19.9972V39.1067H11.0118V42.5445H16.7428C16.1669 45.1666 14.2661 47.2351 10.7526 47.2351C6.57667 47.2351 4.41671 43.8555 4.41671 40.4468C4.41671 37.0673 6.57667 33.6585 10.7526 33.6585C12.8549 33.6585 14.4389 34.5326 15.5045 35.8436L18.73 33.6585C16.9156 31.3278 14.0933 29.9002 10.7526 29.9002C4.76231 29.9002 0.5 34.4743 0.5 40.4468C0.5 46.4194 4.76231 51.0226 10.7526 51.0226ZM26.0066 50.6438V44.5548C26.0066 41.8161 26.5538 39.0193 30.8737 39.5437V35.5231C29.117 35.5231 27.101 36.4554 26.0066 38.2909V35.8728H22.3491V50.6438H26.0066ZM39.0432 51.0226C43.4495 51.0226 46.7614 47.5847 46.7614 43.2729C46.7614 38.9318 43.4495 35.5231 39.0432 35.5231C34.6657 35.5231 31.3537 38.9318 31.3537 43.2729C31.3537 47.5847 34.6657 51.0226 39.0432 51.0226ZM39.0432 47.4682C36.624 47.4682 35.0976 45.5745 35.0976 43.2729C35.0976 40.9712 36.624 39.0775 39.0432 39.0775C41.4911 39.0775 43.0175 40.9712 43.0175 43.2729C43.0175 45.5745 41.4911 47.4682 39.0432 47.4682ZM54.6716 50.6438L57.5804 41.9327L60.5179 50.6438H63.7722L68.6681 35.8728H64.7226L61.9003 45.254L58.7899 35.8728H56.3996L53.2605 45.254L50.4669 35.8728H46.5214L51.4173 50.6438H54.6716ZM74.8504 50.6438V39.2523H77.9895V35.8728H74.8504C74.8504 34.0664 75.484 33.0467 77.3559 33.0467C77.5863 33.0467 77.7879 33.0759 77.9895 33.0759V29.9876C77.4999 29.9002 77.1831 29.8711 76.4632 29.8711C72.5176 29.8711 71.1929 32.8428 71.1929 35.8728H69.1481V39.2523H71.1929V50.6438H74.8504ZM81.4358 33.7168C82.5302 33.7168 83.3942 32.8428 83.3942 31.7357C83.3942 30.6577 82.5302 29.7837 81.4358 29.7837C80.3703 29.7837 79.5063 30.6577 79.5063 31.7357C79.5063 32.8428 80.3703 33.7168 81.4358 33.7168ZM83.279 50.6438V35.8728H79.6215V50.6438H83.279ZM89.4037 50.6438V42.428C89.4037 40.7382 90.354 39.1067 92.514 39.1067C94.5876 39.1067 95.3651 40.5342 95.3651 42.428V50.6438H99.0227V41.6705C99.0227 38.5531 97.3523 35.5231 93.666 35.5231C91.5348 35.5231 90.21 36.4846 89.4037 37.6791V35.8728H85.7749V50.6438H89.4037Z"
            fill="white"
          />
          <g clip-path="url(#clip0_0_895)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.32 23.2423C70.4843 10.7421 80.462 3.33881 95.7283 0C92.4402 5.08776 92.4459 9.69776 94.0297 12.5134C95.6135 15.3291 102.878 19.6423 105.727 30.6C98.0302 24.46 90.6228 21.0872 83.5052 20.4813C76.3877 19.8755 70.4843 20.4516 65.32 23.2423Z"
              fill="#00D4C7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M83.663 15.904C84.249 14.6606 84.7272 13.763 85.0977 13.2113C86.0312 11.8211 87.1832 10.6286 88.5539 9.63382C89.68 8.81646 90.9537 8.13255 92.375 7.5821C92.59 7.4988 92.8085 7.41855 93.0303 7.34131C92.9765 8.19928 92.8515 9.87056 93.7353 11.9277C93.9026 12.317 94.1717 12.8226 94.5837 13.3081C95.7663 14.7016 97.4707 16.3126 98.2959 17.2562C98.7652 17.7929 99.1862 18.2383 99.1415 18.2043C96.2926 16.0392 93.5456 14.8444 90.9005 14.6199C88.1043 14.3825 85.6918 14.8105 83.663 15.904Z"
              fill="black"
              fill-opacity="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_895">
              <rect
                width="40.4073"
                height="30.6"
                fill="white"
                transform="translate(65.32)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* buttons */}
        <Buttons />
      </div>
    </nav>
  );
};

export default Nav;
