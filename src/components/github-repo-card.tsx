
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, CircleDot, GitForkIcon, StarIcon } from "lucide-react"

export default function GithubRepoCard() {
  return (
    <Card className="w-full max-w-md shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex items-start justify-between gap-4 p-4 sm:p-6">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">shadcn/ui</CardTitle>
          <CardDescription className="text-muted-foreground">
            Beautifully designed components that you can copy and paste into your apps.
          </CardDescription>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1 text-secondary-foreground">
          <StarIcon className="w-4 h-4" />
          <span>20k</span>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr_auto] items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CircleDot className="w-3 h-3" />
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-2">
          <GitForkIcon className="w-3 h-3" />
          <span>1.2k</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          <span>Updated April 2023</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          <ArrowRight className="w-4 h-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
