import {NavElements} from "~/ui/header/NavElements";
import {SearchInput} from "~/ui/header/SearchInput";
import {QuestionSvg} from "~/ui/icons/QuestionSvg";
import {SettingSvg} from "~/ui/icons/SettingSvg";
import {CanvaSvg} from "~/ui/icons/CanvaSvg";

import {DotsBlackClick} from "~/ui/header/DotsBlackClick";

export function Header() {
    return (
        <div style={{minHeight: '72px'}} className='flex justify-between items-center'>
            <div className='cursor-pointer hidden ssm:inline-block'>
                <CanvaSvg/>
            </div>

            <div className='flex ml-5 mr-9 space-x-1 items-center cursor-pointer hidden htm:inline-flex'>
                <div className='bg-gray-100 font-semibold px-3 py-2 rounded hidden htm:inline-block'>Home</div>
                <span className='hidden gglg:inline-block'>
                    <NavElements label='Templates'/>
                </span>
                <span className='hidden glg:inline-block'>
                    <NavElements label='Features'/>
                </span>
                <span className='hidden lgg:inline-block'>
                    <NavElements label='Learn'/>
                </span>
                <span className='hidden xl:inline-block'>
                    <NavElements label='Pricing'/>
                </span>
                <div className='py-2 px-1.5 hover:bg-gray-100 rounded xl:hidden focus:outline-none relative'>
                    <DotsBlackClick/>
                </div>
            </div>

            <div className='flex-1 w-full htm:ml-0 ml-4 '>
                <SearchInput/>
            </div>
            <div className='hidden ssm:flex'>
                <div className='hover:bg-gray-100 rounded py-2 px-1.5 ml-2 cursor-pointer'>
                    <QuestionSvg/>
                </div>
                <div className='hover:bg-gray-100 rounded py-2 px-1.5 mr-1 cursor-pointer'>
                    <SettingSvg/>
                </div>
            </div>
            <div className='hidden ssm:flex'>
                <div
                    className='whitespace-nowrap rounded bg-purple-700 px-4 py-2 text-white mx-2 h-10 hover:bg-purple-600 cursor-pointer font-semibold'>Create
                    a design
                </div>
                <div className='bg-yellow-500 rounded-full text-center px-3 py-0.5 text-2xl cursor-pointer'>A</div>
            </div>
        </div>
    )
}

