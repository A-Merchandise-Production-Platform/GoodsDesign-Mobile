export interface Picture {
    src: string;
    width: number;
    height: number;
  }
  import Logo from "../assets/logo.png"

export enum PictureEnum {
    Logo
}

export const pictureMap: Record<PictureEnum, Picture> = {
    [PictureEnum.Logo]: {
        width: 300,
        height: 300,
        src: Logo,
    }
}
