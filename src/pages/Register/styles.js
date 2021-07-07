import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterAnimation = keyframes`
  0%{
    top: -450px;
    opacity: 0;
    /* transform: scale(0.5); */
  }
  100%{
    top: 0px;
    opacity: 1;
    /* transform: scale(1); */
  }
`;

export const ModalContainer = styled.section`
  animation: ${RegisterAnimation} 0.5s;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 19;

  overflow: auto;

  background-color: white;
  box-shadow: 2px 5px 15px #00000020;
  border-radius: 15px;

  position: relative;

  /* border: 1px solid var(--secondary); */
`;

export const BannerRegister = styled.div`
  width: 50vw;
  height: 100%;
  position: relative;
  /* background-color: burlywood; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }

  > a {
    position: absolute;
    bottom: 25px;
    left: 0px;
    margin: 15px;
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(
      to bottom,
      var(--primary),
      var(--secondary)
    );
    -webkit-background-clip: text;
    font-size: 20px;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  > h1 {
    position: absolute;
    top: 0px;
    width: 100%;
    text-align: center;
    color: transparent;
    font-weight: 600;
    font-size: 32px;
    margin-top: 15px;
    text-transform: uppercase;
    user-select: none;
    letter-spacing: 2px;
    background-image: linear-gradient(
      to right,
      var(--primary),
      var(--secondary)
    );
    -webkit-background-clip: text;
  }
`;

export const RegisterContainer = styled.div`
  min-width: 55vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
  height: 100%;
  overflow: hidden;
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-image: linear-gradient(to right, var(--secondary), var(--primary)); */
  background: var(--font);
  > h1 {
    margin-top: 30px;
    color: white;
    font-size: 38px;
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: rebeccapurple; */

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    color: white;
  }

  > select {
    border: 0;
    padding-left: 15px;
    border-radius: 3px;
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #ededed;
    width: 80%;
    height: 40px;
    font-size: 16px;
    border-radius: 30px;
  }

  > span {
    width: 100%;
    height: 75px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  > div {
    height: 40px;

    > input:focus {
      border: 2px solid var(--secondary);
    }

    > input:not(:placeholder-shown) + label,
    > input:focus + label {
      color: var(--white);
      font-size: 16px;
    }

    > div {
      height: 40px;

      > input:not(:placeholder-shown) + label,
      > input:focus + label {
        color: var(--white);
        font-size: 16px;
      }
      > input:focus {
        border: 2px solid var(--secondary);
      }
    }
  }
`;

export const InputRow = styled.div`
  width: 90%;
  /* background-color: red; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  div {
    width: 48%;
  }

  #cpf {
    width: 50%;
    height: 50px;
    font-size: 18px;
    border-radius: 15px;
    position: relative;
    border: none;
    color: var(--font);
    background-color: var(--gray);
    margin: none;
    padding: 0px 15px;
    font-weight: 400;
  }

  > select {
    width: 48%;
    height: 50px;

    border: 0;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #ededed;
  }
`;

export const ButtonNext = styled.button`
  width: fit-content;
  height: 50px;
  color: white;
  font-size: 26px;
  background: none;
  border: none;
  font-weight: 200;
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 15px;

  text-transform: uppercase;
  transition: all 0.6s;

  :disabled {
    opacity: 0.2;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const ClientOrFreelancer = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 25px;
  /* background-color: #fff; */
  > h1 {
    font-size: 32px;
    color: var(--white);
    font-weight: 400;
    margin-bottom: 15px;
  }

  > ul {
    width: 100%;
    height: fit-content;
    list-style: inside;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    gap: 15px;

    > li {
      width: 0px;
      flex: auto;
      margin-bottom: 15px;

      > input {
        display: none;
      }

      > h2 {
        text-align: center;
        font-weight: 400;
      }

      > label {
        > img {
          width: 100%;
          height: 100%;
          transition: 0.3s;
          cursor: pointer;
          border-radius: 10px;

          :hover {
            border: solid 2px var(--secondary);
          }
        }
      }
    }
  }
`;

export const FreelancerType = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  > h1 {
    color: var(--white);
    font-weight: 400;
    font-size: 34px;
    margin-bottom: 15px;
  }
  #imageRow {
    position: relative;
    width: fit-content;
    height: fit-content;
    > img {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      border: solid 1px #00000040;
    }
    > label {
      width: 75px;
      height: 75px;
      background-color: var(--secondary);
      border-radius: 100%;
      position: absolute;
      top: 15px;
      right: 15px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;

      transition: 0.3s;

      :hover {
        background-color: var(--darkGray);
        cursor: pointer;
      }
    }
  }
  > input {
    display: none;
  }

  #typeRow {
    > h2 {
      color: var(--white);
      font-weight: 400;
      font-size: 28px;
      margin-bottom: 25px;
    }

    > select {
      width: 100%;
      height: 50px;
      border-radius: 15px;
      font-size: 24px;
      color: var(--font);
      padding: 0px 10px;
      /* margin-bottom: 25px; */
      background-color: #ededed;
      border: none;
    }
  }
`;

const upAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  50%{
    opacity: 1;
  }
  100%{
    transform: translateY(-800px) rotate(960deg);
  }
`;

export const ClientType = styled.section`
  /* background-color: aliceblue; */

  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1 {
    color: var(--secondary);
    font-weight: 500;
    font-size: 34px;
  }

  > div {
    position: relative;
    > img {
      width: 400px;
      height: 400px;
      border-radius: 100%;
      border: solid 1px #00000040;
    }
    > label {
      width: 100px;
      height: 100px;
      background-color: var(--secondary);
      border-radius: 100%;
      position: absolute;
      top: 10px;
      right: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;

      transition: 0.3s;

      :hover {
        background-color: var(--darkGray);
        cursor: pointer;
      }
    }
  }
  > input {
    display: none;
  }
`;

export const Squares = styled.ul`
  > li {
    width: 40px;
    height: 40px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    opacity: 0.6;
    display: block;
    position: absolute;
    bottom: -40px;
    animation: ${upAnimation} 1s infinite;
    /* animation-direction: alternate; */
  }
`;
