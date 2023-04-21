import React from "react";
import "./sidebar.scss";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="pb-3 option-1">
        <div className="d-flex align-items-center justify-content-center p-3 option-hover">
          <div>
            <MdHomeFilled className="fs-4 d-grid" />
          </div>
          <div>
            <a
              className="text-decoration-none text-dark sidebar-option"
              href="#"
            >
              Home
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center p-3 option-hover">
          <div>
            <RiVideoFill className="fs-4 d-grid" />
          </div>
          <div>
            <a
              className="text-decoration-none text-dark sidebar-option"
              href="#"
            >
              Home
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center p-3 option-hover">
          <div>
            <MdOutlineSubscriptions className="fs-4 d-grid" />
          </div>
          <div>
            <a
              className="text-decoration-none text-dark sidebar-option"
              href="#"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
