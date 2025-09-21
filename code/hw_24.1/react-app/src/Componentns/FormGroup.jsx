export function FormGroup() {
    return( <div className="input-group">
  <span className="input-group-text">https://swapi.dev/api</span>
        <input type="text" className="form-control" placeholder="/people/1" />
        <button type="button" className="btn btn-outline-secondary">Get info</button>
</div>)
}