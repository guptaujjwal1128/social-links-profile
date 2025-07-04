import "./SocialLink.css";

export default function SocialLink({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <a className="social-link" href={url} target="_blank">
      {name}
    </a>
  );
}
