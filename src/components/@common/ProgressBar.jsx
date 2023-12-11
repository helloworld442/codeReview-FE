import { useEffect, useLayoutEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function ProgressBar() {
  const progress = useProgressBar();

  return <ProgressBarOuter progresspercent={progress} />;
}

function useProgressBar() {
  let interval;
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 10);
      }
    }, 10);
  }, [progress]);

  useEffect(() => {
    window.addEventListener("load", () => {
      setProgress(100);
      clearInterval(interval);
    });

    return () => clearInterval(interval);
  }, [progress]);

  return progress;
}

const ProgressBarOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.progresspercent}%;
  height: 2.5px;
  background: rgb(102, 103, 171, 0.8);
  transition: 0.15s width ease-in-out;

  ${(props) =>
    props.progresspercent >= 95 &&
    css`
      animation: hideProgress 0.15s 0.15s forwards;

      @keyframes hideProgress {
        0% {
          width: 100%;
        }
        100% {
          display: none;
        }
      }
    `}
`;
