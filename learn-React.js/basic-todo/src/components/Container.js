// import ListItem from './ListItem';

// function Container(props,setList) {
//     // console.log(props);
//     // console.log(props.list);
//     // console.log(props.setList);
//     return (
//         <ul>
//             {props.list.map((item ,index) => (
//                 <ListItem 
//                     key={index}
//                     item={item}

//                     props={props}
//                     index={index}
//                     setList={props.setList}
//                 />
//             ))}
//             {/* <ListItem />
//             <ListItem />
//             <ListItem /> */}
//         </ul>
        
//     )
// }

// export default Container





import ListItem from './ListItem';

function Container({ list , handleDelete , handleEdit , handleToggle }) {
    // console.log(props);
    // console.log(props.list);
    // console.log(props.setList);
    return (
        <ul>
            {list.map((item ,index) => (
                <ListItem 
                    key={index} //อย่าใช้ตัวนี้ ส่งไม่ได้
                    item={item}

                    index={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleToggle={handleToggle}
                />
            ))}
            {/* <ListItem />
            <ListItem />
            <ListItem /> */}
        </ul>
        
    )
}

export default Container
        