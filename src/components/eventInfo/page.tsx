

import { ArrowDownUp } from 'lucide-react'


const EventInfo = () => {
   
    return (
        <div className="flex flex-col sm:flex-row w-full gap-4 items-center sm:items-stretch p-4">
            <div className="w-full sm:flex-1 shadow-xl text-[black] p-0.5 sm:p-3 rounded-[10] bg-[#fff]">
                <h2 className='text-blue-800 font-[700]'>Pick-up</h2>
                <div className='flex justify-between mt-2 gap-0.5'>
                    <div>
                        <p className='font-[700]'>location</p>
                        <select name="city" id="city" className=' border-gray-400 border-1 rounded-[5] outline-0 mt-2'>
                            <option value="kochi">kochi</option>
                            <option value="kozhikode">kozhikode</option>
                            <option value="malappuram">malappuram</option>
                        </select>
                    </div>
                    <div>
                        <p className='font-[700]'>date</p>
                        <input type="date" className=' border-gray-400 border-1 rounded-[5] mt-2' />
                    </div>
                    <div>
                        <p className='font-[700]'>time</p>
                        <input type="time" className=' border-gray-400 border-1 rounded-[5] mt-2'/>
                    </div>

                </div>


            </div>
            <div className="w-full sm:w-1/15 bg-blue-500 p-4 text-white flex justify-center items-center rounded-[10]">
            <ArrowDownUp />
            </div>
            <div className="w-full  sm:flex-1 p-0.5 sm:p-3 text-black shadow-md bg-[#fff] rounded-[10]">
                <h2 className='text-blue-800 font-[700]'>Drop-off</h2>
                <div className='flex justify-between mt-2 gap-0.5'>
                    <div className=''>
                        <p className='font-[700]'>location</p>
                        <select name="city" id="city" className='border-1 outline-0 border-gray-400 rounded-[5] mt-2'>
                            <option value="kochi">kochi</option>
                            <option value="kozhikode">kozhikode</option>
                            <option value="malappuram">malappuram</option>
                        </select>
                    </div>
                    <div>
                        <p className='font-[700]'>date</p>
                        <input type="date" className='border-1 outline-0 border-gray-400 rounded-[5] mt-2'/>
                    </div>
                    <div>
                        <p className='font-[700]'>time</p>
                        <input type="time" className='mt-2  border-gray-400 border-1 rounded-[5]' />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EventInfo