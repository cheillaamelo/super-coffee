import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Image
        src="/images/pictures/about.png"
        alt="sobre nós"
        width={500}
        height={400}
      />
      <div className={styles.comtent}>
        <h2 className="title light-bg">Conheça Mais sobre o super coffee</h2>
        <p>
          Tudo começou quando um grupo de amigos percebeu que faltava um lugar
          em sua cidade para desfrutar de um café de qualidade, em um ambiente
          aconchegante e inspirador. Assim, surgiu a ideia de criar um espaço
          onde as pessoas pudessem se conectar com a natureza e com elas mesmas,
          enquanto saboreavam um café especial.
        </p>
        <p>
          Nosso espaço foi projetado para proporcionar uma experiência única, em
          sintonia com a natureza. Com tons verdes, plantas e uma decoração
          acolhedora, você pode desfrutar de um ambiente relaxante e calmo, que
          convida a uma pausa no ritmo acelerado do dia a dia.
        </p>
      </div>
    </section>
  );
}
