import { Modal } from '@/components/modal';

import { Form } from './form';

interface TimerProps {
  onClose: () => void;
  show: boolean;
}

export function CountdownTimer({ onClose, show }: TimerProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <h1>Hello World</h1>
      <Form />
    </Modal>
  );
}
