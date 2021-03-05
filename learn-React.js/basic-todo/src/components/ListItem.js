// // function ListItem(props) {
//     // console.log(props);
// // function ListItem({item}) {
// //     console.log({item});
// function ListItem({item: { task , status} , setList , index , props}) {
//     console.log({item: { task , status} , setList, index });
//     console.log(props.list);
//     // console.log(props.list[1].task);
//     console.log(props);

//     const HandleEdit = (indexToEdit) => {
//         // console.log(index)
//         // console.log(indexToEdit)
//         console.log(props.list[index].task)
//         const newText = prompt('')
//         setList(props.list.map((item, index) => 
//             index == indexToEdit ? {...item , task:newText} : item
//         ))
//     }


//     function HandleDelete(indexToDelete) {
//         setList(props.list.filter((item, index) => 
//            index!==indexToDelete
//         ))
//     }
    
    
//     function HandleToggle(indexToToggle) {
//         setList(props.list.map((item, index) => 
//            index==indexToToggle ? {...item , status:!(status)} : item
//         ))
//     }


//     return (
//             <li>
//                 <span 
//                 style={{ 
//                     marginRight:'20px', 
//                     // textDecoration: props.item.status ? 'line-through' : 'none',
//                     // textDecoration: item.status ? 'line-through' : 'none',
//                     textDecoration: status ? 'line-through' : 'none',
//                 }}
//                 onClick={() => HandleToggle(index)}
//                 >
//                 {/* {props.item.task} */}
//                 {/* {item.task} */}
//                 {task}
//                 </span>

//                 <button
//                 onClick={() => HandleEdit(index)}
//                 >Edit</button> &nbsp;

//                 <button
//                 onClick={() => HandleDelete(index)}
//                 >Delete</button>
//             </li> 
//     )
// };

// export default ListItem;





// function ListItem(props) {
    // console.log(props);
// function ListItem({item}) {
//     console.log({item});
function ListItem({item: { task , status} , index , handleDelete , handleEdit , handleToggle }) {
    // console.log({item: { task , status} , index , handleDelete , handleEdit , handleToggle });
    // console.log(props.list);
    // console.log(props.list[1].task);
    // console.log(props);

    const deleteItem = () => {
        handleDelete(index)
    };

    const editItem = () => handleEdit(index);


    return (
            <li>
                <span 
                style={{ 
                    marginRight:'20px', 
                    // textDecoration: props.item.status ? 'line-through' : 'none',
                    // textDecoration: item.status ? 'line-through' : 'none',
                    textDecoration: status ? 'line-through' : 'none',
                }}
                onClick={() => handleToggle(index)}
                >
                {/* {props.item.task} */}
                {/* {item.task} */}
                {task}
                </span>

                <button
                onClick={editItem}
                // onClick={() => handleEdit(index)}
                >Edit</button> &nbsp;

                <button
                onClick={deleteItem}
                >Delete</button>
            </li> 
    )
};

export default ListItem;