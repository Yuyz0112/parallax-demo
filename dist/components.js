import React from "https://esm.run/es-react";
import { createComponent } from "https://esm.run/@sunmao-ui/core";

const DummyImpl = () => {
  return /*#__PURE__*/React.createElement("p", null, "dummy paragraph");
};

export const Dummy = { ...createComponent({
    version: "es_module/v1",
    metadata: {
      name: "dummy",
      displayName: "Dummy",
      description: "ES module test",
      isDraggable: false,
      isResizable: false,
      exampleProperties: {},
      exampleSize: [1, 1]
    },
    spec: {
      properties: {},
      state: {},
      methods: [],
      slots: [],
      styleSlots: [],
      events: []
    }
  }),
  impl: DummyImpl
};