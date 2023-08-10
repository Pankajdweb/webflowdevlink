import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavbarComponent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682354112957},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682388963577},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682388963577},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389107285},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389107285},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389135318},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389135318},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389156615},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389156615},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389182485},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1682389182485}},"actionLists":{"a-5":{"id":"a-5","title":"Page-navbar-load","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c0"},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-5-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c0"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c0"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-5-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"f7ed6fef-aa98-5562-b40f-684ae9f798c0"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682354117185},"a-10":{"id":"a-10","title":"Nav-Menu [Hover-In]","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navhover-underline","selectorGuids":["871a5a56-1a8b-4ada-da0f-f71ca6f14c1f"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navhover-underline","selectorGuids":["871a5a56-1a8b-4ada-da0f-f71ca6f14c1f"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1682388966982},"a-11":{"id":"a-11","title":"Nav-Menu [Hover-In]","actionItemGroups":[{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navhover-underline","selectorGuids":["871a5a56-1a8b-4ada-da0f-f71ca6f14c1f"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1682388966982}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavbarComponent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar-wrapper")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar_component")}
        data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798c0"
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-logo-wrap")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "nav-logo_holder")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d296c2f406031_mainlogo.svg"
              />
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav_menu-wrap")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-4")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link")}
                data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798c7"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"How It Works"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navhover-underline")}
                  tag="div"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link")}
                data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798cb"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Rewards"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navhover-underline")}
                  tag="div"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link")}
                data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798cf"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Requirements"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navhover-underline")}
                  tag="div"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link")}
                data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798d3"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"For Communities"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navhover-underline")}
                  tag="div"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link")}
                data-w-id="f7ed6fef-aa98-5562-b40f-684ae9f798d7"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Contact Us"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navhover-underline")}
                  tag="div"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "close-mebu-btn")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644fc70a829d292116405fd6/644fc70a829d2937b740602e_close.png"
              />
            </_Builtin.NavbarButton>
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_btn-holder")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "nav_login-btn")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Login"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "nav_apply-btn")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Apply now"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "icon")}
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
