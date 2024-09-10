import { useState } from 'react';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  country: '',
  about: '',
  gender: 'Male',
  checkbox: false,
};
const FormObject = ({ registerNewSuperUser }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = e => {
    e.preventDefault();
    registerNewSuperUser(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChangeInput = e => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => {
        return {
          ...prev,
          checkbox: !prev.checkbox,
        };
      });

      return;
    }

    setFormData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input value={formData.username} onChange={handleChangeInput} name='username' />
        </label>
        <label>
          <span>Email:</span>
          <input value={formData.email} onChange={handleChangeInput} name='email' type='email' />
        </label>
        <label>
          <span>Password:</span>
          <input value={formData.password} onChange={handleChangeInput} name='password' type='password' />
        </label>
        <label>
          <span>Country:</span>
          <select value={formData.country} onChange={handleChangeInput} name='country'>
            <option value='Ukraine'>Ukraine</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
          </select>
        </label>

        <label>
          <span>About Me:</span>
          <textarea value={formData.about} onChange={handleChangeInput} name='about' />
        </label>

        <div>
          Gender:
          <label>
            <input type='radio' checked={'Male' === formData.gender} value='Male' onChange={handleChangeInput} name='gender' />
            Male
          </label>
          <label>
            <input type='radio' checked={'Female' === formData.gender} value='Female' onChange={handleChangeInput} name='gender' />
            Female
          </label>
        </div>

        <label>
          <input type='checkbox' onChange={handleChangeInput} name='checkbox' checked={formData.checkbox} />I agree with rules!
        </label>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default FormObject;
