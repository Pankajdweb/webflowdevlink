import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { DollarMarquess } from "./DollarMarquess";
import * as _utils from "./utils";
import _styles from "./SectionFund.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-66":{"id":"e-66","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-67"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"494abbe6-a241-00f6-9a44-51dd6528dedf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"494abbe6-a241-00f6-9a44-51dd6528dedf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682658000559}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionFund({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-funds")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "fund-wrap")}
          data-w-id="494abbe6-a241-00f6-9a44-51dd6528dedf"
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "dta")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-5")}
              id={_utils.cx(
                _styles,
                "w-node-_494abbe6-a241-00f6-9a44-51dd6528dee1-6528dedd"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-3")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "left-shape")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "right-shape")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "marquee-flex-wrap")}
                  tag="div"
                >
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                  <DollarMarquess />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6")}
              id={_utils.cx(
                _styles,
                "w-node-_494abbe6-a241-00f6-9a44-51dd6528deef-6528dedd"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fund-card")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-large-52")}
                  tag="div"
                >
                  {"Same day funds"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fund-desc-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {
                      "You need your capital as quickly as possible. With Loot we send you the funds instantly."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
