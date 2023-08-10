import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Herosection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682329770691},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682486559221}},"actionLists":{"a-4":{"id":"a-4","title":"Home-About-[Loading-Animation]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"yValue":10,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"value":0,"unit":""}},{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"value":0,"unit":""}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"yValue":20,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"value":0,"unit":""}},{"id":"a-4-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"value":0,"unit":""}},{"id":"a-4-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"xValue":2,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"yValue":15,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":800,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"value":1,"unit":""}},{"id":"a-4-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":200,"easing":"","duration":800,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-4-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":800,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"value":1,"unit":""}},{"id":"a-4-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"","duration":800,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":800,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"value":1,"unit":""}},{"id":"a-4-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"","duration":800,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":800,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"value":1,"unit":""}},{"id":"a-4-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":"","duration":1000,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":1000,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682329776618},"a-18":{"id":"a-18","title":"Hero [Moving Animation]","actionItemGroups":[{"actionItems":[{"id":"a-18-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".h-shape-5","selectorGuids":["9d2bb2d0-86df-f1d5-7439-7665491cf77f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".h-shape-4","selectorGuids":["f7c8ea37-75fd-098d-34ce-8a18b333bb72"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".h-shape-6","selectorGuids":["43412e9c-b2fc-705c-c68c-3628c47d9d84"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-18-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".h-shape-7","selectorGuids":["d0a41b4d-cfbc-47ec-328f-c68e3a1332d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-18-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-5","selectorGuids":["9d2bb2d0-86df-f1d5-7439-7665491cf77f"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-7","selectorGuids":["d0a41b4d-cfbc-47ec-328f-c68e3a1332d2"]},"yValue":-20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-6","selectorGuids":["43412e9c-b2fc-705c-c68c-3628c47d9d84"]},"xValue":-20,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-18-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-4","selectorGuids":["f7c8ea37-75fd-098d-34ce-8a18b333bb72"]},"xValue":-20,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-18-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-5","selectorGuids":["9d2bb2d0-86df-f1d5-7439-7665491cf77f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-4","selectorGuids":["f7c8ea37-75fd-098d-34ce-8a18b333bb72"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-6","selectorGuids":["43412e9c-b2fc-705c-c68c-3628c47d9d84"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-18-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".h-shape-7","selectorGuids":["d0a41b4d-cfbc-47ec-328f-c68e3a1332d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682487616945}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Herosection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-home_hero")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-img-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "overlay-msg-wrap", "_01")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "msg-img-holder")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29a4c2405ffa_Frame%2035.png"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Strong>
                  {"+$1,000 capital limit added"}
                </_Builtin.Strong>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "overlay-msg-wrap", "", "_02")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "msg-img-holder")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29a2ad405ffb_Frame%2035%20(1).png"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Strong>
                  {"You just earned a free payment skip!"}
                </_Builtin.Strong>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "hero-main-img")}
              tag="div"
            >
              <_Builtin.Image
                loading="eager"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2939ae40601a_hero-mob-image.png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "hero-bg-design-holder",
              "point-cursor"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-1")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2933d6405ff3_hero-left-design.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-2")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d292c64405ff4_hero-right-img.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-3")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d293849405ff5_hero%20Blend.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-4")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29caf3405ff6_hero-Rock3.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-5")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d297d39405ff7_hero-Cone.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-6")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29565f405ff9_Cone.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "h-shape-7")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d295de4405ff8_Rock3.png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
