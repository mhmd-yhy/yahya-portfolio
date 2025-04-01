import React, { useState } from 'react';
import Heading from '../Heading';
import { services } from "../../assets/data";
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
const SkillsContainer = () => {
  const [skillsData, setSkillsData] = useState(services.skills);
  return (
    <div>
      <Heading title={"skills"} />
      <div className="text-zinc-500 ">
        <div className="overflow-x-auto">
          <table className=" border-separate border-spacing-2 border our-border-color our-border-color  ">
            {skillsData.length < 4 &&
              <caption class="caption-top text-start ">
                For add new skill <span className='text-blue-600 cursor-pointer'>Click..</span>
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
              {skillsData?.map((skill, i) => <tr>
                <td className='border our-border-color text-center px-1' >{i + 1}</td>
                <td className='border our-border-color text-center px-1 text-sm lg:text-base' >{skill.title}</td>
                <td className='border our-border-color text-blue-600 text-3xl '><span className='flex justify-center'>{skill.icon}</span></td>
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

export default SkillsContainer;
