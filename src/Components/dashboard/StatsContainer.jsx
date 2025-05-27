import React, { useState } from 'react';
import Heading from '../Heading';
import { about } from "../../assets/data";
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const StatsContainer = () => {
  const [StatsData] = useState(about.stats);
  return (
    <div>
      <Heading title={"stats"} />
      <div className="dark:text-Text-Color-Dark ">
        <div className="overflow-x-auto">
          <table className=" border-separate border-spacing-2 border border-Border-Color-Light dark:border-Border-Color-Dark border-Border-Color-Light dark:border-Border-Color-Dark  ">
            {StatsData.length < 3 &&
              <caption class="caption-top text-start ">
                For add new stat <span className='text-blue-500 cursor-pointer'>Click..</span>
              </caption>
            }

            <thead>
              <tr className='text-lg capitalize'>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>ID</th>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>title</th>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>icon</th>

              </tr>
            </thead>
            <tbody>
              {StatsData?.map((stat, i) => <tr key={i}>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-center px-1' >{i + 1}</td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-center px-1 text-sm lg:text-base' >{stat.text}</td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-blue-500 text-3xl '><span className='flex justify-center'>{stat.icon}</span></td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark bg-blue-500 text-zinc-300 text-center text-lg'><button className='px-1'><FaRegEdit /></button></td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark bg-red-600 text-zinc-300 text-center text-xl'><button className='px-1'><MdDeleteForever /></button></td>
              </tr>)}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
