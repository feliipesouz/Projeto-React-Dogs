import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:s@"]+(\.[^<>()[\]\\.,;:s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido!",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {//Valor que foi digitado no input
    if (type === false) return true; //Verifico se o type foi definido, pois se ele passar false quando chamar, não é pra ser validado, então eu tenho que retornar true

    if (value.length === 0) {
      //Verifica se tem alguma coisa no value, se a pessoa passou algum valor.
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      //Verifico se o tipo existe, depois faço o teste de !validação.
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if(error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), //Exportando um método que já ativa o validate e verifica o valor.(Um método que ativa outro método)
    onBlur: () => validate(value), //Quando o usuário clica no campo de formulário e sai.
  };
};

export default useForm;
