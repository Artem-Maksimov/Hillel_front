import { useDispatch } from "react-redux";
import { clearUserInfo } from '../store/userSlice';

export function ClearUser() {
    const dispatch = useDispatch();

    function handlerClear() {
        dispatch(clearUserInfo())
        
    }

    return (
        <>
        <button type="button" className="btn btn-warning" onClick={handlerClear}>Clear</button>
        </>
    )
}