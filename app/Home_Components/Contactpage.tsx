"use client"
import { CharacterDoodle } from "./Doodles";

export default function ContactPage(){

    type Platform = "instagram" | "discord" | "email" | "website"; {/* Platform Types */}
	const socials: Record<Platform,string> = { 
		instagram: "https://www.instagram.com/colorstackstevens/?igsh=MTBzdmppNWtoZDdwdg%3D%3D#",
		discord: "https://discord.gg/axpwmFh2k9",
		email:"mailto:colorstackstevens@gmail.com",
		website:"https://www.colorstack.org/",
	};



	return(<>
			{/* Contact Page Header */}
			<h1 className = "flex mt-10! items-center justify-center text-black font-bold text-3xl">
				Get Connected
			</h1>

			{/* Contact Options Grid and its options: */}
			<div className ="grid grid-cols-2 auto-rows-fr gap-7 mt-16! mx-22! mb-16!">

                {/* Instagram */}
				<div className = "relative flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-[1.05rem] mt-8!">Instagram</h2>
					<p className = "text-gray-600 text-center  text-[0.90rem]">Follow us for updates, events, and <br/> community highlights</p>
					<button onClick= {()=>(window.open(socials["instagram" as Platform], "_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-6! py-2! mb-8! transition-all duration-200 hover:-translate-y-1 inline-block ">Follow Us</button>
                    
                    {/* Character Doodle Pointing to Button */}
                    <div className="absolute bottom-4 right-47 w-16 h-20 pointer-events-none hidden md:block">
                        <CharacterDoodle className="text-[#222629] opacity-60 -rotate-12" />
                    </div>
				</div>



 			   {/* Discord */}
				<div className = "relative flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-[1.05rem] mt-8!">Discord</h2>
					<p className = "text-gray-600 text-center text-[0.90rem]">Join our Discord server to chat with<br/> members and get real-time updates</p>
					<button onClick = {()=>(window.open(socials["discord" as Platform], "_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-6! py-2! mb-8! transition-all duration-200 hover:-translate-y-1 inline-block ">Join Discord</button>
                    
                    {/* Character Doodle Pointing to Button */}
                    <div className="absolute bottom-4 right-45 w-16 h-17 pointer-events-none hidden md:block">
                        <CharacterDoodle className="text-[#222629] opacity-60 -rotate-12" />
                    </div>
				</div>




                {/* Email */}
				<div className = "relative flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-[1.05rem] mt-8!">Contact Us</h2>
					<p className = "text-gray-600 text-center text-[0.90rem]">Have questions? <br/>Reach out to us via email</p>
					<button onClick = {()=>(window.open(socials["email" as Platform],"_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-6! py-2! mb-8! transition-all duration-200 hover:-translate-y-1 inline-block ">Send email</button>
                    
                    {/* Character Doodle Pointing to Button */}
                    <div className="absolute bottom-4 right-45 w-16 h-18 pointer-events-none hidden md:block">
                        <CharacterDoodle className="text-[#222629] opacity-60 -rotate-12" />
                    </div>
				</div>



	      		{/* National ColorStack */}
				<div className = "relative flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg ">
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-[1.05rem] mt-8!">Join National ColorStack</h2>
					<p className = "text-gray-600 text-center text-[0.95rem]">Acess opprtunties, mentorship, and <br/>join 10,000+ members</p>
					<button onClick = {()=>(window.open(socials["website" as Platform],"_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-6! py-2! mb-8! transition-all duration-200 hover:-translate-y-1 inline-block  ">Apply Now</button>
                    
                    {/* Character Doodle Pointing to Button */}
                    <div className="absolute bottom-4 right-45 w-16 h-20 pointer-events-none hidden md:block">
                        <CharacterDoodle className="text-[#222629] opacity-60 -rotate-12" />
                    </div>
				</div>
		
			</div>

		</>
	)
}
