import React, { useState } from 'react';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    password: '',
  });

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원가입 성공!');
    navigate('/main');
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-indigo-300 opacity-30 rounded-full blur-2xl bottom-[-80px] right-[-60px]" />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-indigo-100">
        <div className="flex items-center justify-center mb-6 gap-2">
          <FaShoppingBag className="text-3xl text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Sign In</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <CommonInput label="Full Name" name="name" value={formData.name} onChange={handleChange} />
          <CommonInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
          <CommonInput label="Email Address" name="email" value={formData.email} onChange={handleChange} />
          <CommonInput label="Birthday" name="birthday" value={formData.birthday} onChange={handleChange} type="date" />
          <CommonInput label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />

          <CommonButton type="submit" disabled={!isFormComplete} variant="signin">
            Sign In
          </CommonButton>
        </form>

        <p className="text-sm md:text-base text-center mt-6 text-gray-600">
          Don’t have an account?{' '}
          <span
            onClick={handleGoToRegister}
            className="text-indigo-600 hover:underline cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
