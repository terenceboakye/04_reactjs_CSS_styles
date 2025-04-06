import React from 'react'

const Content = () => {

const handleCarList = () => {
    const car = ['Mercedes Benz Maybach', 'Tesla Model S', 'BMW M3', 'Lamborghini Aventador'];
    const int = Math.floor(Math.random() * car.length);
    return car[int];  
}
  return (
    <main>
        Drive {handleCarList()}
    </main>
  )
}

export default Content