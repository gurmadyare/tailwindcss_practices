import { useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode(){
    setIsDarkMode(!isDarkMode);
  }

  return (
    <main className="p-10">
      <h1 className='text-center mt-5 text-blue-500'>
        Hello world!
      </h1>

      <div className="w-full bg-violet-500 border-2 border-red-600 rounded-sm my-4 p-2">
        <p className='text-center text-white text-lg'>
          Hey div! 
        </p>
      </div>

      {/* Layout */}
      <div className="fixed h-8 bg-cyan-400 top-3 left-9 right-9">
      </div>

      <div className="flex justify-between mt-8">
        <div className="h-16 w-16 bg-blue-500 rounded-full"></div>
        <div className="h-16 w-16 bg-blue-500 rounded-full"></div>
        <div className="h-16 w-16 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="h-12 bg-violet-700"></div>
        <div className="h-12 bg-violet-700"></div>
        <div className="h-12 bg-violet-700"></div>
      </div>

      {/* Mediaqueries (responsiveness) */}
      <div className="mt-10 md:block  hidden">
        <p>I will appear for device resolution higher than 768px</p>
      </div>

      {/* Hover, focus, active, e.t.c */}
      <button className="special-button">
        Click me!
      </button>

      {/* ul & li */}
      <ul>
        <li className="bg-white py-2 px-5 first:bg-yellow-300 my-2">Item 1</li>
        <li className="bg-white py-2 px-5 odd:bg-cyan-300 even:bg-green-300 my-2 ">Item 2</li>
        <li className="bg-white py-2 px-5 odd:bg-cyan-300 even:bg-green-300 my-2 ">Item 3</li>
        <li className="bg-white py-2 px-5 odd:bg-cyan-300 even:bg-green-300 my-2 ">Item 4</li>
        <li className="bg-white py-2 px-5 odd:bg-cyan-300 even:bg-green-300 my-2 ">Item 5</li>
      </ul>

      {/* Dark Theme */}
      <div className={`my-10 py-7 px-5 shadow-xl ring-1 ring-slate-900/5 rounded-md ${isDarkMode ? 'bg-white' : 'bg-black'}`}>
        <h3 className={`text-sm font-semibold tracking-tight ${isDarkMode ?' text-slate-900' : 'text-white' }`}>This is a text element</h3>
        <p className={`mt-2 text-xs ${isDarkMode ? 'text-slate-500' : 'text-blue-100'}`}>This is an even longer p tag element</p>
        
        <button 
          onClick={toggleDarkMode}
          id="toggleDark"
          className="mt-10 py-2 px-5 text-white font-medium bg-violet-500 rounded-full hover:bg-purple-600">
          Toggle Dark Theme
        </button>
      </div>
 
      {/* New colors, paddings, e.t.c : #WAY-1 puuting in squareBrackets [] */}
      <p className="text-[12px] text-chestnut bg-stone-100 py-2 p-[16px] ">
        Custom Color
      </p>
      
    </main>
  )
}

export default App
