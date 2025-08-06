export const links = [
  { url: "#products", text: "Produtos" },
  { url: "#about", text: "Sobre" },
  { url: "#social", text: "Social" },
  { url: "#reviews", text: "Depoimetos" },
];

export const renderLinks = links.map((link, index) => (
  <li key={index}>
    <a href={link.url}>{link.text}</a>
  </li>
));
