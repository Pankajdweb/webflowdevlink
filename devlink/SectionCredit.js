import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionCredit.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-68":{"id":"e-68","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2a7efe9d-f93d-ae68-1d3b-7173e04ec648","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a7efe9d-f93d-ae68-1d3b-7173e04ec648","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682658019239}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionCredit({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-no_credit")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "no-credit-wrap")}
          data-w-id="2a7efe9d-f93d-ae68-1d3b-7173e04ec648"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "no-credit-design")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "credit-design-1")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-3")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29508d40600b_Vector%20(2).png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "credit-design-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-4")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29967940600c_copy-dynamic-clay.png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "no-credit-content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-size-large-52")}
              tag="h2"
            >
              {"No credit checks"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "no-credit-desc-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-size-regular-24")}
                tag="div"
              >
                {
                  "We do not do a soft or hard credit checks. Our model bases your eligibility on revenue only."
                }
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
