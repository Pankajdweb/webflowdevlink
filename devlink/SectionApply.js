import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionApply.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682622998807},"e-70":{"id":"e-70","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-71"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f890","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f890","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682658035706},"e-72":{"id":"e-72","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-73"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f895","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f895","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682658052976},"e-74":{"id":"e-74","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f89a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f20fcc47-5316-15bf-cdc1-d22416f3f89a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682658068457}},"actionLists":{"a-22":{"id":"a-22","title":"Apply-cta[Moving Animation]","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".design-design-2","selectorGuids":["9bd8790f-25d7-001d-720a-1ad06d269306"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".design-design-3","selectorGuids":["329296a6-2467-d453-2a5c-dd53a4768139"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".design-design-4","selectorGuids":["3d03a878-bba7-6745-4fe4-8be948626fd2"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-22-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-2","selectorGuids":["9bd8790f-25d7-001d-720a-1ad06d269306"]},"yValue":-40,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-4","selectorGuids":["3d03a878-bba7-6745-4fe4-8be948626fd2"]},"xValue":100,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-22-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-3","selectorGuids":["329296a6-2467-d453-2a5c-dd53a4768139"]},"xValue":-100,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-22-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-2","selectorGuids":["9bd8790f-25d7-001d-720a-1ad06d269306"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-3","selectorGuids":["329296a6-2467-d453-2a5c-dd53a4768139"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":2000,"target":{"selector":".design-design-4","selectorGuids":["3d03a878-bba7-6745-4fe4-8be948626fd2"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682487616945},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionApply({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-instant_decision")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "decision-heading-wrap")}
          data-w-id="f20fcc47-5316-15bf-cdc1-d22416f3f890"
          tag="div"
        >
          <_Builtin.Heading tag="h2">
            {"Apply online"}
            <br />
            {"and get an instant decision"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "decision-btn-wrap")}
          data-w-id="f20fcc47-5316-15bf-cdc1-d22416f3f895"
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
        <_Builtin.Block
          className={_utils.cx(_styles, "position-relative")}
          data-w-id="f20fcc47-5316-15bf-cdc1-d22416f3f89a"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "decision-img-wrap")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d298617406015_d1.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "decision-design")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "design-design-1")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29d78140600f_d4.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "design-design-2")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2933c2406011_d2.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "design-design-3")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d29aa4140600d_d3.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "design-design-4")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d295970406010_d5.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "design-design-5")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d299dac40600e_Vector%20(3).png"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
