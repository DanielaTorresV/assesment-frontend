import HeaderAbout from '../components/About/HeaderAbout';
import imgBiomedica from '../assets/Biomedica.jpg';

const About = () => {
  return (
    <div className="about">
      <HeaderAbout className="headerAbout" />
      <div className="containerAbout">
        <h2>Nombre: Daniela María Torres Vélez</h2>
        <br />
        <p>
          <strong>Descripción:</strong> Soy de profesión ingeniera Biomédica,
          con 7 años de experiencia profesional en este campo, actualmente
          estudiante de Make It Real, Bootcamp de Full-Stack Developer.
        </p>
        <br />
        <img
          src={imgBiomedica}
          alt="Ingeniería_Biomédica"
          className="containerAbout-img"></img>
        <br />
        <ol>
          <li>HTML y CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ol>
        <br />
        <p>
          <strong>Correo:</strong> dannytorres0211@gmail.com
        </p>
        <br />
        <a href="https://github.com/DanielaTorresV">
          <strong>Te redireccionaré a mi GitHub</strong>
        </a>
      </div>
    </div>
  );
};

export default About;
