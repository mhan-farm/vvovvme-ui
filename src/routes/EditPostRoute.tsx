import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // dark 모드를 위한 import
import { Editor } from "@toast-ui/react-editor";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import DefaultLayout from "../layouts/DefaultLayout";
import SideVar from "../components/SideVar";

// default value를 위한 interface
interface ToastUIProps {
  initialValue?: string;
}

const EditRoute = ({ initialValue = "" }: ToastUIProps) => {
  const [initialValueState, setInitialValueState] = useState(initialValue);
  const editorRef = useRef<Editor | null>(null);

  const [post, setPost] = useState("");
  const [code, setCode] = useState<string>("");

  const onChange = useCallback((value: string, viewUpdate: any) => {
    setPost(value);
  }, []);

  const savePostOnClick = (value: string) => {
    console.log(value);
    console.log("save");
  };

  const handleCode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    setCode("```" + data + "\n\n```");
  };

  const handleRegisterButton = () => {
    console.log(editorRef.current?.getInstance().getHTML());
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().focus();
      if (initialValue === "") {
        editorRef.current.getInstance().reset();
      } else {
        editorRef.current.getInstance().setMarkdown(initialValue);
        setInitialValueState(initialValue);
      }
    }
  }, [initialValue]);

  return (
    <DefaultLayout>
      <div className="flex-1 flex w-full">
        <SideVar />

        <div className="flex flex-col">
          <div className="mt-32 mx-auto">
            <Editor
              placeholder="내용을 입력해주세요."
              previewStyle="vertical" // 미리보기 스타일 지정
              height="300px"
              initialEditType="markdown" // default 편집기 타입 지정
              initialValue={initialValueState} // default value
              toolbarItems={[
                // 상단바 기능메뉴 지정
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
              ]}
              ref={editorRef} // input 값을 가져오기 위한 ref
              useCommandShortcut={true}
              theme="dark" // 테마 다크모드
            />

            <button onClick={handleRegisterButton}>등록</button>
          </div>

          <div className="flex flex-col w-full h-full">
            <div className="mt-20 flex flex-col">
              <select value={code} onChange={handleCode} data-te-select-init>
                <option value="">선택하세요</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c++">C++</option>
                <option value="c#">C#</option>
                <option value="php">PHP</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>
              {/* <textarea id="myTextArea" /> */}
            </div>

            <div className="relative">
              <input
                data-te-select-input-ref=""
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600 py-[0.32rem] px-3 leading-[1.6]"
                type="text"
                role="listbox"
                aria-multiselectable="false"
                aria-disabled="false"
                aria-haspopup="true"
                aria-expanded="false"
                readOnly={true}
                data-te-input-placeholder-active=""
                data-te-input-focused=""
              />
              <span className="absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </div>

            <CodeMirror
              className="flex relative justify-center h-full mx-10 mt-10"
              value={code}
              width="100%"
              extensions={[
                markdown({ base: markdownLanguage, codeLanguages: languages }),
              ]}
              onChange={onChange}
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
      </div>
    </DefaultLayout>
  );
};

export default EditRoute;
