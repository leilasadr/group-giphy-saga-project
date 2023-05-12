import './GIFItem.css';

function GIFItem({ src }) {
  return (
    <div className="img">
      <img src={src} />
      <button>Fave!</button>
    </div>
  );
}

export default GIFItem;
