import EditorPanel from "./EditorPanel";
import { useContext } from "react";
import MainContext from "../../../../MainContext";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-monokai"; // Choose your preferred theme

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className="text-[3rem] py-5 px-2 border-b border-b-grey-100 rounded bg-grey-100 m-4">
      <div className="md:flex items">
        <div className="md:w-2/3 w-full">
          <div className="px-3">
            <AceEditor
              mode="sql"
              theme="github" // Choose your preferred theme here
              value={query}
              onChange={setQuery}
              name="sql-editor"
              editorProps={{ $blockScrolling: true }}
              style={{ width: "100%", height: "200px" }} // Set the desired width and height
            />
          </div>
          <p className="text-[1rem] px-4 text-secondary text-italic">
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className="md:ml-3 md:mt-0 mt-3">
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
