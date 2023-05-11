import GIFItem from '../GIFItem/GIFItem';
import './GIFSearch.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function GIFSearch() {
  const testImages = [
    'https://media.giphy.com/media/BfiL8ZJWqfw7C/giphy-downsized-large.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTMyZDY3NWY3MzdhY2UxNmQ2YzMyYmM5MzMyMDlmYWUzMjBkNDk1ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/eRmSIGNqJCBxNgzc2k/giphy.gif'
  ]

const history = useHistory();

  return (
    <div>
      <h1>Giphy Finder!</h1>
      <div>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <button onClick={() => {history.push('/favorites')}} to="favorites">Favorite GIFs</button>
      </div>
      <div className="gridContainer">
        <GIFItem src={testImages[0]} />
        <GIFItem src={testImages[1]} />
        <GIFItem src={testImages[0]} />
        <GIFItem src={testImages[0]} />
        <GIFItem src={testImages[1]} />
        <GIFItem src={testImages[0]} />
        <GIFItem src={testImages[1]} />
        <GIFItem src={testImages[0]} />
      </div>
    </div>
  );
}

export default GIFSearch;