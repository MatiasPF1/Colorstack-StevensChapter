

type ResourceCars = {
  item: {
    title: string;
    description: string;
  };
  index: number;
}

export default function ResourceCard({ item, index } : ResourceCars) {
  return (
    <div
      className="
        animate-fall-in
        border rounded-xl p-4
      "
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <h2 className="font-semibold text-lg">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <button className="mt-3 text-red-500 underline">
        Open in new tab
      </button>
    </div>
  );
}
