import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

const headers = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Project",
    href: "/project",
  },
];

export default function Header() {
  return (
    <header className="my-10 mb-16">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {headers.map((_h, _i) => (
            <NavigationMenuItem key={_i}>
              <Link href={_h.href} legacyBehavior passHref>
                <NavigationMenuLink className="px-0 uppercase text-xs font-medium tracking-wide">
                  {_h.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
