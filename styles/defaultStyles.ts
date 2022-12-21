export const fontStyles = {
  text: `
  text-sm font-medium text-slate-900

  `,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

// https://tailwindcss.com/docs/customizing-colors
export const formStyles = {
  input: ` bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg  block w-full p-2 
  focus:ring-cyan-500 focus:outline-cyan-500 focus:border-cyan-500
  
  `,

  label: ` mb-2 block text-sm font-medium text-slate-900 
  `,
  buttonPrimary: ` text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 
  font-medium tracking-wide rounded-lg text-base py-2.5 px-4 text-center 
  inline-flex items-center no-underline
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    `,

  buttonPrimary2: ` text-white 
  bg-gradient-to-br from-pink-500 to-orange-400 
  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 
  font-medium rounded-lg text-sm py-2 px-4 text-center
  inline-flex items-center 
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none 
  `,

  buttonOutline: `
  inline-flex items-center py-1.5 px-4 border-2 border-cyan-600 text-cyan-600 font-medium text-sm rounded-lg
  hover:bg-slate-100 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
  `,

  link: `
  text-sky-500 hover:text-sky-600 whitespace-normal break-words

  `,
};
