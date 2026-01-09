import { FaLinkedinIn } from "react-icons/fa";

interface ProfileCardProps {
  image: string;
  role: string;
  description: string;
  linkedin: string;
  Name: string;
}

export default function ProfileCard({
  image,
  role,
  description,
  linkedin,
  Name,
}:

ProfileCardProps) {
  return (
    <div
  className="flex flex-row bg-white w-full min-h-45 rounded-xl items-center justify-center gap-6 p-6 shadow-xl cursor-pointer
    will-change-transform transition-transform duration-50 linear hover:-translate-y-1 ">
  <div className="relative w-fit">
    <img
      src={image}
      className="rounded-full aspect-square w-40 object-cover border-3 border-red-500"
    />

    <div className="absolute top-3 right-0 z-20 bg-red-600 w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-50 linear hover:scale-110">
      <a href={linkedin} className="flex bg-white w-4 h-4 items-center justify-center">
        <FaLinkedinIn className="text-red-600 w-3 h-3" />
      </a>

    </div>
	
  </div>

  <div className="flex flex-col gap-1">
    <h3 className="text-red-500 font-bold">{role}</h3>
    <p className="text-gray-400 text-md">{description}</p>
    <p className="text-gray-600 text-md font-semibold">{Name}</p>
  </div>
</div>
  );
}
