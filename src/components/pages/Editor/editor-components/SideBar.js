import { useContext } from "react";
import MainContext from "../../../../MainContext";
import Query from "./Query";

const SideBar = () => {
  const { queryHistory } = useContext(MainContext);

  return (
    <div
      className="rounded m-4 overflow-auto bg-grey-100 p-4 border-r-1 border-grey-100 flex justify-between flex-col"
      style={{ height: "calc(100vh - 32px)" }}
    >
      <div className="h-[40vh]">
        <h5>
          <span className="fa fa-cloud secondary me-2"></span>{" "}
          <span className="text-secondary font-bold">Queries Available</span>
        </h5>
        {queryHistory ? <Query type="saved" /> : null}
      </div>
      <div className="h-[40vh] mt-4">
        <h5>
          <span className="fa fa-undo secondary me-2"></span>{" "}
          <span className="text-secondary font-bold">Query History</span>
        </h5>
        {queryHistory ? <Query type="history" /> : null}
      </div>
    </div>
  );
};

export default SideBar;
