// pages/register.js
import { useState } from 'react';
// import axios from 'axios';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import styles from '../../styles/form.module.css'; 

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     
      if (res.data.Status === 'Success') {
        router.push('/login');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <div style={{marginLeft:'200px', width:'600px'}}>
     
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="form-control rounded"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email address"><strong>Email </strong></label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded"
              autoComplete="current-password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Phone</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              className="form-control rounded"
              autoComplete="current-password"
            />
          </div>
<br />
          <button type="submit" className="btn btn-warning w-100 rounded-0" style={{color:'black', fontWeight:'bold'}}>
            Connect
          </button>
        </Form>
      </div>
    </div>
  );
}
