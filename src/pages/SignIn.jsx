import React from 'react';
import Layout from '../components/Layout';

const SignIn = () => {
  return (
    <div className="container-fluid">
      <div className="flex h-screen">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="p-6" style={{ width: '35rem' }}>
            <h1 className="text-center text-4xl font-bold mb-6">Sign In</h1>
            <form action="" method="POST">
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2  items-center">
                  <i className="fas fa-user mr-2"></i> ชื่อผู้ใช้งาน
                </label>
                <input
                  type="text"
                  className=" block w-full py-2 px-4 border-b-2 rounded-md focus:outline-none"
                  placeholder="Username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2  items-center">
                  <i className="fas fa-lock mr-2"></i> รหัสผ่าน
                </label>
                <input
                  type="password"
                  className=" block w-full py-2 px-4 border-b-2 rounded-md focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn bg-primary hover:bg-secondary py-2 px-4 w-full rounded-xl shadow-lg text-lg flex items-center justify-center"
                  name="login"
                  type="submit"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i> เข้าสู่ระบบ
                </button>
              </div>
              <div className="text-center mt-3">
                <button className="text-red-800 r">
                  หากคุณยังไม่มีบัญชี คลิกที่นี่
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 bg-red-800">
        <div className="flex items-center justify-center min-h-screen">
        <img className='w-1/2' src="https://static.vecteezy.com/system/resources/previews/045/931/744/original/strawberry-cake-3d-decoration-free-png.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
