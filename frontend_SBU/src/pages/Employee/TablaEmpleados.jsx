import React from 'react';
import Sidebar from '../../components/Sidebar';

function TablaEmpleados (){
    return(
        <div className="bg-[#FFEFE5] min-h-screen w-full">
  <div className="flex justify-end">
    <div className="bg-[#834841] w-full md:w-8/12 lg:w-9/12 xl:w-10/12 h-14 md:h-28 flex pt-5 pl-16 md:pl-8 lg:pl-10 font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
      Bienvenido sicma
    </div>
  </div>
  
  <div className="fixed top-0">
    <Sidebar />
  </div>

  <div className='flex justify-center mt-24 md:mt-44'>
    <div className="bg-[#E0C5BC] p-4 md:p-8 rounded-md w-full sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mt-4 md:mt-0">
      <div className="flex flex-col md:flex-row items-center justify-between pb-6">
        <div className="text-center md:text-left">
          <h2 className="text-gray-600 font-semibold text-base md:text-xl">Products Order</h2>
          <span className="text-xs">All product items</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input className="bg-transparent outline-none ml-1 block w-full md:w-auto" type="text" placeholder="Search..." />
          </div>
          <button className="bg-indigo-600 px-3 md:px-4 py-2 rounded-md text-white font-semibold">New Report</button>
          <button className="bg-indigo-600 px-3 md:px-4 py-2 rounded-md text-white font-semibold">Create</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Products</th>
                <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Created at</th>
                <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">QRT</th>
                <th className="px-3 md:px-5 py-3 border-b-2 border-transparent bg-transparent text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-nowrap">Vera Carpenter</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                  <p className="text-gray-900 whitespace-nowrap">Admin</p>
                </td>
                <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                  <p className="text-gray-900 whitespace-nowrap">Jan 21, 2020</p>
                </td>
                <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                  <p className="text-gray-900 whitespace-nowrap">43</p>
                </td>
                <td className="px-3 md:px-5 py-5 border-b border-transparent bg-transparent text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Active</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-3 md:px-5 py-5 bg-transparent border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 bg-indigo-600 font-semibold py-2 px-4 rounded-l hover:bg-indigo-500">Prev</button>
              <button className="text-sm text-indigo-50 bg-indigo-600 font-semibold py-2 px-4 rounded-r hover:bg-indigo-500">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default TablaEmpleados;