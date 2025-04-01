import React, { useState } from 'react';
import Heading from '../Heading';
import { portfolio } from "../../assets/data";
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const ProtfolioContainer = () => {
  const [portfolioData, setPortfolioData] = useState(portfolio);
  return (
    <div>
      <Heading title={"portfolio"} />
      <div className="text-zinc-500 ">
        <div className="overflow-x-auto">
          <table className=" border-separate border-spacing-2 border our-border-color our-border-color  ">
            {portfolioData.length < 3 &&
              <caption class="caption-top text-start ">
                For add new portfolio <span className='text-blue-600 cursor-pointer'>Click..</span>
              </caption>
            }

            <thead>
              <tr className='text-lg capitalize'>
                <th className='border px-1 our-border-color'>ID</th>
                <th className='border px-1 our-border-color'>title</th>
                <th className='border px-1 our-border-color'>category</th>

              </tr>
            </thead>
            <tbody>
              {portfolioData?.map((item, i) => <tr>
                <td className='border our-border-color text-center px-1' >{i + 1}</td>
                <td className='border our-border-color text-center px-1 text-sm lg:text-base' >{item.title}</td>
                <td className='border our-border-color text-center px-1 text-sm lg:text-base' >{item.category}</td>
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

export default ProtfolioContainer;
