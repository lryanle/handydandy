import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NextLink from "next/link";
import { toollist } from "@/config"

type Props = {
  tag: string
}

export default function Gallery({ tag }: Props) {
  return (
    <>
    {toollist.filter(t => tag === "All" ? t.tags : t.tags.includes(tag)).map((tool) => (
      <Card key={tool.name} className="flex flex-col justify-between">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <tool.icon className="h-6 w-6 text-primary" />
            <CardTitle>{tool.name}</CardTitle>
          </div>
          <CardDescription>{tool.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" asChild>
            <NextLink
              href={`/tools/${tool.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              Open Tool
            </NextLink>
          </Button>
        </CardFooter>
      </Card>
    ))}
    </>
  )
}