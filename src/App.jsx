import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOption/PricingOption';

const fetchData = async () => {
  const res = await fetch("./data.json");
  return res.json();
}

function App() {
  const dataPromise = fetchData();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div className='flex justify-center items-center mt-10'>
        <span className="loading loading-spinner loading-xl"></span>
          </div>}>
        <PricingOption dataPromise={dataPromise}></PricingOption>
      </Suspense>
    </>
  )
}

export default App
