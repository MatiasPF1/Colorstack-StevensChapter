"use client";
import { useState, useEffect } from "react";
import { StarDoodle, UnderlineDoodle, DinoDoodle, SparkleDoodle, BulbDoodle, RocketDoodle, LaptopDoodle } from "./Doodles";

export default function Main_Idea(){

    {/*Mouse Position State for Doodle Animation */}
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX - window.innerWidth / 2) / 40, // Adjust divisor to control sensitivity
                y: (e.clientY - window.innerHeight / 2) / 40, // Adjust divisor to control sensitivity
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return(
        <div className="flex flex-col justify-center items-center relative"> {/* Container Div to center the content vertically and horizontally */}
        
        
        {/*1-Decorative Doodles*/}
                                            {/* Laptop (Top Right) */}
        <div className="absolute -top-102 right-[10%] hidden md:block" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
            <LaptopDoodle className="w-32 h-32 text-[#222629] opacity-40 -rotate-12" />
        </div>

                                            {/* Decorative Star ( Middle Right Top) */}
        <div className="absolute top-0 right-[20%] hidden md:block" style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}>
            <StarDoodle className="w-12 h-12 text-[#c41230] opacity-60 rotate-12" />
        </div>

        
                                            {/* Bulb (Middle Left Top) */}
        <div className="absolute top-10 left-[10%] hidden md:block" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
            <BulbDoodle className="w-14 h-20 text-[#222629] opacity-50 -rotate-12" />
        </div>

                                            {/* Rocket (Middle Left Middle) */}
        <div className="absolute top-1/2 left-[5%] hidden md:block" style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}>
            <RocketDoodle className="w-16 h-20 text-[#c41230] opacity-60 rotate-45" />
        </div>

                                            {/* Dino (Middle Left Bottom) */}
        <div className="absolute bottom-10 left-[15%] hidden md:block" style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}>
            <DinoDoodle className="w-24 h-24 text-[#222629] opacity-60" />
        </div>

                                            {/* Middle (Middle Right Bottom) */}
        <div className="absolute bottom-20 right-[10%] hidden md:block" style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}>
            <SparkleDoodle className="w-16 h-16 text-[#FFD700] opacity-70 rotate-6" />
        </div>

        {/*2-Main Idea Text */}
        <p className="-translate-y-20 w-1/2 text-center text-2xl text-wrap relative">
            The Stevens ColorStack Chapter empowers 
            Black and Latino students in tech,     
            <br></br>
            fostering belonging, professional growth, and success together.
        </p>

        <p className="-translate-y-20 w-3/4 text-center text-2xl text-balance relative z-10">
            <br></br>
            <span className="relative inline-block">
                <strong className="text-[#c41230]">Everyone is welcome</strong>
                <UnderlineDoodle className="absolute -bottom-4 left-0 w-full h-8 text-[#c41230] opacity-80" />
            </span>. You don't have to be Hispanic or Black to support our mission. 
            <br></br>
            We want everyone, regardless of race or gender, to be part of our community.
        </p>


        <div className=" -translate-y-10 w-[92%] max-w-275 mx-auto  mb-[2.5em] flex justify-center items-center flex-wrap relative">
            <img className="max-w-210 w-full h-125 object-cover rounded-[18px] shadow-lg transition-all duration-200 hover:-translate-y-1 inline-block " src="/images/colorstack-group.jpg" alt="ColorStack Group"/>
        </div>


        </div>

        
    )

}