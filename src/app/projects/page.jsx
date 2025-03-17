"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Github, MoveRight } from "lucide-react";
import axios from "axios";

function projects() {
  const [projects, setProjects] = React.useState([]);

  const proj = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*`
      );
      console.log(res.data.data);
      setProjects(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const badgecreation = (tech) => {
    const techs = tech.split(",");
    return techs.map((tech, index) => (
      <Badge className="mx-1" key={index}>
        {tech}
      </Badge>
    ));
  };

  useEffect(() => {
    proj();
  }, []);

  if (projects.length === 0) {
    return <div className="text-center text-2xl font-bold">No projects found</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 px-20 mb-4">
      {projects &&
        projects.map((pro, index) => (
          <HoverCard className='rounded-xl'>
            <HoverCardTrigger>
              <Card key={index}>
                <div className="w-full">
                  <img className="rounded-xl" src={`http://localhost:1337//api/projects${pro.image.url}`} alt={pro.Title} />
                </div>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-2xl font-bold tracking-wider">
                      {pro.Title}
                    </CardTitle>
                    <Link href={pro.link}>
                      <Github size={40} />
                    </Link>
                  </div>

                  <CardDescription>
                    {badgecreation(pro.Technologies)}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <Link
                    href={pro.link}
                    className="w-full gap-2 text-blue-600 flex justify-end"
                  >
                    Learn More
                    <MoveRight />
                  </Link>
                </CardFooter>
              </Card>
            </HoverCardTrigger>

            <HoverCardContent>{pro.Description}</HoverCardContent>
          </HoverCard>
        ))}
    </div>
  );
}

export default projects;
