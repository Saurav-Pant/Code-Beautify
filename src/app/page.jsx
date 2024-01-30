// "use client";

// import React, { useState } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

// const CodeSnippet = () => {
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('javascript');

//   const handleCodeChange = (newCode) => {
//     setCode(newCode);
//   };

//   const handleLanguageChange = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   const handleDownload = () => {
//     console.log("Download button clicked");
//   };

//   return (
//     <div className="bg-black h-screen flex flex-col items-center justify-center">
//       <div className="bg-white h-80 w-1/3">
//         <SyntaxHighlighter
//           language={language}
//           style={vscDarkPlus} 
//         >
//           {code}
//         </SyntaxHighlighter>
//       </div>
//       <div className="bg-red-500 w-10/12 h-24 mt-16 rounded-lg flex">
//         <div className="w-1/3 p-2">
//           <select
//             value={language}
//             onChange={(e) => handleLanguageChange(e.target.value)}
//             className="w-full bg-white text-black rounded p-2"
//           >
//             <option value="javascript">JavaScript</option>
//             <option value="typescript">TypeScript</option>
//             <option value="python">Python</option>
//           </select>
//         </div>
//         <div className="w-2/3 p-2">
//           <button
//             onClick={handleDownload}
//             className="bg-white text-red-500 px-4 py-2 rounded"
//           >
//             Download
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeSnippet;

import React from 'react'

const page = () => {
  return (
    <div>Working...</div>
  )
}

export default page