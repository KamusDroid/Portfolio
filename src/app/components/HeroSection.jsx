"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="neon mb-4 text-4xl sm:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Hola, Soy{" "}</span>
                        <br />
                        <TypeAnimation
                        
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Matias',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Data Scientist',
                                1000,
                                'Data Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={5}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-azure text-base sm:text-lg mb-6 lg:text-xl"></p>
                    <div>
                        <button className="neon-button"> Hire Me </button>

                        <button className="neon-button2"> Download CV   
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                        <Image 
                            src="/images/hero4.png"
                            alt="hero"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;