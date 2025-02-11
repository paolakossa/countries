import { useState, useEffect } from "react";
import { Navbar, NavbarToggler, NavbarText } from "reactstrap";
import Icon from "./Icon";
import classNames from "classnames";

const Menu = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.querySelector(".navbar")?.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector(".navbar")?.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <Navbar className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary dark-mode">
      <div className="d-flex justify-content-between align-items-center w-100 mx-0 mx-md-5">
        <NavbarText className="text-very-dark-blue-text fw-bolder fs-6 fs-md-5">
          Where in the world?
        </NavbarText>
        <NavbarToggler
          onClick={toggleDarkMode}
          className={classNames(
            "text-very-dark-blue-text fw-light fs-7 border-0 d-flex justify-content-between align-items-center gap-2",
            {
              "text-white": isDark,
            }
          )}
        >
          <Icon icon="moon" height={16} width={16} />
          Dark Mode
        </NavbarToggler>
      </div>
    </Navbar>
  );
};

export default Menu;
