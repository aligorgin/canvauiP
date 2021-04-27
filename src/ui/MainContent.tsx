export function MainContent() {
    return (
        <div className='pt-9 pr-9 pb-12 pl-4 flex-col'>
            <div className='relative'>
                <div className='flex-1 h-48 '>
                    <div className='absolute flex-col px-4 w-full h-full'>
                        <div className='relative top-6'>
                            <div className='text-center text-4xl text-gray-100 font-bold '>Design anything</div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='relative bottom-6 mr-1'>
                                <button className='bg-gray-400 bg-opacity-20 hover:bg-opacity-30 transition px-4 py-2 text-gray-100 rounded-lg font-semibold'>Custom size</button>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 justify-center'>
                            <div>For you</div>
                            <div>Presentations</div>
                            <div>Social media</div>
                            <div>Video</div>
                            <div>Print products</div>
                            <div>Marketing</div>
                            <div>office</div>
                            <div>more</div>
                        </div>
                    </div>
                    <div className='h-full w-full overflow-hidden'>
                        <img className='h-full w-full rounded-lg rounded-b-none  object-cover'
                             src="https://static.canva.com/web/images/f1ea2ceabc2022676b55fe69cecbbf5c.jpg"
                             alt="background image of elements"/>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 h-48 flex-1'>
                thing for purple
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