"use client";
import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property has a beach nearby",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills nearby",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "islands",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is near a skiing resort",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is near a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping nearby",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in the arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "This property is in the barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious",
  },
];

type Props = {};

const Categories = (props: Props) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className=" pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
