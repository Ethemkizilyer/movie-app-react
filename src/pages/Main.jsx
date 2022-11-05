import axios from "axios";
import logo from "../error.jpg";

import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Main = () => {
  const [bakar, setBakar] = useState([]);
  const [inpu, setInpu] = useState("");

const dfg = JSON.parse(localStorage.getItem("test"));
  const { user, setUser } = useContext(LoginContext);
  const { currentUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const kanca = (item) => {
    !currentUser ?  alert("Lütfen Kayıt Yaptırınız...") :navigate(`/detail`, { state: item })



  };

  const varan = () => {
    if (currentUser) {
      parçala();
    } else if(!currentUser) {
      alert("Lütfen Kayıt Yaptırınız...");
    }else{
      alert("Lütfen film ismi yazınız")
    }
    // setInpu("");
  };
  const parçala = async () => {
    const {
      data: { results },
    } = await axios(
      `https://api.themoviedb.org/3/${
        inpu == "" ? "discover" : "search"
      }/movie?api_key=d37aa81d99fd5b49201922d61ad5b2fd&query=${inpu}`
    );
    setBakar(results);

    console.log(results);
    console.log(inpu);
    setInpu("")
  };
  useEffect(() => {
    parçala();
  }, []);

  return (
    <div>
      <div className="bg-orange-200 flex items-center justify-center h-16">
        <input
          className="outline-0"
          type="text"
          placeholder="Film adını giriniz..."
          value={inpu}
          onChange={(e) => setInpu(e.target.value)}
        />
        <button onClick={varan} className="bg-green-500 hover:bg-green-200 ">
          Search
        </button>
      </div>
      <div className="flex justify-center gap-4 flex-wrap py-5">
        {bakar?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center wrap group  relative  "
          >
            <div className="line-clamp-1">
              <div className="rounded-lg shadow-lg bg-white w-60 relative    border border-red-300 ">
                <div /*to={user.name ? "/detail" : ""}*/>
                  <img
                    className="rounded-t-lg"
                    src={
                      item?.poster_path
                        ? `https://image.tmdb.org/t/p/w1280${item?.poster_path}`
                        : logo
                    }
                    alt=""
                  />
                </div>

                <p
                  className="
                text-yellow-100 text-m font-semibold absolute top-0 bg-slate-500 opacity-75 duration-500  group-hover:translate-x-0 translate-x-60"
                >
                  {item?.overview}
                </p>

                <div className="pb-16 text-center relative border h-32">
                  <h5 className="text-gray-900 text-xl font-medium ">
                    {item?.original_title}
                  </h5>

                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out absolute left-16 bottom-4"
                    onClick={() => kanca(item)}
                  >
                    View More
                  </button>
                  {currentUser ? (
                    <span
                      className={
                        item?.vote_average > 6.5
                          ? "absolute bottom-4 text-center w-8 right-1 rounded-full p-1 bg-green-500"
                          : "absolute bottom-4 text-center w-8 right-1 rounded-full p-1 bg-orange-500"
                      }
                    >
                      {item?.vote_average}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
