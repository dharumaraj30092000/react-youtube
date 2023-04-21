import React from "react";
import "./Header.scss";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

const Header = () => {
  return (
    <div className="container-fluid white">
      <div className="row align-items-center">
        <Navbar expand="lg pt-2 pb-2">
          <Container fluid>
            <div className="col-xl-2">
              <div className="d-flex" title="YouTube Home">
                <Navbar.Brand href="#" className="pe-2 m-0 pt-0 pb-0">
                  <div className="d-flex align-items-center">
                    <div className="ms-2 me-2 d-grid header-hover">
                      <RxHamburgerMenu className="fs-4" />
                    </div>
                    <div className="ms-2 d-grid">
                      <AiFillYoutube
                        style={{ color: "red" }}
                        className="fs-1"
                      />
                    </div>
                    <div className="fs-3 logo-name">
                      <span>you</span>tube
                    </div>
                  </div>
                </Navbar.Brand>
                <div>
                  <sup className="sup" style={{ cursor: "pointer" }}>
                    IN
                  </sup>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="d-flex align-items-center justify-content-center">
                <div className="w-100">
                  <Navbar.Collapse
                    id="navbarScroll"
                    className="justify-content-center"
                  >
                    <Form className="d-flex search-width">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <Button>
                        <IoIosSearch className="fs-4 d-grid" />
                      </Button>
                      <div className="fs-3 ms-2 d-grid header-hover">
                        <MdKeyboardVoice />
                      </div>
                    </Form>
                  </Navbar.Collapse>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="d-flex align-items-center justify-content-end">
                <div className="fs-5 ms-2 d-grid">
                  <BsThreeDotsVertical title="Settings" />
                </div>
                <div className="d-flex align-items-center ms-4 me-4 user-sign">
                  <div className="fs-2 d-grid">
                    <BiUserCircle className="sign-icon" />
                  </div>
                  <div className="fs-6 sign-in ps-1">Sign in</div>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
