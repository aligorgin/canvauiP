import {ChevronRight} from "~/ui/icons/MainSvgs/ChevronRight";

export function YourDesigns() {
    return (
        <div className='pb-12'>
            <div className='inline-block pb-4'>
                <div className='relative flex'>
                    <div className='text-2xl font-bold'><span className='tracking-wide'>Your</span> designs</div>
                    <div className='absolute -right-4 top-3'>
                        <ChevronRight/>
                    </div>
                </div>
            </div>
            <div className='flex pb-3'>
                <div className='w-48 h-36 '>
                    <img className='w-full h-full object-cover rounded-md' src="https://picsum.photos/200/300" alt="random image"/>
                </div>
            </div>
            <div className='inline-block'>
                <div className='font-normal text-left'>hello@somewhere.com</div>
                <div className='text-sm text-gray-400'>Edited 30 minutes ago</div>
            </div>

        </div>
    )
}