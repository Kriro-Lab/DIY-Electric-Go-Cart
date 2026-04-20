"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  Battery,
  Gauge,
  Cog,
  Shield,
  Drill,
  ChevronRight,
} from "lucide-react"

const essentialParts = [
  {
    title: "48V Brushless Motor",
    description: "Reliable power for a DIY electric go-kart build.",
    link: "#",
  },
  {
    title: "48V Motor Controller",
    description: "Matched controller for smooth acceleration and compatibility.",
    link: "#",
  },
  {
    title: "48V Lithium Battery",
    description: "Lighter and longer lasting than lead-acid alternatives.",
    link: "#",
  },
]

const driveParts = [
  {
    title: "Chain & Sprocket Kit",
    description: "Transfers motor power to the rear axle.",
    link: "#",
  },
  {
    title: "Rear Axle Kit",
    description: "Axle, bearings, mounts, and hubs for the drive system.",
    link: "#",
  },
]

const frameParts = [
  {
    title: "Steel Tubing",
    description: "Square tubing for the main frame and supports.",
    link: "#",
  },
  {
    title: "Hardware Kit",
    description: "Bolts, brackets, washers, and mounting hardware.",
    link: "#",
  },
]

const controlsAndSafety = [
  {
    title: "Throttle Pedal",
    description: "Foot throttle for easy speed control.",
    link: "#",
  },
  {
    title: "Brake Kit",
    description: "Essential stopping power for safety and control.",
    link: "#",
  },
]

const tools = [
  {
    title: "Welder",
    description: "For building and assembling the steel frame.",
    link: "#",
  },
  {
    title: "Angle Grinder",
    description: "For cutting, cleaning, and finishing metal parts.",
    link: "#",
  },
  {
    title: "Drill",
    description: "For mounting hardware and preparing brackets.",
    link: "#",
  },
]

function Section({
  title,
  icon,
  items,
}: {
  title: string
  icon: React.ReactNode
  items: { title: string; description: string; link: string }[]
}) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border p-2">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="h-full border-zinc-200">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between gap-4">
              <p className="text-sm text-zinc-600">{item.description}</p>

              <Button asChild className="w-full">
                <Link href={item.link}>
                  View Option
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default function BuildKitPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block rounded-full border px-3 py-1 text-sm font-medium text-zinc-700">
              DIY Electric Build Kit
            </span>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Electric Go-Kart Complete Build Kit
            </h1>

            <p className="text-lg text-zinc-600 md:text-xl">
              Everything needed for a DIY electric go-kart build in one place.
              No guesswork, no random mismatched parts, just a clean parts list
              you can work through step by step.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#parts-list">
                  View Full Parts List
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#build-options">Compare Build Options</Link>
              </Button>
            </div>

            <p className="text-sm text-zinc-500">
              Parts are grouped by function so builders can buy exactly what
              they need with confidence.
            </p>
          </div>
        </div>
      </section>

      <section id="parts-list" className="mx-auto max-w-7xl space-y-16 px-6 py-16">
        <Section
          title="Essential Components"
          icon={<Gauge className="h-6 w-6" />}
          items={essentialParts}
        />

        <Section
          title="Drive System"
          icon={<Cog className="h-6 w-6" />}
          items={driveParts}
        />

        <Section
          title="Frame Materials"
          icon={<Wrench className="h-6 w-6" />}
          items={frameParts}
        />

        <Section
          title="Controls & Safety"
          icon={<Shield className="h-6 w-6" />}
          items={controlsAndSafety}
        />

        <Section
          title="Tools Required"
          icon={<Drill className="h-6 w-6" />}
          items={tools}
        />
      </section>

      <section
        id="build-options"
        className="border-y bg-zinc-50"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
          <Card className="border-zinc-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Battery className="h-6 w-6" />
                Budget Build
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600">
                Lower cost setup for builders who want a simple working kart
                without overspending.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Smaller motor</li>
                <li>Basic controller</li>
                <li>Lower overall project cost</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="#">
                  View Budget Build
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-zinc-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Battery className="h-6 w-6" />
                Performance Build
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600">
                Stronger motor and better battery setup for builders who want
                more speed and longer run time.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Higher power motor</li>
                <li>Improved battery system</li>
                <li>Better acceleration and performance</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="#">
                  View Performance Build
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Get the Full Build Kit</h2>
        <p className="mt-4 text-zinc-600">
          Use this page as the central buying guide for your project. Replace
          the placeholder links with your affiliate links and publish.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#parts-list">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
