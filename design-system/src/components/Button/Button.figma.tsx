import figma from "@figma/code-connect";
import { Button } from "./Button";

/**
 * Code Connect — Untitled UI Button
 * Figma: https://www.figma.com/design/1HNJgu9OFzzeXg40P7eylw
 *
 * Este archivo linkea los componentes de Figma con el código React.
 * Para publicar: npx @figma/code-connect publish
 */
figma.connect(
  Button,
  "https://www.figma.com/design/1HNJgu9OFzzeXg40P7eylw/Untitled-UI---Hddhdhdydjv?node-id=3287-427074",
  {
    props: {
      hierarchy: figma.enum("Hierarchy", {
        "Primary":           "primary",
        "Secondary color":   "secondary-color",
        "Secondary gray":    "secondary-gray",
        "Tertiary color":    "tertiary-color",
        "Tertiary gray":     "tertiary-gray",
        "Link color":        "link-color",
        "Link gray":         "link-gray",
      }),
      size: figma.enum("Size", {
        "sm":  "sm",
        "md":  "md",
        "lg":  "lg",
        "xl":  "xl",
        "2xl": "2xl",
      }),
      dotLeading: figma.enum("Icon", {
        "Dot leading": true,
        "Default":     false,
        "Only":        false,
      }),
      iconOnly: figma.enum("Icon", {
        "Only":        true,
        "Default":     false,
        "Dot leading": false,
      }),
      disabled: figma.enum("State", {
        "Disabled": true,
        "Default":  false,
        "Hover":    false,
        "Focused":  false,
      }),
    },
    example: ({ hierarchy, size, dotLeading, iconOnly, disabled }) => (
      <Button
        hierarchy={hierarchy}
        size={size}
        dotLeading={dotLeading}
        iconOnly={iconOnly}
        disabled={disabled}
      >
        Button CTA
      </Button>
    ),
  }
);
