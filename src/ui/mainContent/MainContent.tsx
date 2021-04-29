import {PurpleElements} from "~/ui/mainContent/PurpleElements";
import {ForYouSvg} from "~/ui/icons/MainSvgs/ForYouSvg";
import {PresentationsSvg} from "~/ui/icons/MainSvgs/Presentations";
import {SocialMediaSvg} from "~/ui/icons/MainSvgs/SocialMediaSvg";
import {VideoSvg} from "~/ui/icons/MainSvgs/VideoSvg";
import {MarketingSvg} from "~/ui/icons/MainSvgs/MarketingSvg";
import {OfficialSvg} from "~/ui/icons/MainSvgs/OfficeSvg";
import {MoreSvg} from "~/ui/icons/MainSvgs/MoreSvg";
import {PrintSvg} from "~/ui/icons/MainSvgs/PrintSvg";
import {UnderPurple} from "~/ui/mainContent/UnderPurple";

export function MainContent() {
    return (
        <div className='pt-9 pr-9 pb-12 pl-4 flex-col'>
            <div className='relative'>
                <div className='flex-1 h-48 '>
                    <div className='absolute flex-col px-4 w-full h-full'>
                        <div className='relative top-5'>
                            {/*use jit to customize this font size */}
                            <div className='text-center text-3xl text-gray-100 font-bold '>Design anything</div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='relative bottom-5 '>
                                <button
                                    className='bg-gray-400 bg-opacity-20 hover:bg-opacity-30 transition px-4 py-2 text-gray-100 rounded-lg font-semibold'>
                                    Custom size
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center pt-2'>
                            <PurpleElements label='For you' icon={ForYouSvg}/>
                            <PurpleElements label='Presentations' icon={PresentationsSvg} color='orange'/>
                            <PurpleElements label='Social media' icon={SocialMediaSvg} color='blue'/>
                            <PurpleElements label='Video' icon={VideoSvg} color='green'/>
                            <PurpleElements label='Print Products' icon={PrintSvg} color='pink'/>
                            <PurpleElements label='Marketing' icon={MarketingSvg} color='yellow'/>
                            <PurpleElements label='Office' icon={OfficialSvg} color='softBlue'/>
                            <PurpleElements label='More' icon={MoreSvg} color='black'/>
                        </div>
                    </div>
                    <div className='h-full w-full overflow-hidden'>
                        <img className='h-full w-full rounded-lg rounded-b-none  object-cover'
                             src="https://static.canva.com/web/images/f1ea2ceabc2022676b55fe69cecbbf5c.jpg"
                             alt="background image of elements"/>
                    </div>
                </div>
            </div>

            <div style={{height: '237px'}} className='flex bg-gray-200 mb-12 pt-6 pb-4 rounded-b-lg space-x-6'>
                <UnderPurple label='Presentation' id={1}/>
                <UnderPurple label='Poster'/>
                <UnderPurple label='Infographic'/>
                <UnderPurple label='Resume'/>
                {/*<UnderPurple label='logo'/>*/}
            </div>

            <div>
                your design
            </div>

            <div>
                instgram posts
            </div>

            <div>
                a4 acounts
            </div>

            <div>
                posters
            </div>

            <div>
                instagram stroies
            </div>
        </div>
    )
}