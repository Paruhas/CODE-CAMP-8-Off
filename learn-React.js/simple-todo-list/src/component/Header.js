import { useState , useEffect } from "react"

function Header(props) {
    // console.log(props)


    // const [text, setText] = useState('')
    
  const handleSearchTextChange = (event) => {
    console.log(event)
    // console.log(event.target.value)
    props.setTextInput(event.target.value);
    props.setSearchKey(event.target.value);
  };



    return (
        <div>
            <header>

                <div className='h-left'>
                    <p>To Do List App</p>
                </div>

                <div className='h-right'>
                    <input type='text' placeholder='Search' 
                    onChange={handleSearchTextChange}
                    value={props.textInput}
                    ></input>
                    <button className='searchButton' 
                    onClick={props.handleSubmitSearch}
                    >Search</button>
                    <button className='AddButton' 
                    onClick={props.handleGoToAdd}
                    >Add</button>
                </div>

            </header>
        </div>
    )
}

export default Header