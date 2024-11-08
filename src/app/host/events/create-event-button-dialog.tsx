import { Copy, MapPinHouse, MonitorSmartphone, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreateEventDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size={"lg"}>
          Create new event
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" hideCloseButton>
        <DialogHeader>
          <DialogTitle>Create new event</DialogTitle>
          {/* <DialogDescription>Description</DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Card className="flex-grow hover:border-primary hover:bg-accent hover:text-primary">
            <CardHeader>
              <CardTitle className="text-3xl">Offline event</CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <MapPinHouse size={50} />
            </CardContent>
            {/* <CardFooter>
                <p>Manage organizer details</p>
              </CardFooter> */}
          </Card>
          <Card className="flex-grow hover:border-primary hover:bg-accent hover:text-primary">
            <CardHeader>
              <CardTitle className="text-3xl">Online event</CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <MonitorSmartphone size={50} />
            </CardContent>
            {/* <CardFooter>
                <p>Manage organizer details</p>
              </CardFooter> */}
          </Card>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
