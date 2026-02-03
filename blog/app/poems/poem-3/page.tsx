import Link from "next/link";

export default function Poem3() {
  return (
    <article>
      <h2 className="text-2xl font-bold mb-4">Paper Wings</h2>
      <div className="whitespace-pre-line mb-8">
{`We fold our dreams
into sharp creases,
launch them skyward,
watch them drift.`}
      </div>
      <Link href="/" className="text-tangerine-500 hover:underline">
        &larr; Back home
      </Link>
    </article>
  );
}
