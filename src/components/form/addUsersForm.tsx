function FormAddUser() {
  return (
    <div className='users_form_block'>
      <form className='users_form_form' action='#'>
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
      </form>
    </div>
  );
}

export default FormAddUser;
