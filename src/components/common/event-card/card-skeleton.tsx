import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, SquarePen } from "lucide-react";

const CardSkeleton = () => {
  return (
    <Card className="flex w-full flex-col hover:shadow-md sm:max-w-96">
      <CardHeader>
        <Skeleton className="mb-2 h-44 rounded-lg" />
        <CardTitle className="py-1">
          <Skeleton className="h-9" />
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-2 text-sm">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap justify-between text-sm">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-6 w-16" />
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
