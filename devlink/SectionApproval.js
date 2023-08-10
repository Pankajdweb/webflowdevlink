import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionApproval.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"358a335d-afbe-ed48-f15f-40cf2d5a9029","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"358a335d-afbe-ed48-f15f-40cf2d5a9029","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682357442346},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"358a335d-afbe-ed48-f15f-40cf2d5a9034","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"358a335d-afbe-ed48-f15f-40cf2d5a9034","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1682357872317},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682358080846}},"actionLists":{"a-8":{"id":"a-8","title":"approval [Scroll-In]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".approval-dollar-icon","selectorGuids":["8c1e4eb6-38bf-589e-be49-496703fdc26a"]},"xValue":0.6,"yValue":0.6,"locked":true}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".approval-main-img-wrap","selectorGuids":["5a558292-35fc-8b8b-ac2a-d332a71c6584"]},"yValue":30,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".approval-main-img-wrap","selectorGuids":["5a558292-35fc-8b8b-ac2a-d332a71c6584"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".approval-dollar-icon","selectorGuids":["8c1e4eb6-38bf-589e-be49-496703fdc26a"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-8-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".approval-main-img-wrap","selectorGuids":["5a558292-35fc-8b8b-ac2a-d332a71c6584"]},"value":1,"unit":""}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".approval-main-img-wrap","selectorGuids":["5a558292-35fc-8b8b-ac2a-d332a71c6584"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682357879301},"a-9":{"id":"a-9","title":"Dollar Icon [Loop]","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":2500,"target":{"selector":".approval-dollar-icon","selectorGuids":["8c1e4eb6-38bf-589e-be49-496703fdc26a"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-9-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":2500,"target":{"selector":".approval-dollar-icon","selectorGuids":["8c1e4eb6-38bf-589e-be49-496703fdc26a"]},"zValue":30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682358090428},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionApproval({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-instant_approval")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "approval-wrapper")}
          data-w-id="358a335d-afbe-ed48-f15f-40cf2d5a9029"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "approval-header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "grid_component",
                "approval-head-grid"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-_358a335d-afbe-ed48-f15f-40cf2d5a902c-2d5a9027"
                )}
                tag="div"
              >
                <_Builtin.Heading tag="h2">
                  {"Instant "}
                  <br />
                  {"online approval"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-_358a335d-afbe-ed48-f15f-40cf2d5a9031-2d5a9027"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-regular-24")}
                  tag="div"
                >
                  {
                    "With Loot, you connect your bank account securely using Plaid, and get an instant offer."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "approval-body-wrap")}
            data-w-id="358a335d-afbe-ed48-f15f-40cf2d5a9034"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "approval-main-img-wrap")}
              tag="div"
            >
              <_Builtin.Image
                loading="eager"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29762040601b_approval-img.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "approval-img-holder")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "approval-dollar-icon")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29055c405ff1_dollar-wrap%20(1).png"
                />
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "image")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29054540601c_approval-bg-circle.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
