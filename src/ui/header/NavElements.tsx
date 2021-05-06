import {ChevronDownIcon} from "@heroicons/react/outline";

interface Props {
    label: string;
}


export function NavElements({label}: Props) {
    return (
        <div className='hover:bg-gray-100 rounded flex space-x-1 items-center px-3 py-2 cursor-pointer'>
            <div >{label}</div>
            <div className='pt-1'>
                <ChevronDownIcon className='w-4 h-4 text-gray-400 '/>
            </div>
        </div>
    )
}
