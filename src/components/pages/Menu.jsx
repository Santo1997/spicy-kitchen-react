import {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Headings from "../utilities/Headings";
import DinnerCard from "../layouts/menu/DinnerCard";
import AftDinner from "../layouts/menu/AftDinner";
import Lunch from "../layouts/menu/Lunch";
import fetchData from "../utilities/utilities";

const Menu = () => {
  const [dinner, setDinner] = useState([]);
  const [aftDinner, setAftDinner] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fileNames = ["dinner", "aftDin", "lunch"];
    const setDataFunctions = [setDinner, setAftDinner, setLunch];

    fetchData(fileNames, setDataFunctions, setLoader);
  }, []);

  return (
    <section className="min-h-[calc(100vh-130px)] py-10 bg-black">
      <Headings title="Our Food Menu" liner={false} />

      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <Tabs className="pt-5 mt-10">
          <TabList className="grid grid-cols-3 w-fit mx-auto gap-5 ">
            <Tab className="btn btn-outline btn-info">Dinner</Tab>
            <Tab className="btn btn-outline btn-info">After Dinner</Tab>
            <Tab className="btn btn-outline btn-info">Lunch</Tab>
          </TabList>
          <TabPanel>
            <DinnerCard menus={dinner} />
          </TabPanel>
          <TabPanel>
            <AftDinner menus={aftDinner} />
          </TabPanel>
          <TabPanel>
            <Lunch menus={lunch} />
          </TabPanel>
        </Tabs>
      )}
    </section>
  );
};

export default Menu;
