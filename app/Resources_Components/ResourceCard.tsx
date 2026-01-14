type ResourceCardProps = {
  item: {
    title: string;
    description: string;
    link: string;
    image: string;
    Recommendation?: string;
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
        rounded-3xl
        overflow-hidden
        bg-white
        border border-neutral-200
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        w-full
        translate-y-8

      "
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-bold text-neutral-900 leading-snug">
            {item.title}
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Recommendation */}
        {item.Recommendation && (
          <div className="mt-auto pt-4">
            <div className="rounded-2xl bg-neutral-50 border border-neutral-200 px-4 py-3">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-neutral-200 text-amber-600">
                  💡
                </span>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {item.Recommendation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
