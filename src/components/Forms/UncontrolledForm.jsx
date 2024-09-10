const UncontrolledForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Submit');
    // console.log(e.target);
    const form = e.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log({ username, email, password });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input name='username' />
        </label>
        <label>
          <span>Email:</span>
          <input name='email' type='email' />
        </label>
        <label>
          <span>Password:</span>
          <input name='password' type='password' />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default UncontrolledForm;
