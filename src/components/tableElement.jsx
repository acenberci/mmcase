import React from 'react'

export default function TableElement(props) {
    return (
        <tr className='border-y hover:bg-[rgb(225,225,225)]'>
            <td className='py-[10px] px-[15px]'>
                <div className={`border-l-[5px] border-solid ${props.payment == 1 ? "border-[rgb(92,184,77)]" : props.overdueDays < 50 ? "border-[rgb(230,90,90)]" : "border-[rgb(251,227,16)]"} pl-[6px] flex flex-col`}>
                    <h4 className='font-[600] text-[14px] text-[rgb(41,41,41]'>{props.title}</h4>
                    <h4 className='font-[500] text-[13px] text-[rgba(41,41,41,0.5)]'>Invoice Date: {props.invoiceDate}</h4>
                </div>
            </td>
            <td className="px-[5px]">
                <div className='flex flex-col'>
                    <div className='flex gap-[5px] items-center'>
                        {props.payment == 1 ? <h4 className="font-[500] text-[13px] text-[rgb(45,136,43)] border border-[rgb(45,136,43)] px-[5px] py-[3px] w-fit">Paid</h4>
                            : props.payment == 0 ? <h4 className="font-[500] text-[13px] text-[rgb(4,32,64)] border border-[rgb(4,32,64)] px-[5px] py-[3px] w-fit">Partially Paid</h4>
                                : <h4 className="font-[500] text-[13px] text-[rgb(4,32,64)] border border-[rgb(4,32,64)] px-[5px] py-[3px] w-fit">Unpaid</h4>}
                        {props.payment != 1 && props.overdueDays < 50 ? <h4 className='font-[500] text-[13px] text-[rgb(202,3,27)]'>Overdue by {props.overdueDays} days</h4> : <h4 className='font-[500] text-[13px] text-[rgb(4,32,64)]'>In 50 days</h4>
                        }
                    </div>
                    <div className="flex">
                        <h4 className="font-[500] text-[13px] text-[rgb(79,99,121)]">Due Date :</h4>
                        <h4 className="font-[500] text-[13px] text-[rgba(4,32,64,0.85)]">{props.dueDate}</h4>
                    </div>
                </div>
            </td>
            <td>
                <div className='flex justify-center '>
                    {props.status == 1 ? <p className=' px-[8px] py-[1px] rounded-[6px] border border-transparent bg-[rgb(45,136,43)] w-fit font-[500] text-[rgb(241,248,241)]'>Approved</p>
                        : props.status == 0 ? <p className=' px-[8px] py-[1px] rounded-[6px] border border-transparent bg-[rgb(236,245,254)] w-fit font-[500] text-[rgb(4,32,64)]'>Draft</p>
                            : props.status == -1 ? <p className=' px-[8px] py-[1px] rounded-[6px] border border-transparent bg-[rgb(252,219,219)] w-fit font-[500] text-[rgb(202,0,0)]'>Rejected</p>
                                : <p className=' px-[8px] py-[1px] rounded-[6px] border border-transparent bg-[rgb(252,219,219)] w-fit font-[500] text-[rgb(202,0,0)]'>Canceled</p>
                    }
                </div>
            </td>
            <td className='text-right'>
                <div className='flex flex-col justify-between px-[5px]'>
                    <div className='flex self-end gap-[5px]'>
                        <p className='font-[500] text-[12px] text-[rgb(41,41,41)] self-end'>{props.currency}</p>
                        <p className='font-[500] text-[14px] text-[rgb(41,41,41)]'>{props.price}</p>
                    </div>
                    <h4 className='font-[500] text-[11px] text-[rgb(79,99,121)]'>Outstanding : {props.outstandingPrice}</h4>
                </div>
            </td>
            <td className='text-center'>
                <button className=' p-[2px] border border-transparent rounded-full'>
                    <img src="/icons/content/more.png" alt="" className='size-[27px] hover:scale-[110%]' />
                </button>
            </td>
        </tr>
    )
}
