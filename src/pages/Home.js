import { Fragment } from "react";

import { Banner, Cases, IntroOverlay } from "../components";
import { useHomeAnimation } from "../hooks/animation";

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
