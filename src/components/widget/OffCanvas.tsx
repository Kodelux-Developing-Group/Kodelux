import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "@/assets/icons/icons";

export const OffCanvas = () => {
  return (
    <Sheet>
      <div className="lg:hidden flex w-full justify-between items-center">
        <SheetTrigger asChild>
          <Button
            className="w-fit h-fit items-center rounded-[4px] font-bold duration-200 ease-out data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 text-default hover"
            variant="ghost"
            style={{ padding: "0.5em" }}
          >
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
      </div>

      <SheetContent side="left" className="border-0 p-4 z-[999]">
        <SheetTitle>Cursos</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
