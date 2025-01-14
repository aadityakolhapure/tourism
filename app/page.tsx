"use client";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/imageslider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { DockDemo } from "@/components/navbar";
import Footer from "@/components/footer";
import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ChatGPTStyleBot from "@/components/ChatGPTStyleBot";

// import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <DockDemo/> */}
      {/* Hero Section with Image Slider */}
      <ImagesSliderDemo />

      {/* About Section */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center md:shadow-xl bg-[#fff] dark:bg-[#0b192c]">
        <section className="relative z-10 text-center p-4">
          <h2 className="text-4xl font-semibold mb-4 text-[#1e3e62] dark:text-[#1e3e92]">
            Welcome to Satara
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto dark:text-neutral-300">
            Satara is a picturesque city located in the heart of Maharashtra,
            India. Known for its scenic landscapes, serene waterfalls, and
            vibrant culture, Satara is an ideal destination for nature lovers
            and history enthusiasts alike. Explore the hidden gems of this
            beautiful city!
          </p>
        </section>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12 z-0"
          )}
        />
      </div>

      {/* Top Attractions Section */}
      <section className="py-16 px-8 bg-white dark:bg-neutral-900">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#1e3e62] dark:text-[#1e3e92]">
          Top Attractions in Satara
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:scale-105 transition-transform bg-white dark:bg-[#0a0a0a]">
            <div className="relative h-56">
              <Image
                src="/images/dam.jpg" // Example image path
                alt="Koynanagar"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2 text-neutral-900 dark:bg-[#0a0a0a]">
              Koynanagar
            </p>
            <p className="text-neutral-600 text-center p-1 dark:text-neutral-300">
              A beautiful spot near the Koyna Dam, known for its tranquil beauty
              and lush greenery.
            </p>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform bg-white dark:bg-[#0a0a0a]">
            <div className="relative h-56">
              <Image
                src="/images/kaas.jpg" // Example image path
                alt="Kas Plateau"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2 text-neutral-900 dark:text-neutral-100">
              Kas Plateau
            </p>
            <p className="text-neutral-600 text-center p-1 dark:text-neutral-300">
              A UNESCO World Heritage site, famous for its seasonal flowers and
              rich biodiversity.
            </p>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform bg-white dark:bg-[#0a0a0a]">
            <div className="relative h-56">
              <Image
                src="/images/waterfall.jpg" // Example image path
                alt="Thoseghar Waterfalls"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2 text-neutral-900 dark:text-neutral-100">
              Thoseghar Waterfalls
            </p>
            <p className="text-neutral-600 text-center p-1 dark:text-neutral-300">
              A stunning waterfall, perfect for a peaceful getaway and
              photography.
            </p>
          </Card>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section
        className="py-16 px-8 bg-neutral-200 dark:bg-neutral-800 text-center relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/kaas.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold text-[#fff] dark:text-[#2d5ede] mb-8">
            Exclusive Tour Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white dark:bg-[#0b192c] shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Weekend Getaway
              </p>
              <p className="text-neutral-600 mb-4 dark:text-neutral-300">
                A 3-day tour to explore Satara’s best tourist spots, including
                Kas Plateau, Koynanagar, and Thoseghar Waterfalls.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4 text-orange-500" />
            </Card>
            <Card className="p-6 bg-white dark:bg-[#0b192c] shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Heritage Tour
              </p>
              <p className="text-neutral-600 mb-4 dark:text-neutral-300">
                A heritage-focused tour covering Satara’s history, monuments,
                and cultural experiences.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4 text-orange-500" />
            </Card>
            <Card className="p-6 bg-white dark:bg-[#0b192c] shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Adventure Expedition
              </p>
              <p className="text-neutral-600 mb-4 dark:text-neutral-300">
                An adrenaline-packed tour, including trekking and outdoor
                adventures around Satara’s picturesque landscapes.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4 text-orange-500" />
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white dark:bg-neutral-900 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-neutral-900 dark:text-neutral-100">
          What Our Visitors Say
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <Card className="max-w-xs p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <p className="text-neutral-600 mb-4 dark:text-neutral-300">
              "Satara is a hidden gem! The Kas Plateau is breathtaking, and the
              waterfalls are so serene. I highly recommend a visit!"
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
              Ravi Kumar
            </p>
            <p className="text-neutral-500 dark:text-neutral-400">
              Tourist from Pune
            </p>
          </Card>
          <Card className="max-w-xs p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <p className="text-neutral-600 mb-4 dark:text-neutral-300">
              "The heritage tour gave me a deep insight into the culture of
              Satara. A fantastic way to learn about its rich history!"
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
              Aarti Deshmukh
            </p>
            <p className="text-neutral-500 dark:text-neutral-400">
              Tourist from Mumbai
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 text-center relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        {/* Heading */}
        <h2 className="z-10 text-4xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
          Get in Touch
        </h2>

        {/* Subheading */}
        <p className="z-10 text-lg text-neutral-700 mb-6 dark:text-neutral-300">
          Have questions about your visit to Satara? Reach out to us, and we’ll
          be happy to assist you!
        </p>

        {/* Contact Us Button */}
        <a href="#" className="z-10">
          <ShimmerButton className="shadow-2xl px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Contact Us
            </span>
          </ShimmerButton>
        </a>

        {/* Background Interactive Grid Pattern */}
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </section>

      <Footer />

      <div className="fixed top-4 right-4 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
