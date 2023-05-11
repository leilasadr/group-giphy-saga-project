import '../GIFSearch/GIFSearch.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FavoriteGIFs() {
  const history = useHistory();

  return (
    <div>
      <h2>Uncategorized</h2>
      <div className=".gridContainer">
        <img src="https://media.giphy.com/media/BfiL8ZJWqfw7C/giphy-downsized-large.gif" />
      </div>
      <button onClick={() => { history.push('/')} }>Back to Search</button>
    </div>
  );
}

export default FavoriteGIFs;
