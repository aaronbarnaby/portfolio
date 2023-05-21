import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";
import Link from "next/link";
import { ProjectType } from "~/lib/types";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="card">
      <div className="relative -mt-[35%] sm:-mt-0 md:-ml-[35%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 dark:before:bg-black/20 before:z-10">
        <Image
          title={project.name}
          alt={project.name}
          src={project?.coverImage as string}
          width={1200}
          height={630}
          placeholder="blur"
          blurDataURL={project?.coverImage as string}
          quality={25}
          className="transition-all duration-300 lg:group-hover:scale-110 backdrop-blur-xl"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold text-neutral-900 dark:text-neutral-200">{project.name}</h1>
        <p className="text-sm text-gray-400 dark:text-neutral-400 line-clamp-5">{project.description}</p>

        <div className="flex flex-wrap items-center gap-1">
          {project.tools!.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded dark:bg-darkPrimary"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-4 p-2 mt-auto w-fit">
          {project.githubURL && (
            <Link
              href={project.githubURL}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <BsGithub className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          )}

          {project.previewURL && (
            <Link
              href={project.previewURL}
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdOutlineLink className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
