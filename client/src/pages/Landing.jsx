import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby blue bottle try-hard flannel neutral milk hotel cornhole
            banh mi. Solarpunk proident unicorn, iPhone bitters meditation yr
            cupping offal pariatur gorpcore ugh in man braid. Quis lorem man bun
            fashion axe, air plant DSA echo park affogato big mood plaid in
            biodiesel bicycle rights officia gluten-free. 90's bitters solarpunk
            mlkshk heirloom tofu slow-carb do health goth asymmetrical locavore
            messenger bag.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
