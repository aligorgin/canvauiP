import {Header} from "~/ui/header/Header";
import {SideBarNav} from "~/ui/sidebar/SideBarNav";
import {DesktopComputerIcon, FolderIcon, HomeIcon} from "@heroicons/react/outline";
import {HomeSvg} from "~/ui/icons/HomeSvg";
import {FolderSvg} from "~/ui/icons/FoldersSvg";
import {DesignSvg} from "~/ui/icons/DesignSvg";
import {SharedSvg} from "~/ui/icons/SharedSvg";
import {BrandKitSvg} from "~/ui/icons/BrandKitSvg";
import {TeamSvg} from "~/ui/icons/TeamSvg";
import {TrashSvg} from "~/ui/icons/TrashSvg";
import {MainContent} from "~/ui/mainContent/MainContent";
import {Planner} from "~/ui/icons/Planner";

function Numbers() {
    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {Array.from({length: 50}, (_, i) => (
                <div key={i}>{i}</div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <div className='px-8 py-2 shadow-sm sticky w-full top-0 z-50 bg-gray-100'>
                <Header/>
            </div>
            <div className='flex min-h-screen'>
                {/*use jit top-[76px  and use jit for main container and use the padding top 76 px*/}
                <div className='w-64 bg-gray-100 sticky top-24 left-0 h-full'>
                    <SideBarNav label='Recommended for you' icon={HomeSvg} nav='home'/>
                    <SideBarNav label='All your designs' icon={DesignSvg}/>
                    <SideBarNav label='Shared with you' icon={SharedSvg}/>
                    <SideBarNav label='Brand kit' icon={BrandKitSvg}/>
                    <SideBarNav label='Content Planner' icon={Planner}/>
                    <SideBarNav label='Create a team' icon={TeamSvg}/>
                    <SideBarNav label='All your folders' icon={FolderIcon} svg='folder'/>
                    <SideBarNav label='Trash' icon={TrashSvg}/>
                </div>
                <div className='flex-1'>
                    <MainContent/>
                    <Numbers/>
                </div>
            </div>
        </div>
    )
}
