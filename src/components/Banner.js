import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = ({ appendsToTitleLines }) => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <h2>
            <div className="line">
              <span ref={appendsToTitleLines}>Creating unique brands is</span>
            </div>
            <div className="line">
              <span ref={appendsToTitleLines}>what we do.</span>
            </div>
          </h2>

          {/* Button */}
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
