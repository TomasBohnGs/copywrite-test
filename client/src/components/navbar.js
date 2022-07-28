import { useDispatch } from 'react-redux'

function Navbar({newWord, setNewWord, reverseWord}) {
    const dispatch = useDispatch();
    function onImputChange(event){
        event.preventDefault()
        setNewWord(event.target.value)
    }
    function handleReverse(event){
        event.preventDefault()
        dispatch(reverseWord(newWord))
        setNewWord('')
    }
    return (
        <nav className="navbar d-flex justify-content-center" style={{backgroundColor: '#E00002'}}>
            <div className="input-group m-2 w-50" >
                <input 
                    onChange={ onImputChange } 
                    value={ newWord }
                    type="text" 
                    className="form-control border-0 m-1 rounded" 
                    placeholder="Insert Text" 
                    aria-label="Example text with button addon" 
                    aria-describedby="button-addon1" 
                />
                <button 
                    onClick={handleReverse} 
                    className="btn btn-outline-secondary text-white border-0 m-1 rounded" 
                    type="button" 
                    id="button-addon1" 
                    style={{backgroundColor: '#4900FF'}}
                >Send</button>
            </div>
        </nav>
    );
}

export default Navbar;
