import React from "react";
import { HouseModelsSection } from "@/components/house-models-section";
import { BlueprintBackground } from "@/components/blueprint-background";
import { CompletedProjectsSection } from "@/components/completed-projects-section";

const Property = () => {
  return (
    <>
      <main className="min-h-screen bg-background  relative">
        {/* <BlueprintBackground /> */}
        <div className="container  py-8 relative z-10 ">
          <HouseModelsSection />
        {/* <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-muted to-transparent" /> */}

        <div className="container  py-8 relative z-10">
            <CompletedProjectsSection />
         </div>
        </div>
      </main>
    </>
  );
};

export default Property;
