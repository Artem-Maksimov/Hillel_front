import { useSelector } from 'react-redux';

export function UserInfo() {
    const {info, category, id, status, error} = useSelector((state) => (state.user));    
    
    return (
        <div className="container data-container">
            <span className="badge bg-secondary">{ category}</span>
            <span className="badge bg-secondary">{id}</span>
            {status==='loading' ? <h2 className='text-secondary display-2 text-center'>Loading...</h2>: 
                <pre>{JSON.stringify(info,null, 4)}</pre>
            }
            {error && <h2 className='text-danger text-center'> Oups!...Something wrong...<br />{ error}</h2>}
        </div>
    )
}