import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const nevigat = useNavigate();
  const [result, setResult] = useState("");
  const [local, setLocal] = useLocalStorage("result", "");

  //   equipment = PhoneTabet
  //   |   Co = std: Moba (54.0/25.0)
  //   |   Co = Company/Government_work: RPG (5.0/2.0)
  //   |   Co = personal_business
  //   |   |   Sex = Man: FPS (3.0)
  //   |   |   Sex = Woman: Moba (2.0)
  //   equipment = Computer: FPS (52.0/21.0)
  //   equipment = Console: FPS (3.0/1.0)
  const question = [
    {
      q: "เพศของคุณคืออะไร ?",
      answer: [
        {
          text: "ผู้ชาย",
        },
        {
          text: "ผู้หญิง",
        },
      ],
    },
    {
      q: "อายุของคุณคือ ?",
      answer: [
        {
          text: "12-18 ปี",
        },
        {
          text: "19-25 ปี",
        },
      ],
    },
    {
      q: "อาชีพของคุณคือ ?",
      answer: [
        {
          text: "นักเรียน / นักศึกษา",
        },
        {
          text: "งานบริษัท/ข้าราชการ",
        },
        {
          text: "ธุรกิจส่วนตัว",
        },
      ],
    },
    {
      q: "เวลาทำงานต่อวันของคุณคือ ?",
      answer: [
        {
          text: "น้อยกว่า 5 ชั่วโมง",
        },
        {
          text: "5-8 ชั่วโมง",
        },
        {
          text: "มากกว่า 8 ชั่วโมง",
        },
      ],
    },
    {
      q: "อุปกรณ์ที่ใช้เล่นเกม ?",
      answer: [
        {
          text: "คอมพิวเตอร์",
        },
        {
          text: "มือถือ/แท็บเล็ต",
        },
        {
          text: "เครื่อง console",
        },
      ],
    },
    {
      q: "เวลาที่ใช้เล่นเกมต่อวัน ?",
      answer: [
        {
          text: "น้อยกว่า 2 ชั่วโมง",
        },
        {
          text: "3-5 ชั่วโมง",
        },
        {
          text: "6-8 ชั่วโมง",
        },
        {
          text: "มากกว่า 8 ชั่วโมง",
        },
      ],
    },
  ];
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("result"));

    if(local.q5 == "มือถือ/แท็บเล็ต"){
        if (local.q3 == "นักเรียน / นักศึกษา") {
            setResult("Moba");
        }else if (local.q3 == "งานบริษัท/ข้าราชการ") {
            setResult("RPG");
        }else if (local.q3 == "ธุรกิจส่วนตัว") {
            if (local.q1 == "ผู้ชาย") {
                setResult("FPS");
            }
            if (local.q1 == "ผู้หญิง") {
                setResult("Moba");
            }
        }
        else if(local.q5 == "คอมพิวเตอร์"){
            setResult("FPS");
        }
        else if(local.q5 == "เครื่อง console"){
            setResult("FPS");
        }
    }

  }, []);
  return (
    <main class='flex h-screen w-screen items-center justify-center bg-gray-700'>
      <div>
        <div class='group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8'>
          <div class='mb-3 text-right'>
            <button class='text-gray-50 tra nsition-all duration-300 hover:scale-110 hover:text-red-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='h-6 w-6'
              >
                <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
              </svg>
            </button>
          </div>
          <div class='flex items-center gap-x-2'>
            <img
              class='aspect-[2/2] w-16'
              src='https://img.icons8.com/fluency/48/null/mac-os.png'
            />
            <div>
              <h3 class='text-xl font-bold text-gray-50'>ทายใจ</h3>
              <span class='text-xs text-gray-300'>
                ทายความน่าจะเป็นที่จะแนวเกมที่ชื่นชอบ
              </span>
            </div>
          </div>
          <div class='my-4'>
            <h3 class='text-2xl font-medium text-gray-200'>คำตอบของคุณคือ</h3>
            <div class='text-sm font-medium'>
              <span class='m-1 ml-0 inline-block text-pink-500'>
                แนวเกมที่คุณชื่นชอบคือ
              </span>
              <span class='m-1 inline-block text-blue-500'>{result}</span>
            </div>
          </div>
          <div class='flex items-center justify-between'>
            <a
              class='text-sm font-medium text-gray-50'
              onClick={() => nevigat("/")}
            ></a>
            <a
              class='font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80'
              onClick={() => nevigat("/")}
            >
              ย้อนกลับ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
