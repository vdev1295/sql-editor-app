import { useContext } from "react";
import MainContext from "../../../../MainContext";
import { customers as queryData } from "../../../../assets/data/data";
import { regions } from "../../../../assets/data/data";
import { toast } from "react-toastify";

const EditorPanel = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const runQuery = () => {
    console.log({ query });
    if (query.trim() === "") {
      toast.error("Query is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (query === "SELECT * FROM customers;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    } else if (query === "SELECT * FROM regions;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: regions,
      }));
    } else {
      toast.info(
        "Currently queries listed in the sidebar are only supported!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }

    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      toast.info(
        "Please try another query, or select from the ones previously saved.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <div className="flex md:flex-col mt-4 md:mt-0">
      <button
        className="w-[149px] flex justify-center items-center cursor-pointer lg:ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={() => runQuery()}
      >
        <span className="fa fa-play me-1"></span>Run
      </button>

      <button
        className="w-[149px] md:mt-8 flex justify-center cursor-pointer ml-8 rounded-md bg-transparent px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-indigo-500 border-[2px] border-indigo-500 hover:bg-indigo-100 items-center"
        onClick={() => saveQuery()}
      >
        <span className="fa fa-save me-1"></span>Save
      </button>

      <button
        className="w-[149px] md:mt-8 flex justify-center cursor-pointer ml-8 rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 lg:mt-8 text-white hover:bg-red-500 items-center"
        onClick={() => clearQuery()}
      >
        <span className="fa fa-times me-1"></span>Clear
      </button>
    </div>
  );
};

export default EditorPanel;
