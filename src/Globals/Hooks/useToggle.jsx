import { useState } from "react";

export default function useToggle() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return { toggle, open };
}
