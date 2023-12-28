import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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

export const useGsapProjectTitle = (projectArr, trig) => {
  useEffect(() => {
    const el = projectArr.map((el) => el.current);
    const projectEl = trig.current;
    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectEl,
          start: "top center",
        },
      }
    );
  }, [projectArr, trig]);
};

export const useGsapProjectLineForward = (arr, trig) => {
  useEffect(() => {
    const el = arr;
    const projectEl = trig.current;
    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 3,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useGsapProjectTitleRef = (arr, trig) => {
  useEffect(() => {
    const el = arr.current;
    const projectEl = trig.current;
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};
