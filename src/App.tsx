import "./App.css";
import avatarImg from "./assets/images/avatar-jessica.jpeg";
import SocialLink from "./components/SocialLink";

const data = {
  name: "Jessica Randall",
  avatar_img: avatarImg,
  location: "London, United Kingdom",
  description: '"Front-end developer and avid reader."',
};
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/guptaujjwal1128",
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/guptaujjwal1128",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ujjwal-gupta-671588154/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/guptaujjwal1128",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
];

function App() {
  return (
    <main>
      <article className="card">
        <div className="card-avatar-info">
          <img
            src={data.avatar_img}
            alt="Jessica Randall Avatar Image"
            className="card-avatar-img"
          />
          <div className="card-avatar-details">
            <h1 className="card-avatar-details-name">{data.name}</h1>
            <h2 className="card-avatar-details-location">{data.location}</h2>
          </div>
          <div className="card-avatar-description">{data.description}</div>
        </div>
        <div className="card-avatar-social-links">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} name={link.name} url={link.url} />
          ))}
        </div>
      </article>
    </main>
  );
}

export default App;
