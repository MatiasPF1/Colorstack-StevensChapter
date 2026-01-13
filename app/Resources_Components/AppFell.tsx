import ResourceGrid from "./ResourceGrid";

export default function AppFell() {
  const resources = [
  {
    title: "Microsoft Explore Internship",
    description: "Early career internship program for first- and second-year CS students.",
    link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
    image: "/images/microsoft-explore.jpg",
  },
];

  return <ResourceGrid items={resources} />;
}