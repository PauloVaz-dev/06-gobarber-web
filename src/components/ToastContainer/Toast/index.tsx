import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => removeToast(message.id), 3000);

    return () => {
      clearTimeout(time);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        {message.description && (
          <p>Não foi possível fazer o login da aplicação</p>
        )}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
