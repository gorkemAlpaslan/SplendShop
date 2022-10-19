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
          sublink: [
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
          ],
        },
        {
          head: "Lorem",
          sublink: [
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
          ],
        },
        {
          head: "Lorem",
          sublink: [
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
            { name: "Lorem", link: "/" },
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
          sublink: [
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
          ],
        },
        {
          head: "Ipsum",
          sublink: [
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
            { name: "Ipsum", link: "/" },
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
          sublink: [
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
            { name: "Dolor", link: "/" },
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
          <div className="Dropwdown-Wrapper">
            <li href="#" className={item.cName}>
              <p>{item.name}</p>
              <div className="Dropdown-Menu">
                <div className="Triangle-Top"></div>
                <div className="Top-Hover-Holder"></div>
                <div className="Dropdown-Menu-Child">
                  {item.subLinks.map((mysublinks) => {
                    return (
                      <div className="Sublink-Card">
                        <div className="Sublink-Head">{mysublinks.head}</div>
                        {mysublinks.sublink.map((slink) => {
                          return (
                            <li className="slink-each">
                              <div href={slink.link}>{slink.name}</div>
                            </li>
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
