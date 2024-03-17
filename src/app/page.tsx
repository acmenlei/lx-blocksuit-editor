"use client";

import "@blocksuite/presets/themes/affine.css";

import { createEmptyDoc, PageEditor } from "@blocksuite/presets";
import { Text } from "@blocksuite/store";
import { useEffect, useRef } from "react";

type HomeProps = {};

export default function Home(props: HomeProps) {
  const editorRef = useRef<HTMLDivElement>();
  const doc = createEmptyDoc().init();
  const editor = new PageEditor();
  editor.doc = doc;
  editor.lang = "zh-cn";
  useEffect(() => {
    editorRef.current?.appendChild(editor);
    const paragraphs = doc.getBlockByFlavour("affine:paragraph");
    const paragraph = paragraphs[0];
    doc.updateBlock(paragraph, { text: new Text("初始化编辑器内容🌴") });
  }, []);

  function getContent() {
    console.log(doc.getSchemaByFlavour("affine:paragraph"));
  }

  return (
    <>
      <header className="h-[50px] bg-orange-500 flex items-center px-10">
        <div className="logo text-xl text-white select-none">语雀</div>
      </header>
      <div className="flex">
        <div
          onClick={getContent}
          className="flex-1 text-sm bg-gray-100 hover:opacity-80 p-1"
        >
          <h2>目录结构</h2>
        </div>
        <div
          spellCheck={false}
          ref={editorRef as any}
          className="h-[calc(100vh-50px)] basis-4/5"
        ></div>
      </div>
    </>
  );
}
