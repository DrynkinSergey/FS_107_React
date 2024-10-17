export function slideInFromLeft(delay = 0.5) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay = 0.5) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay = 0.5) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}
export function slideInFromBot(delay = 0.5) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
}
