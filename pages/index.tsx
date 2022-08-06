import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [first, setfirst] = useState('')

const GetData=(e)=>{

  setfirst(e.target.value)

}




  return (
<div className="container">

        
<div   className='flex border justify-center' >

<input  onChange={GetData}  type="text"  placeholder='Enter Word' />  
<button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
</div>



<div   className='flex border justify-center flex-col items-center'>

<p>jhsh</p>
<p>jhsh</p>
<p>jhsh</p>
<p>jhsh</p>
<p>jhsh</p>

</div>

    </div>
  




  )
}

export default Home
