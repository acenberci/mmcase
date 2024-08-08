import React from 'react'
import TableElement from './tableElement'

export default function MainContent() {
  return (
    <div id="mainContent" className="transition-all ease-in-out duration-1000 w-[calc(100vw-270px)] ml-[270px] h-[100vh] bg-mainBackground flex flex-col">
      <header className=' py-[5px] px-[25px] box-border border-b-[1px] border-solid border-b-[rgb(230,230,230)] flex justify-between bg-white items-center'>
        <button className=' h-[34px] py-[4px] px-[8px] border-[1px] border-transparent rounded-[4px] bg-[rgb(142,64,255)] font-[600] text-[16px] text-white hover:bg-[rgb(122,54,230)] hover:shadow-sm hover:shadow-[rgb(122,54,230)]'>
          <div className='flex h-[26px] gap-[4px]'>
            <img src="/icons/content/finance.png" alt="" />
            <h4>Finance</h4>
          </div>
        </button>
        <div className='flex h-[54px] items-center'>
          <button className="p-[15px] hover:scale-[110%]">
            <img src="/icons/content/application.png" alt="" className='size-[24px]' />
          </button>
          <div className=' h-full py-[12px] px-[6px]'>
            <div className='border-l-[2px] border-solid border-[rgb(153,153,153)] h-full'></div>
          </div>
          <button className="p-[15px] hover:scale-[110%]">
            <img src="/icons/content/message.png" alt="" className='size-[24px]' />
          </button>
          <button className="p-[15px] relative hover:scale-[110%]">
            <img src="/icons/content/notification.png" alt="" className='size-[24px]' />
            <div className=' bg-red-500 text-white rounded-full size-[20px] absolute -translate-x-1/2 -translate-y-1/2 text-center items-center left-[calc(50%+10px)] top-[calc(50%-10px)]'><p className='font-[600] text-[13px]'>3</p></div>
          </button>
          <div className=' h-full py-[12px] px-[6px]'>
            <div className='border-l-[2px] border-solid border-[rgb(153,153,153)] h-full'></div>
          </div>
          <div className='px-[10px] flex items-center'>
            <div className='flex size-[34px] rounded-full bg-mainBlue text-white font-[600] text-[14px] justify-center items-center'>ÖU</div>
            <div className='flex flex-col px-[10px]'>
              <h4 className='font-[600] text-[14px] text-[rgb(41,41,41)]'>Ömer Uçak</h4>
              <h4 className='font-[500] text-[12px] text-[rgba(41,41,41,0.5)]'>Micromarin Yazılım A.Ş.</h4>
            </div>
            <button className=' transition-transform duration-100 ease-in-out hover:translate-y-0.5'>
              <img src="/icons/content/arrowDown.png" alt="" className='size-[20px]' />
            </button>
          </div>
        </div>
      </header>
      <div className='flex justify-between items-center px-[25px]'>
        <div className='flex items-center gap-[10px]'>
          <img src="/icons/content/invoicesContent.png" alt="" className='size-[50px]' />
          <div className='flex flex-col'>
            <p className='font-[600] text-[26px] text-[rgb(3,32,64)]'>Invoices</p>
            <p className='font-[500] text-[12px] text-[rgb(150,150,150)]'>120+ Items, sorted by Vessel</p>
          </div>
        </div>
        <div className='flex py-[30px] gap-[10px]'>
          <button className=' py-[7px] px-[8px] rounded-[6px] border-[1px] border-solid border-[rgb(12,132,9)] bg-[rgb(17,140,14)] hover:bg-[rgb(12,132,9)] hover:shadow-sm hover:shadow-[rgb(12,132,9)] h-[38px] font-[600] text-[15px] text-white flex'>
            <img src="/icons/content/add.png" alt="" className='size-[24px]  mr-[6px]' /> Create Invoice</button>
          <button className=' size-[38px] p-[7px] rounded-[6px] border-[1px] border-[rgb(205,205,205)] hover:bg-[rgb(205,205,205)] border-solid'>
            <img src="/icons/content/more.png" alt="" />
          </button>
        </div>
      </div>
      <div className=' px-[25px] pb-[25px] h-full flex flex-col'>
        <div className='bg-white rounded-md border-[1px] overflow-hidden h-full flex flex-col'>
          <div className='px-[15px] h-[60px] flex justify-between items-cente border-b-[1px]'>
            <div className='flex gap-[20px] items-center justify-center font-[600] text-[15px] text-[rgba(41,41,41,0.8)] h-full'>
              <button className='py-[2px] hover:text-mainBlue border-b-2 border-transparent hover:border-solid hover:border-mainBlue h-full'>All Invoices</button>
              <button className='py-[2px] hover:text-mainBlue border-b-2  hover:border-solid hover:border-mainBlue text-mainBlue border-solid border-mainBlue h-full'>Overdue</button>
              <button className='py-[2px] hover:text-mainBlue border-b-2 border-transparent hover:border-solid hover:border-mainBlue h-full'>In Progress</button>
              <button className='py-[2px] hover:text-mainBlue border-b-2 border-transparent hover:border-solid hover:border-mainBlue h-full'>Waiting</button>
              <button className='size-[24px] rotate-90 h-full hover:scale-[110%]'><img src="/icons/content/more.png" alt="" /></button>
            </div>
          </div>
          <div className='px-[15px] py-[10px] border-x-[1px] border-b-[1px] flex gap-[8px] justify-between h-[72px] bg-[rgb(246,249,252)]'>
            <div className='py-[10px] flex gap-[8px]'>
              <button className=' px-[14px] border-[1px] py-[3px] rounded-full bg-white hover:bg-[rgb(205,205,205)] hover:shadow-sm flex items-center gap-[6px] h-full'>
                <img src="/icons/content/setting.png" alt="" className=' size-[14px]' />
                <p className='font-[500] text-[14px]'>Filter</p>
                <div className=' bg-red-500 text-white rounded-full justify-center items-center flex size-[14px]'><p className='font-[600] text-[10px]'>3</p></div>
              </button>
              <button className=' px-[14px] border-[1px] py-[3px] border-transparent rounded-full bg-mainBlue hover:bg-hoverMainBlue hover:shadow-sm hover:shadow-hoverMainBlue flex items-center gap-[6px] h-full group'>
                <p className='font-[500] text-[14px] text-white'>MT Vessel Name</p>
                <img src="/icons/content/arrowDown.png" alt="" className=' size-[14px] transition-transform duration-100 ease-in-out group-hover:translate-y-[1px]  group-hover:scale-[110%]' />
              </button>
              <button className=' px-[14px] border-[1px] py-[3px] rounded-full bg-white flex items-center gap-[6px] h-full hover:bg-[rgb(205,205,205)] hover:shadow-sm group'>
                <p className='font-[500] text-[14px]'>Status</p>
                <img src="/icons/content/arrowDown.png" alt="" className=' size-[14px] transition-transform duration-100 ease-in-out group-hover:translate-y-[1px] group-hover:scale-[110%]' />
              </button>
              <button className=' px-[14px] border-[1px] py-[3px] rounded-full bg-white flex items-center gap-[6px] h-full hover:bg-[rgb(205,205,205)] hover:shadow-sm group'>
                <p className='font-[500] text-[14px]'>Priority</p>
                <img src="/icons/content/arrowDown.png" alt="" className=' size-[14px]  transition-transform duration-100 ease-in-out group-hover:translate-y-[1px] group-hover:scale-[110%]' />
              </button>
              <button className=' px-[14px] border-[1px] py-[3px] rounded-full bg-white flex items-center gap-[6px] h-full hover:bg-[rgb(205,205,205)] hover:shadow-sm group'>
                <p className='font-[500] text-[14px]'>Date</p>
                <img src="/icons/content/arrowDown.png" alt="" className=' size-[14px]  transition-transform duration-100 ease-in-out group-hover:translate-y-[1px] group-hover:scale-[110%]' />
              </button>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div className='relative'>
                <img src="/icons/content/searchIcon.png" alt="" className='absolute size-[20px] -translate-y-1/2 top-1/2 left-[10px] ' />
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 focus:bg-white pr-[10px] pl-[35px]" type="text" placeholder="Search" />
              </div>
              <button className='py-[6px] px-[8px] flex gap-[4px] border-[1px] bg-white rounded-[4px] group hover:bg-[rgb(205,205,205)] hover:shadow-sm'>
                <img src="/icons/content/printer.png" alt="" className='size-[20px]' />
                <img src="/icons/content/arrowDown.png" alt="" className=' size-[14px] transition-transform duration-200 ease-in-out group-hover:translate-y-[3px] group-hover:scale-[110%]' />
              </button>
            </div>
          </div>
          <div className='h-full'>
            <table class="min-w-full bg-white border border-gray-200 m-0 border-t-0">
              <thead className=' text-[14px] font-[500] text-[rgb(82,83,85)] h-[38px]'>
                <tr>
                  <th className="px-[20px] text-left flex justify-between items-center h-[38px] border-r">
                    <p className="flex items-center">
                      Detail
                    </p>
                    <button className="flex items-center">
                      <img src="/icons/content/sort.png" alt="" className='size-[20px]' />
                    </button>
                  </th>
                  <th class="px-[20px] text-left border-r">Date</th>
                  <th class="px-[20px] border-r">Status</th>
                  <th class="px-[20px] text-right border-r">Amount</th>
                  <th class="px-[20px] "></th>
                </tr>
              </thead>
              <tbody>
                <TableElement title="#SD-6598236" invoiceDate="12/01/2023" dueDate="12/01/2023" payment={1} overdueDays={3} status={1} currency="TL" price="3.140,10" outstandingPrice="0,00" ></TableElement>
                <TableElement title="#SD-4345459" invoiceDate="12/01/2023" dueDate="12/01/2023" payment={0} overdueDays={43} status={1} currency="USD" price="8.100,00" outstandingPrice="USD 500,00" ></TableElement>
                <TableElement title="#SD-6568954" invoiceDate="12/01/2023" dueDate="12/01/2023" payment={-1} overdueDays={50} status={0} currency="USD" price="10.250,00" outstandingPrice="USD 10.250,00" ></TableElement>
                <TableElement title="#SD-4345459" invoiceDate="12/01/2023" dueDate="12/01/2023" payment={-1} overdueDays={3} status={-1} currency="EUR" price="2.540,00" outstandingPrice="EUR 2.540,00" ></TableElement>
                <TableElement title="#SD-4345459" invoiceDate="12/01/2023" dueDate="12/01/2023" payment={-1} overdueDays={3} status={undefined} currency="EUR" price="140,00" outstandingPrice="EUR 140,00" ></TableElement>
              </tbody>
            </table>
          </div>
          <div className='border py-[15px] pl-[20px] pr-[15px] flex justify-between mt-auto items-center'>
            <p className=' font-[500] text-[13px] text-[rgb(82,83,85)]'>Showing 1-50 of 1258 total results</p>
            <div className='flex gap-[3px]'>
              <button className=' size-[30px] px-[5px] text-center'>
                <img src="/icons/content/arrowDown.png" alt="" className=' rotate-90 hover:scale-[110%]' />
              </button>
              <button className=' size-[30px] px-[10px] text-center hover:rounded-[6px] hover:bg-mainBlue hover:text-white'>
                <p className='font-[500] text-[14px]'>1</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center rounded-[6px] bg-mainBlue text-white'>
                <p className='font-[500] text-[14px]'>2</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center hover:rounded-[6px] hover:bg-mainBlue hover:text-white'>
                <p className='font-[500] text-[14px]'>3</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center hover:rounded-[6px] hover:bg-mainBlue hover:text-white'>
                <p className='font-[500] text-[14px]'>4</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center hover:rounded-[6px] hover:bg-mainBlue hover:text-white'>
                <p className='font-[500] text-[14px]'>5</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center'>
                <p className='font-[500] text-[14px] tracking-widest hover:scale-[110%]'>...</p>
              </button>
              <button className=' size-[30px] px-[10px] text-center hover:rounded-[6px] hover:bg-mainBlue hover:text-white'>
                <p className='font-[500] text-[14px]'>14</p>
              </button>
              <button className=' size-[30px] px-[5px] text-center'>
                <img src="/icons/content/arrowDown.png" alt="" className=' -rotate-90 hover:scale-[110%]' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
