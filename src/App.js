import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [bmkg, setBmkg] = useState([]);

  const getBmkg = async () => {
    const response = await axios.get("http://localhost:3001/api");
    setBmkg(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBmkg();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="gempa">
              <h3>Status Gempa Real Time API BMKG</h3>
              <p>{bmkg.Tanggal}</p>
              <img
                src={"https://ews.bmkg.go.id/tews/data/" + bmkg.Shakemap}
                width="100%"
                alt=""
              />
              <h4>
                Magnitude <br />
                {bmkg.Magnitude}
              </h4>
              <h4>
                Jam <br />
                {bmkg.Jam}
              </h4>
              <h4>
                Kedalaman <br />
                {bmkg.Kedalaman}
              </h4>
              <h4>
                Potensi <br />
                {bmkg.Potensi}
              </h4>
              <h4>
                Wilayah <br /> {bmkg.Wilayah}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
