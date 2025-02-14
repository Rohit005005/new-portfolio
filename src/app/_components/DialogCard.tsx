import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

type projectKeys = "githive" | "formio" | "preppeak";

interface prop {
  project: projectKeys;
}

interface projDetails {
  title: string;
  video: string;
  link: string;
}

function DialogCard({ project }: prop) {
  const list: Record<projectKeys, projDetails> = {
    githive: {
      title: "Githive",
      video: "/githivevideo.mp4",
      link: "https://githive.rohit005.site",
    },
    formio: {
      title: "Formio",
      video: "/formiovideo.mp4",
      link: "https://formio-omega.vercel.app",
    },
    preppeak: {
      title: "PrepPeak",
      video: "/preppeakvideo.mp4",
      link: "https://preppeak-wheat.vercel.app",
    },
  };

  const projectData = list[project];
  return (
    <Dialog>
      <DialogTrigger>
        <p className="flex items-center gap-2 rounded-2xl text-black bg-white border px-2 py-1 text-sm font-mono whitespace-nowrap">
          Learn More
          <ArrowUpRight size={18} />
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-mono">{projectData.title}</DialogTitle>
          <DialogDescription className="flex flex-col items-end gap-5">
            <video width="100%" height="100%" controls>
              <source src={projectData.video} type="video/mp4"/>
            </video>
            <button
              className="flex items-center gap-2 rounded-2xl text-black bg-white border px-2 py-1 text-sm font-mono whitespace-nowrap"
              onClick={() => {
                window.open(projectData.link);
              }}
            >
              Visit
              <ArrowUpRight size={18} />
            </button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCard;
