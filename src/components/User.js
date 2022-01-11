function User({user, onToggle, onDelete}){
    return (
        <p>{user.member ? "회원" : "회원아님" } 이름 : {user.username}, 나이 : {user.age} 
        <button onClick={()=>{ onToggle(user.id)}}>활동체크</button>
        <button onClick={()=>{ onDelete(user.id)}}>삭제</button>
        </p>
    );
}
export default User;