interface Props {
    label: string;
    id?: 1;
}

export function UnderPurple({label, id}: Props) {
    return (
        <div className={`${id == 1 && 'pl-6'}`}>
            <div className='w-48 h-36 cursor-pointer'>
                <img className='w-full h-full object-cover rounded' src="https://picsum.photos/300/400" alt="random image"/>
            </div>
            <div className='pt-2 cursor-pointer'>
                {label}
            </div>
        </div>
    )
}