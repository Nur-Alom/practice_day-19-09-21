// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Head Function -> ->.
function App() {
  return (
    <div className="App">
      <DataLoad></DataLoad>

      {/* <Mobile></Mobile>

      <Blog name='Nur-Alom' email='alamn7150@gmail.com' phone='54541645'></Blog>
      <Blog name='Romjan' email='md9577630@gmail.com' phone='545464524'></Blog>
      <Blog name='Islam' email='jsdvjshvb45@gmail.com' phone='4551857465'></Blog>

      <Practice></Practice>

      <LoadUsers></LoadUsers>

      <MyComponent brand='Apple' price='50000'></MyComponent>
      <MyComponent brand='Microsoft' price='10000'></MyComponent>
      <MyComponent brand='Google' price='55000'></MyComponent>
      <MyComponent></MyComponent> */}
    </div>
  );
};
function DataLoad() {
  const [Todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, []);

  return (
    < div >
      <h1>Hello</h1>
      {
        Todos.map(todo => <Todo
          key={todo.id}
          todo={todo}
        ></Todo>)
      }
    </div >
  )
};

function Todo(props) {
  const { title, id, userId } = props.todo
  return (
    <div className='user'>
      <h3>Name: {title}</h3>
      <h4>Id: {id}</h4>
      <p>User Id: {userId}</p>
    </div>
  )
}


// function Mobile() {
//   const [percents, setPercents] = useState(100);
//   const Decrease = () => {
//     if (percents > 0) {
//       setPercents(percents - 10)
//     };
//   };

//   return (
//     <div>
//       <h2>Battery: {percents}</h2>
//       <button onClick={Decrease}>Down Battery</button>
//     </div>
//   )
// };

// function Blog(props) {
//   return (
//     <div className='user'>
//       <h1>Name: {props.name}</h1>
//       <h3>Email:{props.email}</h3>
//       <p>Phone:{props.phone}</p>
//     </div>
//   )
// }

// function Practice() {
//   const style = {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '20px',
//     margin: '25px',
//     border: '2px solid gray',
//     borderRadius: '15px'
//   }

//   return (
//     <div>
//       <article className='blog'>
//         <h2 style={style}>Hello React i am Nur Alom Islam Romjan, Iam from Barisal, today iam Create a React Project For Practice</h2>
//         <p style={{
//           backgroundColor: 'red',
//           color: 'white',
//           padding: '20px',
//           margin: '25px',
//           border: '2px solid gray',
//           borderRadius: '15px'
//         }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem eveniet beatae aut ipsa?</p>
//       </article>
//     </div>
//   )
// };

// function LoadUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])

//   return (
//     <div>
//       <h1>Users Loaded: {users.length}</h1>
//       {
//         users.map(user => <DisplayUsers name={user.name} email={user.email} phone={user.phone}></DisplayUsers>)
//       }
//     </div>
//   )
// }

// function DisplayUsers(props) {
//   return (
//     <div className='user'>
//       <h2>Name: {props.name}</h2>
//       <h5>Email: {props.email}</h5>
//       <p>Number: {props.phone}</p>
//     </div>
//   )
// };

// // Components Function -> ->.
// function MyComponent(props) {
//   const [points, setPoints] = useState(1);

//   const myStyle = {
//     backgroundColor: 'lightblue',
//     padding: '15px',
//     border: '2px solid blue',
//     margin: '20px',
//     borderRadius: '15px'
//   };

//   const HandleAddPoints = () => {
//     const newPoint = points * 2;
//     setPoints(newPoint);
//   };

//   return (
//     <div style={myStyle}>
//       <h1>Hello World</h1>
//       <h3> Brand: {props.brand}</h3>
//       <p> price: {props.price}, I have Points: {points}</p>
//       <button onClick={HandleAddPoints}>Add points</button>
//       <strong style={{ color: 'red', }}><p>This is My React Component</p></strong>
//     </div>
//   )
// };

export default App;
