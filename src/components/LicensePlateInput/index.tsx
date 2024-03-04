import { TextInput, TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';
import theme from '../../theme';
import { forwardRef } from 'react';

type Props = TextInputProps & {
  label: string;
};
const LicensePlateInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>
        <Input
          ref={ref}
          maxLength={7}
          autoCapitalize="characters"
          placeholderTextColor={theme.COLORS.GRAY_400}
          {...rest}
        />
      </Container>
    );
  },
);

export { LicensePlateInput };
