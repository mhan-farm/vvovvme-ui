import { useCallback, useState } from "react";
import { CirclePicker } from "react-color";

interface ColorPickerProps {
  setText: (color: string) => void;
}

const ColorPicker = ({ setText }: ColorPickerProps) => {
  const [color, setColor] = useState<string>("#000");

  const handleColorChange = useCallback(
    (color: string) => {
      setColor(color);
      setText(color);
    },
    [color]
  );

  return (
    <div className="flex absolute z-10 p-3 mt-10 rounded-sm bg-neutral-50 dark:bg-neutral-900 shadow-lg">
      <CirclePicker
        className="relative"
        color={color}
        onChange={(color) => handleColorChange(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
