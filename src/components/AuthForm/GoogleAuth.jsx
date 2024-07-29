import googleImg from "../../assets/images/google.png";

const GoogleAuth = ({isLogIn}) => {
  return (
    <div className="google-login">
      <img src={googleImg} alt="googlepng-img" />
      <p className="redirect-link">{isLogIn? "Log": "Sign"} in with Google</p>
    </div>
  );
};

export default GoogleAuth;
