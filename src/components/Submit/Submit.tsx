import { Button } from "@gravity-ui/uikit";

interface SubmitProps {
  text: string;
  isLoading?: boolean;
}

export const Submit = (props: SubmitProps) => {
  const { text, isLoading } = props;

  return (
    <Button type="submit" view="action" loading={isLoading}>
      {text}
    </Button>
  );
};
