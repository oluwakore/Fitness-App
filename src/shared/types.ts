
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export interface BenefitItemTypes {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ClassesType {
  name: string;
  description?: string;
  image: string;
}