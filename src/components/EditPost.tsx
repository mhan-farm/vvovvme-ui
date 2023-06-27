import React, { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import ToolBarMenu from "./ToolBarMenu";

const EditPost = () => {
  const [post, setPost] = useState("");
  const [item, setItem] = useState<string>("");
  const [selectedText, setSelectedText] = useState<string>("");

  const onChange = useCallback((value: string, viewUpdate: any) => {
    setPost(value);
  }, []);

  const savePostOnClick = (value: string) => {
    console.log(value);
    console.log("save");
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = document.getSelection();
      if (selection) {
        const text = selection.toString();
        setSelectedText(text);
      }
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return (
    <div className="flex-1 flex w-full min-h-screen">
      <div className="flex flex-col mx-2 w-full">
        <ToolBarMenu setItem={setItem} selectedText={selectedText} />

        <CodeMirror
          className="flex relative justify-center h-full"
          value={item}
          width="100%"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
        />

        <button
          onClick={() => {
            savePostOnClick(post);
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default EditPost;
