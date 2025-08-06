import { SocialLinks } from "@/UI/SocialLinks";
import styles from "./Social.module.scss";
import Image from "next/image";

export default function Social() {
  return (
    <section id="social" className={styles.social}>
      <div className={styles.content}>
        <h2 className="title dark-bg">Descubra seu café favorito</h2>
        <p className="dark-bg">
          Cada xícara é preparada com ingredientes selecionados e muito carinho,
          para que você possa saborear cada momento. Venha nos visitar e
          desfrute de um café de qualidade enquanto se reconecta com o que é
          essencial.
        </p>
        <SocialLinks />
      </div>
      <Image
        className={styles.image}
        src="/images/pictures/social.png"
        alt="cafes e plantas"
        width={380}
        height={540}
      />
    </section>
  );
}
