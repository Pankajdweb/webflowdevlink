import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Sectionreward.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d64bee3d-d0be-de55-347d-04b28e1341e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d64bee3d-d0be-de55-347d-04b28e1341e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1682391097164},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"644fc70a829d293f84405fd7|1c207017-025e-4dfa-c796-fe9a94bb39e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"644fc70a829d293f84405fd7|1c207017-025e-4dfa-c796-fe9a94bb39e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1682392196965},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682607846692}},"actionLists":{"a-12":{"id":"a-12","title":"Reward [Scroll In]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".get-reward-wrapper","selectorGuids":["472d0549-9029-684f-c806-e6ec65ee0467"]},"yValue":15,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-12-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".get-reward-wrapper","selectorGuids":["472d0549-9029-684f-c806-e6ec65ee0467"]},"value":0,"unit":""}},{"id":"a-12-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get_reward-img-holder","selectorGuids":["cb1d3cee-e17a-e015-7249-07529ef6dc8c"]},"xValue":0.5,"yValue":0.5,"locked":true}},{"id":"a-12-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get_reward-img-holder","selectorGuids":["cb1d3cee-e17a-e015-7249-07529ef6dc8c"]},"value":0,"unit":""}},{"id":"a-12-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".reward-detail","selectorGuids":["65351b02-1ea8-7bf7-38a8-6a282b2a720f"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-12-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".reward-detail","selectorGuids":["65351b02-1ea8-7bf7-38a8-6a282b2a720f"]},"value":0,"unit":""}},{"id":"a-12-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get-design-1","selectorGuids":["a963fe1d-8f6b-7292-99a8-0deb7d8b2713"]},"value":0,"unit":""}},{"id":"a-12-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"xValue":-10,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-12-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".get-reward-wrapper","selectorGuids":["472d0549-9029-684f-c806-e6ec65ee0467"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-12-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".get-reward-wrapper","selectorGuids":["472d0549-9029-684f-c806-e6ec65ee0467"]},"value":1,"unit":""}},{"id":"a-12-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get_reward-img-holder","selectorGuids":["cb1d3cee-e17a-e015-7249-07529ef6dc8c"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-12-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get_reward-img-holder","selectorGuids":["cb1d3cee-e17a-e015-7249-07529ef6dc8c"]},"value":1,"unit":""}},{"id":"a-12-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".reward-detail","selectorGuids":["65351b02-1ea8-7bf7-38a8-6a282b2a720f"]},"value":1,"unit":""}},{"id":"a-12-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".reward-detail","selectorGuids":["65351b02-1ea8-7bf7-38a8-6a282b2a720f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-12-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".get-design-1","selectorGuids":["a963fe1d-8f6b-7292-99a8-0deb7d8b2713"]},"value":1,"unit":""}},{"id":"a-12-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1300,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-12-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":1300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682391104451},"a-14":{"id":"a-14","title":"Ultimate [Scroll In]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-wrapper","selectorGuids":["616e66b6-72c0-bd02-605d-03235a5b9922"]},"yValue":20,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-wrapper","selectorGuids":["616e66b6-72c0-bd02-605d-03235a5b9922"]},"value":0,"unit":""}},{"id":"a-14-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-content","selectorGuids":["16a7f2a3-38fc-3ed3-59cc-caba87b4a26f"]},"yValue":10,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-content","selectorGuids":["16a7f2a3-38fc-3ed3-59cc-caba87b4a26f"]},"value":0,"unit":""}},{"id":"a-14-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-image-holder","selectorGuids":["58e34bd8-176f-e61e-7568-84eab95e3166"]},"yValue":15,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-image-holder","selectorGuids":["58e34bd8-176f-e61e-7568-84eab95e3166"]},"value":1,"unit":""}},{"id":"a-14-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-design-2","selectorGuids":["fd72fc55-071e-c696-96de-72044632cfa0"]},"xValue":0.2,"yValue":0.2,"locked":true}},{"id":"a-14-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-4","selectorGuids":["42d1cbbc-b701-a2ed-9bf9-33e61c99c353"]},"xValue":-10,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-14-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-4","selectorGuids":["42d1cbbc-b701-a2ed-9bf9-33e61c99c353"]},"value":0,"unit":""}},{"id":"a-14-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".bg-design-wrap.point-cursor","selectorGuids":["6d6c3329-aa9e-034b-c7d5-8c2b86682ffb","3622352c-baf0-c520-352d-1501c3f03325"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-wrapper","selectorGuids":["616e66b6-72c0-bd02-605d-03235a5b9922"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-wrapper","selectorGuids":["616e66b6-72c0-bd02-605d-03235a5b9922"]},"value":1,"unit":""}},{"id":"a-14-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-image-holder","selectorGuids":["58e34bd8-176f-e61e-7568-84eab95e3166"]},"value":1,"unit":""}},{"id":"a-14-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-image-holder","selectorGuids":["58e34bd8-176f-e61e-7568-84eab95e3166"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-15","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-design-2","selectorGuids":["fd72fc55-071e-c696-96de-72044632cfa0"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-14-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-content","selectorGuids":["16a7f2a3-38fc-3ed3-59cc-caba87b4a26f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-14-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ultimate-content","selectorGuids":["16a7f2a3-38fc-3ed3-59cc-caba87b4a26f"]},"value":1,"unit":""}},{"id":"a-14-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".bg-design-wrap.point-cursor","selectorGuids":["6d6c3329-aa9e-034b-c7d5-8c2b86682ffb","3622352c-baf0-c520-352d-1501c3f03325"]},"value":1,"unit":""}},{"id":"a-14-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-4","selectorGuids":["42d1cbbc-b701-a2ed-9bf9-33e61c99c353"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-14-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-msg-wrap-4","selectorGuids":["42d1cbbc-b701-a2ed-9bf9-33e61c99c353"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682392204005},"a-20":{"id":"a-20","title":"Reward [Moving Animation]","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".reward-shape-1","selectorGuids":["87bb4e7b-2ec4-faf6-8161-797482165863"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".reward-shape-2","selectorGuids":["0eb963ae-531b-3d3c-fdfe-a8b995e5887f"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".reward-shape-3","selectorGuids":["990b3d3b-056f-d1ab-68dc-f2360faf8428"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-20-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-1","selectorGuids":["87bb4e7b-2ec4-faf6-8161-797482165863"]},"xValue":-25,"yValue":-25,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-3","selectorGuids":["990b3d3b-056f-d1ab-68dc-f2360faf8428"]},"xValue":25,"yValue":-25,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-2","selectorGuids":["0eb963ae-531b-3d3c-fdfe-a8b995e5887f"]},"xValue":null,"yValue":-40,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"xValue":-30,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-20-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-1","selectorGuids":["87bb4e7b-2ec4-faf6-8161-797482165863"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-2","selectorGuids":["0eb963ae-531b-3d3c-fdfe-a8b995e5887f"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".reward-shape-3","selectorGuids":["990b3d3b-056f-d1ab-68dc-f2360faf8428"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-20-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".hero-msg-wrap-3","selectorGuids":["e88290b6-f2bb-338e-e141-d02fb5641402"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682487616945}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Sectionreward({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-get_reward")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "get-reward-wrapper")}
          data-w-id="d64bee3d-d0be-de55-347d-04b28e1341e0"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "grid_component", "get-reward-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "grid_items")}
              id={_utils.cx(
                _styles,
                "w-node-d64bee3d-d0be-de55-347d-04b28e1341e2-8e1341de"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "get_reward-img-holder")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-2")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2954e7405ffd_Rectangle.png"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero-msg-wrap-3")}
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
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "grid_items")}
              id={_utils.cx(
                _styles,
                "w-node-d64bee3d-d0be-de55-347d-04b28e1341eb-8e1341de"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "reward-detail")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "reward-shapes-wrap")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "reward-shape-1")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29680a406020_rewared-icon-1.png"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "reward-shape-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d295c4440601f_rewared-icon-2.png"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "reward-shape-3")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29715f40601e_rewared-icon-3.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "get-reward-title")}
                  tag="div"
                >
                  <_Builtin.Heading tag="h2">{"Get rewarded"}</_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-regular-24")}
                  tag="div"
                >
                  {
                    "Paying back should be rewarding. Earn great rewards with Loot."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "bg-design-wrap", "point-cursor")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "get-design-1")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d297a5e405ffc_Vector.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "get-design-2")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2939f6405ffe_right-design.png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
