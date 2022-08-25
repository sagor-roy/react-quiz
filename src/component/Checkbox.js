import React from "react";

export default function Checkbox({ children, className }) {
  return (
    <label className={className}>
      <input type="checkbox" />
      {children}
    </label>
  );
}
