import { FieldCheckbox } from "@/components/atoms/FieldCheckbox";
import { useFieldsModal } from "@/contexts/ChooseFieldsModalContext";
import { Modal } from "antd";
import { Btn } from "@/components/atoms/Button";
import { LegislationTag } from "@/api/baseApi/legislation/types";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedFields } from "@/redux/session/sessionSlice";

export function ChooseFieldsModal() {
  const { value, setOff } = useFieldsModal();
  const [checkedFields, setCheckedFields] = useState<LegislationTag[]>([]);
  const dispatch = useAppDispatch();

  const handleFieldChange = (isActive: boolean, fieldName: LegislationTag) => {
    setCheckedFields((prev) => {
      if (isActive) {
        return [...prev, fieldName];
      } else {
        return prev.filter((f) => f !== fieldName);
      }
    });
  };

  const handleSubmit = () => {
    dispatch(setSelectedFields(checkedFields));
    setOff();
  };

  return (
    <Modal
      open={value}
      onCancel={setOff}
      onOk={setOff}
      footer={null}
      width="100vw"
      className="px-2!"
      style={{ top: 0, maxWidth: "100vw", paddingBottom: 0 }}
      styles={{
        body: { height: "calc(100vh - 55px)", overflow: "auto" },
      }}
    >
      <div className="container max-w-[1000px] pt-10 md:pt-28 flex flex-col gap-3 md:gap-10 max-md:px-0.5!">
        <h4 className="text-center">Jakie dziedziny cię interesują?</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <FieldCheckbox
            name={LegislationTag.ALKOHOL}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.ENERGETYKA}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.COVID_19}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.DANE_OSOBOWE}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.INSTRUMENTY_FINANSOWE}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.OCHRONA_SRODOWISKA}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.ODPADY}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.PRODUKTY_LECZNICZNE}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.REKLAMA}
            onChange={handleFieldChange}
          />
          <FieldCheckbox
            name={LegislationTag.WYROBY_TYTONIOWE}
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex justify-end items-center gap-2">
          <Btn variant="text" className="justify-center" onClick={setOff}>
            Anuluj
          </Btn>
          <Btn
            variant="secondary"
            className="min-w-[120px] justify-center"
            onClick={handleSubmit}
          >
            Dalej
          </Btn>
        </div>
      </div>
    </Modal>
  );
}
