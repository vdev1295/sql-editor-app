import {
  getTableHeadFromData,
  getTableRowsFromData,
} from "../../../../utils/tableHelpers";

const Table = (props) => {
  return (
    <div className="pr-3 mb-1 h-[70vh] overflow-auto">
      {props.result.length > 0 ? (
        <table>
          <thead className=" bg-indigo-500 text-white font-bold">
            {getTableHeadFromData(props.result)}
          </thead>
          {getTableRowsFromData(props.result)}
        </table>
      ) : null}
    </div>
  );
};

export default Table;
