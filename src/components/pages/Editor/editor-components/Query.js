import { useContext, useEffect, useState } from "react";
import MainContext from "../../../../MainContext";

const Query = (props) => {
  const { setQuery, queryHistory, query } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type]);
  const { type } = props;

  const renderQueryList = (array) => {
    return array.map((i) => {
      return (
        <div
          className={`cursor-pointer m-2 px-2 py-1 hover:bg-[#ebebeb] bg-white hover:font-bold text-indigo-700 rounded
          ${query === i && type !== "history" ? "" : ""}`}
          key={Math.random()}
          onClick={() => setQuery(i)}
        >
          <span className="bg-indigo-50">{i}</span>
        </div>
      );
    });
  };

  useEffect(() => {
    setList(queryHistory[props.type]);
  }, [props, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory[props.type].filter((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ); // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="max-h-[35vh] overflow-auto">
      <div className="m-2">
        <input
          placeholder="Search..."
          value={searchQuery}
          className="w-full focus:outline-none px-3 py-2 rounded border-[1px] border-grey-300"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {list.length > 0 ? (
        renderQueryList(list)
      ) : (
        <div className="text-[1.5rem]">
          <span className="fa fa-exclamation-circle"></span>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
