import react, { useState } from 'react'
import './index.css'
import './App.css'

const PatternGenerate = () => {

  const [rows, setRows] = useState("");
  const [number, setNumber] = useState("");
  const [pattern, setPattern] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const r = parseInt(rows);
    const n = parseInt(number);

    if (isNaN(r) || isNaN(n) || r <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    const patternForm = [];

    for (let i = 1; i <= r; i++) {

      patternForm.push(Array(i).fill(n).join(" "));
    }

    setPattern(patternForm);
  };

  return (
    
    <div className="max-w-md mx-auto p-7 m-7"> 
      <h1 className="text-xl font-bold mb-4"> Number Pattern Generator</h1>

      <form onSubmit= {handleSubmit}  className="flex flex-col gap-2"> 

        <input className="mb-2 bg-gray-200 border-2 m-1 font-medium border-black-400 text-gray-900"
          type="number"
          placeholder="Enter number of rows"
          value={rows}
          onChange={(e) => setRows(e.target.value)}  />

        <input  className="mb-3 bg-gray-200 border-2 m-1 font-medium border-black-400 text-gray-900"
          type="number"
          placeholder="Enter number to print"
          value={number}
          onChange={(e) => setNumber(e.target.value)}  />

        <button
          type="submit" className="bg-green-500 hover:bg-red-600 rounded-2xl font-bold">

          Submit
        </button>

      </form>

      {pattern.length > 0 && (
        <div >
            <br />
          <h2 className="text-xl font-bold mb-2 ">Pattern Output:</h2>
          <br />
          <pre className="bg-gray-100 p-4 rounded-lg border-3 border-black-300 text-gray-800 font-bold whitespace-pre-wrap">
            {pattern.join("\n")}
          </pre>

        </div>
      )}
    </div>
  );
};

export default PatternGenerate;


