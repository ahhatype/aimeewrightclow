import { redirect } from "next/navigation";

const poemSlugs = ["poem-1", "poem-2", "poem-3", "poem-4"];

export const dynamic = "force-dynamic";


export default function Home() {
  // const randomSlug = poemSlugs[Math.floor(Math.random() * poemSlugs.length)];
  const randomSlug = "poem-1";
  redirect(`/poems/${randomSlug}`);
}
