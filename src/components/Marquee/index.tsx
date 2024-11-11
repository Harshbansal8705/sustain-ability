import './index.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>
          Nature design • Smart irrigation systems • Rooftop Farming • Renewable energy • Eco-friendly materials • Vertical gardens
        </span>
        {/* Repeat the text to create a continuous scroll effect */}
        <span>
          Nature design • Smart irrigation systems • Rooftop Farming • Renewable energy • Eco-friendly materials • Vertical gardens
        </span>
      </div>
    </div>
  );
};

export default Marquee;
