import Link from "next/link";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { BsDot } from "react-icons/bs";
import { Song } from "~/lib/types";

export default function Footer() {
  // const { data: currentSong } = useSWR("/api/now-playing", fetcher);
  // const { data: visitors } = useSWR("/api/ga", fetcher);

  return (
    <footer className="w-screen text-gray-600 dark:text-gray-400/50 font-inter mb-14 print:hidden">
      <div className="flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base">
        {/* <div>
          {currentSong?.isPlaying ? (
            <WhenPlaying song={currentSong} />
          ) : (
            <NotPlaying />
          )}
        </div> */}

        <section className="grid grid-cols-3 gap-10">
         <div className="flex flex-col gap-4 capitalize">
            <FooterLink route="home" text="home" />
            {/* <FooterLink route="about" text="about" />
            <FooterLink route="skills" text="skills" />
            <FooterLink route="projects" text="projects" /> */}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            <Link
              href="https://twitter.com/barnaby_aaron"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-black dark:hover:text-white w-fit">
                Twitter
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-barnaby-9b6ba589"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-black dark:hover:text-white w-fit">
                LinkedIn
              </p>
            </Link>
            <Link
              href="https://github.com/aaronbarnaby"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-black dark:hover:text-white w-fit">
                Github
              </p>
            </Link>
            <Link
              href="mailto:me@ajbarnaby.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-black dark:hover:text-white w-fit">
                Mail
              </p>
            </Link>
          </div>
        </section>
        {/* <div className="flex items-center justify-between w-full gap-4 mt-5">
          <div className="relative flex items-center px-4 py-1 text-xs bg-white rounded-full shadow dark:bg-darkSecondary sm:text-sm">
            <BsDot className="-ml-2 text-green-500 w-7 h-7 animate-ping" />
            <div className="flex items-center gap-1">
              {visitors?.totalVisitors ?? (
                <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-darkPrimary animate-pulse"></div>
              )}{" "}
              visitors in last {visitors?.days} days
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

function FooterLink({ route, text }: { route: string; text: string }) {
  return (
    <Link href={`/${route}`}>
      <p className="hover:text-black dark:hover:text-white w-fit">
        {text}
      </p>
    </Link>
  );
}

function NotPlaying() {
  return (
    <div className="flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold text-black md:text-lg dark:text-white">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-xs text-gray-500 sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold dark:text-gray-300">Now Playing</h4>
      <Link
        href={song.songUrl}
        className="flex items-center justify-between p-3 bg-gray-200 rounded-sm dark:bg-darkSecondary sm:p-4"
      >
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10">
            <Image
              alt={song.title}
              src={song.albumImageUrl}
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
              blurDataURL={song.albumImageUrl}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-semibold text-black md:text-lg dark:text-white animate-">
              {song.title}
            </h3>
            <span className="hidden md:inline-flex dark:text-gray-300">—</span>

            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              {song.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="w-6 h-6 text-green-500 animate-[spin_2s_linear_infinite]" />
        </div>
      </Link>
    </div>
  );
}