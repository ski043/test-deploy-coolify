import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Github,
  Rocket,
  Server,
  Settings,
  Youtube,
} from "lucide-react";
import Datacenter from "@/public/datacenter.webp";
import { ModeToggle } from "@/components/ui/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Rocket className="h-6 w-6 text-primary" />
            <span>Next.js on Coolify</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ModeToggle />
            <nav className="flex items-center space-x-2">
              <Link
                href="https://coolify.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Coolify Docs
              </Link>
              <Link
                href="https://github.com/coollabsio/coolify"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full p-2 hover:bg-muted">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                <div className="rounded-full p-2 hover:bg-muted">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Deploy Next.js Apps on Coolify
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Learn how to deploy your Next.js applications on Coolify -
                    the open-source, self-hostable Heroku & Netlify alternative.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Watch Tutorial <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link
                    href="https://coolify.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      Visit Coolify
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src={Datacenter}
                width={550}
                height={550}
                alt="Next.js deployment on Coolify"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Deploy on Coolify?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Coolify offers a self-hosted platform for deploying your
                  Next.js applications with ease and control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Self-Hosted</CardTitle>
                  <CardDescription>
                    Run on your own infrastructure, keeping full control of your
                    data and applications.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Settings className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Easy Configuration</CardTitle>
                  <CardDescription>
                    Simple UI to configure your deployments without complex
                    setup.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Next.js Optimized</CardTitle>
                  <CardDescription>
                    Built-in support for Next.js applications and their specific
                    requirements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Deployment Steps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Follow these simple steps to deploy your Next.js application
                  on Coolify.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Connect Repository",
                    description:
                      "Link your GitHub, GitLab, or other Git repository to Coolify.",
                  },
                  {
                    step: "2",
                    title: "Configure Build",
                    description:
                      "Set up your build commands and environment variables.",
                  },
                  {
                    step: "3",
                    title: "Deploy",
                    description:
                      "Click deploy and watch Coolify build and deploy your Next.js app.",
                  },
                ].map((item) => (
                  <Card key={item.step}>
                    <CardHeader>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground mb-2">
                        {item.step}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button size="lg" className="gap-1">
                  Watch Full Tutorial <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to deploy your Next.js app?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Follow along with our tutorial and have your app up and running
                in minutes.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" className="gap-1">
                Start Deploying <ArrowRight className="h-4 w-4" />
              </Button>
              <Link
                href="https://coolify.io/docs"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="lg">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 mx-auto">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Created for tutorial purposes. Coolify is an open-source project by{" "}
            <Link
              href="https://coolify.io"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Coollabs
            </Link>
            .
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/coollabsio/coolify"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
