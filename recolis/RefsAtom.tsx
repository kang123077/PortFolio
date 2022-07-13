import { atom } from "recoil";

interface RefProps {
  profileref: React.RefObject<HTMLElement>;
  experienceref: React.RefObject<HTMLElement>;
  proficiencyref: React.RefObject<HTMLElement>;
  projectref: React.RefObject<HTMLElement>;
}

const RefsAtom = atom<RefProps>({
  key: "RefsAtom",
  default: {
    profileref: null,
    experienceref: null,
    proficiencyref: null,
    projectref: null,
  },
});

export default RefsAtom;
