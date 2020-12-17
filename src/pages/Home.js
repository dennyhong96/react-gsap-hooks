import { Fragment } from "react";

import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";
import useHomeAnimation from "../hooks/animation/useHomeAnimation";

const Home = () => {
  const {
    setsOverlayScreen,
    appendsToOverTop,
    appendsToOverlayBottom,
    appendsToTitleLines,
    appendsToCaseImages,
    isAnimationDone,
  } = useHomeAnimation();

  return (
    <Fragment>
      {!isAnimationDone && (
        <IntroOverlay
          setsOverlayScreen={setsOverlayScreen}
          appendsToOverTop={appendsToOverTop}
          appendsToOverlayBottom={appendsToOverlayBottom}
        />
      )}
      <Banner appendsToTitleLines={appendsToTitleLines} />
      <Cases appendsToCaseImages={appendsToCaseImages} />
    </Fragment>
  );
};

export default Home;
