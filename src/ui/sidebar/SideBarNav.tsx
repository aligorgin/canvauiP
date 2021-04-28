import {ComponentProps, ComponentType} from "react";
import {HomeIcon} from "@heroicons/react/outline";


interface Props {
    label: string;
    icon: ComponentType<ComponentProps<'svg'>>;
    nav?: 'home';
    svg?: 'folder';
}

export function SideBarNav({label, icon: Icon, nav, svg}: Props) {
    return (
        <div
            className={`${nav === 'home' && 'bg-gray-200 font-bold'} pl-3 py-2 hover:bg-gray-200 bg-transparent ml-3 my-2 flex items-center rounded`}>
            <div className='mr-3'>
                <Icon className={`${svg === 'folder' && 'w-6 h-6'}`}/>
            </div>
            <div className={`${nav === 'home' ? 'text-gray-900' : 'text-gray-600'}`}>{label}</div>
        </div>
    )
}