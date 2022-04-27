import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Text from "../../components/Text";
import myPhoto from "./assets/myPhoto.jpg";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Container>
      <div className={s.root}>
        <div>
          <Image src={myPhoto} alt="Glazunov Aleksei" />
        </div>
        <div>
          <Heading strong>Глазунов Алексей Александрович </Heading>
          <Text strong> Мужчина 38 лет, родился 14 сентября 1983</Text>
          <Text strong>Front-end разработчик (React) </Text>
          <Text strong>
            Июнь 2021 — по настоящее время 11 месяцев SimbirSoft Ульяновск
          </Text>
          <Text>
            За это время участвовал в нескольких проектах на разных стеках по
            нарастающей сложности. Разработка всегда велась в распределенных
            командах по методологии Agile в Jira. В обязанности входили
            непосредственно разработка, оценка задач, смоук тестирование. Так же
            являюсь ментором студентов на внутренней практике компании.
          </Text>
          <Text strong>Мой скиллсет на данный момент:</Text> - TypeScript,
          JavaScript (ES6+) - React - Redux, Redux Tooklit - Formik - Axios -
          Кроссбраузерная и адаптивная верстка. - SCSS /CSS-in-JS/ CSS Modules /
          - Material UI, Ant Design, Webpack
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
