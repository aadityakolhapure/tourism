"use client";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/imageslider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {DockDemo} from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <DockDemo/> */}
      {/* Hero Section with Image Slider */}
      <ImagesSliderDemo />

      {/* About Section */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center md:shadow-xl">
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to Satara</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
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
            [10, 15],
            [15, 10]
          ]}
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12"
          )}
        />
      </div>

      {/* Top Attractions Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Top Attractions in Satara
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:scale-105 transition-transform">
            <div className="relative h-56">
              <Image
                src="/images/dam.jpg" // Example image path
                alt="Koynanagar"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2">Koynanagar</p>
            <p className="text-neutral-600 text-center p-1">
              A beautiful spot near the Koyna Dam, known for its tranquil beauty
              and lush greenery.
            </p>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform">
            <div className="relative h-56">
              <Image
                src="/images/kaas.jpg" // Example image path
                alt="Kas Plateau"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2">Kas Plateau</p>
            <p className="text-neutral-600 text-center p-1">
              A UNESCO World Heritage site, famous for its seasonal flowers and
              rich biodiversity.
            </p>
          </Card>
          <Card className="shadow-md hover:scale-105 transition-transform">
            <div className="relative h-56">
              <Image
                src="/images/waterfall.jpg" // Example image path
                alt="Thoseghar Waterfalls"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-xl font-medium pl-2">
              Thoseghar Waterfalls
            </p>
            <p className="text-neutral-600 text-center p-1">
              A stunning waterfall, perfect for a peaceful getaway and
              photography.
            </p>
          </Card>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section
        className="py-16 px-8 bg-neutral-200 text-center relative bg-cover bg-center "
        style={{ backgroundImage: 'url("/images/kaas.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold text-white mb-8">
            Exclusive Tour Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4">Weekend Getaway</p>
              <p className="text-neutral-600 mb-4">
                A 3-day tour to explore Satara’s best tourist spots, including
                Kas Plateau, Koynanagar, and Thoseghar Waterfalls.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4" />
            </Card>
            <Card className="p-6 bg-white shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4">Heritage Tour</p>
              <p className="text-neutral-600 mb-4">
                A heritage-focused tour covering Satara’s history, monuments,
                and cultural experiences.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4" />
            </Card>
            <Card className="p-6 bg-white shadow-md hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold mb-4">
                Adventure Expedition
              </p>
              <p className="text-neutral-600 mb-4">
                An adrenaline-packed tour, including trekking and outdoor
                adventures around Satara’s picturesque landscapes.
              </p>
              <InteractiveHoverButton text="Book" className="mt-4" />
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-8">What Our Visitors Say</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <Card className="max-w-xs p-6 bg-neutral-100 rounded-lg shadow-md">
            <p className="text-neutral-600 mb-4">
              "Satara is a hidden gem! The Kas Plateau is breathtaking, and the
              waterfalls are so serene. I highly recommend a visit!"
            </p>
            <p className="font-semibold">Ravi Kumar</p>
            <p className="text-neutral-500">Tourist from Pune</p>
          </Card>
          <Card className="max-w-xs p-6 bg-neutral-100 rounded-lg shadow-md">
            <p className="text-neutral-600 mb-4">
              "The heritage tour gave me a deep insight into the culture of
              Satara. A fantastic way to learn about its rich history!"
            </p>
            <p className="font-semibold">Aarti Deshmukh</p>
            <p className="text-neutral-500">Tourist from Mumbai</p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-neutral-100 text-center">
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-neutral-700 mb-6">
          Have questions about your visit to Satara? Reach out to us, and we’ll
          be happy to assist you!
        </p>
        <a href="mailto:contact@sataratourism.com">
          <div className="z-10 flex items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact Us
              </span>
            </ShimmerButton>
          </div>
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-neutral-800 text-white text-center">
        <div className="flex justify-center gap-6">
          <a
            className="hover:underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
          <a
            className="hover:underline"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <a
            className="hover:underline"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </div>
  );
}
