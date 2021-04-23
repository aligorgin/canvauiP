import {NavElements} from "~/ui/NavElements";
import {SearchInput} from "~/ui/SearchInput";
import {CogIcon, QuestionMarkCircleIcon} from "@heroicons/react/outline";

export function Header() {
    return (
        <div className='flex justify-between items-center '>
            <div className='cursor-pointer'>
                <svg width="60" height="60" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M35 0C15.67 0 0 15.67 0 35s15.67 35 35 35 35-15.67 35-35S54.33 0 35 0z"
                              fill="#00C4CC"/>
                        <path
                            d="M58.4 36c-.4 0-1.1-.1-1.1-.5s.9-.2.8-1.1c-.1-.6-.7-.8-1.3-.8-2 0-3.3 2.6-3 4.7.1.8.5 1.7 1.3 1.7.6 0 1.5-.9 1.9-2.2.2-.8 1-1.5 1.7-1.5.3 0 .5.1.6.5 0 .2 0 .6-.4 1.9-.5.9-.5 1.4-.4 1.8.1.8.5 1.4.9 1.7.1.1.2.3.2.3 0 .2-.1.4-.4.4-.1 0-.2 0-.3-.1-1.5-.6-2.1-1.6-2.3-2.6-.6.7-1.3 1.1-2.1 1.1-1.3 0-2.6-1.2-2.8-2.7-.07-.602.02-1.25.217-1.893-.593.38-1.23.593-1.816.593h-.5c-1.3 1.9-2.7 3.2-3.7 3.8-.4.2-.8.3-1.1.3-.2 0-.5-.1-.6-.3-.275-.444-.454-1.146-.563-1.947-1.403 1.537-3.34 2.347-4.236 2.347-1 0-1.6-.6-1.7-1.6v-1.1c.3-2.2 1.1-3.5 1.1-3.9 0-.1-.1-.2-.2-.2-.7 0-3 2.4-3.4 4l-.3 1.3c-.2.9-1.1 1.5-1.7 1.5-.3 0-.5-.1-.6-.5v-.4l.136-.68c-1.268.904-2.54 1.48-3.135 1.48-.9 0-1.4-.5-1.5-1.2-.6.8-1.3 1.2-2.2 1.2-1.026 0-2.03-.7-2.515-1.727-.71.8-1.523 1.61-2.483 2.228-1.4.9-3 1.6-4.9 1.6-1.7 0-3.2-.9-4-1.7-1.2-1.1-1.9-2.8-2-4.4-.6-4.9 2.4-11.2 7-14 1.1-.6 2.2-1 3.3-1 2.2 0 3.9 1.6 4.1 3.5.2 1.7-.5 3.2-2.4 4.1-1 .5-1.4.5-1.6.2-.1-.2 0-.4.2-.6 1.8-1.5 1.8-2.7 1.6-4.4-.1-1.1-.9-1.8-1.7-1.8-3.5 0-8.5 7.8-7.8 13.5.3 2.2 1.6 4.8 4.4 4.8.9 0 1.9-.3 2.8-.7 1.46-.77 2.33-1.37 3.2-2.33-.213-2.583 2.054-5.97 5.4-5.97 1.5 0 2.7.6 2.8 1.7.2 1.5-1.1 1.7-1.5 1.7-.4 0-1.1-.1-1.1-.5-.1-.4.9-.2.8-1.1-.1-.6-.7-.8-1.3-.8-2.1 0-3.3 2.9-3 4.7.1.8.5 1.6 1.3 1.6.6 0 1.5-.9 1.8-2.2.2-.9 1-1.5 1.7-1.5.3 0 .5.1.6.5v.4c-.1.4-.4 1.6-.3 1.9 0 .2.1.5.5.5.265 0 1.27-.526 2.264-1.34.34-1.72.737-3.785.737-3.958.1-.7.4-1.4 1.8-1.4.3 0 .5.1.6.5v.4l-.4 1.8c1.3-1.7 3.2-2.9 4.4-2.9.5 0 .9.3.9.8 0 .3 0 .8-.2 1.3-.4 1.1-.9 2.8-1.2 4.3 0 .4.1.8.6.8s2-.6 3.2-2.2l.02-.012c-.006-.196-.02-.39-.02-.587 0-1.2.1-2.2.3-2.9.2-.8 1.2-1.5 1.8-1.5.3 0 .6.2.6.5 0 .1 0 .3-.1.4-.4 1.3-.7 2.5-.7 3.7 0 .7.1 1.7.3 2.3 0 .1.1.2.2.2.2 0 1.6-1.3 2.6-3-.9-.6-1.4-1.6-1.4-2.8 0-2.1 1.3-3.2 2.5-3.2 1 0 1.8.7 1.8 2.1 0 .9-.3 1.9-.8 2.8h.3c.8 0 1.3-.3 1.7-.7a.854.854 0 0 1 .393-.34c.976-1.24 2.42-2.16 4.11-2.16 1.4 0 2.697.6 2.8 1.7.2 1.5-1.102 1.8-1.503 1.8z"
                            fill="#FFF"/>
                        <path d="M48.8 32c-.3 0-.5.5-.5 1 0 .8.4 1.7.9 2.2.2-.6.3-1.1.3-1.7 0-1-.4-1.5-.7-1.5"
                              fill="#00C4CC"/>
                    </g>
                </svg>
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
                <div className='hover:bg-gray-200 rounded py-2 px-1.5 ml-2'>
                    <QuestionMarkCircleIcon className='w-6 h-6 '/>
                </div>
                <div className='hover:bg-gray-200 rounded py-2 px-1.5 mr-1'>
                    <CogIcon className='w-6 h-6'/>
                </div>
            </div>
            <div className='flex'>
                <div className='rounded bg-purple-800 px-3 py-2 text-white mx-2'>Create a design</div>
                <div className='bg-yellow-500 rounded-full text-center px-3 py-0.5 text-2xl font-semibold'>A</div>
            </div>
        </div>
    )
}
