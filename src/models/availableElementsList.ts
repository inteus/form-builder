import { ElementsTypes } from "../enums";

const availableElements = [
  {
    type: ElementsTypes.input,
    label: "Текстовое поле",
  },
  {
    type: ElementsTypes.checkbox,
    label: "Чекбокс",
  },
  {
    type: ElementsTypes.select,
    label: "Список",
  },
  {
    type: ElementsTypes.submitButton,
    label: "Кнопка отправки",
  },
];

export { availableElements };
