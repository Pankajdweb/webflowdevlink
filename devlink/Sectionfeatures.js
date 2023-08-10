import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Sectionfeatures.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-10":{"id":"e-10","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b415839b-a5b9-70c6-82d1-168e8956c491","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b415839b-a5b9-70c6-82d1-168e8956c491","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682355805259},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".bussiness_card","originalId":"b415839b-a5b9-70c6-82d1-168e8956c49a","appliesTo":"CLASS"},"targets":[{"selector":".bussiness_card","originalId":"b415839b-a5b9-70c6-82d1-168e8956c49a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682355904596}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Sectionfeatures({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-bussiness_capital")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "bussiness-capital-wrap")}
          data-w-id="b415839b-a5b9-70c6-82d1-168e8956c491"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "bussinbess-capital-title")}
              data-w-id="b415839b-a5b9-70c6-82d1-168e8956c493"
              tag="div"
            >
              <_Builtin.Heading tag="h2">
                {"Business capital "}
                <br />
                {"the way it should be"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "grid_component",
                "bussiness_capital-grid"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c499-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d290df5405fed_mobile-iso-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"Instant online decision"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {
                      "Your entire application is doneonline and the decision is instant."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c4a2-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2965ba405fef_money-bag-iso-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"Same day funds"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {"Get your cash as fast as thesame day."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c4ab-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29cdd9405fee_gift-iso-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"Earn rewards"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {
                      "Increased limits and rate decreases are just a few of your Loot rewards. Paying back should be rewarding."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c4b4-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d291749405fea_flag-dynamic-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"No credit check"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {
                      "We do not do a soft or hard credit checks. Our model bases your eligibility on revenue only."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c4bd-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29349d405fec_target-dynamic-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"High approval rate"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {
                      "We can accomodate most businessesand Loot is industry agnostic."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "grid_items")}
                id={_utils.cx(
                  _styles,
                  "w-node-b415839b-a5b9-70c6-82d1-168e8956c4c6-8956c48f"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bussiness_card")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_img-wrap")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29e234405feb_scissor-dynamic-clay.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "bussiness_title-wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-regular-24")}
                      tag="div"
                    >
                      {"Low competitive fees"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-18")}
                    tag="div"
                  >
                    {
                      "Your business needs all the cash it can keep.Our fees are competitive and reasonable."
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
