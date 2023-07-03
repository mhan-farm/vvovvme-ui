import { useCallback, useEffect, useRef, useState } from "react";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import ToolBarMenu from "./ToolBarMenu";
import { EditorSelection } from "@codemirror/state";

const EditPost = () => {
  const [content, setContent] = useState<string>("12345123213213213213");
  const [selectedText, setSelectedText] = useState<string>("");

  const onChange = (value: string) => {
    setContent(value);
  };

  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);

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

  // 더블클릭/드래그 하여 선택된 텍스트가 있을 경우
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
        <ToolBarMenu setText={handleAddText} />
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
    </div>
  );
};

export default EditPost;
