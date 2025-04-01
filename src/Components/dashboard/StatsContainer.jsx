import React, { useState } from 'react';
import Heading from '../Heading';
import { about } from "../../assets/data";
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const StatsContainer = () => {
  const [StatsData, setStatsData] = useState(about.stats);
  return (
    <div>
      <Heading title={"stats"} />
      <div className="text-zinc-500 ">
        <div className="overflow-x-auto">
          <table className=" border-separate border-spacing-2 border our-border-color our-border-color  ">
            {StatsData.length < 3 &&
              <caption class="caption-top text-start ">
                For add new stat <span className='text-blue-600 cursor-pointer'>Click..</span>
              </caption>
            }

            <thead>
              <tr className='text-lg capitalize'>
                <th className='border px-1 our-border-color'>ID</th>
                <th className='border px-1 our-border-color'>title</th>
                <th className='border px-1 our-border-color'>icon</th>

              </tr>
            </thead>
            <tbody>
              {StatsData?.map((stat, i) => <tr>
                <td className='border our-border-color text-center px-1' >{i + 1}</td>
                <td className='border our-border-color text-center px-1 text-sm lg:text-base' >{stat.text}</td>
                {/* <td className='border our-border-color px-1 text-xs lg:text-base '>{stat.desc.length > 50 ? stat.desc.slice(0, 50) + "..." : stat.desc}</td> */}
                <td className='border our-border-color text-blue-600 text-3xl '><span className='flex justify-center'>{stat.icon}</span></td>
                <td className='border our-border-color bg-blue-600 text-zinc-300 text-center text-lg'><button className='px-1'><FaRegEdit /></button></td>
                <td className='border our-border-color bg-red-600 text-zinc-300 text-center text-xl'><button className='px-1'><MdDeleteForever /></button></td>
              </tr>)}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
