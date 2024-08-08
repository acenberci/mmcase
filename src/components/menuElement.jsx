import React from 'react'
import Image from "next/image";

export default function MenuElement(props) {
    return (
        <a href='#' className={` border-[1px] border-transparent px-[4px] py-[3px] rounded-[8px] gap-[4px] flex text-white items-center hover:bg-hoverMainBlue ${props.selected && "bg-hoverMainBlue"}`}>
            <div className='p-[10px] size-[40px] flex'>
                <Image
                    src={`/icons/menu/${props.elementIcon}.png`}
                    width={20}
                    height={20}
                    alt=""
                    className='h-full'
                />
            </div>
            <h4 className=' text-[15px] font-[500]'>{props.elementTitle}</h4>
        </a>
    )
}
