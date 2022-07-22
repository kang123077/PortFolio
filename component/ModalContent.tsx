import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ModalVisibility from "../recolis/modalvisibility";
import ModalCloseButton from "./ModalCloseButton";

const Modal = () => {
  const [modalState, setModalState] = useRecoilState(ModalVisibility);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const closeModal = () => {
    setModalState({
      type: "none",
      children: null,
    });
  };

  const changeModalChildren = () => {
    setModalState({
      type: "password",
      children: "비밀번호가 틀렸습니다. 다시 한번 입력해주세요.",
    });
  };

  const confirmPassword = () => {
    switch (passwordInput) {
      case "123123":
        return closeModal();
      default:
        return changeModalChildren();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      confirmPassword();
    }
  };

  switch (modalState.type) {
    case "confirm":
      return (
        <div>
          <ModalOverlay />
          <ModalWrapper onClick={closeModal} tabIndex="-1">
            <ModalInner tabIndex="0" className="modal-inner">
              {modalState.children ?? <p>children없음</p>}
              <ModalButtonWrapper>
                <ModalButton onClick={closeModal}>취소</ModalButton>
                <ModalButton>확인</ModalButton>
              </ModalButtonWrapper>
              <ModalCloseButtonWrapper onClick={closeModal}>
                <ModalCloseButton />
              </ModalCloseButtonWrapper>
            </ModalInner>
          </ModalWrapper>
        </div>
      );
    case "alert":
      return (
        <div>
          <ModalOverlay />
          <ModalWrapper tabIndex="-1">
            <ModalInner tabIndex="0" className="modal-inner">
              {modalState.children ?? <p>children없음</p>}
              <ModalPasswordInput
                name="modalPassword"
                type="password"
                placeholder="password"
                maxLength="20"
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <ModalButtonWrapper>
                <ModalButton onClick={confirmPassword}>확인</ModalButton>
              </ModalButtonWrapper>
            </ModalInner>
          </ModalWrapper>
        </div>
      );
    case "password":
      return (
        <div>
          <ModalOverlay />
          <ModalWrapper tabIndex="-1">
            <ModalInner tabIndex="0" className="modal-inner">
              {modalState.children ?? <p>children없음</p>}
              <ModalPasswordInput
                name="modalPassword"
                type="password"
                placeholder="Password"
                maxLength="20"
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <ModalButtonWrapper>
                <ModalButton onClick={confirmPassword}>확인</ModalButton>
              </ModalButtonWrapper>
            </ModalInner>
          </ModalWrapper>
        </div>
      );
    case "none":
      return null;
  }
};

export default Modal;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: "block";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: "block";
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 60vw;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  background: #ffffff;
  border: 1px solid #9381dd;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
`;

const ModalButton = styled.button`
  width: 108px;
  height: 40px;
  font-size: 14px;
  background: #f6f8ff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 100px;
  margin-top: 20px;

  &:active,
  &:hover,
  &:focus {
    cursor: pointer;
    background: #494949;
    color: white;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6vw;
`;

const ModalCloseButtonWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;
`;

const ModalPasswordInput = styled.input`
  width: 40vw;
  height: 30px;
  margin: 20px 0px 0px 0px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  font-family: Pretendard;
  color: #9381dd;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 15px;
`;
