const IntroOverlay = ({ appendsToTop, appendsToBottom, setScreenRef }) => {
  return (
    <div ref={setScreenRef} className="intro-overlay">
      {/* Top part */}
      <div className="top">
        <div ref={appendsToTop} className="overlay-top"></div>
        <div ref={appendsToTop} className="overlay-top"></div>
        <div ref={appendsToTop} className="overlay-top"></div>
      </div>

      {/* Bottom part */}
      <div className="bottom">
        <div ref={appendsToBottom} className="overlay-bottom"></div>
        <div ref={appendsToBottom} className="overlay-bottom"></div>
        <div ref={appendsToBottom} className="overlay-bottom"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
