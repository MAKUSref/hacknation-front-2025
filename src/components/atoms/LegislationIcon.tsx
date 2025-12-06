import type { LegislationTag } from "@/api/baseApi/legislation/types";
import EducationIcon from "@/assets/education.svg";

const LEGISLATION_ICON_SRC: Record<LegislationTag, string> = {
  "COVID-19": EducationIcon,
  alkohol: EducationIcon,
  apteki: EducationIcon,
  budownictwo: EducationIcon,
  compliance: EducationIcon,
  "dane osobowe": EducationIcon,
  energetyka: EducationIcon,
  "instrumenty finansowe": EducationIcon,
  "ochrona środowiska": EducationIcon,
  odpady: EducationIcon,
  oświata: EducationIcon,
  podatki: EducationIcon,
  "podmioty lecznicze": EducationIcon,
  "postępowania administracyjne": EducationIcon,
  pracownicy: EducationIcon,
  "prawo konkurencji": EducationIcon,
  "proces cywilny": EducationIcon,
  "proces karny": EducationIcon,
  "produkty leczniczne": EducationIcon,
  przedsiębiorcy: EducationIcon,
  reklama: EducationIcon,
  "szkolnictwo wyższe": EducationIcon,
  "wyroby medyczne": EducationIcon,
  "wyroby tytoniowe": EducationIcon,
  "zamówienia publiczne": EducationIcon,
};

export function LegislationIcon({ tag }: { tag: LegislationTag }) {
  return <img src={LEGISLATION_ICON_SRC[tag]} alt="Legislation Icon" />;
}
