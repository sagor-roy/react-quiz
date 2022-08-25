import React from "react";

export default function Checkbox({ children, className, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      {children}
    </label>
  );
}
