function FormAddUser() {
  return (
    <form action='#'>
      <fieldset>
        <legend>Personal information</legend>
        <label htmlFor=''>
          Name: <input type='text' />
        </label>
        <label htmlFor=''>
          E-mail: <input type='email' />
        </label>
        <label htmlFor=''>
          Date of Birth: <input type='date' />
        </label>
        <label htmlFor=''>
          Place of Birth: <input type='text' />
        </label>
      </fieldset>
    </form>
  );
}

export default FormAddUser;
