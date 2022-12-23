const Profile = (props) => {
    return <div><h4>Name is {props.userName}</h4>
    {props.children}</div>

}

export default Profile;