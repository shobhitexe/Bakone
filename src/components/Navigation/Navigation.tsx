import { Search } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Links = [
  {
    title: "Marketplace",
    childrens: [
      { title: "Diamonds", link: "/marketplace" },
      { title: "Gems", link: "/marketplace" },
      { title: "Jewellery", link: "/marketplace" },
    ],
  },
  {
    title: "Mining Hub",
    childrens: [
      { title: "Buy Right Out", link: "" },
      { title: "Invest in Mines", link: "" },
      { title: "Buy a Share", link: "" },
      { title: "Enter Auction Site", link: "" },
    ],
  },
  {
    title: "Minted Coins",
    childrens: [
      { title: "variety", link: "" },
      { title: "Colours", link: "" },
      { title: "Size Design", link: "" },
      { title: "Animals", link: "" },
      { title: "Custom made", link: "" },
    ],
  },
  {
    title: "Bullion",
    childrens: [
      { title: "999g", link: "" },
      { title: "99g", link: "" },
      { title: "Custom Made", link: "" },
    ],
  },
  {
    title: "Mining Auctions",
    childrens: [
      { title: "Precious Metals", link: "/auction/1" },
      { title: "Mines", link: "/auction/1" },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200 py-3">
      <div className="container mx-auto flex items-center sm:justify-between justify-center px-4s">
        <button className="sm:flex hidden items-center gap-1 rounded-md border border-amber-800 px-3 py-1 text-xs">
          <span>Contact Us / Help</span>
        </button>

        <div className="flex items-center sm:gap-8 gap-5 sm:text-base text-sm">
          <NavigationMenu>
            <NavigationMenuList>
              {Links.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {item.childrens.map((item) => (
                        <Link key={item.title} href={item.link}>
                          {item.title}
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuLink>Bakone Crypto</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>Blogs</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="relative sm:flex hidden">
          <input
            type="text"
            placeholder="Search"
            className="rounded-md border border-gray-300 pl-8 pr-4 py-1 text-sm focus:border-amber-800 focus:outline-none"
          />
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </nav>
  );
}
