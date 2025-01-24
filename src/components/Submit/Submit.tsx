import { Button } from "@gravity-ui/uikit";
import { useFormikContext } from "formik";

interface SubmitProps {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Submit = (props: SubmitProps) => {
  const { text, isLoading, disabled } = props;

  const { isValid: isFormValid } = useFormikContext();

  return (
    <Button type="submit" view="action" loading={isLoading} disabled={!isFormValid || disabled}>
      {text}
    </Button>
  );
};
