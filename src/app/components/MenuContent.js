import React from 'react';

// eslint-disable-next-line react/prop-types
const MenuContent = ({ icon, title, description, href, titleColor }) => {
  console.log(titleColor);
  return (
    <a href={href} className="menu-content">
      {icon && <div className="icon">{icon}</div>}
      <div>
        <p className="title" style={{ color: `${titleColor}` }}>
          {title}
        </p>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};

export default MenuContent;
