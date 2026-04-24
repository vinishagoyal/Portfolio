"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const handleLinkClick = (e: React.MouseEvent, linkHref: string) => {
    e.stopPropagation();
    window.open(linkHref, '_blank');
  };

  return (
    <Link href={href || "#"} className={cn("block cursor-pointer", className)}>
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        {video && (
          <div className="relative h-40 w-full overflow-hidden">
            <iframe
              src={video}
              title={`${title} Demo`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          <div className="flex flex-col gap-2 w-full">
            {/* View Case Study / View Project Button */}
            {href && href !== "#" && (
              <div className="w-full">
                <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-xs font-medium text-center transition-colors">
                  {href.includes('/projects/') ? 'View Case Study' : 'View Project'}
                </div>
              </div>
            )}
            
            {/* External Links */}
            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1">
                {links?.map((link, idx) => (
                  <Badge 
                    key={idx} 
                    className="flex gap-2 px-2 py-1 text-[10px] cursor-pointer hover:bg-secondary/80"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
