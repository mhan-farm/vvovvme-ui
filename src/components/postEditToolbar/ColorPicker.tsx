import { useCallback, useState } from "react";
import { CirclePicker } from "react-color";

interface ColorPickerProps {
  getColor: (color: string) => void;
}

const ColorPicker = ({ getColor }: ColorPickerProps) => {
  const [color, setColor] = useState<string>("#000");

  const handleColorChange = useCallback(
    (color: string) => {
      setColor(color);
      getColor(color);
    },
    [color]
  );

  return (
    <div className="flex absolute z-10 p-3 rounded-lg bg-neutral-50 shadow-lg">
      <CirclePicker
        className="relative"
        color={color}
        onChange={(color) => handleColorChange(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
