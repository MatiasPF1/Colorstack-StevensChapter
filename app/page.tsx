import About from "./Home_Components/about";
import Main_Idea from "./Home_Components/Main_Idea";
import ContactPage from "./Home_Components/Contactpage";
import Mission from "./Home_Components/Mission";


export default function Home() {
  return (
    <main className="">
    <div className="-translate-y-3">
      <About/>
      <Main_Idea/>
    </div>
      <Mission/>
      <ContactPage/>
    </main>
  );
}
