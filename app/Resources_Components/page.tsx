"use client";
import Tab from "./Tab";
import LCN from "./LCN";
import AppFell from "./AppFell";
import CSW from "./CSW";
import {useState} from "react";

export default function Resources() {
	const [activeTab, setActiveTab] = useState("notes");
	return (
    <div className="flex flex-col items-center gap-10 translate-y-9 px-4">
      <h1 className="font-bold text-[1.8em] md:text-[2.3em] translate-y-5 text-center">Resources</h1>

      <p className="text-[16px] md:text-[18px] text-center -translate-y-4 px-2">
        Resources created by our team or from external sources<br className="hidden md:block"/> that we believe can benefit all in our community
      </p>

      <div className="flex flex-col items-center w-full max-w-[1000px] px-4 md:px-6 -translate-y-9" >
      	<nav className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 mb-6 w-full md:w-auto">
        	<Tab label="LeetCodeNights" value="LeetCodeNights" activeTab={activeTab} setActiveTab={setActiveTab} />
        	<Tab label="Application/Fellowships" value="Applications/Fellowships" activeTab={activeTab} setActiveTab={setActiveTab} />
        	<Tab label="Colorstack-Works" value="Colorstack-Works" activeTab={activeTab} setActiveTab={setActiveTab} />
      	</nav>
      	<div className="w-full">
        	{activeTab === "LeetCodeNights" && <LCN />}
        	{activeTab === "Applications/Fellowships" && <AppFell />}
        	{activeTab === "Colorstack-Works" && <CSW />}
      	</div>
      </div>
    </div>
  )
}
