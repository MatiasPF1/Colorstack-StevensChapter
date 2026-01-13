type ResourceCardProps = {
  item: {
    title: string;
    description: string;
    link: string;
    image: string;
  };
  index: number;
};


export default function ResourceCard({ item, index }: ResourceCardProps) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "forwards",
      }}
      className="
        animate-fall-in
        group
        flex flex-col
        rounded-2xl
        overflow-hidden
        bg-white
        border border-neutral-200
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
      "
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h2 className="text-[17px] font-semibold text-neutral-900 leading-snug">
            {item.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-red-500">
            View resource
          </span>
          <span className="
            text-red-500
            transition-transform duration-300
            group-hover:translate-x-1
          ">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
