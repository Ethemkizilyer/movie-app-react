import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import logo from "../logo192.png";

const MovieDetail = ({item}) => {
    const navigate=useNavigate()
    const location= useLocation()
    console.log(location.state);
// console.log("kal");

  // const { id } = useParams();
  //   console.log(id)

    const ert=()=>{
        navigate("/")
    }
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-center text-3xl font-bold">{location.state?.title}</h1>
      <div className='flex items-center justify-center'>
        <img
          src={(location.state?.backdrop_path) ? `https://image.tmdb.org/t/p/w1280${location.state?.backdrop_path}`:
                      logo
                    }
        ></img>
      </div>
      <div className="flex">
        <img
          className="w-52"
          src={(location.state?.poster_path) ? `https://image.tmdb.org/t/p/w1280${location.state?.poster_path}`:
                      logo
                    }
        ></img>
        <div className="flex flex-col justify-end">
          <p className="border-b-2 border-sky-500">
            Release Date: {location.state?.release_date}
          </p>
          <p className="border-b-2 border-sky-500">
            Rate : {location.state?.vote_average}
          </p>
          <p className="border-b-2 border-sky-500">
            Total Vote : {location.state?.vote_count}
          </p>
          <button className="bg-green-400 px-4 py-1" onClick={()=>navigate(-1)}>
            GERİ
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail