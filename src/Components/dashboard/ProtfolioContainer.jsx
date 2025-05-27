import React, { useState } from 'react';
import Heading from '../Heading';
import { portfolio } from "../../assets/data";
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const ProtfolioContainer = () => {
  const [portfolioData] = useState(portfolio);
  return (
    <div>
      <Heading title={"portfolio"} />
      <div className="dark:text-Text-Color-Dark ">
        <div className="overflow-x-auto">
          <table className=" border-separate border-spacing-2 border border-Border-Color-Light dark:border-Border-Color-Dark border-Border-Color-Light dark:border-Border-Color-Dark  ">
            {portfolioData.length < 3 &&
              <caption class="caption-top text-start ">
                For add new portfolio <span className='text-blue-500 cursor-pointer'>Click..</span>
              </caption>
            }

            <thead>
              <tr className='text-lg capitalize'>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>ID</th>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>title</th>
                <th className='border px-1 border-Border-Color-Light dark:border-Border-Color-Dark'>category</th>

              </tr>
            </thead>
            <tbody>
              {portfolioData?.map((item, i) => <tr key={i}>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-center px-1' >{i + 1}</td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-center px-1 text-sm lg:text-base' >{item.title}</td>
                <td className='border border-Border-Color-Light dark:border-Border-Color-Dark text-center px-1 text-sm lg:text-base' >{item.category}</td>
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

export default ProtfolioContainer;
