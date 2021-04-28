import {ComponentProps, ComponentType} from "react";

interface Props {
    label: string;
    icon: ComponentType<ComponentProps<'svg'>>;
}

export function PurpleElements({icon: Icon, label}: Props) {
    return (
        <div className='flex flex-col w-24 items-center cursor-pointer inline-block'>
            <div className='text-pink-400 bg-gray-100 p-2.5 rounded-full transform hover:scale-105 transition'>
                <Icon />
            </div>
            <div className='text-sm text-white pt-2'>{label}</div>
        </div>
    )
}