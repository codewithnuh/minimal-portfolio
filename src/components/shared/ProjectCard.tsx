
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/payload-types";
import { Media } from "@/payload-types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, description, image } = project;
  const imageUrl = (image as Media)?.url;

  return (
    <Link href={`/projects/${slug}`} className="group block h-full">
      <Card className="rounded-xl p-1 overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] h-full flex flex-col">
        {imageUrl && (
          <div className="relative overflow-hidden rounded-xl">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </AspectRatio>
          </div>
        )}
        <CardHeader className="p-3 flex-grow">
          <CardTitle className="text-xl font-bold line-clamp-2">
            {title}
          </CardTitle>
          <CardContent className="p-0 mt-2">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
