import {SearchIcon} from "@heroicons/react/outline";

export function SearchInput (){
    return(
        <div className='flex rounded border border-gray-300 items-center w-full hover:border-gray-400 transition focus-within:border-gray-400'>
            <SearchIcon className='w-6 h-6 ml-3'/>
            <input className='px-4 py-2 w-full bg-transparent focus:outline-none' placeholder='Try "A4 Document"'/>
        </div>
    )
}