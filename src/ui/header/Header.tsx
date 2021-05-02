import {NavElements} from "~/ui/header/NavElements";
import {SearchInput} from "~/ui/header/SearchInput";
import {QuestionSvg} from "~/ui/icons/QuestionSvg";
import {SettingSvg} from "~/ui/icons/SettingSvg";
import {CanvaSvg} from "~/ui/icons/CanvaSvg";

export function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className='cursor-pointer'>
                <CanvaSvg/>
            </div>

            <div className='flex ml-5 mr-9 space-x-1 items-center cursor-pointer'>
                <div className='bg-gray-200 font-semibold px-3 py-2 rounded'>Home</div>
                <NavElements label='Templates'/>
                <NavElements label='Features'/>
                <NavElements label='Learn'/>
                <NavElements label='Pricing'/>
            </div>

            <div className='flex-1 w-full'>
                <SearchInput/>
            </div>
            <div className='flex'>
                <div className='hover:bg-gray-200 rounded py-2 px-1.5 ml-2 cursor-pointer'>
                    <QuestionSvg/>
                </div>
                <div className='hover:bg-gray-200 rounded py-2 px-1.5 mr-1 cursor-pointer'>
                    <SettingSvg/>
                </div>
            </div>
            <div className='flex'>
                <div className='rounded bg-purple-800 px-4 py-2 text-white mx-2 hover:bg-purple-700 cursor-pointer'>Create a design</div>
                <div className='bg-yellow-500 rounded-full text-center px-3 py-0.5 text-2xl cursor-pointer'>A</div>
            </div>
        </div>
    )
}

