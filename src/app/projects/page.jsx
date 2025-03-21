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
import { useDispatch } from "react-redux";
import { setCursorVariants } from "../../store/cursorSlice";

function projects() {
  const dispatch = useDispatch();
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const proj = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*`
      );
      setProjects(res.data.data);
      setLoading(false);
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

  const textEnter = () => {
    dispatch(setCursorVariants('text'));
  }

  const BtnClick = () => {
    dispatch(setCursorVariants('BtnClick'));
  }

  const textLeave = () => {
    dispatch(setCursorVariants('default'));
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    )
  }


  return (
    <div className="grid grid-cols-3 gap-4 px-20 mb-4 mt-10">
      {projects &&
        projects.map((pro, index) => (
          <HoverCard className='rounded-xl w-64'>
            <HoverCardTrigger>
              <Card key={index} className="hover:-translate-y-2 transition-all duration-200">
                <div className="w-full">
                  <img className="rounded-xl" src={`http://localhost:1337//api/projects${pro.image.url}`} alt={pro.Title} />
                </div>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-2xl font-bold tracking-wider">
                      {pro.Title}
                    </CardTitle>
                    <Link onMouseEnter={BtnClick} onMouseLeave={textLeave} href={pro.link}>
                      <Github size={40} />
                    </Link>
                  </div>

                  <CardDescription onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    {badgecreation(pro.Technologies)}
                  </CardDescription>
                </CardHeader>

                <CardFooter className='hover:-translate-y-2 transition-all duration-200'>
                  <Link
                    href={pro.link}
                    onMouseEnter={BtnClick}
                    onMouseLeave={textLeave}
                    className="w-full gap-2 text-blue-600 flex justify-end "
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
  )
}

export default projects;
