import React from "react";
import OnboardingForm from "./_components/onboarding-form";
import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/app/actions/user";
import { redirect } from "next/navigation";

async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}

export default OnboardingPage;
