import React from "react";
import ASection from "./components/ASection";
import VSection from "./components/VSection";
import MyProjects from "./components/MyProjects";
import Hero from "./components/Hero";
import MCards from "./components/MCards";
import MBorders from "./components/MBorders";
import Approch from "./components/Approch";
import Last from "./components/Last";

export default function Home() {
  return (
    <main className="w-screen max-w-full overflow-x-hidden">
      <title>Personal PortFolio</title>
      {/* Floting Navbar
      <FloatingNavbar /> */}
      {/* Section 1 */}
      <div className="h-[100vh]">
      <Hero />
      </div>

      {/* Section 2 */}
      <ASection />

      {/* Section 3: Video */}
      <VSection />

      {/* Section 4: My Projects */}
      <MyProjects />

      {/* Section 5: MCards */}
      <MCards />

      {/* Section 6: Work Experience */}
      <MBorders />

      {/* Section 7 Approch*/}
      <Approch />

      {/* Section 8 Footer */}
      <Last />
    </main>
  );
}
