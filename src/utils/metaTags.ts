
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

  // Update Open Graph image
  let metaOgImage = document.querySelector('meta[property="og:image"]');
  if (!metaOgImage) {
    metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    document.head.appendChild(metaOgImage);
  }
  metaOgImage.setAttribute('content', 'https://hossam.io/lovable-uploads/568dd4dd-0beb-4769-b3eb-707cab99ce9d.png');

  // Update Twitter image
  let metaTwitterImage = document.querySelector('meta[name="twitter:image"]');
  if (!metaTwitterImage) {
    metaTwitterImage = document.createElement('meta');
    metaTwitterImage.setAttribute('name', 'twitter:image');
    document.head.appendChild(metaTwitterImage);
  }
  metaTwitterImage.setAttribute('content', 'https://hossam.io/lovable-uploads/568dd4dd-0beb-4769-b3eb-707cab99ce9d.png');

  // Set static Open Graph tags if they don't exist
  if (!document.querySelector('meta[property="og:type"]')) {
    const metaOgType = document.createElement('meta');
    metaOgType.setAttribute('property', 'og:type');
    metaOgType.setAttribute('content', 'website');
    document.head.appendChild(metaOgType);
  }

  // Set Twitter card if it doesn't exist
  if (!document.querySelector('meta[name="twitter:card"]')) {
    const metaTwitterCard = document.createElement('meta');
    metaTwitterCard.setAttribute('name', 'twitter:card');
    metaTwitterCard.setAttribute('content', 'summary_large_image');
    document.head.appendChild(metaTwitterCard);
  }

  // Set Twitter site if it doesn't exist
  if (!document.querySelector('meta[name="twitter:site"]')) {
    const metaTwitterSite = document.createElement('meta');
    metaTwitterSite.setAttribute('name', 'twitter:site');
    metaTwitterSite.setAttribute('content', '@hossamkandel');
    document.head.appendChild(metaTwitterSite);
  }
};

export default updateMetaTags;
