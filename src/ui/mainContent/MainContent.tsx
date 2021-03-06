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
import {useEffect, useState} from "react";
import {YourDesigns} from "~/ui/mainContent/YourDesigns";
import {Templates} from "~/ui/mainContent/Templates";

export function MainContent() {

    const [windowWidth, setWindowWidth] = useState<number>(0);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    };
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div style={{width: `${windowWidth > 898 ? windowWidth - 274 : windowWidth - 46}px`}}
             className='flex pt-8 htm:pr-8 pb-12 pl-4 flex-col m-0 overflow-x-hidden overflow-y-auto whitespace-nowrap'>
            <div className='relative '>
                <div className='flex-1 h-48 '>
                    <div className='absolute flex-col px-4 w-full h-full'>
                        <div className='relative top-5'>
                            {/*use jit to customize this font size */}
                            <div className='text-center text-3xl text-gray-100 font-bold '>Design anything</div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='relative bottom-5 '>
                                <button
                                    className='invisible sm:visible bg-gray-400 bg-opacity-20 hover:bg-opacity-30 transition px-4 py-2 text-gray-100 rounded-lg font-semibold'>
                                    Custom size
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center pt-2'>
                            <PurpleElements label='For you' icon={ForYouSvg}/>
                            <PurpleElements label='Social media' icon={SocialMediaSvg} color='blue'/>
                            <PurpleElements label='Video' icon={VideoSvg} color='green'/>
                            <PurpleElements label='Print Products' icon={PrintSvg} color='pink'/>
                            <span className='hidden xl:inline-block'>
                                <PurpleElements label='Marketing' icon={MarketingSvg} color='yellow'/>
                            </span>
                            <span className='hidden xl:inline-block'>
                                <PurpleElements label='Office' icon={OfficialSvg} color='softBlue'/>
                            </span>
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

            <div style={{height: '237px'}} className='bg-gray-100 mb-12 pt-6 pb-4 rounded-b-lg '>
                <div className='flex space-x-6 h-full max-w-full overflow-y-hidden overflow-x-auto whitespace-nowrap'>
                    <UnderPurple label='Presentation' id={1}/>
                    <UnderPurple label='Poster'/>
                    <UnderPurple label='Infographic'/>
                    <UnderPurple label='Resume'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                    <UnderPurple label='logo'/>
                </div>
            </div>

            <YourDesigns/>

            <Templates label='Instagram Post'
                       width={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 112}
                       height={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 112}
            />
            <Templates label='Instagram Stories'
                       width={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 104}
                       height={windowWidth > 1200 ? 398 : windowWidth > 900 ? 291 : 184}
            />
            <Templates label='Logos'
                       width={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 112}
                       height={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 112}
            />
            <Templates label='Your Stories'
                       width={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 104}
                       height={windowWidth > 1200 ? 398 : windowWidth > 900 ? 291 : 184}
            />
            <Templates label='Presentations'
                       width={windowWidth > 1200 ? 224 : 199}
                       height={windowWidth > 1200 ? 224 : 112}
            />
            <Templates label='Posters'
                       width={windowWidth > 1200 ? 237 : windowWidth > 900 ? 173 : 110}
                       height={windowWidth > 1200 ? 335 : windowWidth > 900 ? 245 : 155}
            />
            <Templates label='Cards'
                       width={windowWidth > 1200 ? 224 : windowWidth > 900 ? 164 : 157}
                       height={windowWidth > 1200 ? 160 : windowWidth > 900 ? 116 : 112}
            />
        </div>
    )
}