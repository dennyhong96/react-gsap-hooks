import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Cases = ({ appendsToCaseImages }) => {
  const caseStudies = [
    {
      id: 1,
      subtitle: "Curology",
      title: "A custom formula for your skin’s unique needs",
      img: "curology-min",
    },
    {
      id: 2,
      subtitle: "Yourspace",
      title: "Open space floor plans for you next venture",
      img: "yourspace-min",
    },
    {
      id: 3,
      subtitle: "Lumin",
      title: "For your best look ever",
      img: "lumin-min",
    },
  ];

  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          {/* Left arrow */}
          <div className="cases-arrow prev disabled">
            <LeftArrow />
          </div>

          {/* Right arrow */}
          <div className="cases-arrow next">
            <RightArrow />
          </div>
        </div>

        {/* Case studies */}
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              {/* Case info */}
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>

              {/* Case image */}
              <div className="case-image">
                <img
                  ref={appendsToCaseImages}
                  src={require(`../assets/${caseItem.img}.png`).default}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
