import './GIFItem.css';

function GIFItem({ src }) {
  return (
    <div className="img">
      <img src={src} />
    </div>
  );
}

export default GIFItem;
