import data from '../data.json'

export function DataInfo() {
    return (
        <div className="container data-container">
            <span className="badge bg-secondary">people</span>
            <span className="badge bg-secondary">1</span>
            <pre>{ JSON.stringify(data, null, 4)}</pre>
        </div>
    )
}