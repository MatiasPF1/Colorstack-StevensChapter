import {FaLinkedinIn} from "react-icons/fa";

{/*Typescript Interface for ProfileCard component props */}
interface ProfileCardProps {
    image: string;
    role: string;
    description: string;
    linkedin: string;
	Name: string;
}

export default function ProfileCard({image,role,description,linkedin,Name}: ProfileCardProps){
	return(
		/* Main Card Container: This div wraps the entire card (image, text, icon). It controls the white background, shadow, rounded corners, and horizontal layout. */
		<div className = "flex flex-row bg-white w-full min-h-45 rounded-xl shadow-xl items-center justify-center gap-6 p-6 border-2 border-transparent hover:border-red-500 hover:shadow-2xl hover:scale-105 cursor-pointer group transition-transform">
			{/* Image Wrapper: Controls the positioning of the profile picture and the LinkedIn icon overlay. */}
			<div className = "relative w-fit">	
				<img src= {image} className = "rounded-full aspect-square w-40 object-cover border-3 border-red-500 group-hover:border-red-700"/>
				{/* LinkedIn Icon Container: Controls the red square overlay for the LinkedIn button */}
				<div className = "absolute bg-red-600 group-hover:bg-red-700 w-7 h-7 rounded-lg aspect-square top-3 right-0 z-20 flex items-center justify-center hover:scale-110"><a href = {linkedin} className = "flex bg-white w-4 h-4 aspect-square items-center justify-center"><FaLinkedinIn className="text-red-600 w-3 h-3" /></a></div>
			</div>
			{/* Text Container: Wraps the role and description text */}
			<div className="flex flex-col gap-1">
				<h3 className = "text-red-500 font-bold group-hover:text-red-700">{role}</h3>
				<p className = "text-gray-400 text-md">{description}</p>
				<p className = "text-gray-600 text-md font-semibold">{Name}</p>
			</div>
					
		</div>
	);
}

