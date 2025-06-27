import * as React from "react";

export interface InputFormProps {
  /**
   * `renderWithForm` prop renders input in form @access `<form>...</form>`
   * @default false
   */
  renderWithForm?: boolean;
  /**
   * `renderWithFormProps` @access `<form {...renderWithFormProps}>...</form>`
   */
  renderWithFormProps?: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
}
