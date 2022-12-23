const MesgFun =(props)=>{
    const {fname, lname}=props;
return <div>
    <p>Name : {props.fname} - {props.lname}</p>
    <p>Name Using Des : {fname} - {lname}</p>
</div>
}

export default MesgFun;