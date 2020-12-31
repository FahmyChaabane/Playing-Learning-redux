import React from "react";
import { TabMenu } from "primereact/tabmenu";

const NavBar = () => {
  const items = [
    {
      label: "Feed",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location = "http://localhost:3000/";
      },
    },
    {
      label: "Add Form",
      icon: "pi pi-fw pi-calendar",
      command: () => {
        window.location = "http://localhost:3000/bug/form";
      },
    },
  ];
  return (
    <div className="card">
      <TabMenu model={items} activeItem={true} />
    </div>
  );
};

export default NavBar;
