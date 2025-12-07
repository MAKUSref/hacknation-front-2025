import type { LegislationTag } from "@/api/baseApi/legislation/types";
import EducationIcon from "@/assets/education.svg";
import AlcoholIcon from "@/assets/alcohol.svg";
import CigaretteIcon from "@/assets/cigarate.svg";
import CommercialIcon from "@/assets/comercial.svg";
import Covid19Icon from "@/assets/covid-19.svg";
import ElectricityIcon from "@/assets/electricity.svg";
import EnvironmentIcon from "@/assets/environment.svg";
import FinanceIcon from "@/assets/finance.svg";
import MedicineIcon from "@/assets/medicine.svg";
import TrashIcon from "@/assets/odpady.svg";
import PersonalDataIcon from "@/assets/personal-data.svg";

const LEGISLATION_ICON_SRC: Record<LegislationTag, string> = {
  "COVID-19": Covid19Icon,
  alkohol: AlcoholIcon,
  apteki: EducationIcon,
  budownictwo: EducationIcon,
  compliance: EducationIcon,
  "dane osobowe": PersonalDataIcon,
  energetyka: ElectricityIcon,
  "instrumenty finansowe": FinanceIcon,
  "ochrona środowiska": EnvironmentIcon,
  odpady: TrashIcon,
  oświata: EducationIcon,
  podatki: EducationIcon,
  "podmioty lecznicze": EducationIcon,
  "postępowania administracyjne": EducationIcon,
  pracownicy: EducationIcon,
  "prawo konkurencji": EducationIcon,
  "proces cywilny": EducationIcon,
  "proces karny": EducationIcon,
  "produkty leczniczne": MedicineIcon,
  przedsiębiorcy: EducationIcon,
  reklama: CommercialIcon,
  "szkolnictwo wyższe": EducationIcon,
  "wyroby medyczne": EducationIcon,
  "wyroby tytoniowe": CigaretteIcon,
  "zamówienia publiczne": EducationIcon,
};

export function LegislationIcon({ tag }: { tag: LegislationTag }) {
  return <img width={40} src={LEGISLATION_ICON_SRC[tag]} alt="Legislation Icon" />;
}
