import React from "react";
import { SettingOutlined, AudioOutlined, KeyOutlined } from "@ant-design/icons";
import MiddleSection from "./MiddleSection";
import ThirdSection from "./ThirdSection";

const AppLayout = ({ children }) => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-[25%] bg-[#19181b] border-r border-[#262626] h-full flex flex-col justify-between p-4 text-white">
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="text-2xl font-bold mb-10">
            {/* <img
              src="logo.png"
              alt="smallest.ai"
              className="w-8 h-8 inline-block mr-2"
            /> */}
            seisei.ai
          </div>

          {/* Custom Menu */}
          <div className="space-y-4">
            {/* Studio Item */}
            <div className="flex items-center bg-[#262626] p-3 rounded-lg cursor-pointer hover:bg-gray-700">
              <AudioOutlined className="mr-2 text-xl" />
              <span className="text-lg">Studio</span>
            </div>

            {/* API Key Item */}
            <div className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700">
              <KeyOutlined className="mr-2 text-xl" />
              <span className="text-lg">API Key</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Settings Section */}
          <div className="mt-10 flex items-center mb-4">
            <SettingOutlined className="mr-2" />
            <span className="text-lg">Settings</span>
          </div>

          {/* Credits Section */}
          <div className="bg-[#222222] p-4 rounded-lg mb-6">
            <div className="text-gray-400 mb-2">Credits 29.91 / 30</div>
            <div className="bg-gray-700 h-2 rounded-full mb-2">
              <div
                className="bg-teal-400 h-2 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="text-gray-400 text-sm mb-2">
              You have used 0.32% of your available credits.
            </div>
            <button className="bg-transparent border border-teal-400 text-teal-400 px-4 py-1 rounded-md">
              Upgrade Plan
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <img
                src="https://via.placeholder.com/32"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
              /> */}
              <span className="text-sm">shravanmeena47@gmail.com</span>
            </div>
            <div className="cursor-pointer text-gray-400">...</div>
          </div>
        </div>
      </div>

      {/* Placeholder for other content */}
      <div className="w-[70%] bg-[#19181b] border-r border-[#262626] h-full">
        <MiddleSection />
      </div>
      <div className="w-[25%] bg-[#19181b] border-r border-[#262626] h-full">
        <ThirdSection />
      </div>
    </div>
  );
};

export default AppLayout;
