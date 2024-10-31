"use client";

import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown} from "react-icons/fa6";

const Collapsible = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const renderIcon = ({title}) => {
    if (isCollapsed) {
      return <div className="flex items-center">
        <h3 className="mr-2 mt-0 mb-0 text-lg font-medium tracking-tight inline">{title}</h3>
        <FaChevronDown />
        </div>;
    } else {
      return <div className="flex items-center">
      <h3 className="mr-2 mt-0 mb-0 text-lg font-medium tracking-tight inline">{title}</h3>
      <FaChevronUp />
      </div>;
    }
  };
  return (
    <div>
      <button onClick={toggleCollapse}>{renderIcon({title})}</button>
      {!isCollapsed && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;