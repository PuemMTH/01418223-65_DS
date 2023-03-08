import {Link} from "react-router-dom";
export default function refer() {
    return (
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
            <div>
                <h2 class="text-gray-800 text-3xl font-semibold">
                    ผู้จัดทำ
                </h2>
                <p class="mt-2 text-gray-600">
                <span
                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-500 rounded-full"
                >
                    6421600093
                </span>
                &nbsp;นาย ธนภัทร เอี่ยมอาจ
                </p>
                <p class="mt-2 text-gray-600">
                <span
                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-500 rounded-full"
                >
                    6421600094
                </span>
                &nbsp;นาย ธนวัฒน์ สุขสวัสดิ์
                </p>
            </div>
            <div class="flex justify-end mt-4">
                <Link
                    to="/"
                    class="text-xl font-medium text-indigo-500"
                >
                    ย้อนกลับ
                </Link>
            </div>
        </div>
    );
}