import ResourceCard from "./ResourceCard";
export default function LCN(){
	const resources = [
		{title: "Binary Search Trees",description:"This is a description"},
		{ title: "Graphs", description: "Another description" },
    		{ title: "Dynamic Programming", description: "Description here" },
	]
	return(
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{resources.map((item, index) => (<ResourceCard key={index} item={item} index={index} /> ))}
		</div>
	)
}
