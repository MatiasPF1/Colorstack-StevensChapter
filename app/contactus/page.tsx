"use client"

export default function ContactPage(){

	const socials: Record<Platform,string> = { 
		instagram: "https://www.instagram.com/colorstackstevens/?igsh=MTBzdmppNWtoZDdwdg%3D%3D#",
		discord: "https://discord.gg/axpwmFh2k9",
		email:"mailto:examplemail",
		website:"https://www.colorstack.org/",
	};

	return(
		<>
			<h1 className = "flex !mt-10 items-center justify-center text-black font-bold text-3xl">
				Get Connected
			</h1>
			<div className ="grid grid-cols-3 auto-rows-fr gap-4 !mt-15 ">
				<div className = "flex flex-col items-center justify-center gap-4 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#E10600] items-center justify-center font-bold text-xl !mt-10">Instagram</h2>
					<p className = "text-gray-600 text-center w-fit">Follow us for updates, events, and <br/> community highlights</p>
					<button onClick= {()=>(window.open(socials["instagram" as Platform], "_blank"))} className = "bg-[#E10600] rounded-3xl text-white !px-6 !py-2 !mb-10">Follow Us</button>
				</div>
				<div className = "flex flex-col items-center justify-center gap-4 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#E10600] items-center justify-center font-bold text-xl">Discord</h2>
					<p className = "text-gray-600 text-center">Join our Discord server to chat with<br/> members and get real-time updates</p>
					<button onClick = {()=>(window.open(socials["discord" as Platform], "_blank"))} className = "bg-[#E10600] rounded-3xl text-white !px-6 !py-2 ">Join Discord</button>
				</div>
				<div className = "flex flex-col items-center justify-center gap-4 bg-white rounded-2xl shadow-lg "> 
					<h2 className = "flex text-[#E10600] items-center justify-center font-bold text-xl">Contact Us</h2>
					<p className = "text-gray-600 text-center">Have questions? <br/>Reach out to us via email</p>
					<button onClick = {()=>(window.open(socials["email" as Platform],"_blank"))} className = "bg-[#E10600] rounded-3xl text-white !px-6 !py-2 ">Send email</button>
				</div>
				
				<div className = " col-start-2 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl shadow-lg ">
					<h2 className = "flex text-[#E10600] items-center justify-center font-bold text-xl">Join National ColorStack</h2>
					<p className = "text-gray-600 text-center">Acess opprtunties, mentorship, and <br/>join 10,000+ members</p>
					<button onClick = {()=>(window.open(socials["website" as Platform],"_blank"))} className = "bg-[#E10600] rounded-3xl text-white !px-6 !py-2 ">Apply Now</button>
				</div>
		
			</div>

		</>
	)
}
