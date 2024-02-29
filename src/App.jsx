import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState()

  // useEffect(() => {

  //   fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
  //     setCount(res)
  //   })
  // }, [])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setCount(res.data)
      // console.log(res);
    }).catch((err) => {
      console.log("Server:Error");
    })
  }, [])
  // console.log(count);

  // ======================================================
  return (
    <>

      {
        count && count.map((item) => {
          return (
            <>
              {/* <table className="table table-dark table-hover">

                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">userId</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                  </tr>
                </thead>
                <tbody>


                  <tr>

                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                </tbody>
              </table> */}



              <div>

                <div className='w-50 border border-danger mb-2'>
                  <img className='w-25' src="https://i.pinimg.com/originals/13/ac/2e/13ac2e3f1b5b27d3a12b29afe2f009a2.jpg" alt="" />
                  <h1>Id :{item.id}</h1>
                  <h1>UserId:{item.userId}</h1>
                  <p>Title:::{item.title}</p>
                  <p>Body:::{item.body}</p>
                </div>
              </div>
            </>
          )
        })
      }
      {/* ====================================================================================== */}

    </>
  )
}

export default App
