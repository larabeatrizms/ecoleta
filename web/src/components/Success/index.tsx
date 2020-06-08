import React, { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import "./styles.css";

interface Props {
  isOpen: boolean;
}

const Success: React.FC<Props> = ({ isOpen }) => {
  console.log(isOpen);
  const history = useHistory();
  useEffect(() => {
    if (isOpen)
      setTimeout(() => {
        history.push("/");
      }, 2000);
  }, [history, isOpen]);

  return (
    <section className={`${isOpen ? "open" : ""}`}>
      <div className="success">
        <FiCheckCircle color="#2fb86e" />
        <p>Cadastrado com sucesso!</p>
        <button type="button" onClick={() => history.push("/")}>
          Continuar
        </button>
      </div>
    </section>
  );
};

export default Success;
