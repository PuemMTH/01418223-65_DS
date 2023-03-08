import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
export default function App() {
  return (
    <section className='py-24 flex items-center min-h-screen justify-center from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br '>
      <div className='mx-auto max-w-[43rem]'>
        <div className='text-center'>
          <p className='text-lg font-medium leading-8 text-indigo-600/95'>
          Mini Project
          </p>
          <h1 className='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black'>
            Data Science and Application Programs
          </h1>
          <p className='mt-3 text-lg leading-relaxed text-slate-400'>
            พัฒนาโปรแกรมและแอปพลิเคชันด้วยภาษา Javascript และ Framwork React
          </p>
        </div>

        <div className='mt-6 flex items-center justify-center gap-4'>
          {/* <a
            href='#'
            className='transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700'
          >
            เริ่มตอบคำถาม
          </a> */}
          
          <Link
            to='/q/1'
            className='transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700'
            onClick={() => {
              localStorage.clear();
            }}
          >
            เริ่มตอบคำถาม
          </Link>
          
          {/* <a
            href='#'
            className='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'
          >
            {" "}
            ผู้จัดทำ{" "}
          </a> */}
          <Link
            to='/about'
            className='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'
          >
            {" "}
            ผู้จัดทำ{" "}
          </Link>

        </div>
      </div>
    </section>
  );
}
