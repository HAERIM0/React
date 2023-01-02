// import { dbService } from "fBase";
import { dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const Home = () => {
  const [hweet, setHweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "hweets"), {
        hweet,
        createdAt: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setHweet("");
  };
  const onChange = ({ target: { value } }) => {
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
    </div>
  );
};
export default Home;
