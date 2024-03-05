import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const BreadcrumbComponent = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  const previousPathIndex = pathnames.length - 2;

  return (
    <div>
      {/* Mobile Back Button */}
      <div className="sd:block sm:block md:block lg:hidden xl:hidden 2xl:hidden text-lg">
        {previousPathIndex >= 0 && (
          <Link
            to={`/${pathnames.slice(0, previousPathIndex + 1).join("/")}`}
            className="flex items-center hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
            <span className="text-lg">
              {decodeURIComponent(
                pathnames[previousPathIndex].replace("-", " ")
              )}
            </span>
          </Link>
        )}
      </div>

      {/* Full Breadcrumb for larg devices */}
      <div className="hidden  lg:block xl:block 2xl:block">
        <Breadcrumbs
          classNames={{
            base: "text-lg sd:text-tiny sm:text-tiny mt-2 font-bold",
          }}
        >
          <BreadcrumbItem
            size="lg"
            classNames={{
              item: "text-lg",
            }}
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </BreadcrumbItem>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <BreadcrumbItem
                size="lg"
                key={name}
                classNames={{
                  item: "text-lg ",
                }}
              >
                <Link
                  to={routeTo}
                  className={` hover:underline ${isLast ? "active" : ""}`}
                >
                  {decodeURIComponent(name.replace("-", " "))}
                </Link>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
