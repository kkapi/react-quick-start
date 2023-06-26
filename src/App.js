import MyButton from "./components/MyButton";
import './styles/App.css'

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



function App() {
  return (
    <div>
      <h1 className="red">Welcome to my app</h1>
      <MyButton />
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
    </div> 
  );
}

export default App;
