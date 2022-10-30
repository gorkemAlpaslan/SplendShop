import React from "react";
import "./NavbarUnder.css";

const NavbarUnder = (props) => {
  const NavbarUnderItems = [
    {
      id: 1,
      name: "Lorem",
      subMenu: true,
      subLinks: [
        {
          head: "Lorem",
          id: "1.1",
          sublink: [
            { name: "Lorem", link: "/", id: "1.1.1" },
            { name: "Lorem", link: "/", id: "1.1.2" },
            { name: "Lorem", link: "/", id: "1.1.3" },
            { name: "Lorem", link: "/", id: "1.1.4" },
            { name: "Lorem", link: "/", id: "1.1.5" },
            { name: "Lorem", link: "/", id: "1.1.6" },
            { name: "Lorem", link: "/", id: "1.1.7" },
            { name: "Lorem", link: "/", id: "1.1.8" },
            { name: "Lorem", link: "/", id: "1.1.9" },
          ],
        },
        {
          head: "Lorem",
          id: "1.2",
          sublink: [
            { name: "Lorem", link: "/", id: "1.2.1" },
            { name: "Lorem", link: "/", id: "1.2.2" },
            { name: "Lorem", link: "/", id: "1.2.3" },
            { name: "Lorem", link: "/", id: "1.2.4" },
            { name: "Lorem", link: "/", id: "1.2.5" },
            { name: "Lorem", link: "/", id: "1.2.6" },
            { name: "Lorem", link: "/", id: "1.2.7" },
            { name: "Lorem", link: "/", id: "1.2.8" },
            { name: "Lorem", link: "/", id: "1.2.9" },
          ],
        },
        {
          head: "Lorem",
          id: "1.3",
          sublink: [
            { name: "Lorem", link: "/", id: "1.3.1" },
            { name: "Lorem", link: "/", id: "1.3.2" },
            { name: "Lorem", link: "/", id: "1.3.3" },
            { name: "Lorem", link: "/", id: "1.3.4" },
            { name: "Lorem", link: "/", id: "1.3.5" },
            { name: "Lorem", link: "/", id: "1.3.6" },
            { name: "Lorem", link: "/", id: "1.3.7" },
            { name: "Lorem", link: "/", id: "1.3.8" },
            { name: "Lorem", link: "/", id: "1.3.9" },
          ],
        },
      ],
      cName: "Navbar-Under-Item",
    },
    {
      id: 2,
      name: "Ipsum",
      subMenu: true,
      subLinks: [
        {
          head: "Ipsum",
          id: "2.1",
          sublink: [
            { name: "Lorem", link: "/", id: "2.1.1" },
            { name: "Lorem", link: "/", id: "2.1.2" },
            { name: "Lorem", link: "/", id: "2.1.3" },
            { name: "Lorem", link: "/", id: "2.1.4" },
            { name: "Lorem", link: "/", id: "2.1.5" },
            { name: "Lorem", link: "/", id: "2.1.6" },
            { name: "Lorem", link: "/", id: "2.1.7" },
            { name: "Lorem", link: "/", id: "2.1.8" },
            { name: "Lorem", link: "/", id: "2.1.9" },
          ],
        },
        {
          head: "Ipsum",
          id: "2.2",
          sublink: [
            { name: "Lorem", link: "/", id: "2.2.1" },
            { name: "Lorem", link: "/", id: "2.2.2" },
            { name: "Lorem", link: "/", id: "2.2.3" },
            { name: "Lorem", link: "/", id: "2.2.4" },
            { name: "Lorem", link: "/", id: "2.2.5" },
            { name: "Lorem", link: "/", id: "2.2.6" },
            { name: "Lorem", link: "/", id: "2.2.7" },
            { name: "Lorem", link: "/", id: "2.2.8" },
            { name: "Lorem", link: "/", id: "2.2.9" },
          ],
        },
      ],
      cName: "Navbar-Under-Item",
    },
    {
      id: 3,
      name: "Dolor",
      subMenu: true,
      subLinks: [
        {
          head: "Dolor",
          id: "3.1",
          sublink: [
            { name: "Lorem", link: "/", id: "3.1.1" },
            { name: "Lorem", link: "/", id: "3.1.2" },
            { name: "Lorem", link: "/", id: "3.1.3" },
            { name: "Lorem", link: "/", id: "3.1.4" },
            { name: "Lorem", link: "/", id: "3.1.5" },
            { name: "Lorem", link: "/", id: "3.1.6" },
            { name: "Lorem", link: "/", id: "3.1.7" },
            { name: "Lorem", link: "/", id: "3.1.8" },
            { name: "Lorem", link: "/", id: "3.1.9" },
          ],
        },
      ],
      cName: "Navbar-Under-Item",
    },
  ];

  return (
    <ul className="Nav-Items">
      {NavbarUnderItems.map((item) => {
        return (
          <div className="Dropwdown-Wrapper" key={item.id}>
            <li href="#" className={item.cName}>
              <p>{item.name}</p>
              <div className="Dropdown-Menu">
                <div className="Triangle-Top"></div>
                <div className="Top-Hover-Holder"></div>
                <div className="Dropdown-Menu-Child">
                  {item.subLinks.map((mysublinks) => {
                    return (
                      <div className="Sublink-Card" key={mysublinks.id}>
                        <div className="Sublink-Head">{mysublinks.head}</div>
                        {mysublinks.sublink.map((slink) => {
                          return (
                            <div className="slink-each" key={slink.id}>
                              <div href={slink.link}>{slink.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default NavbarUnder;
