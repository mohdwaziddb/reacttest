// const Child = (props) =>{
//     return(
//         <div>
//             <h2>Child Component</h2>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// export default Child;

const Child = ({onIncrease}) =>{
    return (
        <button onClick={onIncrease}> increse from child</button>
    );
};

export default Child;