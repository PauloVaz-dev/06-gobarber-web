import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErros';

import { useToast } from '../../hooks/ToastContext';

interface SignUpFormaData {
  nome: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormaData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no Gobaber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);

          formRef.current?.setErrors(erros);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input name="email" icon={FiMail} type="text" placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
