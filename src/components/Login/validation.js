const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = '000001'
  } else if (values.username.length > 15) {
    errors.username = 'B-0004'
  } else if (values.username.length < 3) {
    errors.username = 'B-0005'
  }

  return errors
}

export default validate