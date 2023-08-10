import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Capitalsection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682329770691},"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682609310918}},"actionLists":{"a-4":{"id":"a-4","title":"Home-About-[Loading-Animation]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"yValue":10,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"value":0,"unit":""}},{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"value":0,"unit":""}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"yValue":20,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"value":0,"unit":""}},{"id":"a-4-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"value":0,"unit":""}},{"id":"a-4-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"xValue":2,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"yValue":15,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":800,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"selector":".hero-wrapper","selectorGuids":["f5b2cd27-95bf-6ed4-1c59-8a03c1dfa1a9"]},"value":1,"unit":""}},{"id":"a-4-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":200,"easing":"","duration":800,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-4-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":800,"target":{"selector":".hero-bg-design-holder.point-cursor","selectorGuids":["aa12202a-8b69-d7e2-99db-e8796e95803d","d10009f9-f185-57c3-cf64-8416d0b6674f"]},"value":1,"unit":""}},{"id":"a-4-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"","duration":800,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":800,"target":{"selector":".hero-main-img","selectorGuids":["1c4cad2c-b570-4957-65c2-a54eecdd044b"]},"value":1,"unit":""}},{"id":"a-4-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"","duration":800,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":800,"target":{"selector":".section-instant_capital","selectorGuids":["df87973f-6bcf-e5de-c281-a0c2f7895af3"]},"value":1,"unit":""}},{"id":"a-4-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":"","duration":1000,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":1000,"target":{"selector":".overlay-msg-wrap","selectorGuids":["d4361f55-dfa2-7f6d-a0c0-2b6a1314173d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682329776618},"a-21":{"id":"a-21","title":"Dollar [Moving Animation]","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".capital-img-box._01","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","909a2ca8-e95a-6b84-07a8-3d0967792df7"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".capital-img-box._02","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","e8988f02-0efb-4843-00f7-bbec71c9362d"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".capital-img-box._03","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","898562cb-8a80-4444-4da3-7480798020e1"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-21-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".capital-img-box._01","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","909a2ca8-e95a-6b84-07a8-3d0967792df7"]},"xValue":null,"yValue":-25,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".capital-img-box._03","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","898562cb-8a80-4444-4da3-7480798020e1"]},"xValue":null,"yValue":-25,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"","duration":2000,"target":{"selector":".capital-img-box._02","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","e8988f02-0efb-4843-00f7-bbec71c9362d"]},"xValue":null,"yValue":-15,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-21-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".capital-img-box._01","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","909a2ca8-e95a-6b84-07a8-3d0967792df7"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".capital-img-box._03","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","898562cb-8a80-4444-4da3-7480798020e1"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"","duration":2000,"target":{"selector":".capital-img-box._02","selectorGuids":["4ce02bf6-de8d-7f1b-7f57-7f6efed3ba5b","e8988f02-0efb-4843-00f7-bbec71c9362d"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682487616945}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Capitalsection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-instant_capital")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "capital-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "grid_component", "capital-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "grid_items")}
              id={_utils.cx(
                _styles,
                "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8b0-e3ade8ac"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "capital-title-wrap")}
                id={_utils.cx(
                  _styles,
                  "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8b1-e3ade8ac"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "text-size-large-90")}
                  tag="h2"
                >
                  {"Instant capital with rewards"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "grid_items")}
              id={_utils.cx(
                _styles,
                "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8b4-e3ade8ac"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "capital_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-regular-24")}
                  tag="div"
                >
                  {
                    "Get $5,000 - $50,000 in working capital instantly and keep your business growing."
                  }
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "capital_btn-wrap")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button", "arrow-tbn")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Apply now"}</_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "btn-arrow")}
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2073%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M72.7071%208.70711C73.0976%208.31659%2073.0976%207.68342%2072.7071%207.2929L66.3431%200.928938C65.9526%200.538414%2065.3195%200.538414%2064.9289%200.928938C64.5384%201.31946%2064.5384%201.95263%2064.9289%202.34315L70.5858%208.00001L64.9289%2013.6569C64.5384%2014.0474%2064.5384%2014.6805%2064.9289%2015.0711C65.3195%2015.4616%2065.9526%2015.4616%2066.3431%2015.0711L72.7071%208.70711ZM-8.74228e-08%209L72%209.00001L72%207.00001L8.74228e-08%207L-8.74228e-08%209Z%22%20fill%3D%22Currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "grid_items")}
              id={_utils.cx(
                _styles,
                "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8bd-e3ade8ac"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "grid_component",
                  "capital-image-grid"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_items")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8bf-e3ade8ac"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "capital-img-box", "_01")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "capital-image-holder",
                        "_01"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d292e3a405fe7_dollar-front-clay%20(1).png"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_items")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8c3-e3ade8ac"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "capital-img-box", "_02")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "capital-image-holder",
                        "_02"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29b409405fe8_dollar-front-clay%20(2).png"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_items")}
                  id={_utils.cx(
                    _styles,
                    "w-node-a092bd1f-9a55-6847-51f2-1ac0e3ade8c7-e3ade8ac"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "capital-img-box", "_03")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "capital-image-holder",
                        "_03"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29b681405fe9_dollar-front-clay%20(3).png"
                      />
                    </_Builtin.Block>
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
