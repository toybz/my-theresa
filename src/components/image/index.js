export default function Image({
  src,
  prefix = process.env.TMDB_IMAGE_URL,
  alt = "",
}) {
  return <img loading="lazy" src={prefix + src} alt={alt} />;
}
