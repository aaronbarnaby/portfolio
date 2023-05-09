import { ProfileBadge, SkillsSection } from "~/components/UI"


export const metadata = {
  title: 'Aaron Barnaby Portfolio',
  description: 'Full Stack Developer with a passion for modern and best practice development.  Next.js, C#, Typescript, React and AWS',
  keywords: "aaron barnaby, portfolio, full stack, developer, next.js, .net, typescript, react, aws"
}

export default function Home() {
  return (
    <div className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
      <ProfileBadge />

      <div>
        <SkillsSection />
      </div>
    </div>
  )
}
