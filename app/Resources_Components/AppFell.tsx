import ResourceGrid from "./ResourceGrid";

export default function AppFell() {
  const resources = [
  {
    title: "Microsoft Explore",
    description: "Early career internship program for first and second-year CS students.",
    link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
    image: "images/Microsoft.jpg",
    Recommendation: "Highly Recommended to apply as early as possible: Around Late September ",
  },

   {
    title: "Nvidia Ignite",
    description: "Early career internship program for first and second-year CS students.",
    link: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    image: "images/Nvidia.png",
    Recommendation: "Holistic Review, focus on doing well in the OA and good essays",
  },

  {
    title: "Break Throught Tech",
    description: "AI Paid Fellowship, Offer an AI Studio Job after completion.",
    link: "https://www.breakthroughtech.org/",
    image: "images/break_through_tech_logo.jpg",
    Recommendation: "Put Heavy emphasis on your essays and personal story",
  },

  
  {
    title: "Jane Street Focus",
    description: " Two Tracks: Software Engineering and Trading 2 week program for freshman and sophmores",
    link: "https://www.janestreet.com/join-jane-street/programs-and-events/focus/",
    image: "images/jane_street_global_logo.jpg",
    Recommendation: "Your best shot to get an interview is having a strong resume. Interviews focus on leetcode & brain teasers",
  },

   {
    title: "National Labs SULI",
    description: "Summer research internship program at a national lab.",
    link: "https://science.osti.gov/wdts/suli",
    image: "images/ENERGY.jpg",
    Recommendation: "Show genuine interest in learning, research the lab for the essays, ask for recommendations early",
  },

  {
    title: "Stevens AI Summer Research ",
    description: "Paid Summer Research with a Stevens Professor during the summer.",
    link: "https://science.osti.gov/wdts/suli",
    image: "images/Stevens.jpg",
    Recommendation: "Prepare a good email, present yourself and show interest as early as possible, work heavily on your resume",
  },


];

  return <ResourceGrid items={resources} />;
}