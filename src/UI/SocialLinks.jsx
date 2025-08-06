import styles from "./SocialLinks.module.scss";
import { SocialLinksContent } from "@/components/Social/content";

export const SocialLinks = () => {
  const rendeLinks = SocialLinksContent.map((link, index) => (
    <li key={index}>
      <a href={link.url}>{link.component}</a>
    </li>
  ));
  return <ul className={styles.media}>{rendeLinks}</ul>;
};
