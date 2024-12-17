import './index.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>
        Structure design •  MEP design • BIM services • 3D visualisation
        </span>
        {/* Repeat the text to create a continuous scroll effect */}
        <span>
        Structure design •  MEP design • BIM services • 3D visualisation
        </span>
      </div>
    </div>
  );
};

export default Marquee;
