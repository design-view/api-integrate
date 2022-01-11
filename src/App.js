
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import { useRef , useReducer} from 'react';

const initialState = {
  inputs: {
    username:'',
    userage: ''
  },
  users: [
    {id:1, username: "정우성", age: 30, member:false},
    {id:2, username: "김고은", age: 28, member:false},
    {id:3, username: "공유", age: 22, member:false},
    {id:4, username: "서유정", age: 34, member:false},
    {id:5, username: "정우", age: 26, member:false},
  ]
}
function reducer(state,action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]:action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs:state.inputs,
        users:[
          ...state.users,
          action.user
        ]
      }
    case 'MEMBER_TOGGLE':
    return {
      inputs:state.inputs,
      users: state.users.map(user=>
        user.id === action.id ? {...user, member:!user.member } : user  
      )
    }
    case 'MEMBER_DELETE':
    return {
      inputs:state.inputs,
      users: state.users.filter(user=> user.id !== action.id )
    }
    default:
    return state;
  }
 
}

function App() {
  
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users} = state;
  const { username, userage } = state.inputs;
  const nextId = useRef(6);
  function onChange(e) {
    const { name, value } = e.target;
    console.log(name,value)
    dispatch({
      type: 'CHANGE_INPUT',
      name:name,
      value:value,
    })
  }
  function onCreate(){
    dispatch({
      type:'CREATE_USER',
      user: {
        id:nextId.current,
        username: username,
        age: userage,
        member: false
      }
    })
    nextId.current = nextId.current+1;
  }
  function onToggle(id){
    dispatch({
      type:'MEMBER_TOGGLE',
      id: id
    })
  }
  function onDelete(id){
    dispatch({
      type: 'MEMBER_DELETE',
      id:id
    })
  }
  return (
    <div className="App">
      <CreateUser username={username} userage={userage} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onToggle={onToggle} onDelete={onDelete}/>
    </div>
  );
}

export default App;
