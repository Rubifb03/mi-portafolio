import { useState, useCallback } from "react";
export function usePopup() {
  const [open, setOpen] = useState(false);
  const show = useCallback(()=>setOpen(true),[]);
  const hide = useCallback(()=>setOpen(false),[]);
  return { open, show, hide };
}
