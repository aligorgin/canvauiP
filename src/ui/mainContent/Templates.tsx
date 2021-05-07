import {useEffect, useState} from "react";

interface Props {
    label: string;
    width: number;
    height: number;
}

export function Templates({label, width, height}: Props) {
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
        <div className='pb-14 '>
            <div className='flex justify-between items-center pb-5'>
                <div className='text-2xl font-bold cursor-pointer'>{label}</div>
                <div className='text-gray-500 hover:text-black transition cursor-pointer text-sm font-medium'>See all</div>
            </div>

            <div style={{width: `${windowWidth> 898? windowWidth - 320 : windowWidth }px`}}>
                <div className='flex space-x-6 h-full max-w-full overflow-y-hidden overflow-x-auto whitespace-nowrap'>

                    {Array.from({length: 10}, (_,i) => {
                        return (
                            <div key={i} style={{width: `${width}px`, height: `${height}px`}}
                                 className='cursor-pointer object-cover flex-shrink-0'>
                                <img
                                    className='w-full h-full rounded-md object-cover'
                                    src="https://picsum.photos/200/300"
                                    alt="random image"
                                />
                            </div>
                        )
                    })}

                </div>
            </div>


        </div>
    )
}