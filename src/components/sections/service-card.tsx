import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: number;
  title: string;
  description?: string;
  price?: number;
  image: string;
  features?: string[];
  platforms?: string[];
  technologies?: string[];
  isDetailed?: boolean;
  icon?: LucideIcon;
}

export function ServiceCard({
  id,
  title,
  description,
  price,
  features = [],
  platforms = [],
  technologies = [],
  isDetailed = false,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {isDetailed ? (
          // Detailed view (used on /services page)
          <>
            <CardContent className="p-4 max-h-[480px] min-h-[480px] custom-scrollbar">
              {Icon && (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black mr-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800 mb-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2 min-h-14">{title}</h3>
              {description && (
                <p className="text-muted-foreground text-sm mb-3">
                  {description}
                </p>
              )}
              {price !== undefined && (
                <p className="text-lg font-bold text-primary mb-3">${price}</p>
              )}
              {features.length > 0 && (
                <ul className="list-disc pl-4 text-sm text-muted-foreground mb-4">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              {(platforms.length > 0 || technologies.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {platforms.map((platform, index) => (
                    <Badge
                      key={index}
                      className="bg-secondary text-secondary-foreground"
                    >
                      {platform}
                    </Badge>
                  ))}
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="border border-input bg-background"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              <Button
                variant="text"
                className="transition-all duration-300 group-hover:scale-105 group-hover:text-primary"
              >
                View Details
              </Button>
            </CardContent>
          </>
        ) : (
          // Minimal view (used on homepage)
          <CardContent className="p-6">
            {Icon && (
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black mr-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800 mb-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]">
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 min-h-14 mb-2">
                {title}
              </h3>
              {description && (
                <p className="text-gray-600 text-sm min-h-20 mt-1 mb-3">
                  {description}
                </p>
              )}
            </div>
            {price !== undefined && (
              <p className="text-gray-600 text-sm mb-4">Starting at ${price}</p>
            )}
            <Button variant="text">Learn More</Button>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
