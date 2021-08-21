import React from "react";
import { useState } from "react";

export default function useToggle(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return { toggle, open };
}
