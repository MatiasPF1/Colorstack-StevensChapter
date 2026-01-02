"use client"

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
			<div className ="grid grid-cols-2 auto-rows-fr gap-9 mt-16! mx-30! mb-20!">

                {/* Instagram */}
				<div className = "flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-xl mt-10!">Instagram</h2>
					<p className = "text-gray-600 text-center ">Follow us for updates, events, and <br/> community highlights</p>
					<button onClick= {()=>(window.open(socials["instagram" as Platform], "_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-7! py-3! mb-10! ">Follow Us</button>
				</div>

 			   {/* Discord */}
				<div className = "flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-xl mt-10!">Discord</h2>
					<p className = "text-gray-600 text-center">Join our Discord server to chat with<br/> members and get real-time updates</p>
					<button onClick = {()=>(window.open(socials["discord" as Platform], "_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-7! py-3! mb-10! ">Join Discord</button>
				</div>

                {/* Email */}
				<div className = "flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-xl mt-10!">Contact Us</h2>
					<p className = "text-gray-600 text-center">Have questions? <br/>Reach out to us via email</p>
					<button onClick = {()=>(window.open(socials["email" as Platform],"_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-7! py-3! mb-10! ">Send email</button>
				</div>

	      		{/* National ColorStack */}
				<div className = " flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-lg ">
					<h2 className = "flex text-[#c41230] items-center justify-center font-bold text-xl mt-10!">Join National ColorStack</h2>
					<p className = "text-gray-600 text-center">Acess opprtunties, mentorship, and <br/>join 10,000+ members</p>
					<button onClick = {()=>(window.open(socials["website" as Platform],"_blank"))} className = "bg-[#c41230] rounded-3xl text-white px-7! py-3! mb-10! ">Apply Now</button>
				</div>
		
			</div>

		</>
	)
}
