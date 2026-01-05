
import ProfileCard from "./ProfileCard.tsx"
import { FaLinkedinIn } from "react-icons/fa";

export default function Eboard(){
	
	const people = [
  	{
    	image: "images/p1.jpg",
    	role: "President",
    	description: "Senior · CS",
    	linkedin: "https://www.linkedin.com/in/matias43/",
  	},
  	{
    	image: "images/p2.png",
    	role: "Vice President",
    	description: "Junior · Software Engineering",
    	linkedin: "https://www.linkedin.com/in/example/",
  	},
  	{
    	image: "images/p3.png",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p4.png",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p5.jpg",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p6.png",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p7.png",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p8.png",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},
	{
    	image: "images/p9.jpg",
    	role: "Treasurer",
    	description: "Sophomore · Data Science",
    	linkedin: "https://www.linkedin.com/in/example2/",
  	},




	];
	return(
	<>
		<h2 className= "flex justify-center font-bold text-3xl !mb-10">Our Team</h2>
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
