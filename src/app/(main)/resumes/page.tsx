import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { PlusSquare } from "lucide-react";
import {Metadata} from "next";
import Link from "next/link";
import ResumeItem from "./ResumeItem";

export const metadata :Metadata={
    title:"Your Resumes"
}

export default async function Page(){
    const {userId}=await auth();

    if(!userId){
        return null;
    }

    const [resumes,totalCount]=await Promise.all([
        prisma.resume.findMany({
        where:{
            userId
        },
        orderBy:{
            updatedAt:"desc"
        },
        include:resumeDataInclude
        }),
        prisma.resume.count({
            where:{
                userId
            }
        })
    ])


    return <main className="max-w-7xl mx-auto w-full px-3 py-6 space-y-6">
        
        <Button asChild className="mx-auto flex w-fit gap-2">
            
            <Link href="/editor" >
               <PlusSquare className="size-5" />
               New Resume
            </Link>
            
            
        </Button>
        <div className="space-y-1">
            <h1 className="text-3xl font-bold">
                Your Resume
            </h1>
            <p>Total:{totalCount}</p>
        </div>
        <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
            {resumes.map((resume)=>(
                <ResumeItem 
                key={resume.id}
                resume={resume}/>
            ))}

        </div>
    </main>;
}