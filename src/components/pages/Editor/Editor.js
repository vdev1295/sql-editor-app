import { useMemo, useState } from "react";
import SideBar from "./editor-components/SideBar";
import Output from "./editor-components/Output";
import MainContext from "../../../MainContext";
import "font-awesome/css/font-awesome.min.css";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("./editor-components/CodeEditor"), {
  ssr: false,
});
function Editor() {
  const [query, setQuery] = useState("SELECT * FROM customers;");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM customers;", "SELECT * FROM regions;"],
    history: ["SELECT * FROM customers;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className="App-Editor">
      <MainContext.Provider value={contextValue}>
        <div className="content">
          <div className="md:flex">
            <div className="md:w-1/3 w-full">
              <SideBar />
            </div>
            <div className="md:w-2/3 h-screen overflow-scroll">
              <CodeEditor />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;
