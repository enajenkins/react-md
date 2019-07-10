import React, {
  CSSProperties,
  FC,
  ReactNode,
  Ref,
  SelectHTMLAttributes,
} from "react";
import cn from "classnames";
import { FontIcon } from "@react-md/icon";
import { bem } from "@react-md/theme";
import { Omit, WithForwardedRef } from "@react-md/utils";

import TextFieldContainer, {
  TextFieldContainerOptions,
} from "../text-field/TextFieldContainer";
import FloatingLabel from "../label/FloatingLabel";
import useFocusState from "../useFocusState";
import useValuedState from "../text-field/useValuedState";

type SelectAttributes = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "placeholder" | "multiple"
>;

export interface NativeSelectProps
  extends SelectAttributes,
    TextFieldContainerOptions {
  /**
   * The id for the select. This is required for accessibility.
   */
  id: string;

  /**
   * An optional ref to apply to the text field's container div element. The default ref is
   * forwarded on to the `input` element.
   */
  containerRef?: Ref<HTMLDivElement>;

  icon?: ReactNode;

  /**
   * An optional floating label to use for the text field. This should really only be
   * used when the `theme` prop is not set to `"none"`. This will be wrapped in
   * the `<Label>` component itself and automatically apply the `htmlFor` prop for this
   * text field.
   */
  label?: ReactNode;

  /**
   * An optional style to apply to the label wrapper.
   */
  labelStyle?: CSSProperties;

  /**
   * An optional className to apply to the label wrapper.
   */
  labelClassName?: string;

  /**
   * An optional style to apply to the select itself. The `style` prop will be applied to the
   * container `<div>` instead.
   */
  selectStyle?: CSSProperties;

  /**
   * An optional className to apply to the select itself. The `className` prop will be applied to the
   * container `<div>` instead.
   */
  selectClassName?: string;

  /**
   * The value to use for the text field. This will make the component controlled
   * and require the `onChange` prop to be provided as well otherwise this will
   * act as a read only text field.
   */
  value?: string;

  /**
   * The default value for the text field which will make it uncontrolled.
   * If you manually change the `defaultValue` prop, the input's value **will
   * not change** unless you provide a different `key` as well. Use the `value`
   * prop instead for a controlled input.
   */
  defaultValue?: string;
}
type WithRef = WithForwardedRef<HTMLInputElement>;
type DefaultProps = Required<
  Pick<
    NativeSelectProps,
    | "theme"
    | "error"
    | "dense"
    | "inline"
    | "disabled"
    | "underlineDirection"
    | "icon"
  >
>;
type WithDefaultProps = NativeSelectProps & DefaultProps & WithRef;

const block = bem("rmd-native-select");

const NativeSelect: FC<NativeSelectProps> = providedProps => {
  const {
    style,
    className,
    labelStyle,
    labelClassName,
    selectStyle,
    selectClassName,
    icon,
    label,
    theme,
    error,
    dense,
    inline,
    onBlur: propOnBlur,
    onFocus: propOnFocus,
    onChange: propOnChange,
    containerRef,
    forwardedRef,
    leftAddon,
    rightAddon,
    underlineDirection,
    children,
    ...props
  } = providedProps as WithDefaultProps;
  const { id, value, defaultValue, disabled } = props;
  const underline = theme === "underline" || theme === "filled";

  const [focused, onFocus, onBlur] = useFocusState({
    onBlur: propOnBlur,
    onFocus: propOnFocus,
  });

  const [valued, onChange] = useValuedState({
    value,
    defaultValue,
    onChange: propOnChange,
  });

  return (
    <TextFieldContainer
      style={style}
      className={className}
      ref={containerRef}
      theme={theme}
      error={error}
      active={focused}
      label={!!label}
      dense={dense}
      leftAddon={leftAddon}
      inline={inline}
      rightAddon={rightAddon}
      underlineDirection={underlineDirection}
    >
      <FloatingLabel
        style={labelStyle}
        className={labelClassName}
        htmlFor={id}
        error={error}
        active={valued && focused}
        valued={valued}
        floating={valued}
        dense={dense}
        disabled={disabled}
        leftChildren={!!leftAddon}
        rightChildren={!!rightAddon}
      >
        {label}
      </FloatingLabel>
      <select
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        style={selectStyle}
        className={cn(
          block({
            icon,
            "label-underline": label && underline,
            "placeholder-underline": !label && underline,
            floating: label && theme !== "none",
          }),
          selectClassName
        )}
      >
        {children}
      </select>
      {icon}
    </TextFieldContainer>
  );
};

const defaultProps: DefaultProps = {
  theme: "outline",
  dense: false,
  inline: false,
  error: false,
  disabled: false,
  underlineDirection: "left",
  icon: <FontIcon>arrow_drop_down</FontIcon>,
};

NativeSelect.defaultProps = defaultProps;

if (process.env.NODE_ENV !== "production") {
  NativeSelect.displayName = "NativeSelect";

  let PropTypes;
  try {
    PropTypes = require("prop-types");
  } catch (e) {}

  if (PropTypes) {
    NativeSelect.propTypes = {
      id: PropTypes.string.isRequired,
      style: PropTypes.object,
      className: PropTypes.string,
      value: PropTypes.string,
      defaultValue: PropTypes.string,
      theme: PropTypes.oneOf(["none", "underline", "filled", "outline"]),
      dense: PropTypes.bool,
      error: PropTypes.bool,
      inline: PropTypes.bool,
      disabled: PropTypes.bool,
      underlineDirection: PropTypes.oneOf(["left", "right"]),
      leftAddon: PropTypes.node,
      rightAddon: PropTypes.node,
    };
  }
}

export default NativeSelect;
