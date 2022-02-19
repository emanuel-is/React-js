import React, { useEffect ,useState  } from 'react'

const PruebadeApi = () => {
    useEffect(  ()=>{
        getChars()
    },[])

    const getChars = ()=>{
        const URL = "https://rickandmortyapi.com/api/character";


        fetch(URL)
        .then(res => res.json() )
        .then(res=>{
            console.log(res);
            /* setChars(res.result) */
        })
    }


    

  return (
    <div>

    </div>
  )
}

export default PruebadeApi