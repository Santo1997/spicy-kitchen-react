import {useEffect, useState} from "react";
import MenuItems from "../../utilities/MenuItems";

const HMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("../unit/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <section className="min-h-screen flex justify-center bg-black pt-20">
      <div>
        <MenuItems title="Small Bites" sub="Order for the table and spread the love" menus={menus} />
        <MenuItems title="Main Course" menus={menus} />
        <MenuItems title="Desserts" menus={menus} />
      </div>
    </section>
  );
};

export default HMenu;
