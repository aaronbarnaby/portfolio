import { ProfileBadge } from "~/components/Blocks/ProfileBadge";
import { SkillsSection } from "~/components/Blocks/SkillsSection";

export default function Home() {
  return (
    <main className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
      <ProfileBadge />

      <div>
        <SkillsSection />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
