import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lang.ai
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label={"learn"} iconSrc={"/learn.svg"} href={"/learn"} />
        <SidebarItem
          label={"leaderboard"}
          iconSrc={"/leaderboard.svg"}
          href={"/leaderboard"}
        />
        <SidebarItem
          label={"quests"}
          iconSrc={"/quests.svg"}
          href={"/quests"}
        />
        <SidebarItem label={"shop"} iconSrc={"/shop.svg"} href={"/shop"} />
        <SidebarItem label = {"word of the day"} iconSrc={"/word.svg"} href={"/wordoftheday"}/>
      
        <SidebarItem label = {"Contact Us"} iconSrc={"/team.svg"} href={"/contact"}/>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
