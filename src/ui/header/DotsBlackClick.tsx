import {DotsBlack} from "~/ui/icons/DotsBlack";
import {useState} from "react";

export function DotsBlackClick() {

    const [click, setClick] = useState<boolean>(false);

    console.log(click)

    return (
        <div className='relative'>
            <div onClick={() => {
                setClick(!click)
            }}>
                <DotsBlack/>
            </div>
            {/*<div className='flex z-30'>*/}
            {/*    <div className='w-24 h-24 bg-red-900 absolute top-6 left-0'>hey</div>*/}
            {/*</div>*/}
        </div>
    )

}