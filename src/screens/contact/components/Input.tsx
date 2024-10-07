import { useState } from 'react';
import { FloatingLabel, InputContainer, StyledInput, StyledTextarea } from './Input.styled';

interface IProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    isTextarea?: boolean;
    error?: boolean;
}

export const Input = ({ label, value, onChange, isTextarea, error }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer 
        style={error ? {
            marginBottom: 0
        } : {}}
    >
      {isTextarea ? (
        <StyledTextarea
          data-testid={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(value.length > 0)}
          required
        />
      ) : (
        <StyledInput
            data-testid={label}
            type='text'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(value.length > 0)}
            required
        />
      )}

      <FloatingLabel isfocusedorfilled={isFocused || value.length > 0}>
        {label}
      </FloatingLabel>
    </InputContainer>
  );
};
