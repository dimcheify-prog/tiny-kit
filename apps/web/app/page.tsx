import {Button} from "@dimcheify/tiny-kit";
import {useRef} from "react";

export default function Page() {
  const r = useRef(null);
  return (
    <div>
      <Button itemRef={r} fullWidth>CLick</Button>
    </div>
  )
}