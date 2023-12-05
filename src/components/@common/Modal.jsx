import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);

  const onCloseModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, onOpenModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ trigger }) {
  const { onOpenModal } = useContext(ModalContent);

  return (
    <div className="modal-trigger" onClick={onOpenModal}>
      {trigger}
    </div>
  );
}

export function ModalOverLay() {
  const { isOpen, onCloseModal } = useContext(ModalContent);

  return isOpen && <div className="modal-overlay" onClick={onCloseModal} />;
}

export function ModalMenu({ items }) {
  const { isOpen } = useContext(ModalContent);

  return (
    isOpen && (
      <ul className="modal-menu">
        {items.map((item) => (
          <ModalItem key={item} item={item} />
        ))}
      </ul>
    )
  );
}

export function ModalItem({ item }) {
  const { onCloseModal } = useContext(ModalContent);

  return (
    <li className="modal-item" onClick={onCloseModal}>
      {item}
    </li>
  );
}
