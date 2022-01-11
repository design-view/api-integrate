function UserList({users}){
    return(
        <div>
            {users.map(user=><p key={user.id}>이름은 {user.username} 나이는{user.age}</p>)}
        </div>
    );
}
export default UserList;