import { ElementsTypes } from "../enums";

export interface CommonConfig {
  name: string;
  label: string;
  isRequired: boolean;
}

export interface CheckboxConfig extends CommonConfig {}

export interface InputConfig extends CommonConfig {
  placeholder: string;
  inputType: string;
}
export interface SelectConfig extends CommonConfig {
  options: string[];
}

export interface SubmitButtonConfig {
  buttonTitle: string;
}

export interface ConfigModel<T extends {}> {
  id: number;
  elementType: ElementsTypes;
  properties: T;
}

export type AvailableConfigs =
  | CheckboxConfig
  | InputConfig
  | SelectConfig
  | SubmitButtonConfig;

export type Configs = ConfigModel<AvailableConfigs>;

const createCommonProperties = (config: CommonConfig) => {
  const { name, label, isRequired } = config;

  return {
    name,
    label,
    isRequired,
  };
};

const createCheckboxElement = (config: CheckboxConfig) => {
  const properties = createCommonProperties(config);

  return {
    id: Date.now(),
    elementType: ElementsTypes.checkbox,
    properties,
  };
};

const createInputElement = (config: InputConfig) => {
  const { placeholder, inputType, ...rest } = config;

  const properties = Object.assign(createCommonProperties(rest), {
    placeholder,
    inputType,
  });

  return {
    id: Date.now(),
    elementType: ElementsTypes.input,
    properties,
  };
};

const createSelectElement = (config: SelectConfig) => {
  const { options, ...rest } = config;

  const properties = Object.assign(createCommonProperties(rest), {
    options,
  });

  return Object.assign(createCommonProperties(rest), {
    id: Date.now(),
    elementType: ElementsTypes.select,
    properties,
  });
};

const createSubmitButtonElement = (config: SubmitButtonConfig) => {
  const { buttonTitle } = config;

  const properties = { buttonTitle };

  return {
    id: Date.now(),
    elementType: ElementsTypes.submitButton,
    properties,
  };
};

export const formElementsFactory = {
  [ElementsTypes.checkbox]: createCheckboxElement,
  [ElementsTypes.input]: createInputElement,
  [ElementsTypes.select]: createSelectElement,
  [ElementsTypes.submitButton]: createSubmitButtonElement,
};
