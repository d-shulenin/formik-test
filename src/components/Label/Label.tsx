import { Text } from "@gravity-ui/uikit";

interface LabelProps {
  text?: unknown;
  annotation?: string;
  required: boolean;
}

export function Label(props: LabelProps) {
  const { text, annotation, required } = props;

  if (!text || typeof text !== "string") {
    return null;
  }

  return (
    <>
      <Text variant="body-2" color="secondary">
        {text}
      </Text>
      {!required && (
        <Text variant="body-2" color="secondary">
          (not required)
        </Text>
      )}
      {annotation && (
        <Text variant="body-2" color="secondary">
          {annotation}
        </Text>
      )}
    </>
  );
}
