import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Projects",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <AiIcons.AiOutlineWhatsApp />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <AiIcons.AiFillCalendar />,
    cName: "nav-text",
  },
  {
    title: "Focus Timer",
    path: "/timer",
    icon: <AiIcons.AiFillClockCircle />,
    cName: "nav-text",
  },
  {
    title: "Podcast",
    path: "/recommendation",
    icon: <FaIcons.FaPodcast />,
    cName: "nav-text",
  },
];
