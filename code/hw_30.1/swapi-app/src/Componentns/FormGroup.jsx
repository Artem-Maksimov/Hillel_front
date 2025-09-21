import { useFormik } from 'formik';
import {addressSchema} from './helper'
import { useDispatch } from 'react-redux';
import { fetchUser, addUserInfo } from '../store/userSlice';

export function FormGroup() {
  const dispatch = useDispatch();

const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    } = useFormik({
      initialValues: {
            address:''
        },
        
      onSubmit: (values, action, errors) => {
        const category = values.address.slice(0, values.address.indexOf('/'));
        const id = values.address.slice(values.address.indexOf('/')+1)
          
           dispatch(addUserInfo({
            category: category,
            id: id
           }))
           dispatch(fetchUser(values.address))
             action.resetForm();

        },
        
        validationSchema: addressSchema
  })


  return (

      <form className="form js--form" name="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-text">https://swapi.dev/api/</span>
          <input
            type="text"
            id='address'
            className="form-control"
            placeholder="people/1" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            name="address" />
           {errors.address && touched.address && (
          <span id='error' style={{ color: "red" }}> { errors.address}</span>)}
          <button type="submit" className="btn btn-outline-secondary">Get info</button>
        </div>  
      </form>
    )
}