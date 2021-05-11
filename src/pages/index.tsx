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
import {PlusSvg} from "~/ui/icons/PlusSvg";


export default function Home() {
    return (
        <div>
            <div className='px-8 shadow-sm sticky w-full bg-white top-0 z-50 overflow-hidden'>
                <Header/>
            </div>
            <div className='flex min-h-screen'>
                {/*use jit top-[76px  and use jit for main container and use the padding top 76 px*/}
                <div className='w-64 sticky top-24 left-0 h-full flex-shrink-0 hidden htm:block'>
                    <SideBarNav label='Recommended for you' icon={HomeSvg} nav='home'/>
                    <SideBarNav label='All your designs' icon={DesignSvg}/>
                    <SideBarNav label='Shared with you' icon={SharedSvg}/>
                    <SideBarNav label='Brand kit' icon={BrandKitSvg}/>
                    <SideBarNav label='Content Planner' icon={Planner}/>
                    <SideBarNav label='Create a team' icon={TeamSvg}/>
                    <SideBarNav label='All your folders' icon={FolderIcon} svg='folder'/>
                    <SideBarNav label='Trash' icon={TrashSvg}/>
                </div>
                <div className='flex-1 min-h-screen w-full m-0'>
                    <MainContent/>
                </div>
            </div>
            <div className='hidden ssm:block'>
                <div
                    className='fixed h-10 w-20 flex items-center right-0 bottom-4 bg-purple-700 hover:bg-purple-600 cursor-pointer px-4 rounded-full text-white text-center'>
                    <div>Help</div>
                    <span className='font-semibold px-2 text-lg'>?</span>
                </div>
            </div>
            <div className='ssm:hidden'>
                <div className='p-4 bg-purple-700 fixed right-0 bottom-4 rounded-full text-white cursor-pointer transform hover:scale-95 duration-75'>
                    <PlusSvg/>
                </div>
            </div>
            </div>

    )
}
