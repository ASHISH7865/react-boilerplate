export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeInOut'
    }
  }
};
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2,
      ease: 'easeInOut'
    }
  }
}

export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
}

export const greenBar = {
  hidden: {
    y: -100
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  }
};
