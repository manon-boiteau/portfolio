import { useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const tabs = ["projects", "about", "articles"];

  return (
    <header>
      <div className="wrapper">
        <div>
          <Link to="/">
            <h1>MANON</h1>
          </Link>
          <p>Frontend Web & Mobile Developer</p>
        </div>
        <nav>
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                tabName={tab}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
          <a
            href="mailto:manonboiteaupro@gmail.com"
            onClick={() => {
              setActiveTab("contact");
            }}
            style={{
              color: activeTab === "contact" && "black",
              fontWeight: activeTab === "contact" && 400,
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
