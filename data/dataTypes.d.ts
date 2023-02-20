interface IBoxTypes {
    head: string;
    pragraph: string;
    icon_path: string;
}
interface ISliderItemType {
    imageSource: string;
    slidertxt: string;
}
interface IButtonType {
    btntxt: string;
    btnType: 'simple' | 'export' | 'verify' | 'initialize' | 'render';
    type?: 'submit';
}

interface IContactSlider {
    profileName: string;
    profileSource: string;
    sliderP: string;
    theme: string;
}

interface IProgressBarType {
    load: number;
    title: string;
}

interface IServicesInAboutType {
    head: string;
    body: string;
}
interface INavbarItems {
    text: String;
    route: string;
}
interface ChatCommentType {
    username: string;
    date: string;
    comment: string;
    liked: boolean;
    className?: string;
}