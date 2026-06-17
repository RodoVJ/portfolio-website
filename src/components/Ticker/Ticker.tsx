import './Ticker.css';

const TICKER_ITEMS = [
  '4+ yrs in production',
  'ex-Amazon SDE',
  'senior full-stack',
  '30% task completion lift',
  'sub-1s dashboard load',
  '80% spam reduction',
  'IEEE-published research',
  '15 teams migrated to CI/CD',
  'react · node · java · aws',
  'CS + biology, honors',
];

const Ticker = () => {
  return (
    <div className="ticker" role="presentation" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {TICKER_ITEMS.map((item, index) => (
              <span className="ticker-item" key={`${copy}-${index}`}>
                <span className="ticker-dot">●</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
