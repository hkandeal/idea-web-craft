
const updateMetaTags = (
  title: string,
  description: string,
  path: string = ""
) => {
  // Update Open Graph title
  let metaOgTitle = document.querySelector('meta[property="og:title"]');
  if (!metaOgTitle) {
    metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    document.head.appendChild(metaOgTitle);
  }
  metaOgTitle.setAttribute('content', `${title} | Hossam Kandel Mohamed`);

  // Update Open Graph description
  let metaOgDesc = document.querySelector('meta[property="og:description"]');
  if (!metaOgDesc) {
    metaOgDesc = document.createElement('meta');
    metaOgDesc.setAttribute('property', 'og:description');
    document.head.appendChild(metaOgDesc);
  }
  metaOgDesc.setAttribute('content', description || 'Personal Website');

  // Update Open Graph URL
  let metaOgUrl = document.querySelector('meta[property="og:url"]');
  if (!metaOgUrl) {
    metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    document.head.appendChild(metaOgUrl);
  }
  metaOgUrl.setAttribute('content', `https://hossam.io${path}`);

  // Set static Open Graph tags if they don't exist
  if (!document.querySelector('meta[property="og:type"]')) {
    const metaOgType = document.createElement('meta');
    metaOgType.setAttribute('property', 'og:type');
    metaOgType.setAttribute('content', 'website');
    document.head.appendChild(metaOgType);
  }

  if (!document.querySelector('meta[property="og:image"]')) {
    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.setAttribute('content', '/lovable-uploads/568dd4dd-0beb-4769-b3eb-707cab99ce9d.png');
    document.head.appendChild(metaOgImage);
  }
};

export default updateMetaTags;

