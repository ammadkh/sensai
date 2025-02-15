import { getResume } from "@/app/actions/resume";
import React from "react";
import ResumeBuilder from "./_components/resume-builder";

async function ResumePage() {
  const resume = await getResume();
  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}

export default ResumePage;
