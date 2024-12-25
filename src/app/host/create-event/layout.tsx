import { ReactNode } from "react";
import { CreateEventProvider } from "@/lib/providers/create-event-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Stepper from "./stepper";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <CreateEventProvider>
      <div className="m-4">
        <div className="min-h-[calc(100dvh-4rem)] md:max-w-screen-xl lg:mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Create new event</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-16 md:flex-row">
              <div className="basis-64">
                <Stepper />
              </div>
              <div className="flex-grow">{children}</div>
            </CardContent>
            <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
          </Card>
        </div>
      </div>
    </CreateEventProvider>
  );
};

export default Layout;
