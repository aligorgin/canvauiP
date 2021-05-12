import {ComponentProps, ComponentType, useEffect} from "react";
import clsx from "clsx";

interface Props {
    label: string;
    icon: ComponentType<ComponentProps<'svg'>>;
    color?: 'purple' | 'orange' | 'blue' | 'green' | 'pink' | 'yellow' | 'softBlue' | 'black'
}


export function PurpleElements({icon: Icon, label, color = 'purple'}: Props) {

    return (
        <div className='flex flex-col w-24 xl:w-28 items-center cursor-pointer'>
            <div
                className={clsx('shadow text-gray-100  hover:bg-gray-100 hover:opacity-100  p-3 rounded-full transform hover:scale-105 transition',
                    color === 'purple' && 'bg-gray-100 text-purple-700',
                    color !== 'purple' && 'bg-gray-400 bg-opacity-30',
                    {
                        'hover:text-purple-700': color === 'purple',
                        'hover:text-pink-500': color === 'orange',
                        'hover:text-blue-700': color === 'blue',
                        'hover:text-green-600': color === 'green',
                        'hover:text-pink-400': color === 'pink',
                        'hover:text-yellow-600': color === 'yellow',
                        'hover:text-blue-400': color === 'softBlue',
                        'hover:text-gray-900': color === 'black',
                    }
                )}>
                <Icon/>
            </div>
            <div className={clsx('text-sm text-white pt-2',color ==='purple' && 'font-medium')}>{label}</div>
            {color === 'purple' && <div className='bg-gray-100 w-4 h-4 rotate-45 transform mt-4 bg-gray-100'/>}
        </div>
    )
}