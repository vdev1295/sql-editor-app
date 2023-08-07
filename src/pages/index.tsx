import { lazy } from "react";
import Head from "next/head";

const Editor = lazy(() => import("../components/pages/Editor/Editor"));

const EditorPage = () => {
  return (
    <div>
      <Head>
        <title>SQL Editor</title>
      </Head>
      <Editor />
    </div>
  );
};

export default EditorPage;
