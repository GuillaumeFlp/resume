import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <HomeIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Accueil</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/resume/guillaume_filipe.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <ReaderIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/GuillaumeFlp"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <GitHubLogoIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/guillaume-filipe-175698131"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <LinkedInLogoIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:filipe.guillaume@gmail.com"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <EnvelopeOpenIcon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
      </Dock>
    </div>
  );
}
