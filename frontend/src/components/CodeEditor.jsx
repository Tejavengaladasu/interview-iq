import React from 'react'
import Editor from '@monaco-editor/react'
import {Loader2Icon,PlayIcon} from "lucide-react"
import {LANGUAGE_CONFIG} from "../data/problems.js"
const CodeEditor = ({selectLanguage,code,isRunning,onLanguageChange,onCodeChange,onRunCode}) => {
  return (
    <div className='h-full bg-base-300 flex flex-col'>
      {/* header */}
      <div className='flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300'>
        <div className='flex items-center gap-3'>
          <img
          src={LANGUAGE_CONFIG[selectLanguage].icon}
          alt={LANGUAGE_CONFIG[selectLanguage].name}
          className='size-6 '
          />
          <select className='select select-sm'
          value={selectLanguage}
          onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key,value])=>(
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-primary btn-sm gap-2' disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className='size-4 animate-spin' />
              Running...
            </>
          ):(
            <>
              <PlayIcon className='size-4' />
              Run Code
            </>
          )}
        </button>
      </div>

      {/* editor */}
      <div className='flex-1'>
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme='vs-dark'
          options={{
            fontSize:14,
            lineNumbers: "on",
            scrollBeyondLastLine:false,
            automaticLayout:true,
            minimap:{enabled:false}
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditor