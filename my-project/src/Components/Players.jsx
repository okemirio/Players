import React from 'react'
//import "./players.css"

const Players = () => {

    const Footballers = [
      {
        name: "C Ronaldo",
        team:"Real-madrid",
        jersseyNo: "10",
        price: "2000.99",
        currency: "USD",
        imageUrl: "https://media.istockphoto.com/id/1637717344/photo/portrait-of-young-man-on-football-pitch.jpg?s=1024x1024&w=is&k=20&c=hwTog4MHWENcCCotIJBqGmkAZ4yP9ZBBq8fsMsK4HTc="
      },
      {
        name: "Paul scholes",
        team:"Real-madrid",
        jersseyNo: "6",
        price: "100.99",
        currency: "USD",
        imageUrl: "https://media.istockphoto.com/id/1449668363/photo/soccer-sports-and-man-on-a-field-for-a-game-training-or-competition-portrait-of-a-young-happy.jpg?s=1024x1024&w=is&k=20&c=3uK6jL8iIPvar1ndjot8Oexuyqy9tN8I74cHIe7zyKM="
      },
      {
        name: "john podgba",
        team:"Real-madrid",
        jersseyNo: "9",
        price: "90.99",
        currency: "USD",
        imageUrl: "https://media.istockphoto.com/id/1444961066/photo/soccer-football-game-and-black-man-player-on-a-sports-field-with-a-match-ball-fitness.jpg?s=1024x1024&w=is&k=20&c=NKonIcOEOhgfz83oEXgnHSIEaoIirSD2GMjkN7KLc0c="
      },
      {
        name: "Lionel messi",
        team:"Real-madrid",
        jersseyNo: "10",
        price: "199.99",
        currency: "USD",
        imageUrl: "https://media.istockphoto.com/id/1468586173/photo/portrait-of-a-female-soccer-player-holding-a-soccer-ball-in-the-field.jpg?s=1024x1024&w=is&k=20&c=NQ3Lqmt_7NTCpg7mLJhLsDQoK731KSD3k8CtfxEz3hI="
      },
      {
        name: "Robinho",
        team:"Real-madrid",
        jersseyNo: "3",
        price: "210.99",
        currency: "USD",
        imageUrl:"https://media.istockphoto.com/id/143921991/photo/soccer-player.jpg?s=1024x1024&w=is&k=20&c=qljvMvD7Xm_GRclJGwn0ywR2AeurdsxgWlU5G2Yg_L4="
      },
    ]

  return (
<div className='bg-red-600 grid xl:grid-cols-3 gap-20 px-10'>
  {Footballers.map((footballer) => (
    <div key={footballer.name} className='w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg p-4'>
      <img 
        width="100%"
        height="100%"
        src={footballer.imageUrl} 
        alt={footballer.name} 
        className='rounded-t-lg'
      />
      <h2 className='mt-2 text-lg font-bold'>Name:{footballer.name}</h2>
      <h3 className='text-gray-700 font-bold'>Team:{footballer.team}</h3>
      <h3 className='text-gray-700 font-bold'>JersseyNo:{footballer.jersseyNo}</h3>
      <h3 className='text-gray-700 font-bold'>Networth:{footballer.price}</h3>
      <h3 className='text-gray-700 font-bold'>{footballer.currency}</h3>
    </div>
  ))}
</div>

  )
}

export default Players;
