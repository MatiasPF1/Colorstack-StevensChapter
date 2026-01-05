import ProfileCard from "./ProfileCard"
import { FaLinkedinIn } from "react-icons/fa";

export default function Eboard(){
	
	const people = [
  	{
    	image: "images/p8.png",
    	role: "President",
    	description: "Senior · CS",
    	linkedin: "https://www.linkedin.com/in/carlihannysanchez/",
  	},
  	{
    	image: "images/p7.png",
    	role: "Vice President",
    	description: "Junior · Systems Engineering",
    	linkedin: "https://www.linkedin.com/in/luis-alejandro-ruiz-20xx/",
  	},
  	{
    	image: "images/p4.png",
    	role: "Head of Outreach",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/matias43/",
  	},
	{
    	image: "images/p9.jpg",
    	role: "Head of Technology",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/alvaro-izquierdo1/",
  	},
	{
    	image: "images/p6.png",
    	role: "Treasurer",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/naidelyn-de-la-rosa-250820361/",
  	},
	{
    	image: "images/p5.jpg",
    	role: "Secretyary",
    	description: "Junior · Quantitative Finance ",
    	linkedin: "https://www.linkedin.com/in/chiaraplata/",
  	},
	{
    	image: "images/p3.png",
    	role: "Public Relations",
    	description: "Freshman · Quantitative Finance",
    	linkedin: "https://www.linkedin.com/in/gregorio-rg/",
  	},
	{
    	image: "images/p1.jpg",
    	role: "Freshman Representative",
    	description: "Freshman · CS",
    	linkedin: "https://www.linkedin.com/in/juliana-matos-220b62247/",
  	},
	{
    	image: "images/p2.png",
    	role: "Freshman Representative",
    	description: "Freshman · CS",
    	linkedin: "https://www.linkedin.com/in/grant-dibiase-ba6b52382/",
  	},




	];
	return(
	<>
		<h2 className= "flex justify-center font-bold text-3xl mb-10!">Our Team - 2025/2026 E-Board</h2>
		<div className = "flex justify-center">
			<div className = "grid grid-cols-3 gap-4 w-1/2">
				{people.map((person, index) => (
					<ProfileCard
						key = {index}
						image = {person.image}
						role = {person.role}
						description = {person.description}
						linkedin = {person.linkedin}
					/>
				))}
			</div>
		</div>
	</>
	)
}
