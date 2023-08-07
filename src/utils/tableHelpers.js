const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i) => {
    return (
      <tr key={Math.random()}>
        {keys.map((a) => {
          return (
            <td
              className="border-[1px] border-table-border text-left p-3"
              style={{ padding: "12px" }}
              key={Math.random()}
            >
              {i[a]}
            </td>
          );
        })}
      </tr>
    );
  });
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i) => {
        return (
          <td
            className=" border-[1px] text-left p-3"
            key={Math.random()}
            style={{ padding: "12px" }}
          >
            {i}
          </td>
        );
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i) => {
    return (
      <tr key={i}>
        <td
          className=" border-[1px] border-table-border text-left p-3"
          style={{ padding: "12px" }}
        >
          {i}
        </td>
      </tr>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
