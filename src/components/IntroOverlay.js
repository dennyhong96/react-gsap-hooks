const IntroOverlay = ({ appendsToOverTop, appendsToOverlayBottom, setsOverlayScreen }) => {
  return (
    <div ref={setsOverlayScreen} className="intro-overlay">
      {/* Top part */}
      <div className="top">
        <div ref={appendsToOverTop} className="overlay-top"></div>
        <div ref={appendsToOverTop} className="overlay-top"></div>
        <div ref={appendsToOverTop} className="overlay-top"></div>
      </div>

      {/* Bottom part */}
      <div className="bottom">
        <div ref={appendsToOverlayBottom} className="overlay-bottom"></div>
        <div ref={appendsToOverlayBottom} className="overlay-bottom"></div>
        <div ref={appendsToOverlayBottom} className="overlay-bottom"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
