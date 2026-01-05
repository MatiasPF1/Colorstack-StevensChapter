import {FaLinkedinIn} from "react-icons/fa";

{/*Typescript Interface for ProfileCard component props */}
interface ProfileCardProps {
    image: string;
    role: string;
    description: string;
    linkedin: string;
}

export default function ProfileCard({image,role,description,linkedin}: ProfileCardProps){
	// Main container for the profile card
	return(
		// Container for all the cards content 
		<div className = "flex flex-col bg-white w-full rounded-xl shadow-xl items-center justify-center gap-2 ">
			{/* Container for the profile image and the LinkedIn icon overlay */}
			<div className = "relative w-fit group mt-5! ">	
				<img src= {image} className = "rounded-full aspect-square w-45 object-cover border-3 border-red-500 group-hover:border-red-700 z-0 "/>
				{/* Container for the LinkedIn icon overlay positioned absolutely */}
				<div className = "absolute bg-red-600 group-hover:bg-red-700 w-7 h-7  rounded-lg aspect-square top-5 right-1 z-20 flex items-center justify-center"><a href = {linkedin} className = "flex bg-white w-4 h-4 aspect-square items-center justify-center"><FaLinkedinIn className="text-red-600 w-3 h-3 z-0" /></a></div>
			</div>
			<h3 className = "text-red-500 font-bold">{role}</h3>
			<p className = "text-gray-400 text-md mb-5!">{description}</p>
					
		</div>
	);
}

