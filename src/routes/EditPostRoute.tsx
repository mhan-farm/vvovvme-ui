import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import DefaultLayout from "../layouts/DefaultLayout";
import SideVar from "../components/SideVar";
import { useLocation } from "react-router-dom";

const EditRoute = () => {
  const [post, setPost] = useState("");

  const onChange = useCallback((value: string, viewUpdate: any) => {
    setPost(value);
  }, []);

  const savePostOnClick = (value: string) => {
    console.log(value);
    console.log("save");
  };

  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col">
        <SideVar />
        <div className="flex flex-col">
          <CodeMirror
            className="flex justify-center mt-32"
            value={"123"}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={onChange}
          />
        </div>
        <button
          onClick={() => {
            savePostOnClick(post);
          }}
        >
          save
        </button>
      </div>
    </DefaultLayout>
  );
};

export default EditRoute;
