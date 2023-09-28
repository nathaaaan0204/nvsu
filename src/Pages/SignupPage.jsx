import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  export const SignupPage = () => {
    return (
      <div className="h-screen bg-[url('/images/Login-bg.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
        <Card className="p-12 w-[600px] flex flex-col items-center gap-6 bg-white rounded-xl">
         
            <img src="/images/Nvsu-logo.png" />
            <div className="text-center">
              <Typography className="font-semibold text-3xl">Register</Typography>
              <Typography>to create an account</Typography>
            </div>
            <div>
              <form className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-4">
                  
                  
                  <div className="flex gap-5">
                  <Input size="lg" className="w-full" label="First Name" />
                  <Input size="lg" label="Last Name" />
                  </div>
                  <div className=" flex gap-5">
                  <Input size="lg" label="Email" />
                  <Input size="lg" label="Phone Number" />
                  </div>
                  <Input size="lg" label="ID" />
                  <Input size="lg" label="Address" />
                 
                  <Input size="lg" label="Username" />
                  <Input type="password" size="lg" label="Password" />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree to the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6 bg-green" fullWidth>
                  Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                  Already have an account?{" "}
                  <Link to="/LoginPage" className="font-medium text-gray-900">
                  Sign In
                </Link>
                </Typography>
              </form>
            </div>
          
         
        </Card>
      </div>
    );
  };
  