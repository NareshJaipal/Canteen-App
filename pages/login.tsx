import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";

import firebaseApp from "../lib/firebase";
import styles from "../styles/login.module.css";
import Loading from "../components/loading/loading";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");

  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const handleLoginInBtn = (e: any) => {
    e.preventDefault();
    console.log("Log in Button Clicked");

    if (email === "") {
      setUserErrorMessage("Please enter your email!");
    } else if (password === "") {
      setUserErrorMessage("Please enter password!");
    } else {
      setUserErrorMessage("");
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/");
          setIsLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);

          if (errorCode === "auth/invalid-login-credentials") {
            setUserErrorMessage("Invalid emial or password!");
          } else if (errorCode === "auth/invalid-email") {
            setUserErrorMessage("Please enter a valid email!");
          } else {
            setUserErrorMessage("Something went wrong!");
          }

          console.log({ error });
        });
    }
  };

  const handleSignUpBtn = (e: any) => {
    e.preventDefault();
    if (email === "") {
      setUserErrorMessage("Please enter your email!");
    } else if (password === "") {
      setUserErrorMessage("Please enter password!");
    } else {
      setUserErrorMessage("");
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/");
          setIsLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);

          if (errorCode === "auth/email-already-in-use") {
            setUserErrorMessage("Already have an accout!");
          } else if (errorCode === "auth/invalid-email") {
            setUserErrorMessage("Please enter a valid email!");
          } else {
            setUserErrorMessage("Something went wrong!");
          }

          console.log({ errorCode, errorMessage });
        });
    }
  };
  const handleLogInOrSingUpPage = (e: any) => {
    e.preventDefault();
    setIsLoginPage(!isLoginPage);
    setUserErrorMessage("");
  };

  const handleContinueWithGoogle = (e: any) => {
    e.preventDefault();
    console.log("Continue with Google");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userInfo) => {
        // const credential = GoogleAuthProvider.credentialFromResult(userInfo);
        // const token = credential?.accessToken;
        // const user = userInfo.user;

        // console.log({ credential, token, user });
        console.log({ userInfo });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const handleContinueWithFacebook = (e: any) => {
    e.preventDefault();
    console.log("Continue with Facebook");

    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((userInfo) => {
        console.log({ userInfo });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const handleContinueWithGithub = (e: any) => {
    e.preventDefault();
    console.log("Continue with Github");

    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((userInfo) => {
        console.log({ userInfo });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  return (
    <div className={styles.loginWrapper}>
      {isLoading && <Loading />}
      <div className={styles.login}>
        {isLoginPage ? (
          <div className={styles.loginHeading}>Login</div>
        ) : (
          <div className={styles.loginHeading}>Signup</div>
        )}
        {userErrorMessage !== "" && (
          <div className={styles.userErrorMessage}>{userErrorMessage}</div>
        )}

        <form className={styles.loginForm}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label className={styles.inputLabel} htmlFor="email">
              email address
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <label className={styles.inputLabel} htmlFor="password">
              password
            </label>
          </div>
          {isLoginPage ? (
            <button onClick={handleLoginInBtn} className={styles.loginBtn}>
              Login
            </button>
          ) : (
            <button onClick={handleSignUpBtn} className={styles.loginBtn}>
              Signup
            </button>
          )}
          {isLoginPage ? (
            <div className={styles.logInOrSingUpPage}>
              don't have an account?
              <button
                onClick={handleLogInOrSingUpPage}
                className={styles.logInOrSingUpPageBtn}
              >
                Signup
              </button>
            </div>
          ) : (
            <div className={styles.logInOrSingUpPage}>
              already have an account?
              <button
                onClick={handleLogInOrSingUpPage}
                className={styles.logInOrSingUpPageBtn}
              >
                Login
              </button>
            </div>
          )}
        </form>
        <div className={styles.orText}>OR</div>
        <div className={styles.webServicesWrapper}>
          <button onClick={handleContinueWithGoogle}>
            <div className={styles.webServices}>
              <Image
                src={"/static/icons/google.svg"}
                alt="Google"
                width={40}
                height={40}
              />
            </div>
          </button>
          <button onClick={handleContinueWithFacebook}>
            <div className={styles.webServices}>
              <Image
                src={"/static/icons/facebook.svg"}
                alt="Google"
                width={40}
                height={40}
              />
            </div>
          </button>
          <button onClick={handleContinueWithGithub}>
            <div className={styles.webServices}>
              <Image
                src={"/static/icons/github.svg"}
                alt="Google"
                width={40}
                height={40}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
