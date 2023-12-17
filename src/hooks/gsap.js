import { gsap } from "gsap";
import { useEffect } from "react";

export const useGsapLinkDownFall = (linkArr) => {
  useEffect(() => {
    const el = linkArr.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [linkArr]);
};

export const useGsapLineForward = (lineArr) => {
  useEffect(() => {
    const el = lineArr.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1,
        stagger: 0.2,
        ease: "linear",
      }
    );
  }, [lineArr]);
};

export const useGsapTextUpward = (headingArr) => {
  useEffect(() => {
    const el = headingArr.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: "0%",
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
      }
    );
  }, [headingArr]);
};
export const useGsapBoxScaling = (boxScaleArr) => {
  useEffect(() => {
    const el = boxScaleArr.map((el) => el.current);
    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        delay: 1.5,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
      }
    );
  }, [boxScaleArr]);
};
