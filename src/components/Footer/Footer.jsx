import { Logo } from "@/UI/Logo";
import styles from "./Footer.module.scss";
import { SocialLinks } from "@/UI/SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2>
            <Logo />
          </h2>
          <h3 className="p">
            Desfrute de um café de qualidade equanto se reconecta om o que é
            essencial
          </h3>
          <SocialLinks />
        </div>
        <div className={styles.column2}>
          <h2 className="p">Faça-nos uma Visita</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.8572340369584!2d-47.366016355892306!3d-23.04473095116483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8aec948dbe857%3A0xdcc328077f967671!2sR.%20Carlos%20Marques%2C%20185%20-%20Elias%20Fausto%2C%20SP%2C%2013350-000!5e0!3m2!1spt-BR!2sbr!4v1754406922671!5m2!1spt-BR!2sbr"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.column3}>
          <h2 className="p">Funcionamento</h2>
          <ul>
            <li>Segunda - Sexta: 09:00 às 18:00</li>
            <li>Sábados: 09:00 às 14:00</li>
            <li>(00) 00000-0000</li>
            <li>contato@supercoffe.com.br</li>
          </ul>
        </div>
      </div>
      <span>Super Coffee - Todos os direitos reservados</span>
    </footer>
  );
}
