import React from "react";

import ColorPicker from "./components/ColorPicker";
import { ColorModel, ColorPickerBaseProps } from "./types";
import { equalColorString } from "./utils/compare";
import { rgbStringToHsv, hsvToRgbString } from "./utils/convert";

const colorModel: ColorModel<string> = {
  defaultColor: "rgb(0, 0, 0)",
  toHsv: rgbStringToHsv,
  fromHsv: hsvToRgbString,
  equal: equalColorString,
};

const RgbStringColorPicker = (props: Partial<ColorPickerBaseProps<string>>): JSX.Element => (
  <ColorPicker {...props} colorModel={colorModel} />
);

export default RgbStringColorPicker;
