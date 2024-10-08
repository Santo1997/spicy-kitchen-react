import {useEffect, useState} from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Headings from "../utilities/Headings";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Gallaries = () => {
  const [imgs, setImg] = useState([]);

  useEffect(() => {
    fetch("../unit/galaries.json")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);

  return (
    <section className="min-h-[calc(100vh-130px)] py-10">
      <Headings title="Gallaries" />
      <LightGallery speed={500} plugins={[lgZoom]} download={false} elementClassNames={"grid grid-cols-5 gap-3 m-14"}>
        {imgs.map((img) => (
          <a href={img.src} key={img.id} className={`${img.class} overflow-hidden`}>
            <img src={img.src} className="w-full h-full object-cover object-center" />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallaries;
