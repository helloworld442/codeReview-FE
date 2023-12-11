import { useState } from "react";

export default function useToggle({ trigger }) {
  const [disabled, setDisabled] = useState(true);

  const onClick = (e) => {
    setDisabled(!disabled);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      onClick(e);
      trigger(e);
    }
  };

  return [disabled, onClick, onKeyDown];
}
