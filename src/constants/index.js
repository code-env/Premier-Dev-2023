import { Beef, LayoutDashboard, MessageCircle, Receipt } from "lucide-react";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../assets/Images";

export const sidebarRoutes = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessageCircle,
  },
  {
    name: "Bills",
    path: "/bills",
    icon: Receipt,
  },
  {
    name: "Foods",
    path: "/foods",
    icon: Beef,
  },
];

export const dashboardCounts = [
  {
    name: "Total Menus",
  },
  {
    name: "Total Menus",
  },
  {
    name: "Total Menus",
  },
  {
    name: "Total Menus",
  },
];

export const foods = [
  {
    id: 1,
    image: image1,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 2,
    image: image2,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 3,
    image: image3,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 4,
    image: image4,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 5,
    image: image5,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 6,
    image: image6,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 7,
    image: image7,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
];
