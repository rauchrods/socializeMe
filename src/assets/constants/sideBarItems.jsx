import { IoHome } from "react-icons/io5";
import { IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import Avatar from "../../UI/Avatar/Avatar";

export const sideBarItems = [
  {
    icon: <IoHome />,
    text: "Home",
    link: "/",
  },
  {
    icon: <IoSearch />,
    text: "Search",
  },
  {
    icon: <FaRegHeart />,
    text: "Notifications",
  },
  {
    icon: <IoAddCircleOutline />,
    text: "Create",
  },
  {
    icon: (
      <Avatar
        src={
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        size="small"
      />
    ),
    text: "Profile",
    link: "/asaprogrammer",
  },
];
