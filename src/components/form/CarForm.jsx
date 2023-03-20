import React from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';

const schema = yup
  .object()
  .shape({
    name: yup.string().max(40).required(),
    bhp: yup.number().integer().max(5000).required(),
    avatar_url: yup.string().url(),
  })
  .required();

const defaults = {
  name: '',
  bhp: '',
  avatar_url: '',
};

function CarForm({ car, submitHandler }) {
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: car || defaults,
  });

  useEffect(() => {
    console.log(formState);
  });

  useEffect(() => {
    if (car) {
      reset(car);
    }
  }, [car, reset]);

  const formRowStyle = {
    marginBlockEnd: '1em',
  };

  let submitFn = (vals) => {
    reset();
    car ? submitHandler(car._id, vals) : submitHandler(vals);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="name"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="name"
              {...field}
              label="name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="bhp"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="number"
              {...field}
              label="bhp"
              fullWidth
              error={!!errors.bhp}
              pattern={/[0-9]{1,4}/}
              helperText={errors.bhp?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="avatar_url"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="avatar_url"
              fullWidth
              error={!!errors.avatar_url}
              helperText={errors.avatar_url?.message}
            />
          )}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>
      </div>

      <div style={{ marginTop: 20 }}>
        <Button
          type="submit"
          primary="true"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!isDirty || isSubmitting || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default CarForm;
