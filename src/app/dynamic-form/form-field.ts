export class FormField<T> {
  value?: T;
  key: string;
  label: string;
  validator: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    min?: number;
    max?: number;
  };
  order: number;
  controlType: string;
  type: string;
  wrapperClass: string;
  innerClass: string;
  labelClass: string;
  valueClass: string;
  options: { key: string; value: string; valueClass?: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      validator?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        email?: boolean;
        min?: number;
        max?: number;
      };
      order?: number;
      controlType?: string;
      type?: string;
      wrapperClass?: string;
      innerClass?: string;
      labelClass?: string;
      valueClass?: string;
      options?: { key: string; value: string; valueClass?: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validator = {
      required: options.validator?.required,
      minLength: options.validator?.minLength,
      maxLength: options.validator?.maxLength,
      email: options.validator?.email,
      min: options.validator?.min,
      max: options.validator?.max,
    };
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.wrapperClass = options.wrapperClass || '';
    this.innerClass = options.innerClass || '';
    this.labelClass = options.labelClass || '';
    this.valueClass = options.valueClass || '';
    this.options = options.options || [];
  }
}
