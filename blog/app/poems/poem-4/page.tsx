import Link from "next/link";

export default function Poem4() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-4">Between Words</h2>
      <div className="whitespace-pre-line mb-8">
{`In the silence
between sentences,
whole worlds
hold their breath.`}
      </div>
      <Link href="/" className="text-tangerine-500 hover:underline">
        &larr; Back home
      </Link>
    </article>
  );
}
