import React from "react";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={className} action="#" {...rest}>
      {children}
    </form>
  );
}
