
import React from 'react';

function Counter() {
    return (
        <div class="px-3 md:px-8">
            <div class="container mx-auto max-w-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                    <div class="px-4 mb-10">
                        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                            <div class="flex flex-wrap border-b border-gray-200 undefined">
                                <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
                                    <span class="material-icons text-white text-3xl leading-none">trending_up</span>
                                </div>
                                <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                    <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">Traffic</h5>
                                    <span class="text-3xl text-gray-900">350,897</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
                                <span class="material-icons text-green-500 text-base leading-none">arrow_upward</span>
                                <span class="text-green-500 ml-1 mr-2">3.48</span>
                                <span class="font-light whitespace-nowrap">Since last month</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 mb-10">
                        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                            <div class="flex flex-wrap border-b border-gray-200 undefined">
                                <div class="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange mb-0">
                                    <span class="material-icons text-white text-3xl leading-none">groups</span>
                                </div>
                                <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                    <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">New Users</h5>
                                    <span class="text-3xl text-gray-900">2,356</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
                                <span class="material-icons text-red-500 text-base leading-none">arrow_downward</span>
                                <span class="text-red-500 ml-1 mr-2">3.48</span>
                                <span class="font-light whitespace-nowrap">Since last week</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 mb-10">
                        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                            <div class="flex flex-wrap border-b border-gray-200 undefined">
                                <div class="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple mb-0">
                                    <span class="material-icons text-white text-3xl leading-none">paid</span>
                                </div>
                                <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                    <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">Sales</h5>
                                    <span class="text-3xl text-gray-900">924</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
                                <span class="material-icons text-orange-500 text-base leading-none">arrow_downward</span>
                                <span class="text-orange-500 ml-1 mr-2">1.10</span>
                                <span class="font-light whitespace-nowrap">Since yesterday</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 mb-10">
                        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                            <div class="flex flex-wrap border-b border-gray-200 undefined">
                                <div class="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue mb-0">
                                    <span class="material-icons text-white text-3xl leading-none">poll</span>
                                </div>
                                <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                    <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">Performance</h5>
                                    <span class="text-3xl text-gray-900">49,65%</span>
                                </div>
                            </div>
                            <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
                                <span class="material-icons text-green-500 text-base leading-none">arrow_upward</span>
                                <span class="text-green-500 ml-1 mr-2">12</span>
                                <span class="font-light whitespace-nowrap">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;