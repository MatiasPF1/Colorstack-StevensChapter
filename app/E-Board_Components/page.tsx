import ProfileCard from "./ProfileCard"

export default function Eboard(){
	
	const people = [
  	{
    	image: "images/p8.png",
    	role: "President",
    	description: "Senior · CS",
    	linkedin: "https://www.linkedin.com/in/carlihannysanchez/",
		Name: "Carlihanny Sanchez"
  	},
  	{
    	image: "images/p7.png",
    	role: "Vice President",
    	description: "Junior · Sys.Engineer",
    	linkedin: "https://www.linkedin.com/in/luis-alejandro-ruiz-20xx/",
		Name: "Luis Alejandro Ruiz"
  	},
  	{
    	image: "images/p4.png",
    	role: "Head of Outreach",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/matias43/",
		Name: "Matias Freire"
  	},
	{
    	image: "images/p9.jpg",
    	role: "Head of Technology",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/alvaro-izquierdo1/",
		Name: "Alvaro Izquierdo"
  	},
	{
    	image: "images/p6.png",
    	role: "Treasurer",
    	description: "Sophomore · CS",
    	linkedin: "https://www.linkedin.com/in/naidelyn-de-la-rosa-250820361/",
		Name: "Naidelyn De La Rosa"
  	},
	{
    	image: "images/p5.jpg",
    	role: "Secretyary",
    	description: "Junior · QF ",
    	linkedin: "https://www.linkedin.com/in/chiaraplata/",
		Name: "Chiara Plata"
  	},
	{
    	image: "images/p3.png",
    	role: "Public Relations",
    	description: "Freshman · QF",
    	linkedin: "https://www.linkedin.com/in/gregorio-rg/",
		Name: "Gregorio Garcia"
  	},
	{
    	image: "images/p1.jpg",
    	role: "Freshman Rep",
    	description: "Freshman · CS",
    	linkedin: "https://www.linkedin.com/in/juliana-matos-220b62247/",
		Name: "Juliana Matos"
  	},
	{
    	image: "images/p2.png",
    	role: "Freshman Rep",
    	description: "Freshman · CS",
    	linkedin: "https://www.linkedin.com/in/grant-dibiase-ba6b52382/",
		Name: "Grant DiBiase"
  	},




	];
	return(
	<>
		<h2 className= "flex justify-center font-bold text-3xl mb-9! mt-7">Our Team - 2025/2026 E-Board</h2>
		
		<div className = "flex justify-center px-7 pb-10">
			<div className = "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] w-full text-[0.90rem]">
				{people.map((person, index) => (
					<ProfileCard
						key = {index}
						image = {person.image}
						role = {person.role}
						description = {person.description}
						linkedin = {person.linkedin}
						Name = {person.Name}
					/>
				))}
			</div>
		</div>
	</>
	)
}
