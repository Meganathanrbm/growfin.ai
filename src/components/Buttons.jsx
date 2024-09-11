import React from "react";

const Buttons = ({ style }) => {
  return (
    <div className="flex gap-6">
      <button
        className={
          "text-black font-semibold px-5 text-base leading-4 p-2 rounded-[20px] bg-secondary"
        }
      >
        Schedule a Demo
      </button>
      <button
        className={`text-secondary font-semibold px-5 text-base border-2 border-secondary leading-4 p-2 rounded-[20px] bg-transparent`}
      >
        Request Access
      </button>
    </div>
  );
};

export default Buttons;
