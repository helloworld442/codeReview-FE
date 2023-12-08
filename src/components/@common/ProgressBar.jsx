import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

export default function ProgressBar() {
  const progress = useProgressBar();

  return <ProgressBarOuter progresspercent={progress > 100 ? 0 : progress} />;
}

function useProgressBar() {
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev ** 1.1 + 5);
      }
    }, 100);

    window.addEventListener("beforeunload", () => clearInterval(interval));

    return () => clearInterval(interval);
  }, [progress]);

  return progress;
}

const ProgressBarOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.progresspercent}%;
  height: 2px;
  background: rgb(102, 103, 171, 0.8);
  transition: 0.15s all ease-in-out;
`;
