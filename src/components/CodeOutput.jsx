import { useState } from "react";
import axios from "axios";
import { LANGUAGES, getFileExtension } from "./languages";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

async function executeCode(language, sourceCode) {
  try {
    const response = await API.post("/execute", {
      language,
      version: LANGUAGES[language],
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: sourceCode,
        },
      ],
      stdin: "",
      args: [],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    });

    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw new Error("Error executing code");
  }
}

export default function Output({ language, sourceCode, setOutput }) {
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    if (!sourceCode) {
      setOutput({
        output: "No code available to run.",
        isError: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const { run: result } = await executeCode(language, sourceCode);

      setOutput({
        output: result.output || "Execution completed, but no output was returned.",
        isError: result.code !== 0,
      });
    } catch (error) {
      console.error("Error running code:", error);
      setOutput({
        output: error.message || "An unexpected error occurred.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={runCode}
        disabled={isLoading}
        style={{
          padding: "8px 16px",
          margin: "16px 0",
          borderRadius: "4px",
          border: "1px solid #333",
          background: isLoading ? "#ccc" : "#333",
          color: isLoading ? "#666" : "#fff",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
    </div>
  );
}


// Todo: For Checking Runtime Logs of API
// import axios from 'axios';

// const EXTENSION_MAP = {
//   python: 'py',
//   javascript: 'js',
//   java: 'java',
//   cpp: 'cpp',
//   typescript: 'ts',
//   ada: 'adb',
//   assembly: 'asm',
//   c: 'c',
//   csharp: 'cs',
//   clojure: 'clj',
//   cobol: 'cob',
//   coffeescript: 'coffee',
//   delphi: 'pas',
//   erlang: 'erl',
//   fsharp: 'fs',
//   fortran: 'f90',
//   go: 'go',
//   groovy: 'groovy',
//   haskell: 'hs',
//   julia: 'jl',
//   kotlin: 'kt',
//   lisp: 'lisp',
//   lua: 'lua',
//   matlab: 'm',
//   'objective-c': 'm',
//   pascal: 'pas',
//   perl: 'pl',
//   php: 'php',
//   powershell: 'ps1',
//   r: 'r',
//   ruby: 'rb',
//   rust: 'rs',
//   scala: 'scala',
//   swift: 'swift',
//   tcl: 'tcl',
//   vbnet: 'vb',
// };

// async function fetchLanguagesFromPiston() {
//   try {
//     const response = await axios.get('https://emkc.org/api/v2/piston/runtimes');
//     const runtimes = response.data;

//     const LANGUAGES = {};
//     const extensions = {};

//     runtimes.forEach(runtime => {
//       LANGUAGES[runtime.language] = runtime.version;
//       extensions[runtime.language] = EXTENSION_MAP[runtime.language] || '';
//     });

//     console.log('LANGUAGES:', LANGUAGES);
//     console.log('extensions:', extensions);
//   } catch (err) {
//     console.error('Error fetching languages from Piston API:', err.message);
//   }
// }

// fetchLanguagesFromPiston();