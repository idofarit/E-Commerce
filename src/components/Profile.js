import React, { useEffect, useState } from "react";
import { FaHandLizard } from "react-icons/fa";
import styled from "styled-components";
import { useFirebase } from "../Firebase/Firebase";

const Wrapper = styled.div`
  .avatar {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-width: 1px;
    border-color: gray;
    border-style: outset;
  }
`;

const Profile = () => {
  const { uploadProfileImg } = useFirebase();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useFirebase();
  console.log(user);
  const [photoUrl, setPhotoUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoUrl(user.photoURL);
    }
  }, [user]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    uploadProfileImg(photo, user, setLoading);
  };

  return (
    <Wrapper>
      {/* <div className="fields">
        <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>
          Upload
        </button>
        <img src={photoUrl} className="avatar" alt="" />
      </div> */}

      <div className="userprofile-outercontainer">
        {user ? (
          <div className="user-profile">
            <p className="heading">Your Account Details</p>
            <div className="details">
              <div className="data-row">
                <span>Your Name</span>
                <span>{user[0].username}</span>
              </div>
              <div className="data-row">
                <span>Your Email</span>
                <span>{user[0].email}</span>
              </div>
              <div className="data-row">
                <span>Your Phone Number</span>
                <span>{user[0].phonenumber}</span>
              </div>
              <div className="data-row">
                <span>Your Address</span>
                <span>{user[0].address}</span>
              </div>
            </div>
          </div>
        ) : (
          <div>You are Not Logged In</div>
        )}
      </div>
    </Wrapper>
  );
};

export default Profile;
