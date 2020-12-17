const debounce = (fn, timeout) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.call(this, ...args);
    }, timeout);
  };
};

export default debounce;
