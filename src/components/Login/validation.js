const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'requiredField'
  } else if (values.username.length > 15) {
    errors.username = 'mustBeLess'
  }

  return errors
}

export default validate