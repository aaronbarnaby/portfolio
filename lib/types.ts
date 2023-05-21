import { Variants } from "framer-motion";
import { IconType } from "react-icons/lib";

export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

export type ContactFormInput = {
  to_name: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

/* Spotify Track  */
export type SpotifyTrack = {
  id: number;
  title: string;
  url: string;
  coverImage: {
    url: string;
  };
  artist: string;
};

/* Spotify Artist  */
export type SpotifyArtist = {
  id: number;
  name: string;
  url: string;
  coverImage: {
    url: string;
  };
  followers: string;
};

export type ProjectType = {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  githubURL: string;
  previewURL?: string;
  tools?: string[];
  pinned?: boolean;
};

export type SocialPlatform = {
  title: string;
  Icon: IconType;
  url: string;
};

export type Song = {
  album: string;
  artist: string;
  albumImageUrl: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type SpotifyAccessToken = {
  access_token: string;
};

export type GithubRepo = {
  stargazers_count: number;
  fork: boolean;
  forks_count: number;
};

export type MovieType = {
  id: number;
  name: string;
  image: string;
  url: string;
  year: number;
  watched: boolean;
  rating: number;
};
