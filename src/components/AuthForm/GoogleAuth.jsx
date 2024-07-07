import googleImg from "../../assets/images/google.png";

const GoogleAuth = () => {
  return (
    <div className="google-login">
      <img src={googleImg} alt="googlepng-img" />
      <p className="redirect-link">Log in with Google</p>
    </div>
  );
};

export default GoogleAuth;
