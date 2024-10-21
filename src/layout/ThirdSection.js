import React from "react";
import { Slider } from "antd";

const ThirdSection = () => {
  return (
    <div className="w-full h-full p-8 text-white">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Edit Voice</h1>
        <p className="text-base text-gray-400">Voice settings</p>
      </div>

      {/* Voice Card Section */}
      <div className="bg-[#19181b] p-5 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          {/* <div className="w-12 h-12 bg-gray-600 rounded-full mr-4">
            <img
              src="https://via.placeholder.com/48"
              alt="Avatar"
              className="w-full h-full rounded-full"
            />
          </div> */}
          <div>
            <div className="text-lg font-semibold">Diya (Indian Female)</div>
            <div className="text-gray-400 text-sm">Indian Hindi voice</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className="bg-gray-600 text-white text-xs px-3 py-1 rounded-md">
            Indian
          </span>
          <span className="bg-gray-600 text-white text-xs px-3 py-1 rounded-md">
            Hindi
          </span>
        </div>
      </div>

      {/* Settings Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Settings</h3>
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">Sample Rate</span>
            <span className="text-white">24000 Hz</span>
          </div>
          <Slider
            defaultValue={24000}
            min={8000}
            max={48000}
            // className="bg-teal-400"
            trackStyle={{ backgroundColor: "#1A7072", height: "6px" }}
            handleStyle={{
              borderColor: "#1A7072",
              backgroundColor: "white",
              height: "16px",
              width: "16px",
            }}
          />
        </div>

        {/* Speed Slider (Disabled) */}
        {/* <div className="opacity-50">
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">Speed</span>
            <span className="text-white">1</span>
          </div>
          <Slider
            defaultValue={1}
            min={0.5}
            max={2}
            step={0.1}
            disabled
            className="bg-gray-400"
            trackStyle={{ backgroundColor: "#555", height: "6px" }}
            handleStyle={{
              backgroundColor: "white",
              height: "16px",
              width: "16px",
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ThirdSection;
