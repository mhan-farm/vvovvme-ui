import { useEffect, useRef, useState } from "react";
import ToolBarMenu from "./ToolBarMenu";

import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorSelection } from "@codemirror/state";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

const EditPost = () => {
  const [content, setContent] = useState<string>(
    ""
    // `<h1> html 헤더 <span style="color:blue";>파란색</span></h1>\n`
  );
  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);
  const viewerRef = useRef<Viewer>(null);
  // const [selectedText, setSelectedText] = useState<string>("");

  const onChange = (value: string) => {
    setContent(value);
  };

  // codeMirror Editor에 content 추가
  const handleAddText = (text: string, position: number) => {
    const codeMirror = codeMirrorRef.current;
    if (codeMirror) {
      codeMirror.view?.dispatch(
        codeMirror.view?.state.changeByRange((range) => ({
          changes: [{ from: range.to, insert: text }],
          range: EditorSelection.range(
            range.to + position,
            range.to + position
          ),
        }))
      );
      codeMirror.view?.focus();
    }
  };

  // Toast ui Viewer에 content 동적으로 추가
  useEffect(() => {
    viewerRef.current?.getInstance().setMarkdown(content);
  }, [content]);

  // 더블클릭/드래그 하여 선택된 텍스트가 있을 경우
  // useEffect(() => {
  //   const handleSelectionChange = () => {
  //     const selection = document.getSelection();
  //     if (selection) {
  //       const text = selection.toString();
  //       setSelectedText(text);
  //     }
  //   };
  //   document.addEventListener("selectionchange", handleSelectionChange);
  //   return () => {
  //     document.removeEventListener("selectionchange", handleSelectionChange);
  //   };
  // }, []);

  return (
    <div className="flex-1 flex w-full min-h-screen">
      <div className="flex flex-col mx-2 w-full">
        <ToolBarMenu setText={handleAddText} />

        <div className="flex">
          <div className="w-full h-screen">
            <CodeMirror
              ref={codeMirrorRef}
              className="flex relative justify-center h-full"
              value={content}
              width="100%"
              extensions={[
                markdown({ base: markdownLanguage, codeLanguages: languages }),
              ]}
              onChange={onChange}
            />
          </div>

          <div className="w-full h-screen bg-indigo-500">
            <Viewer
              ref={viewerRef}
              plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              initialValue={content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
