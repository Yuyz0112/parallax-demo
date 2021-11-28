import gsap from "https://esm.run/gsap";
import { createTrait } from "@sunmao-ui/core";
import { Static, Type } from "@sinclair/typebox";
import { TraitImplementation } from "@sunmao-ui/runtime";

const ParallaxTraitPropertiesSchema = Type.Union([
  Type.Object({
    type: Type.Literal("controller"),
    selector: Type.String(),
    styleSlot: Type.String(),
    style: Type.String(),
    proximity: Type.Number(),
    bounds: Type.Number(),
    perspective: Type.String(),
    // preset scenes
    container: Type.Object({
      id: Type.String(),
      rotateDeg: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number(),
      }),
    }),
    items: Type.Array(
      Type.Object({
        id: Type.String(),
        rotateDeg: Type.Object({
          x: Type.Number(),
          y: Type.Number(),
          z: Type.Number(),
        }),
        movePercent: Type.Object({
          x: Type.Number(),
          y: Type.Number(),
        }),
      })
    ),
  }),
  Type.Object({
    type: Type.Literal("embed"),
    styleSlot: Type.String(),
    style: Type.String(),
    controllerId: Type.String(),
  }),
]);

const stopper: Map<string, Function | null> = new Map();
const instanceMap: Map<
  string,
  {
    container: {
      id: string;
      rotateDeg: {
        x: number;
        y: number;
        z: number;
      };
    };
    items: {
      id: string;
      rotateDeg: {
        x: number;
        y: number;
        z: number;
      };
      movePercent: {
        x: number;
        y: number;
      };
    }[];
  }
> = new Map();

const generateHandler = (
  element: HTMLElement,
  proximity: number,
  bounds: number,
  cb: (x: number, y: number) => void
) => ({ x, y }: { x: number; y: number }) => {
  const elementBounds = element.getBoundingClientRect();
  const centerX = elementBounds.left + elementBounds.width / 2;
  const centerY = elementBounds.top + elementBounds.height / 2;
  const boundX = gsap.utils.mapRange(
    centerX - proximity,
    centerX + proximity,
    -bounds,
    bounds,
    x
  );
  const boundY = gsap.utils.mapRange(
    centerY - proximity,
    centerY + proximity,
    -bounds,
    bounds,
    y
  );
  cb(boundX, boundY);
};

const useParallaxTrait: TraitImplementation<
  Static<typeof ParallaxTraitPropertiesSchema>
> = ({ componentId, styleSlot, style, ...restProps }) => {
  if (restProps.type === "embed") {
    const { container, items } = instanceMap.get(restProps.controllerId) || {};
    if (container?.id === componentId) {
      return {
        props: {
          customStyle: {
            [styleSlot]: `
              display: grid;
              place-content: center;
              transition: transform 0.1s;
              transform:
                rotateX(calc(var(--ratio-x, 0) * ${container.rotateDeg.x} * 1deg))
                rotateY(calc(var(--ratio-y, 0) * ${container.rotateDeg.y} * 1deg))
                rotateZ(calc(var(--ratio-y, 0) * ${container.rotateDeg.z} * 1deg));
              ${style};
            `,
          },
        },
      };
    }
    const item = items?.find((item) => item.id === componentId);
    if (item) {
      return {
        props: {
          customStyle: {
            [styleSlot]: `
              transition: transform 0.1s;
              transform:
                translate(-50%, -50%)
                translate(
                  calc(${item.movePercent.x} * var(--ratio-x, 0) * 100%),
                  calc(${item.movePercent.y} * var(--ratio-y, 0) * 100%))
                rotateX(calc(var(--ratio-x, 0) * ${item.rotateDeg.x} * 1deg))
                rotateY(calc(var(--ratio-y, 0) * ${item.rotateDeg.y} * 1deg))
                rotateZ(calc(var(--ratio-y, 0) * ${item.rotateDeg.z} * 1deg));
              ${style};
            `,
          },
        },
      };
    }
    return {
      props: {},
    };
  }

  const {
    proximity,
    bounds,
    container,
    items,
    perspective,
    selector,
  } = restProps;

  if (!stopper.has(componentId)) {
    const CONTAINER = document.querySelector<HTMLDivElement>(selector);
    if (CONTAINER) {
      const handler = generateHandler(CONTAINER, proximity, bounds, (x, y) => {
        if (Number.isNaN(x)) {
          return;
        }
        CONTAINER.style.setProperty(
          "--ratio-x",
          String(Math.floor(gsap.utils.clamp(-100, 100, x)) / 100)
        );
        CONTAINER.style.setProperty(
          "--ratio-y",
          String(Math.floor(gsap.utils.clamp(-100, 100, y)) / 100)
        );
      });
      CONTAINER.addEventListener("pointermove", handler);
      stopper.set(componentId, () => {
        CONTAINER.removeEventListener("pointermove", handler);
      });
    }
  }

  instanceMap.set(componentId, {
    container,
    items,
  });

  return {
    props: {
      customStyle: {
        [styleSlot]: `
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: ${perspective};
          ${style};
        `,
      },
    },
  };
};

export const PointerParallax = {
  ...createTrait({
    version: "parallax/v1",
    metadata: {
      name: "pointer_parallax",
      description: "parallax trigger by pointer move",
    },
    spec: {
      properties: ParallaxTraitPropertiesSchema,
      state: Type.Object({}),
      methods: [],
    },
  }),
  impl: useParallaxTrait,
};
