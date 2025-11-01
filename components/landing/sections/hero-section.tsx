import Link from "next/link";
import { Badge } from "../badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/lib/landing-content";

export function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
        {heroContent.title}
      </h1>
      <p className="mt-6 text-xl leading-8 text-zinc-700 dark:text-zinc-300">
        {heroContent.subtitle}
      </p>
      <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {heroContent.description}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild size="lg">
          <Link href="/signin">Sign In</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
        {heroContent.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </div>
  );
}
