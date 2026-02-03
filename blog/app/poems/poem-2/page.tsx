import Link from "next/link";

export default function Poem2() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-4">The Weight of Rain</h2>
      <div className="whitespace-pre-line mb-8">
{`Each drop carries
a small history,
falling through air
into memory.`}
      </div>
      <Link href="/" className="text-tangerine-500 hover:underline">
        &larr; Back home
      </Link>
    </article>
  );
}
