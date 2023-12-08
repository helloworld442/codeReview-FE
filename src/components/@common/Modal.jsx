import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, onOpenModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ trigger }) {
  const { onOpenModal } = useContext(ModalContext);

  return (
    <div className="modal-trigger" onClick={onOpenModal}>
      {trigger}
    </div>
  );
}

export function ModalOverLay() {
  const { onCloseModal, isOpen } = useContext(ModalContext);

  return isOpen && <div className="modal-overlay" onClick={onCloseModal} />;
}

export function ModalClose({ trigger, onTrigger }) {
  const { isOpen, onCloseModal } = useContext(ModalContext);

  return (
    isOpen && (
      <div
        className="modal-close"
        onClick={(e) => {
          onTrigger(e);
          onCloseModal();
        }}
      >
        {trigger}
      </div>
    )
  );
}
