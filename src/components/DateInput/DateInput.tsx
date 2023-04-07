import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

interface DateInputProps {
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

function DateInput({
  value,
  onChange,
  className,
  placeholder,
}: DateInputProps) {
  const [date, setDate] = useState<string | undefined>(value);

  useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setDate(value);
    if (onChange) onChange(value);
  };

  return (
    <InputMask
      placeholder={placeholder}
      className={className}
      mask="99.99.9999"
      value={date}
      onChange={handleDateChange}
    />
  );
}

export default DateInput;
