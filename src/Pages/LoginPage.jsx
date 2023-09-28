import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="h-screen bg-[url('/images/Login-bg.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
      <Card className="flex flex-row bg-white w-[1000px] rounded-xl">
        <div className="p-12 flex flex-col w-full items-center gap-6">
          <img src="/images/Nvsu-logo.png" />
          <div className="text-center">
            <Typography className="font-semibold text-3xl">Sign in</Typography>
            <Typography>to access NVSU Publication System</Typography>
          </div>
          <div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
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
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <Link to="/SignupPage" className="font-medium text-gray-900">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </div>
        </div>
        <div className="p-12 flex flex-col w-full items-center gap-6">
          <Typography className="font-semibold text-3xl text-center">NVSU <br/>Publication System</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nostrum libero commodi ullam eius temporibus, quod suscipit
            accusantium facere cumque consectetur animi autem voluptatibus
            molestiae voluptas optio veniam odit quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nostrum libero commodi ullam eius temporibus, quod suscipit
            accusantium facere cumque consectetur animi autem voluptatibus
            molestiae voluptas optio veniam s.
          </Typography>
          <Button className="bg-light-green-200 text-green">
          <Link to="/">Learn More</Link>
              </Button>
        
        </div>
      </Card>
    </div>
  );
};
