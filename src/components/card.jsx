import React from 'react'

function Card({username}){
    console.log(username);
    return(
    <div class="max-w-sm rounded-lg border border-gray-200 p-5 shadow">
  <img src="https://im.rediff.com/sports/2025/jul/03balaji.jpg?w=670&h=900" class="mb-2 rounded-lg" />
  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{username}</h2>
  <div className="flex flex-col items-start">
    <p className="mb-3 text-gray-700">Card description</p>
    <button class="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Card button</button>
  </div>
</div>
    )
}
export default Card