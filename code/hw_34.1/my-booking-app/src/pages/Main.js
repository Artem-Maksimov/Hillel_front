import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { getDestinations } from '../store/destinations/actions';
import { getHotels } from '../store/hotels/actions';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

const validate = values => {
  const errors = {};
  if (!values.destination) {
    errors.destination = 'Обов\'язкове поле';
  }
  return errors;
};

const Main = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.destinations.list);

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  const onSubmit = (values) => {
    dispatch(getHotels(values));
  };

  return (
    <div className="main-container">
      <Typography variant="h4" gutterBottom>
        Забронюйте готель
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className="booking-form">
            <Field name="destination">
              {({ input, meta }) => (
                <FormControl fullWidth margin="normal" error={meta.error && meta.touched}>
                  <InputLabel id="destination-label">Напрямок</InputLabel>
                  <Select {...input} labelId="destination-label" label="Напрямок">
                    {destinations.map(dest => (
                      <MenuItem key={dest.id} value={dest.name}>
                        {dest.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {meta.error && meta.touched && <div className="error-text">{meta.error}</div>}
                </FormControl>
              )}
            </Field>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={submitting}
              fullWidth
              sx={{ mt: 2 }}
            >
              Знайти готелі
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default Main;