import "./Asidebar.css";
import SideMenu, { menuItems } from "./SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function Asidebar() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="app">
      <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      <Router>
      <Routes>
    <div className={`container ${inactive ? "inactive" : ""}`}>
     {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

        </div>
        </Routes>
      </Router>
    </div>        
  );
}

export default Asidebar;
