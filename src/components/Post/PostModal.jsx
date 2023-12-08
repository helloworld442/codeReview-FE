import styled from "styled-components";
import {
  ModalClose,
  ModalOverLay,
  ModalProvider,
  ModalTrigger,
} from "../@common/Modal";

export default function PostModal({ trigger, onTrigger }) {
  return (
    <StPostModal>
      <ModalProvider>
        <ModalTrigger trigger={trigger} />
        <ModalOverLay />
        <ModalClose trigger="삭제" onTrigger={onTrigger} />
      </ModalProvider>
    </StPostModal>
  );
}

const StPostModal = styled.div`
  .modal-trigger {
    position: absolute;
    top: 2px;
    right: 0;
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
  }
  .modal-close {
    position: absolute;
    top: 48px;
    right: -12px;
    width: 160px;
    height: 48px;
    padding: 12px 24px;
    box-sizing: border-box;
    border: 1px solid #d7e0e6;
    border-radius: 4px;
    background: #fff;
    line-height: 20px;
    font-size: 0.825rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #666;
    z-index: 100;
    cursor: pointer;

    &:hover {
      background: #fafafa;
    }
  }
`;
