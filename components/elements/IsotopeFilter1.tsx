'use client';
import React, { useEffect, useState } from "react";

export default function IsotopeFilter1() {
    const portfolio = [
        {
            name: "Flyer design",
            category: ["all", "web", "motion"],
            img: "case.png"
        },
        {
            name: "Banner design",
            category: ["all", "graphic", "web"],
            img: "case2.png"
        },
        {
            name: "Disk cover",
            category: ["all", "graphic", "motion"],
            img: "case3.png"
        },
        {
            name: "Pattern design",
            category: ["all", "motion", "mobile"],
            img: "case4.png"
        },
        {
            name: "Logo design",
            category: ["all", "web", "graphic"],
            img: "case5.png"
        },
        {
            name: "Animal pattern",
            category: ["all", "mobile"],
            img: "case6.png"
        }
    ];

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState(portfolio);

    useEffect(() => {
        if (filter === "all") {
            setProjects(portfolio);
        } else {
            const filtered = portfolio.filter((p) => p.category.includes(filter));
            setProjects(filtered);
        }
    }, [filter]);

    const handleFilterClick = (category: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setFilter(category);
    };

    return (
        <>
            <div className="box-button-filter">
                <a
                    href="#"
                    className={`btn btn-filter filter-content ${filter === "all" ? "active" : ""}`}
                    onClick={handleFilterClick("all")}
                >
                    View All
                </a>
                <a
                    href="#"
                    className={`btn btn-filter filter-content ${filter === "web" ? "active" : ""}`}
                    onClick={handleFilterClick("web")}
                >
                    Web
                </a>
                <a
                    href="#"
                    className={`btn btn-filter filter-content ${filter === "graphic" ? "active" : ""}`}
                    onClick={handleFilterClick("graphic")}
                >
                    Graphic
                </a>
                <a
                    href="#"
                    className={`btn btn-filter filter-content ${filter === "motion" ? "active" : ""}`}
                    onClick={handleFilterClick("motion")}
                >
                    Motion
                </a>
                <a
                    href="#"
                    className={`btn btn-filter filter-content ${filter === "mobile" ? "active" : ""}`}
                    onClick={handleFilterClick("mobile")}
                >
                    Mobile
                </a>
            </div>

            <div className="row row-masonry align-items-center">
                {projects.map((project, index) => (
                    <div key={index} className={`col-lg-4 mb-30 item-filter ${project.category.join(" ")}`}>
                        <img src={`/assets/imgs/pages/home3/${project.img}`} className="w-100" alt={project.name} />
                    </div>
                ))}
            </div>
        </>
    );
}
