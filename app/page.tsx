import About from "./components/about";
import Main_Idea from "./components/Main_Idea";
import ContactPage from "./contactus/page";

export default function Home() {
  return (
    <main className="">
      <About/>
      <Main_Idea/>
      <ContactPage/>
    </main>
  );
}