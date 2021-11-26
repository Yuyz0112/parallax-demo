import { createTrait } from "https://esm.run/@sunmao-ui/core";
import { Type } from "https://cdn.jsdelivr.net/npm/@sinclair/typebox@0.22.1/typebox.js";

const useHiddenTrait = ({
  hidden,
  visually
}) => {
  if (visually) {
    return {
      props: {
        customStyle: {
          content: hidden ? "display: none" : ""
        }
      }
    };
  }

  return {
    props: {},
    unmount: hidden
  };
};

const PropsSchema = Type.Object({
  hidden: Type.Boolean(),
  visually: Type.Boolean()
});
export const Hidden = { ...createTrait({
    version: "es_module/v1",
    metadata: {
      name: "hidden",
      description: "render component with condition"
    },
    spec: {
      properties: PropsSchema,
      state: {},
      methods: []
    }
  }),
  impl: useHiddenTrait
};