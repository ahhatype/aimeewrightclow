import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription, CardAction } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex flex-col m-2 sm:mx-6 sm:my-4 md:mx-10 lg:mx-12">
      <div aria-label="Page Header" className="w-full justify-end items-baseline flex flex-row gap-12 mb-4 lg:mb-16">
        <h1 className="text-sm">Aimee Wright Clow</h1>
        <p className="text-xs text-tangerine-500">is a writer, designer, and developer</p>
      </div>
    </div>
  );
}
