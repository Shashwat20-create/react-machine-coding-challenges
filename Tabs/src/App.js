import Tabs from "./components/Tabs";
import "./styles.css";

export default function App() {
  const handleTabs = (index) => {
    console.log("tabs", index);
  };
  return (
    <>
      <Tabs onChange={handleTabs} />
    </>
  );
}
