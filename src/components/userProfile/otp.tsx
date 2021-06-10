import React, { Component, useState } from "react";
import "../../css/otp.css";
import { TextInput, Button } from "evergreen-ui";
import { checkOtp, getAllUser, login } from "../../services/userServices";
import { useEffect } from "react";
import { Progress } from "antd";
import { useHistory } from "react-router";

function Demo() {
  const [value, setValue] = React.useState("");
  let [count, setCount] = useState(Number);

  const history = useHistory();
  let c: any = 0;
  useEffect(() => {
    checkOtp(value).then((res) => console.log("res  ", res));
    countdownTimer();
  }, []);

  const countdownTimer = () => {
    const id: any = setInterval(() => {
      if (count >= 60) {
        clearInterval(id);
      }
      setCount((count += 1))
    }, 1000);
  };

  const handleResend = () => {
    setCount(0);
  };

  const sendOtp = (e: any) => {
    e.preventDefault();
    checkOtp(value).then((res) => {
      history.push("/chat-screen")
    });
  };

  return (
    <div className="container">
      <div>
        <img
          className="otpSvgImage"
          src="https://image.freepik.com/free-vector/2fa-authentication-password-secure-notice-login-verification-sms-with-push-code-message-shield-icon-smartphone-phone-laptop-computer-pc-flat_212005-139.jpg"
          alt="image"
        />
      </div>
      <div className="card-view">
        <form>
          <p className="Text-Field">Enter verification code</p>
          <div className="margin-top--small">
            <TextInput
              className="text-input-otp"
              onChange={(e: any) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div className="timer">
            <Progress
              width={65}
              type="circle"
              format={(percent) =>
                count < 60 ? (
                  `00:${count}`
                ) : (
                  <p className="resend-btn" onClick={() => handleResend}>
                    Resend
                  </p>
                )
              }
              percent={Math.round(count / 0.6)}
            />
          </div>

          <div className="btn-row">
            <button
              className="btn margin-top--large"
              onClick={(e: any) => sendOtp(e)}
              disabled={value.length !== 6}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Demo;
