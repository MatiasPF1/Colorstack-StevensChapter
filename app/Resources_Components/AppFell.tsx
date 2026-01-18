import ResourceGrid from "./ResourceGrid";

export default function AppFell() {
  const resources = [
  {
    title: "Microsoft Explore",
    description: "Early career internship program for first and second-year CS students.",
    link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
    image: "images/Microsoft.jpg",
    Recommendation: "Highly recommended to apply as early as possible, around late September.",
  },

   {
    title: "Nvidia Ignite",
    description: "Early career internship program for first and second-year CS students.",
    link: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    image: "images/Nvidia.png",
    Recommendation: "Holistic review; focus on doing well in the OA and writing strong essays.",
  },

  {
    title: "Break Through Tech",
    description: "Paid AI fellowship offering an AI Studio job after completion.",
    link: "https://www.breakthroughtech.org/",
    image: "images/break_through_tech_logo.jpg",
    Recommendation: "Put heavy emphasis on your essays and personal story.",
  },

  
  {
    title: "Jane Street Focus",
    description: "Two-week program for freshmen and sophomores with two tracks: Software Engineering and Trading.",
    link: "https://www.janestreet.com/join-jane-street/programs-and-events/focus/",
    image: "images/jane_street_global_logo.jpg",
    Recommendation: "Your best shot to get an interview is having a strong resume. Interviews focus on LeetCode and brain teasers.",
  },

   {
    title: "National Labs SULI",
    description: "Summer research internship program at one of the 17 National Laboratories managed by the U.S. Department of Energy.",
    link: "https://science.osti.gov/wdts/suli",
    image: "images/ENERGY.jpg",
    Recommendation: "Show genuine interest in learning, research the lab for the essays, and ask for recommendations early.",
  },

  {
    title: "Stevens AI Summer Research",
    description: "Paid summer research with a Stevens professor in an AI-Related project or Research Hypothesis.",
    link: "https://www.stevens.edu/stevens-institute-for-artificial-intelligence/fellowship",
    image: "images/Stevens.jpg",
    Recommendation: "Prepare a strong email, present yourself and show interest as early as possible, and work extensively on your resume.",
  },

   {
    title: "MLH Fellowship",
    description: "SWE fellowship working on real-world Open-Source projects with mentors from top tech companies.",
    link: "https://fellowship.mlh.io/",
    image: "images/MLH.jpg",
    Recommendation: "Just apply! Complete a project to learn and submit it. If rejected, create a better one and apply for the next Semester.",
  },

  {
    title: "Dropbox Emerging Talent Program",
    description: "Multiple SWE internships throughout the year for early career students. They have a special application for sophomores.",
    link: "https://jobs.dropbox.com/teams/emerging-talent",
    image: "images/DropBox.png",
    Recommendation: "No special recommendation; apply early and have a solid resume.",
  },

  {
    title: "Futureforce Tech Launchpad",
    description: "Paid internship and mentorship for rising juniors (currently sophomores) at Salesforce Tower in San Francisco.",
    link: "https://info.codepath.org/futureforce-tech-launchpad",
    image: "images/SalesForce.png",
    Recommendation: "This is a collaboration with CodePath. Recommended to take a CodePath class before applying.",
  },

  {
    title: "Wells Fargo Sophomore Discovery Fellowship",
    description: "Paid summer internship for sophomore students interested in technology and finance.",
    link: "https://www.wellsfargojobs.com/en/early-careers/undergraduate-programs/other-undergraduate-programs/sophomore-discovery-fellowship-program/",
    image: "images/WellsFargo.png",
    Recommendation: "If you are Attending SHPE or NSBE Conference, attend the Wells Fargo info session there to get a referral!!",
  },

  



];

  return <ResourceGrid items={resources} />;
}