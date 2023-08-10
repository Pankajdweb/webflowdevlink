import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionHelp.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq_question-wrap","originalId":"1c9d491d-5745-4393-cd39-8183641b1fff","appliesTo":"CLASS"},"targets":[{"selector":".faq_question-wrap","originalId":"1c9d491d-5745-4393-cd39-8183641b1fff","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682407413017},"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq_question-wrap","originalId":"1c9d491d-5745-4393-cd39-8183641b1fff","appliesTo":"CLASS"},"targets":[{"selector":".faq_question-wrap","originalId":"1c9d491d-5745-4393-cd39-8183641b1fff","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682407413018},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1c9d491d-5745-4393-cd39-8183641b1fee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1c9d491d-5745-4393-cd39-8183641b1fee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682407595999},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1c9d491d-5745-4393-cd39-8183641b1ffa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1c9d491d-5745-4393-cd39-8183641b1ffa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682407611073},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq_accordion-item","originalId":"1c9d491d-5745-4393-cd39-8183641b1ffe","appliesTo":"CLASS"},"targets":[{"selector":".faq_accordion-item","originalId":"1c9d491d-5745-4393-cd39-8183641b1ffe","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682407626927},"e-53":{"id":"e-53","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1c9d491d-5745-4393-cd39-8183641b1fea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1c9d491d-5745-4393-cd39-8183641b1fea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1682407674308}},"actionLists":{"a-15":{"id":"a-15","title":"FAQ Accordion [Open]","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["3830e9f0-68d2-22b6-0a3c-affd6564a1e6"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-15-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".plus-embed","selectorGuids":["29fdd739-c578-09b1-1270-4d107c0fe65a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-15-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["3830e9f0-68d2-22b6-0a3c-affd6564a1e6"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".plus-embed","selectorGuids":["29fdd739-c578-09b1-1270-4d107c0fe65a"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682398057754},"a-16":{"id":"a-16","title":"FAQ Accordion [Close]","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq_answer","selectorGuids":["3830e9f0-68d2-22b6-0a3c-affd6564a1e6"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-16-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".plus-embed","selectorGuids":["29fdd739-c578-09b1-1270-4d107c0fe65a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682398057754},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionHelp({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-faq")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "faq-heading-wrap")}
          data-w-id="1c9d491d-5745-4393-cd39-8183641b1fea"
          tag="div"
        >
          <_Builtin.Heading tag="h2">{"We’re here to help"}</_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "faqs-flex")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "faq-left-content")}
            data-w-id="1c9d491d-5745-4393-cd39-8183641b1fee"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "query-heading")}
              tag="h3"
            >
              {"Get in touch"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "query-details")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-size-regular-24")}
                tag="div"
              >
                {"For any questions or assistance."}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "contact-no-holder")}
                button={false}
                options={{
                  href: "tel:(617)249-3444",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-regular-24")}
                  tag="div"
                >
                  {"(617) 249-3444"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "gmail")}
                button={false}
                options={{
                  href: "mailto:hello@getloot.com",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-regular-24")}
                  tag="div"
                >
                  {"hello@getloot.com"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "faq-right-content")}
            data-w-id="1c9d491d-5745-4393-cd39-8183641b1ffa"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "query-heading")}
              tag="h3"
            >
              {"Frequently asked"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {
                      "How much capital can I get towards paying bills with Loot?"
                    }
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"How fast is the capital available?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Do I get the capital directly?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Does this go on my personal credit report?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Is it okay if I have other debts?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Are there any extra charges or hidden fees?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Will you look at my personal credit?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Do you offer support?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Is Loot a direct financing company?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq_accordion-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_question-wrap")}
                  tag="div"
                  data-click="faq"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-regular-24")}
                    tag="div"
                  >
                    {"Where is Loot located?"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plus-embed")}
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.2%207.92H0.0480001V5.68H5.2V0.495998H7.6V5.68H12.784V7.92H7.6V13.104H5.2V7.92Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq_answer")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "answer-inner-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-size-regular-18")}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                      }
                    </_Builtin.Paragraph>
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
