// import { auth } from "fbase";
import { authService } from "../fbase";
import React from "react";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();

  const handleOnLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <button onClick={handleOnLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
