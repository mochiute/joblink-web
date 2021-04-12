import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: #E5E5E5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 19;

  overflow-x: auto;

  background-color: white;
  border-radius: 4px;

  position: relative;

`;

export const BannerRegister = styled.div`
  width: 45vw;
  height: 100%;
  /* background-color: burlywood; */

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  >img {
    width: 100%;
    height: 100%;
  }
  >a {
    position: relative;
  }
`;

export const RegisterContainer = styled.div`
  width: 55vw;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to bottom, var(--secondary), var(--primary));
  >h1 {
    margin-top: 30px;
    color: white;
    font-size: 38px;
    font-weight: 400;
    letter-spacing: 1.2px;
  }

  >span {
    width: 100%;
    height: 75px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >a{
      color: white;
      font-size: 22px;

      text-decoration: none;
      opacity: 80%;
      font-weight: 400;
      width: fit-content;
      height: fit-content;
    }
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  height: 85%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  >select {
    border: 0;
    padding-left: 15px;
    border-radius: 3px;
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #EDEDED;
    width: 80%;
    height: 50px;
    font-size: 16px;
    border-radius: 30px;
  }
`;


export const ButtonNext = styled.button`
  width: 120px;
  height: 50px;
  color: white;
  font-size: 26px;
  background: none;
  border: none;
  font-weight: 200;

  text-transform: uppercase;
`;