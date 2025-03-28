import React from "react";
import { HouseModelsSection } from "@/components/house-models-section";
import { BlueprintBackground } from "@/components/blueprint-background";
import { CompletedProjectsSection } from "@/components/completed-projects-section";
import { Outlet, useLocation } from "react-router-dom";

const Property = () => {
  const location = useLocation();

  const isBaseRoute = location.pathname === "/properties";

  return (
    <>
      {isBaseRoute ? (
        <main className="min-h-screen bg-background rounded-2xl relative">
          {/* <BlueprintBackground /> */}
          <div className="container py-8 relative z-10">
            <HouseModelsSection />
            <div className="container py-8 relative z-10">
              <CompletedProjectsSection />
            </div>
          </div>
  
        </main>
      ) : (
        <Outlet />
      )}

      {
        isBaseRoute ? (
          <div
          className="absolute h-full w-full inset-0 bg-gradient-to-br from-rose-900/30 via-transparent animate-gradient"
        />
        ) : null
      }

    
    </>
  );
};

export default Property;