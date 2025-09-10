import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Media, Post } from "@/payload-types";
interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export function BlogCard({
  slug,
  title,
  author,
  publishedDate,
  tags,
  featuredImage,
}: Post) {
  return (
    <Link href={`/posts/${slug}`} className="group block">
      <Card className="rounded-xl p-1! overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] h-full flex flex-col">
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={3 / 2}>
            <Image
              src={(featuredImage as Media).url as string}
              alt={title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </AspectRatio>
        </div>
        <CardHeader className="p-2! flex-grow">
          <p className="text-sm text-muted-foreground mb-2">
            {format(new Date(publishedDate), "PPP")}
          </p>
          <CardTitle className="text-xl font-bold line-clamp-2">
            {title}
          </CardTitle>
          <CardContent className="p-0 mt-2">
            <p className="text-sm text-muted-foreground line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, molestiae.
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
