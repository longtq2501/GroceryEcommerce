import styled from "styled-components";
import authenticateImage from "../../../assets/authenticate/image.png";
import Button from "../../../components/Button/Button.jsx";
import iconLogo from "../../../assets/authenticate/icon-logo.svg";
import iconEmail from "../../../assets/authenticate/icon-email.svg";
import iconPassword from "../../../assets/authenticate/icon-password.svg";
import { useEffect, useState } from "react";
import { loginApi } from "../../../services/UserService.jsx";
import { useNavigate, Link } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const LogoText = styled.a`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 145.455%;
`;

const FormTitle = styled.h1`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 145.455%;
  text-align: center;
  color: #1a162e;
`;

const FormDesc = styled.p`
  color: #9e9da8;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem; /* 142.857% */
  text-align: center;
`;

const FormFooterText = styled.label`
  color: #9e9da8;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
`;

const FormFooterRecoveryPassword = styled.a`
  color: #0071dc;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
  cursor: pointer;
`;

const InputItemContainer = styled.div`
  position: relative;
  padding: 1.2rem 1.7rem 1.2rem 1.2rem;
  border: 1px solid #d2d1d6;
  border-radius: 1rem;
`;

const InputItem = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
  color: #1a162e;
  &::placeholder {
    color: #d2d1d6;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 150%;
  }
`;

const InputItemIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.2rem;
  cursor: pointer;
`;

const ImageText = styled.h2`
  color: #1a162e;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  width: 41.2rem;
`;

const NavigationSignUpText = styled.p`
  color: #9e9da8;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 144.444%;
`;

const NavigationSignUpLink = styled.a`
  color: #0071dc;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const AuthenticateRequest = {
    username: username,
    password: password,
  };

  const request = JSON.stringify(AuthenticateRequest);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    let res = await loginApi(request);
    if (res.status === 200) {
      navigate("/");
    } else {
      console.log("Login Failed");
    }
  };

  return (
    <div className="mx-[17.5px] flex flex-col justify-center h-[100vh] lg:flex-row">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-1 bg-[#fafafd]">
        <ImageContainer>
          <img src={authenticateImage} alt="image" />
          <ImageText>
            The best of luxury brand values, high quality products, and
            innovative services
          </ImageText>
        </ImageContainer>
      </div>

      <FormContainer className="lg:flex-1 lg:justify-center lg:ml-[60px] lg:mr-[42.5px]">
        <div className="flex flex-row items-center justify-between gap-[14px]">
          <img src={iconLogo} alt="logo" />
          <LogoText href="/home">grocerymart</LogoText>
        </div>

        <form onSubmit={handleLogin} className="lg:w-[460px]">
          <div className="flex flex-col gap-[10px] mb-[30px]">
            <FormTitle>Sign In</FormTitle>
            <FormDesc>
              Welcome back to sign in. As a returning customer, you have access
              to your previously saved all information.
            </FormDesc>
          </div>

          <div className="flex flex-col gap-[20px]">
            <InputItemContainer>
              <InputItem
                type="email"
                placeholder="Email"
                onChange={handleUsername}
                value={username}
              />
              <InputItemIcon alt="icon-email" src={iconEmail} />
            </InputItemContainer>
            <InputItemContainer>
              <InputItem
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
              />
              <InputItemIcon alt="icon-password" src={iconPassword} />
            </InputItemContainer>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-[1rem] items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="w-[18px] h-[18px] p-[2.75px]"
                />
                <FormFooterText htmlFor="remember-me">
                  Set as default card
                </FormFooterText>
              </div>
              <FormFooterRecoveryPassword>
                Recovery Password
              </FormFooterRecoveryPassword>
            </div>

            <div className="flex flex-col gap-[30px]">
              <Button type="submit" value="Submit" onClick={handleLogin}>
                Login
              </Button>
              <Button className="button--secondary">Sign in with Google</Button>
            </div>
          </div>
        </form>

        <div className="flex flex-row gap-[10px] items-center">
          <NavigationSignUpText>
            Don’t have an account yet?
          </NavigationSignUpText>
          <Link
            to={"/register"}
            className="text-[18px] leading-[144.444%] cursor-pointer font-[500] text-[#0071dc]"
          >
            Sign Up
          </Link>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
