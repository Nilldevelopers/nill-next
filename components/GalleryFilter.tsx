import { useState, useEffect } from "react";
import Image from "next/image";

const portfolio = [
  {
    name: "My best client",
    image: "/static/img/work/Rectangle 54.png",
    category: ["all", "ux-ui"],
  },
  {
    name: "My favorite case",
    image: "/static/img/work/Rectangle 55.png",
    category: ["all", "graphic", "ux-ui"],
  },
  {
    name: "A old job",
    image: "/static/img/work/Rectangle 56.png",
    category: ["all", "webdesign"],
  },
  {
    name: "It is a really cool website",
    image: "/static/img/work/Rectangle 57.png",
    category: ["all", "ux-ui", "graphic", "3d", "seo"],
  },
  {
    name: "Something more",
    image: "/static/img/work/Rectangle 58.png",
    category: ["all", "3d"],
  },
  {
    name: "Something more",
    image: "/static/img/work/Rectangle 59.png",
    category: ["all", "3d", "graphic"],
  },
];

function GalleryFilter() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => setProjects(portfolio), []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="d-flex flex-row-reverse text-white text-center pb-5">
        <p
          className={`ps-5 pe-5 animation ${
            filter === "all" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </p>
        <p
          className={`ps-5 pe-5 animation ${
            filter === "webdesign" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("webdesign")}
        >
          Web Design
        </p>
        <p
          className={`ps-5 pe-5 animation ${
            filter === "ux-ui" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("ux-ui")}
        >
          Ui/UX
        </p>
        <p
          className={`ps-5 pe-5 animation ${
            filter === "graphic" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("graphic")}
        >
          Graphic
        </p>
        <p
          className={`ps-5 pe-5 animation ${
            filter === "3d" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("3d")}
        >
          3D
        </p>
        <p
          className={`ps-5 pe-5 animation ${
            filter === "seo" ? "activeda" : "filter-a-tag"
          }`}
          onClick={() => setFilter("seo")}
        >
          SEO
        </p>
      </div>
      <div className="animation">
        <div className="container">
          <div className="row">
            {projects.map((item: any, index: number) =>
              item.filtered === true ? (
                index % 2 === 0 ? (
                  <div key={index} className="image-hover animation col-12 col-md-6">
                    <Image
                      className="animation w-fill-availabe custom-img pb-5"
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                    />
                  </div>
                ) : (
                  <div className="image-hover col-12 col-md-6">
                    <Image
                      key={index}
                      className="animation w-fill-availabe custom-img pt-5"
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                    />
                  </div>
                )
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryFilter;
