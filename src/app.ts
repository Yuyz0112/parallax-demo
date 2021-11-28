import { AppProps } from "@sunmao-ui/runtime";

export const app: AppProps["options"] = {
  kind: "Application",
  version: "example/v1",
  metadata: {
    name: "remote_module",
    description: "load es module component and trait",
  },
  spec: {
    components: [
      {
        id: "root",
        type: "chakra_ui/v1/root",
        properties: {},
        traits: [],
      },
      {
        id: "example_1",
        type: "chakra_ui/v1/box",
        properties: {
          p: 100,
          border: "none",
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "root",
                slot: "root",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "controller",
              selector: `.App > div:nth-of-type(1)`,
              styleSlot: "content",
              style: `
                background: #6a40bf;
              `,
              proximity: 100,
              bounds: 100,
              perspective: "20vmin",
              container: {
                id: "example_1_container",
                rotateDeg: {
                  x: -20,
                  y: 20,
                  z: 0,
                },
              },
              items: [
                {
                  id: "example_1_item_1",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: 90,
                  },
                  movePercent: {
                    x: -1,
                    y: 0,
                  },
                },
                {
                  id: "example_1_item_2",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: -45,
                  },
                  movePercent: {
                    x: 1.6,
                    y: -2,
                  },
                },
                {
                  id: "example_1_item_3",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: 360,
                  },
                  movePercent: {
                    x: -3,
                    y: 1,
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "example_1_container",
        type: "chakra_ui/v1/box",
        properties: {
          border: "none",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_1",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                height: 135px;
                width: 135px;
                background: #ffc499;
                border-radius: 50%;
                position: relative;

                &:after {
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  height: 200px;
                  width: 200px;
                  border-radius: 50%;
                  background: rgba(213,179,230,0.5);
                  transform: translate(-50%, -50%);
                  z-index: -1;
                }
              `,
              controllerId: "example_1",
            },
          },
        ],
      },
      {
        id: "example_1_item_1",
        type: "chakra_ui/v1/box",
        properties: {
          border: "none",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_1_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 10; --y: 60; --size: 30; --hue: 220;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
                background: hsl(var(--hue, 0), 80%, 80%);
              `,
              controllerId: "example_1",
            },
          },
        ],
      },
      {
        id: "example_1_item_2",
        type: "chakra_ui/v1/box",
        properties: {
          border: "none",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_1_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 75; --y: 20; --size: 50;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
                background: hsl(var(--hue, 0), 80%, 80%);
              `,
              controllerId: "example_1",
            },
          },
        ],
      },
      {
        id: "example_1_item_3",
        type: "chakra_ui/v1/box",
        properties: {
          border: "none",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_1_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 75; --y: 80; --size: 40;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
                background: hsl(var(--hue, 0), 80%, 80%);
              `,
              controllerId: "example_1",
            },
          },
        ],
      },
      {
        id: "example_2",
        type: "chakra_ui/v1/box",
        properties: {
          p: 100,
          border: "none",
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "root",
                slot: "root",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "controller",
              selector: `.App > div:nth-of-type(2)`,
              styleSlot: "content",
              style: `
                background: var(--chakra-colors-blue-700);
              `,
              proximity: 100,
              bounds: 100,
              perspective: "20vmin",
              container: {
                id: "example_2_container",
                rotateDeg: {
                  x: -20,
                  y: 20,
                  z: 0,
                },
              },
              items: [
                {
                  id: "example_2_item_1",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  movePercent: {
                    x: 0.1,
                    y: 0.3,
                  },
                },
                {
                  id: "example_2_item_2",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: -30,
                  },
                  movePercent: {
                    x: 0.3,
                    y: -0.2,
                  },
                },
                {
                  id: "example_2_item_3",
                  rotateDeg: {
                    x: 0,
                    y: 0,
                    z: 15,
                  },
                  movePercent: {
                    x: -0.3,
                    y: 0.1,
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "example_2_container",
        type: "chakra_ui/v1/box",
        properties: {
          border: "none",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_2",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                height: 200px;
                width: 160px;
                background: var(--chakra-colors-yellow-200);
                border-radius: var(--chakra-radii-md);
                position: relative;
    
                &:after {
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  height: 220px;
                  width: 180px;
                  border-radius: var(--chakra-radii-md);
                  background: var(--chakra-colors-teal-200);
                  opacity: 0.5;
                  transform: translate(-50%, -50%);
                  z-index: -1;
                }
              `,
              controllerId: "example_2",
            },
          },
        ],
      },
      {
        id: "example_2_item_1",
        type: "chakra_ui/v1/image",
        properties: {
          src:
            "https://powerpeopleplatform.com/wp-content/uploads/2020/12/PowerPeople_Christopher03-1.png",
          alt: "avatar",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_2_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 50; --y: 50; --size: 125;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
              `,
              controllerId: "example_2",
            },
          },
        ],
      },
      {
        id: "example_2_item_2",
        type: "chakra_ui/v1/image",
        properties: {
          src:
            "https://3d.khagwal.co/explorer/bucket/preview/elite/headphone_front.webp",
          alt: "earphone",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_2_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 65; --y: 20; --size: 80;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
              `,
              controllerId: "example_2",
            },
          },
        ],
      },
      {
        id: "example_2_item_3",
        type: "chakra_ui/v1/image",
        properties: {
          src:
            "https://3d.khagwal.co/explorer/bucket/preview/elite/pencil_front.webp",
          alt: "microphone",
        },
        traits: [
          {
            type: "core/v1/slot",
            properties: {
              container: {
                id: "example_2_container",
                slot: "content",
              },
            },
          },
          {
            type: "parallax/v1/pointer_parallax",
            properties: {
              type: "embed",
              styleSlot: "content",
              style: `
                --x: 25; --y: 80; --size: 80;
                position: absolute;
                top: calc(var(--y, 0) * 1%);
                left: calc(var(--x, 0) * 1%);
                height: calc(var(--size, 20) * 1px);
                width: calc(var(--size, 20) * 1px);
              `,
              controllerId: "example_2",
            },
          },
        ],
      },
    ],
  },
};
