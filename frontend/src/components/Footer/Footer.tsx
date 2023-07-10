import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bck-color-secondary">
      <div className="footer--box">
        <h2 className="footer--box__title fz18">À Propos</h2>
        <ul className="footer--box__list fz16">
          <li>Fonctionnement du site</li>
          <li>Condition générales</li>
          <li>Données et confidentialité</li>
        </ul>
      </div>

      <div className="footer--box">
        <h2 className="footer--box__title fz18">Nos hébergements</h2>
        <ul className="footer--box__list fz16">
          <li>Charte qualité</li>
          <li>Proposer votre hôtel</li>
        </ul>
      </div>

      <div className="footer--box">
        <h2 className="footer--box__title fz18">Assistance</h2>
        <ul className="footer--box__list fz16">
          <li>Centre d'aide</li>
          <li>Nous contacter</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
