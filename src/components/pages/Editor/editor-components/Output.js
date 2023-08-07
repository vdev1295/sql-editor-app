import { useContext, useState } from "react";
import MainContext from "../../../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const exportData = () => {
    toast.success("Data downloaded successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="p-1 overflow-clip">
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className="mb-4 border-b-[2px] border-indigo-500 flex items-center">
            <span
              className={` py-2 px-3 text-[1rem] ${
                tab === 0 ? "bg-indigo-500 text-white rounded-t-md" : ""
              } cursor-pointer`}
              onClick={() => setTab(0)}
            >
              Output
            </span>
            <span
              className={`ml-1 py-2 px-3 text-[1rem] ${
                tab === 1 ? "bg-indigo-500 text-white rounded-t-md" : ""
              } cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Table Data
            </span>
          </div>
          <div className="flex justify-between items-end py-2 px-3">
            <p className="text-secondary text-italic">
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory.outputData[0]).length}
              </span>
              &nbsp;rows in set
              <span
                style={{ fontSize: "0.9rem" }}
                className="text-secondary ml-1 font-bold "
              >
                (0.02sec)
              </span>
            </p>
            <div className="export-btn">
              <CSVLink data={queryHistory.outputData} filename={"data.csv"}>
                <button
                  className="w-content flex justify-center items-center cursor-pointer ml-8 rounded-md px-3 text-[0.8125rem] text-indigo-500 font-semibold leading-5 hover:bg-indigo-100"
                  onClick={exportData}
                >
                  <span className="mr-1 mt-0.5 fa fa-download"></span> Export
                </button>
              </CSVLink>
            </div>
          </div>
          {tab === 0 ? (
            <Table result={queryHistory.outputData}></Table>
          ) : (
            <ColumnDetails result={queryHistory.outputData} />
          )}
        </>
      ) : (
        <div className="text-grey-400 text-[2.5rem] flex flex-col h-full items-center mt-9 text-center font-bold">
          <span className="fa fa-play"></span>
          <p>Select a query & press run</p>
        </div>
      )}
    </div>
  );
};

export default Output;
