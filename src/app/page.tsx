import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import resumePreview from "@/assets/resume-preview.jpg";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-gray-900 text-center md:text-start md:flex-row lg:gap-12">
      <div className="max-w-prose space-y-3">
        <Image
        src={logo}
        alt="logo"
        width={150}
        height={150}
        className="mx-auto md:ms-0"
         />
         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Create the{" "}
          <span className="inline-block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Perfect Resume
          </span>{" "}
          in Minutes
         </h1>
         <p className="text-lg text-gray-500">
          Our <span className="font-bold">AI resume builder</span> is designed to help you create a professional resume in minutes with our easy-to-use interface.
         </p>
         <Button asChild size="lg" variant="premium">
          <Link href="/resumes">Get Started</Link>
         </Button>
      </div>
      <div>
        <Image 
        src={resumePreview}
        alt="Resume Preview"
        width={600}
        className="shadow-md lg:rotate-[1.5deg]"/>
      </div>

    </main>
  );
}
