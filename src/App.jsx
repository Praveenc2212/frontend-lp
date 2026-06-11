import { useEffect, useState } from "react";
import API from "./api/axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    API.get("/test")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="text-3xl p-10">
      {message}
    </div>
  );
}

export default App;