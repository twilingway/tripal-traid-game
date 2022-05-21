import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import { getHeading } from "../../components/Heading/Heading";
import s from "./Biography.module.scss";
import { BIO } from "./data";

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data] = useState(BIO);

  if (!data[id]) {
    return <Navigate to="/characters" />;
  }

  return (
    <section className={s.section}>
      <div className={s.biography}>
        <Container className={s.biographyContent}>
          <Button isBlack onClick={() => navigate(-1, { replace: true })}>
            Go Back
          </Button>
          {data[id].map((item, index) => getHeading(item, index))}
        </Container>
      </div>
    </section>
  );
};

export default Biography;
