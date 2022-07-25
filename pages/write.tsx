import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import WriteContent from "../component/WriteContent";
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

  return (
    <WriteWrapper>
      <WriteContent></WriteContent>
    </WriteWrapper>
  );
};

export default write;

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
