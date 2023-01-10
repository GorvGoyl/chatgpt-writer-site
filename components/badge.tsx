export const ChromeUsers = (props: { id: string; link: string }) => (
  <>
    {/* <a
      title="Chrome extension link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    > */}
    <img
      alt="Chrome users"
      loading="lazy"
      className="m-0"
      src={`https://flat.badgen.net/chrome-web-store/users/${props.id}?color=06b6d4&icon=chrome`}
    />
    {/* </a> */}
  </>
);

export const ChromeStars = (props: { id: string; link: string }) => (
  <>
    {/* <a
      title="Chrome extension link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    > */}
    <img
      alt="Chrome extension stars"
      loading="lazy"
      className="m-0"
      src={`https://flat.badgen.net/chrome-web-store/stars/${props.id}?color=06b6d4&icon=chrome`}
    />
    {/* </a> */}
  </>
);
