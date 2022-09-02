import React from "react";
import "./NavbarUnder.css";

const NavbarUnder = (props) => {
  const NavbarUnderItems = [
    {
      id: 1,
      title: "WOMAN",
      dropwdownContent: ["test1", "test2", "test3", "test4"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 2,
      title: "MALE",
      dropwdownContent: ["test5", "test6", "test7", "test8"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 3,
      title: "CHILD",
      dropwdownContent: ["test9", "test10", "test11", "test12"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 4,
      title: "HOME & FURNITURE",
      dropwdownContent: ["test13", "test14", "test15", "test16"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 5,
      title: "SUPERMARKET",
      dropwdownContent: ["test17", "test18", "test19", "test20"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 6,
      title: "COSMETIC",
      dropwdownContent: ["test21", "test22", "test23", "test24"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 7,
      title: "SHOE BAG",
      dropwdownContent: ["test25", "test26", "test27", "test28"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 8,
      title: "WATCH & ACCESSORIES",
      dropwdownContent: ["test29", "test30", "test31", "test32"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 9,
      title: "ELECTRONIC",
      dropwdownContent: ["test33", "test34", "test35", "test36"],
      cName: "Navbar-Under-Item",
    },
    {
      id: 10,
      title: "SPORTS & OUTDOOR",
      dropwdownContent: ["test37", "test38", "test39", "test40"],
      cName: "Navbar-Under-Item",
    },
  ];

  return (
    <ul className="Nav-Items">
      {NavbarUnderItems.map((item) => {
        return (
          <li href="#" className={item.cName}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarUnder;
