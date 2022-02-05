import { Link } from "react-router-dom";

const Tab = ({ tabName, activeTab, setActiveTab }) => {
  return (
    <Link
      to={`/${tabName}`}
      onClick={() => {
        setActiveTab(tabName);
      }}
      style={{
        color: activeTab === tabName && "black",
        fontWeight: activeTab === tabName && 400,
      }}
    >
      {tabName}
    </Link>
  );
};

export default Tab;
