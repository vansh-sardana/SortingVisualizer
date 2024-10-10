import React from 'react'
import algorithms from '../../algorithmsDetails.json'

const AlgoFrame = ({algo}) => {
    const algorithm= algorithms["algorithms"];
    return (
            <div key={algo} className='z-20 text-white mt-10 max-w-[700px] text-justify flex flex-col gap-4 bg-none pointer-events-none'>
              <div>
              <div className='w-[full] bg-[#1d1d1d] h-4'></div>
              <div className='w-[full] bg-white h-1'></div>
            </div>
              <h3 className='text-3xl font-bold pointer-events-auto text-center'>{algo}</h3>
              <p className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d] pointer-events-auto'>{algorithm[algo]?.details?.join(' ')}</p>
              <div className='flex flex-col gap-2 bg-[#1d1d1d] p-4 rounded-md'>
                <h4 className='pointer-events-auto text-center font-bold text-xl'>Complexity:</h4>
                <ul className='text-left pointer-events-auto flex gap-4'>
                    <li className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d]'>Worst Case: {algorithm[algo].complexity.worst_case}</li>
                    <li className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d]'>Best Case: {algorithm[algo].complexity.best_case}</li>
                    <li className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d]'>Average Case: {algorithm[algo].complexity.average_case}</li>
                    <li className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d]'>Space Complexity: {algorithm[algo].complexity.space_complexity}</li>
                </ul>
              </div>
              <div className='flex flex-col gap-2 bg-[#1d1d1d] p-4 rounded-md'>
                <h4 className='pointer-events-auto text-center font-bold text-xl'>Algorithm Steps:</h4>
                <ol className='text-left pointer-events-auto flex gap-4 flex-col'>
                    {algorithm[algo].algorithm.map((step, index) => (
                        <li key={index} className='bg-[#f2efef] rounded-md p-5 font-bold text-[#1d1d1d]'>{step}</li>
                    ))}
                </ol>
            </div>
            <div>
              <div className='w-[full] bg-white h-1'></div>
              <div className='w-[full] bg-[#1d1d1d] h-4'></div>
            </div>
            <div className="footer font-bold text-center text-xl p-2 mb-2">Made with ❤️ by Vansh Sardana</div>
            </div>
      );
}

export default AlgoFrame