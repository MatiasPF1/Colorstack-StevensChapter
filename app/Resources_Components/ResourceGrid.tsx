import ResourceCard from "./ResourceCard";

type ResourceGridProps = {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
};

export default function ResourceGrid({ items }: ResourceGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <ResourceCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
