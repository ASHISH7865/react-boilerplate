import React from 'react';

function ProfileCard(props) {
  return (
    <div className={`profile-card__wrapper  ${props.className}`}>
      <div className="profile_image">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
          alt="profile"
        />
      </div>

      {/* eslint-disable-next-line react/prop-types */}
      <div className={`profile-card__content `}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </div>
    </div>
  );
}

export default ProfileCard;
