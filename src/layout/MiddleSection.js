import React, { useState } from "react";
import { Button } from "antd";

const MiddleSection = () => {
  // State for text input and tab switching
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState("create");

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full p-10 text-white">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-2">Waves</h1>
        <p className="text-xl text-gray-400">Real-time text to speech platform</p>
      </div>

      {/* Tabs Section */}
      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => handleTabChange("create")}
            className={`px-6 py-2 rounded-lg focus:outline-none ${
              activeTab === "create"
                ? "bg-[#262626] text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            Create
          </button>
          <button
            onClick={() => handleTabChange("history")}
            className={`px-6 py-2 rounded-lg focus:outline-none ${
              activeTab === "history"
                ? "bg-[#262626] text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Conditional rendering based on active tab */}
      {activeTab === "create" ? (
        <>
          {/* Textarea Section */}
          <div className="bg-[#19181b] p-4 rounded-lg mb-4 border border-[#262626]">
            <textarea
              placeholder="Start typing here or paste anything here you want to convert into lifelike speech."
              className="w-full h-40 bg-transparent text-white placeholder-gray-500 border-none focus:outline-none resize-none"
              maxLength={250}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="text-gray-400 text-sm mt-2">{`${inputText.length}/250`}</div>
          </div>

          {/* Tips Section */}
          <div className="flex items-center mb-6">
            <span className="text-gray-400 mr-2">❓</span>
            <span className="text-gray-400 text-sm">Tips to create better audio</span>
          </div>

          {/* Button Section */}
          <div className="flex justify-end">
            <Button
              type="primary"
              style={{
                backgroundColor: "#1A7072",
                borderColor: "#1A7072",
                padding: "10px 20px",
              }}
            >
              Generate Speech
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-400 mt-10">
          <h2 className="text-xl">Coming Soon</h2>
          <p className="mt-4">This section is under development.</p>
        </div>
      )}
    </div>
  );
};

export default MiddleSection;
