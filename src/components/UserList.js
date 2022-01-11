import User from "./User";
function UserList({users, onToggle, onDelete}){
    return(
        <div>
            {users.map(user=>
            <User key={user.id} user={user} 
            onToggle={onToggle} 
            onDelete={onDelete} />)}
        </div>
    );
}
export default UserList;