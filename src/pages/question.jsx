import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const nevigat = useNavigate();
  const { id } = useParams();
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

  const [ans, setAns] = useLocalStorage("result",{
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });

  return (
    <div className='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
      <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div className='max-w-md mx-auto'>
          <div className='p-4 sm:p-6'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>
              คำถามที่ {parseInt(id)} จาก {
                question.length
              } คำถาม
            </p>

            <p className='text-[#292929] font-[15px] mt-6'>
              {question[parseInt(id) - 1].q}
            </p>
            <br />
            {question[parseInt(id) - 1].answer.map((item, index) => {
              return (
                <button
                  className='block mt-1 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
                  onClick={() => {
                    // console.log(parseInt(id) + 1);
                    setAns({ ...ans, [`q${id}`]: item.text });
                    console.log(ans);
                    if (parseInt(id) < 6) {
                        nevigat(`/q/${parseInt(id) + 1}`);
                    }
                    else {
                        nevigat(`/result`);
                    }
                  }}
                  key={index}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
