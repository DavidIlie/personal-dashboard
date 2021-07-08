import { UpDown } from "@components/Animations/Animation";
import SVG from "@components/SVG";

interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <UpDown type="normal">
        <SVG icon="triangle" width={48} stroke left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke left="60%" top="70%" />

        <SVG icon="box" width={6} left="60%" top="15%" />
      </UpDown>
      <UpDown type="wide">
        <SVG icon="triangle" width={24} stroke left="65%" top="8%" />

        <SVG icon="triangle" width={12} stroke left="90%" top="50%" />

        <SVG icon="triangle" width={16} stroke left="30%" top="65%" />

        <SVG icon="triangle" width={24} stroke left="35%" top="58%" />

        <SVG icon="triangle" width={12} stroke left="20%" top="50%" />

        <SVG icon="triangle" width={16} stroke left="10%" top="85%" />
      </UpDown>
      <UpDown type="slow">
        <SVG icon="circle" width={20} hiddenMobile left="85%" top="25%" />
        <SVG icon="circle" hiddenMobile stroke width={24} left="5%" top="70%" />
        <SVG icon="circle" width={6} left="4%" top="20%" />
        <SVG icon="circle" width={12} left="50%" top="60%" color="gray.100" />
      </UpDown>
      <div
        className="text-white"
        style={{ background: "rgba(26, 33, 42, 0.8)" }}
      >
        {children}
      </div>
    </>
  );
};
