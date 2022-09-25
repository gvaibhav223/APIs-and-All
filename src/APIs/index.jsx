import React, { useState, useEffect } from "react";
import PokemonAPI from "./Pokemon/index";
import HarryPotterAPI from "./HarryPotter/index";
import Axios from "axios";
import ApiConfig from "../API config/apiconfig";

const Index = () => {
  const [apiCall, setApiCall] = useState("deactive");
  console.log("apiCall", apiCall);
  const [isLoading, setIsLoading] = useState("");
  const [apidata, setApiData] = useState();
  const getAPIData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get(ApiConfig.allCharacter);
      if (res.data.status === 200) {
        setApiData(res.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <>
      <div>
        <div className="mainBox" align="center">
          <h1>Multiple APIs for Practice</h1>
        </div>
        <div className="routingPages">
          <div className="pokemonAPI">
            <PokemonAPI />
            <button
              onClick={() => {
                setApiCall("active");
              }}
            >
              Fetch
            </button>
            <button
              onClick={() => {
                setApiCall("deactive");
              }}
            >
              Remove
            </button>
          </div>
          <div className="harrypooterAPI">
            <HarryPotterAPI />
            <button
              onClick={() => {
                setApiCall("active");
              }}
            >
              Call
            </button>
            <button
              onClick={() => {
                setApiCall("deactive");
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
