import React from 'react'

function Blank() {
    var a=[
{            "id":1,
            "name":"hareshkumar",
            "surname":"chauhan",
        },{
            "id":2,
            "name":"pradip",
            "surname":"rabari",
        }]
  return (
    <>
   {

    a.map((e)=>{
        return(
            <h2>{e.name}</h2>
        )
    })

   }
    </>
  )
}

export default Blank