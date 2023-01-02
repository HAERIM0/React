import { dbService } from "fbase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [hweet, setHweet] = useState("");
  const [hweets, setHweets] = useState([]);
  const getHweets = async () => {
    const dbNweets = await getDocs(collection(dbService, "nweets"));
    dbNweets.forEach((doc) => {
      const nweetObject = {
        ...doc.data(),
        id: doc.id,
      };
      console.log(doc.id, " => ", doc.data());
      setHweets((prev) => [nweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getHweets();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "nweets"), {
      hweet,
      createAt: Date.now(),
    });
    setHweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setHweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={hweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="hweet" />
      </form>
      <div>
        {hweets.map((hweet) => (
          <div key={hweet.id}>
            <h4>{hweet.hweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
