import { useState } from "react";

export default function useDisabled(onEvent) {
  const [disabled, setDisabled] = useState(true);

  const onClick = (e) => {
    setDisabled(!disabled);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      onEvent(e);
      onClick(e);
    }
  };

  return [disabled, onClick, onKeyDown];
}
