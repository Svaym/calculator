import { useState } from "react";

export default function Calculator() {
  // пример
  const [input, setInput] = useState('')
  // результат примера
  const [result, setResult] = useState('')
  function handleClick(val) {
    setInput(input+val)
  }
  function calculate() {
    setResult(eval(input))
  }
  function clear() {
    setInput('')
    setResult('')
  }
  return (
    <div className="container">
      <h1 className="text-2xl text-center">{result==0 ? '0' : `${result}`}</h1>
      <input className="text-lg" type="text" value={input} readOnly />
      <div className="grid grid-rows-4 grid-cols-4 gap-2 mt-2">
        <button onClick={() => handleClick(9)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">9</button>
        <button onClick={() => handleClick(8)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">8</button>
        <button onClick={() => handleClick(7)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">7</button>
        <button onClick={() => handleClick('+')} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">&#x002B;</button>
        <button onClick={() => handleClick(6)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">6</button>
        <button onClick={() => handleClick(5)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">5</button>
        <button onClick={() => handleClick(4)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">4</button>
        <button onClick={() => handleClick('-')} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">&#x002D;</button>
        <button onClick={() => handleClick(3)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">3</button>
        <button onClick={() => handleClick(2)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">2</button>
        <button onClick={() => handleClick(1)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">1</button>
        <button onClick={() => handleClick('*')} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">&#215;</button>
        <button onClick={() => handleClick(0)} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">0</button>
        <button onClick={() => clear()} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">AC</button>
        <button onClick={() => handleClick('/')} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">&#247;</button>
        <button onClick={() => calculate()} className="py-2 px-4 bg-gray-400 rounded-full transition duration-200 ease-linear hover:brightness-125">&#61;</button>
      </div>
    </div>
  );
}
