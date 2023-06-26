import MyButton from "./components/MyButton";
import './styles/App.css'
import { useState } from "react"

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

let content;
let isLogin = true;

if (isLogin) {
  content = <div>auth</div>
} else {
  content = <div>error</div>
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function App() {

  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className="red">Welcome to my app</h1>
      <MyButton count={count} onClick={HandleClick} />
      <MyButton count={count} onClick={HandleClick}/>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      {content}

      {isLogin ? (
        <div>Ternary auth</div>
      ) : (
        <div>Ternary error</div>
      )}

      {
        isLogin && <div>&& auth</div>
      }

      <h2>List</h2>
      <ul>
        {products.map(product =>
          <li
            key={product.id}
            style={{
              color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
          >
            {product.title}
          </li>
        )}
      </ul>

    </div>
  );
}

export default App;
