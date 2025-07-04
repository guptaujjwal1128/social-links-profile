import "./App.css";
import cardImg from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

const data = {
  date: "Published 21 Dec 2023",
  title: "HTML & CSS foundations",
  description: "These languages are the backbone of every website, defining structure, content, and presentation.",
  avatar_name: "Greg Hooper",
}

function App() {
  return (
    <div className="card">
      <img className="card-section-header-img" src={cardImg} alt="Illustration Article" />
      <section className="card-section-content">
        <span className="card-section-content-button">Learning</span>
        <span className="card-section-content-date">{data.date}</span>
        <h1 className="card-section-content-title">{data.title}</h1>
        <p className="card-section-content-description">{data.description}</p>
      </section>
      <section className="card-section-avatar">
        <img className="card-section-avatar-img" src={avatar} alt="Greg Hooper's Avatar" />
        <span className="card-section-avatar-name">{data.avatar_name}</span>
      </section>
    </div>
  );
}

export default App;
