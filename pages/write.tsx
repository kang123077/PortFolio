import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ModalVisibility from "../recolis/modalvisibility";

const write = () => {
  const [modalState, setModalState] = useRecoilState(ModalVisibility);
  const openModal = () => {
    setModalState({
      type: "password",
      children: "비밀번호를 입력해주세요",
    });
  };

  useEffect(() => {
    openModal();
  }, []);

  return <div></div>;
};

export default write;
