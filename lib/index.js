"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Bleed: () => Bleed,
  Box: () => Box,
  Column: () => Column,
  Columns: () => Columns,
  FloatBox: () => FloatBox,
  Grid: () => Grid,
  Hidden: () => Hidden,
  Inline: () => Inline,
  Inset: () => Inset,
  Row: () => Row,
  Rows: () => Rows,
  Stack: () => Stack,
  Tiles: () => Tiles,
  useBreakpointComparators: () => useBreakpointComparators,
  useDebugStyle: () => useDebugStyle,
  useResponsiveProp: () => useResponsiveProp,
  useSpacingHelpers: () => useSpacingHelpers
});
module.exports = __toCommonJS(index_exports);

// src/components/Bleed.tsx
var React7 = __toESM(require("react"));

// src/components/Box.tsx
var React6 = __toESM(require("react"));
var import_react_native = require("react-native");
var import_react_native_unistyles6 = require("react-native-unistyles");

// src/hooks/useSpacingHelpers.ts
var React3 = __toESM(require("react"));
var import_react_native_unistyles3 = require("react-native-unistyles");

// src/hooks/useResponsiveProp.ts
var React2 = __toESM(require("react"));
var import_react_native_unistyles2 = require("react-native-unistyles");

// src/utils.ts
var React = __toESM(require("react"));
var import_react_native_unistyles = require("react-native-unistyles");
var randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
var randomColor = () => {
  const colors = `${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
  return `rgba(${colors}, 0.2)`;
};
var flattenChildren = (children) => {
  return React.Children.toArray(children).reduce(
    (acc, child) => {
      if (React.isValidElement(child) && child.type === React.Fragment) {
        return acc.concat(flattenChildren(child.props.children));
      }
      acc.push(child);
      return acc;
    },
    []
  );
};
var normalizeResponsiveProp = (responsiveProp) => {
  if (typeof responsiveProp === "string" || typeof responsiveProp === "number" || typeof responsiveProp === "boolean") {
    return [responsiveProp];
  }
  if (responsiveProp && Array.isArray(responsiveProp) && responsiveProp.length) {
    return responsiveProp;
  }
  console.warn(`[Stacks] invalid responsive prop: ${JSON.stringify(responsiveProp)}`);
  return [];
};
function resolveResponsiveProp(responsiveProp, currentBreakpoint) {
  const breakpoints = getBreakpoints();
  if (responsiveProp !== void 0) {
    const normalizedResponsiveProp = normalizeResponsiveProp(responsiveProp);
    const defaultValue = normalizedResponsiveProp[0];
    if (normalizedResponsiveProp.length === 1) {
      return defaultValue;
    }
    const index = breakpoints.findIndex((breakpoint) => {
      return currentBreakpoint === breakpoint[0];
    });
    if (index > -1) {
      const lastIndex = breakpoints.length - 1;
      return normalizedResponsiveProp[lastIndex - index | 0] ?? normalizedResponsiveProp[normalizedResponsiveProp.length - 1];
    }
  }
  return void 0;
}
var resolveDirectionAndReverse = (direction, reversed) => {
  switch (true) {
    case (direction === "row" && reversed):
      return "row-reverse";
    case (direction === "row-reverse" && reversed):
      return "row";
    case (direction === "column" && reversed):
      return "column-reverse";
    case (direction === "column-reverse" && reversed):
      return "column";
    default:
      return direction;
  }
};
var negate = (value) => {
  if (typeof value === "number") {
    return value * -1;
  }
  if (value && Array.isArray(value)) {
    const l = value.length;
    const xs = new Array(l);
    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] * -1;
    }
    return xs;
  }
  return void 0;
};
var splitEvery = (xs, r) => {
  if (r < 1 || xs.length <= r) {
    return [xs];
  }
  let current = 0;
  const result = [];
  while (current < xs.length) {
    const index = current + r | 0;
    result.push(xs.slice(current, index));
    current = index;
  }
  return result;
};
var makeWithIndex = (r, mapFn) => {
  if (r <= 0) {
    return [];
  }
  const result = new Array(r);
  for (let i = 0; i < r; ++i) {
    result[i] = mapFn(i);
  }
  return result;
};
var reduceWithIndex = (arr, initialValue, fn) => {
  let e = initialValue;
  for (let t = 0, v = arr.length; t < v; ++t) {
    e = fn(e, arr[t], t);
  }
  return e;
};
var intersperse = (arr, delimiter) => {
  return reduceWithIndex(arr, [], function(acc, element, index) {
    if ((arr.length - 1 | 0) === index) {
      acc.push(element);
    } else {
      acc.push(element, delimiter);
    }
    return acc;
  });
};
var getBreakpoints = () => {
  return Object.entries(import_react_native_unistyles.UnistylesRuntime.breakpoints).sort((a, b) => {
    return b[1] - a[1] | 0;
  });
};
var compareBreakpoints = (mapFn) => {
  return (currentBreakpoint, breakpoint) => {
    if (breakpoint) {
      const breakpoints = getBreakpoints();
      const currentBreakpointIndex = breakpoints.findIndex((value) => {
        return value[0] === currentBreakpoint;
      });
      if (currentBreakpointIndex > -1) {
        const boundBreakpointIndex = breakpoints.findIndex((value) => {
          return value[0] === breakpoint;
        });
        if (boundBreakpointIndex > -1) {
          return mapFn(currentBreakpointIndex, boundBreakpointIndex);
        }
      }
    }
    return false;
  };
};
var isBreakpointBelow = compareBreakpoints(
  (currentBreakpointIndex, boundBreakpointIndex) => {
    return currentBreakpointIndex > boundBreakpointIndex;
  }
);
var isBreakpointAbove = compareBreakpoints(
  (currentBreakpointIndex, boundBreakpointIndex) => {
    return currentBreakpointIndex < boundBreakpointIndex;
  }
);

// src/hooks/useResponsiveProp.ts
var useResponsiveProp = () => {
  const { rt } = (0, import_react_native_unistyles2.useUnistyles)();
  return React2.useCallback(
    (value) => {
      return resolveResponsiveProp(value, rt.breakpoint);
    },
    [rt.breakpoint]
  );
};

// src/hooks/useSpacingHelpers.ts
var useSpacingHelpers = () => {
  const { theme } = (0, import_react_native_unistyles3.useUnistyles)();
  const resolveResponsiveProp2 = useResponsiveProp();
  const spacing = resolveResponsiveProp2(theme?.stacks?.spacing ?? 4);
  const multiply = React3.useCallback(
    (value) => {
      if (typeof value !== "undefined") {
        return value * spacing;
      }
      return void 0;
    },
    [spacing]
  );
  const divide = React3.useCallback(
    (value) => {
      if (typeof value !== "undefined") {
        return value / spacing;
      }
      return void 0;
    },
    [spacing]
  );
  return {
    multiply,
    divide
  };
};

// src/hooks/useDebugStyle.ts
var React4 = __toESM(require("react"));
var import_react_native_unistyles4 = require("react-native-unistyles");
var useDebugStyle = () => {
  const { theme } = (0, import_react_native_unistyles4.useUnistyles)();
  const backgroundColor = React4.useRef(randomColor()).current;
  const debug = theme?.stacks?.debug;
  const style = React4.useRef(debug ? { backgroundColor } : void 0);
  React4.useEffect(() => {
    style.current = debug ? {
      backgroundColor
    } : void 0;
  }, [debug]);
  return style.current;
};

// src/hooks/useBreakpointComparators.ts
var React5 = __toESM(require("react"));
var import_react_native_unistyles5 = require("react-native-unistyles");
var useBreakpointComparators = () => {
  const { rt } = (0, import_react_native_unistyles5.useUnistyles)();
  const currentBreakpoint = rt.breakpoint;
  const isBelow = React5.useCallback(
    (breakpoint) => {
      return isBreakpointBelow(currentBreakpoint, breakpoint);
    },
    [currentBreakpoint]
  );
  const isAbove = React5.useCallback(
    (breakpoint) => {
      return isBreakpointAbove(currentBreakpoint, breakpoint);
    },
    [currentBreakpoint]
  );
  return { isBelow, isAbove };
};

// src/components/Box.tsx
var Box = React6.forwardRef((props, ref) => {
  const {
    children,
    as: Component = import_react_native.View,
    alignX,
    alignY,
    gap,
    rowGap,
    columnGap,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingEnd,
    paddingStart,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    direction = "column",
    wrap,
    flex,
    reverse,
    backgroundColor,
    width,
    height,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    style,
    debuggable = true,
    outlineColor,
    outlineWidth,
    outlineStyle,
    outlineOffset,
    opacity,
    pointerEvents,
    overflow,
    ...rest
  } = props;
  const { multiply } = useSpacingHelpers();
  const debugStyle = useDebugStyle();
  const resolveResponsiveProp2 = useResponsiveProp();
  const reversed = resolveResponsiveProp2(reverse);
  const flexDirection = resolveDirectionAndReverse(resolveResponsiveProp2(direction), reversed);
  const isDirectionColumn = flexDirection === "column" || flexDirection === "column-reverse";
  const alignItems = resolveResponsiveProp2(isDirectionColumn ? alignX : alignY);
  const justifyContent = resolveResponsiveProp2(isDirectionColumn ? alignY : alignX);
  const defaultWidth = resolveResponsiveProp2(width);
  const defaultHeight = resolveResponsiveProp2(height);
  const defaultOutlineStyle = resolveResponsiveProp2(outlineStyle);
  const defaultPointerEvents = resolveResponsiveProp2(pointerEvents);
  const defaultOverflow = resolveResponsiveProp2(overflow);
  const isDebuggable = resolveResponsiveProp2(debuggable);
  const flexWrap = resolveResponsiveProp2(wrap);
  const flexBasis = resolveResponsiveProp2(
    isDirectionColumn ? typeof defaultHeight === "undefined" ? flex : "content" : typeof defaultWidth === "undefined" ? flex : "content"
  );
  const variantStyles = styles.useVariants({
    justifyContent,
    alignItems,
    flexBasis,
    flexWrap,
    flexDirection,
    outlineStyle: defaultOutlineStyle,
    pointerEvents: defaultPointerEvents,
    overflow: defaultOverflow
  });
  return /* @__PURE__ */ React6.createElement(
    Component,
    {
      ...rest,
      ref,
      style: [
        variantStyles.root,
        {
          gap: multiply(resolveResponsiveProp2(gap)),
          rowGap: multiply(resolveResponsiveProp2(rowGap)),
          columnGap: multiply(resolveResponsiveProp2(columnGap)),
          padding: multiply(resolveResponsiveProp2(padding)),
          paddingHorizontal: multiply(resolveResponsiveProp2(paddingX)),
          paddingVertical: multiply(resolveResponsiveProp2(paddingY)),
          paddingTop: multiply(resolveResponsiveProp2(paddingTop)),
          paddingBottom: multiply(resolveResponsiveProp2(paddingBottom)),
          paddingLeft: multiply(resolveResponsiveProp2(paddingLeft)),
          paddingRight: multiply(resolveResponsiveProp2(paddingRight)),
          paddingEnd: multiply(resolveResponsiveProp2(paddingEnd)),
          paddingStart: multiply(resolveResponsiveProp2(paddingStart)),
          margin: multiply(resolveResponsiveProp2(margin)),
          marginHorizontal: multiply(resolveResponsiveProp2(marginX)),
          marginVertical: multiply(resolveResponsiveProp2(marginY)),
          marginTop: multiply(resolveResponsiveProp2(marginTop)),
          marginBottom: multiply(resolveResponsiveProp2(marginBottom)),
          marginLeft: multiply(resolveResponsiveProp2(marginLeft)),
          marginRight: multiply(resolveResponsiveProp2(marginRight)),
          marginEnd: multiply(resolveResponsiveProp2(marginEnd)),
          marginStart: multiply(resolveResponsiveProp2(marginStart)),
          backgroundColor: resolveResponsiveProp2(backgroundColor),
          width: defaultWidth,
          height: defaultHeight,
          borderRadius: resolveResponsiveProp2(borderRadius),
          borderTopLeftRadius: resolveResponsiveProp2(borderTopLeftRadius),
          borderTopRightRadius: resolveResponsiveProp2(borderTopRightRadius),
          borderBottomLeftRadius: resolveResponsiveProp2(borderBottomLeftRadius),
          borderBottomRightRadius: resolveResponsiveProp2(borderBottomRightRadius),
          borderWidth: resolveResponsiveProp2(borderWidth),
          borderTopWidth: resolveResponsiveProp2(borderTopWidth),
          borderRightWidth: resolveResponsiveProp2(borderRightWidth),
          borderBottomWidth: resolveResponsiveProp2(borderBottomWidth),
          borderLeftWidth: resolveResponsiveProp2(borderLeftWidth),
          borderColor: resolveResponsiveProp2(borderColor),
          outlineColor: resolveResponsiveProp2(outlineColor),
          outlineOffset: resolveResponsiveProp2(outlineOffset),
          outlineWidth: resolveResponsiveProp2(outlineWidth),
          opacity: resolveResponsiveProp2(opacity)
        },
        isDebuggable && debugStyle,
        style
      ]
    },
    children
  );
});
Box.displayName = "Box";
var styles = import_react_native_unistyles6.StyleSheet.create({
  root: {
    variants: {
      alignItems: {
        left: {
          alignItems: "flex-start"
        },
        center: {
          alignItems: "center"
        },
        right: {
          alignItems: "flex-end"
        },
        stretch: {
          alignItems: "stretch"
        },
        top: {
          alignItems: "flex-start"
        },
        bottom: {
          alignItems: "flex-end"
        },
        between: void 0,
        around: void 0,
        evenly: void 0
      },
      justifyContent: {
        top: {
          justifyContent: "flex-start"
        },
        center: {
          justifyContent: "center"
        },
        bottom: {
          justifyContent: "flex-end"
        },
        stretch: void 0,
        left: {
          justifyContent: "flex-start"
        },
        right: {
          justifyContent: "flex-end"
        },
        between: {
          justifyContent: "space-between"
        },
        around: {
          justifyContent: "space-around"
        },
        evenly: {
          justifyContent: "space-evenly"
        }
      },
      flexDirection: {
        row: {
          flexDirection: "row"
        },
        ["row-reverse"]: {
          flexDirection: "row-reverse"
        },
        column: {
          flexDirection: "column"
        },
        ["column-reverse"]: {
          flexDirection: "column-reverse"
        }
      },
      flexWrap: {
        wrap: {
          flexWrap: "wrap"
        },
        ["no-wrap"]: {
          flexWrap: "nowrap"
        },
        ["wrap-reverse"]: {
          flexWrap: "wrap-reverse"
        }
      },
      pointerEvents: {
        auto: {
          pointerEvents: "auto"
        },
        "box-none": {
          pointerEvents: "box-none"
        },
        "box-only": {
          pointerEvents: "box-only"
        },
        none: {
          pointerEvents: "none"
        }
      },
      overflow: {
        visible: {
          overflow: "visible"
        },
        hidden: {
          overflow: "hidden"
        }
      },
      outlineStyle: {
        solid: {
          outlineStyle: "solid"
        },
        dotted: {
          outlineStyle: "dotted"
        },
        dashed: {
          outlineStyle: "dashed"
        }
      },
      flexBasis: {
        content: {
          flex: 0,
          flexBasis: "auto"
        },
        fluid: {
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: "0%"
        },
        ["1/2"]: {
          flexBasis: "50%"
        },
        ["1/3"]: {
          flexBasis: "33.3333%"
        },
        ["1/4"]: {
          flexBasis: "25%"
        },
        ["2/3"]: {
          flexBasis: "66.6667%"
        },
        ["3/4"]: {
          flexBasis: "75%"
        },
        ["1/5"]: {
          flexBasis: "20%"
        },
        ["2/5"]: {
          flexBasis: "40%"
        },
        ["3/5"]: {
          flexBasis: "60%"
        },
        ["4/5"]: {
          flexBasis: "80%"
        }
      }
    }
  }
});

// src/components/Bleed.tsx
var Bleed = (props) => {
  const { children, space, horizontal, vertical, start, end, top, right, bottom, left, ...rest } = props;
  return /* @__PURE__ */ React7.createElement(
    Box,
    {
      ...rest,
      margin: negate(space),
      marginX: negate(horizontal),
      marginY: negate(vertical),
      marginStart: negate(start),
      marginEnd: negate(end),
      marginTop: negate(top),
      marginRight: negate(right),
      marginBottom: negate(bottom),
      marginLeft: negate(left)
    },
    children
  );
};
Bleed.displayName = "Bleed";

// src/components/Column.tsx
var Column = (_props) => {
  throw new Error("[Stacks] Column must be a direct child of Columns.");
};
var markAsColumn = (node) => {
  node.__isColumn__ = true;
};
var from = (Component) => {
  Component.__isColumnForwarded__ = true;
  return Component;
};
Column.from = from;
Column.displayName = "Column";
markAsColumn(Column);

// src/components/Columns.tsx
var React8 = __toESM(require("react"));
var import_react_native2 = require("react-native");
var getColumnProps = (node) => {
  return node !== void 0 && node !== null && typeof node === "object" && "type" in node && // @ts-expect-error: this_is_fine.png
  node.type.__isColumn__ ? node.props : null;
};
var isColumnForwarded = (node) => {
  return node !== void 0 && node !== null && typeof node === "object" && "type" in node && // @ts-expect-error: this_is_fine.png
  node.type.__isColumnForwarded__ && React8.isValidElement(node);
};
var resolveBleedOrInset = (values, space) => {
  const value = values.find((value2) => {
    return typeof value2 !== "undefined";
  });
  const isSpaceArray = space && Array.isArray(space);
  const isSpaceNumber = typeof space === "number";
  const isValueArray = value && Array.isArray(value);
  const isValueNumber = typeof value === "number";
  if (isSpaceNumber && isValueNumber) {
    return space + value;
  }
  if (isSpaceNumber && isValueArray) {
    const l = value.length;
    const xs = new Array(l);
    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] + space;
    }
    return xs;
  }
  if (isSpaceArray && isValueArray) {
    const l = value.length;
    const xs = new Array(l);
    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] + (space[i] ?? 0);
    }
    return xs;
  }
  return space;
};
var PrivateColumn = (props) => {
  const {
    children,
    flex,
    padding,
    paddingRight,
    paddingEnd,
    paddingX,
    width,
    gap,
    defaultFlex,
    ...rest
  } = props;
  const inset = React8.useMemo(() => {
    return resolveBleedOrInset([padding, paddingX, paddingRight, paddingEnd], gap);
  }, [padding, paddingX, paddingRight, paddingEnd, gap]);
  return /* @__PURE__ */ React8.createElement(
    Box,
    {
      ...rest,
      width,
      flex: width ? void 0 : flex ?? defaultFlex,
      padding,
      paddingX,
      paddingRight,
      paddingEnd: inset,
      debuggable: false
    },
    children
  );
};
var Columns = (props) => {
  const {
    children,
    space = 0,
    defaultFlex = "fluid",
    alignX,
    reverse,
    collapseBelow,
    margin,
    marginLeft,
    marginRight,
    marginX,
    marginStart,
    marginEnd,
    ...rest
  } = props;
  const breakpoint = useBreakpointComparators();
  const resolveResponsiveProp2 = useResponsiveProp();
  const isCollapsed = breakpoint.isBelow(collapseBelow);
  const direction = isCollapsed ? "column" : "row";
  const isReversed = resolveResponsiveProp2(reverse);
  const isWeb = import_react_native2.Platform.OS === "web";
  const negativeSpace = isCollapsed ? void 0 : negate(space);
  const bleedStart = React8.useMemo(() => {
    return resolveBleedOrInset(
      [margin, marginX, marginLeft, marginStart],
      isReversed && !isWeb ? negativeSpace : void 0
    );
  }, [isReversed, isWeb, space, margin, marginX, marginLeft, marginStart]);
  const bleedEnd = React8.useMemo(() => {
    return resolveBleedOrInset(
      [margin, marginX, marginRight, marginEnd],
      isReversed && !isWeb ? void 0 : negativeSpace
    );
  }, [isReversed, isWeb, space, margin, marginX, marginRight, marginEnd]);
  const gap = isCollapsed ? void 0 : space;
  return /* @__PURE__ */ React8.createElement(
    Box,
    {
      ...rest,
      direction,
      rowGap: isCollapsed ? space : void 0,
      alignX,
      reverse: isReversed,
      margin,
      marginX,
      marginLeft,
      marginRight,
      marginStart: bleedStart,
      marginEnd: bleedEnd,
      debuggable: false
    },
    React8.Children.map(flattenChildren(children), (child) => {
      if (isColumnForwarded(child)) {
        return /* @__PURE__ */ React8.createElement(PrivateColumn, { ...child.props, gap, defaultFlex });
      }
      const props2 = getColumnProps(child);
      if (props2) {
        return /* @__PURE__ */ React8.createElement(PrivateColumn, { ...props2, gap, defaultFlex });
      }
      return /* @__PURE__ */ React8.createElement(Box, { flex: defaultFlex, paddingEnd: gap, debuggable: false }, child);
    })
  );
};
Columns.displayName = "Columns";

// src/components/FloatBox.tsx
var React9 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var FloatBox = (props) => {
  const { children, top, right, bottom, left, offset, style, ...rest } = props;
  const resolveResponsiveProp2 = useResponsiveProp();
  const all = resolveResponsiveProp2(offset);
  const edges = {
    top,
    right,
    bottom,
    left
  };
  const fillObject = Object.fromEntries(
    Object.entries(edges).map(([key, value]) => {
      return [key, key in props ? resolveResponsiveProp2(value) : all ?? void 0];
    })
  );
  return /* @__PURE__ */ React9.createElement(Box, { ...rest, style: [import_react_native3.StyleSheet.absoluteFill, fillObject, style] }, children);
};
FloatBox.displayName = "FloatBox";

// src/components/Grid.tsx
var React10 = __toESM(require("react"));
var import_react_native4 = require("react-native");
var import_react_native_unistyles7 = require("react-native-unistyles");
var calculateColumnWidth = (options) => {
  const { columns } = options;
  const gutterCount = columns - 1;
  return (options.width - options.margin * 2 - gutterCount * options.gutter) / columns;
};
var calculateGridWidth = (options) => {
  const { columns } = options;
  const gutterCount = columns - 1;
  return options.width * columns + gutterCount * options.gutter + options.margin * 2;
};
var Grid = (props) => {
  const { gutter = 2, margin = 2, opacity = 0.2, columns = 8, color = "red" } = props;
  const { multiply } = useSpacingHelpers();
  const resolveResponsiveProp2 = useResponsiveProp();
  const numberOfColumns = resolveResponsiveProp2(columns);
  const defaultOpacity = resolveResponsiveProp2(opacity);
  const backgroundColor = resolveResponsiveProp2(color);
  const options = {
    width: import_react_native_unistyles7.UnistylesRuntime.screen.width,
    columns: numberOfColumns,
    margin: multiply(resolveResponsiveProp2(margin)),
    gutter: multiply(resolveResponsiveProp2(gutter))
  };
  const columnWidth = calculateColumnWidth(options);
  const gridWidth = calculateGridWidth({
    ...options,
    width: columnWidth
  });
  const columnStyle = { opacity: defaultOpacity, backgroundColor };
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(
    FloatBox,
    {
      offset: 0,
      paddingX: margin,
      direction: "row",
      alignX: "center",
      gap: gutter,
      style: styles2.root
    },
    makeWithIndex(numberOfColumns, (index) => {
      return /* @__PURE__ */ React10.createElement(Box, { key: index, style: columnStyle, flex: "fluid" });
    })
  ), gridWidth !== import_react_native_unistyles7.UnistylesRuntime.screen.width ? /* @__PURE__ */ React10.createElement(FloatBox, { padding: 2, right: 16, bottom: 32, backgroundColor: "red", borderRadius: 4 }, /* @__PURE__ */ React10.createElement(
    import_react_native4.Text,
    {
      style: styles2.text
    },
    `Calculated grid width (${gridWidth}) doesn't equal to the window width (${import_react_native_unistyles7.UnistylesRuntime.screen.width}). Please, adjust \`Grid\` options.`
  )) : null);
};
Grid.displayName = "Grid";
var styles2 = import_react_native_unistyles7.StyleSheet.create({
  root: {
    pointerEvents: "none"
  },
  // eslint-disable-next-line react-native/no-color-literals
  text: {
    color: "white",
    fontFamily: import_react_native4.Platform.OS === "android" ? "monospace" : import_react_native4.Platform.OS === "ios" ? "Menlo" : "sans-serif"
  }
});

// src/components/Hidden.tsx
var Hidden = (_props) => {
  throw new Error(
    "[Stacks] Logical expression for the `Hidden` component could not be handled. Open a new issue and provide reproduction code."
  );
};

// src/components/Inline.tsx
var React11 = __toESM(require("react"));
var Inline = (props) => {
  const { space, children, spaceX, spaceY, alignX, alignY, collapseBelow, ...rest } = props;
  const breakpoint = useBreakpointComparators();
  const isCollapsed = breakpoint.isBelow(collapseBelow);
  const direction = isCollapsed ? "column" : "row";
  const wrap = isCollapsed ? "no-wrap" : "wrap";
  return /* @__PURE__ */ React11.createElement(
    Box,
    {
      ...rest,
      direction,
      wrap,
      gap: space,
      rowGap: spaceY,
      columnGap: spaceX,
      alignX,
      alignY
    },
    children
  );
};
Inline.displayName = "Inline";

// src/components/Inset.tsx
var React12 = __toESM(require("react"));
var Inset = (props) => {
  const { children, space, horizontal, vertical, start, end, top, right, bottom, left, ...rest } = props;
  return /* @__PURE__ */ React12.createElement(
    Box,
    {
      ...rest,
      padding: space,
      paddingX: horizontal,
      paddingY: vertical,
      paddingStart: start,
      paddingEnd: end,
      paddingTop: top,
      paddingRight: right,
      paddingBottom: bottom,
      paddingLeft: left
    },
    children
  );
};
Inset.displayName = "Inset";

// src/components/Rows.tsx
var React13 = __toESM(require("react"));
var getRowProps = (node) => {
  return node !== void 0 && node !== null && typeof node === "object" && "type" in node && // @ts-expect-error: this is ok
  node.type.__isRow__ ? node.props : null;
};
var isRowForwarded = (node) => {
  return node !== void 0 && node !== null && typeof node === "object" && "type" in node && // @ts-expect-error: this is ok
  node.type.__isRowForwarded__ && React13.isValidElement(node);
};
var Rows = (props) => {
  const { children, space, defaultFlex = "fluid", ...rest } = props;
  return /* @__PURE__ */ React13.createElement(Box, { ...rest, flex: "fluid", direction: "column", gap: space }, React13.Children.map(flattenChildren(children), (child) => {
    if (isRowForwarded(child)) {
      return React13.cloneElement(
        child,
        { ...child.props, flex: child.props.flex ?? defaultFlex },
        child.props.children
      );
    }
    const props2 = getRowProps(child);
    if (props2) {
      const { children: children2, flex, ...rest2 } = props2;
      return /* @__PURE__ */ React13.createElement(Box, { ...rest2, flex: flex ?? defaultFlex }, children2);
    }
    return /* @__PURE__ */ React13.createElement(Box, { flex: defaultFlex }, child);
  }));
};
Rows.displayName = "Rows";

// src/components/Row.tsx
var Row = (_props) => {
  throw new Error("[Stacks] Row must be a direct child of Rows.");
};
var markAsRow = (node) => {
  node.__isRow__ = true;
};
var from2 = (Component) => {
  Component.__isRowForwarded__ = true;
  return Component;
};
Row.from = from2;
Row.displayName = "Row";
markAsRow(Row);

// src/components/Stack.tsx
var React14 = __toESM(require("react"));
var Stack = (props) => {
  const { children, flex = "content", space, horizontal, align, divider, ...rest } = props;
  const resolveResponsiveProp2 = useResponsiveProp();
  const isHorizontal = resolveResponsiveProp2(horizontal);
  const direction = isHorizontal ? "row" : "column";
  const alignY = isHorizontal ? align : void 0;
  const alignX = isHorizontal ? void 0 : align;
  return /* @__PURE__ */ React14.createElement(Box, { ...rest, flex, direction, gap: space, alignX, alignY }, React14.isValidElement(divider) ? flattenChildren(intersperse(React14.Children.toArray(children), divider)) : children);
};
Stack.displayName = "Stack";

// src/components/Tiles.tsx
var React15 = __toESM(require("react"));
var Tiles = (props) => {
  const { children, columns = 1, space, spaceX, spaceY, fill = false, reverse, ...rest } = props;
  const resolveResponsiveProp2 = useResponsiveProp();
  const numberOfColumns = Math.max(resolveResponsiveProp2(columns), 1);
  const shouldFill = resolveResponsiveProp2(fill);
  const rows = splitEvery(React15.Children.toArray(children), numberOfColumns);
  return /* @__PURE__ */ React15.createElement(Box, { ...rest, direction: "column", gap: space, rowGap: spaceY }, rows.map((columns2, rowIndex) => {
    const elements = makeWithIndex(numberOfColumns, (index) => {
      return columns2[index] ?? null;
    });
    return /* @__PURE__ */ React15.createElement(Box, { key: rowIndex, direction: "row", gap: space, columnGap: spaceX, reverse }, elements.map((element, columnIndex) => {
      return React15.isValidElement(element) || !shouldFill ? /* @__PURE__ */ React15.createElement(Box, { key: `${rowIndex}-${columnIndex}`, flex: "fluid" }, element) : null;
    }));
  }));
};
Tiles.displayName = "Tiles";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Bleed,
  Box,
  Column,
  Columns,
  FloatBox,
  Grid,
  Hidden,
  Inline,
  Inset,
  Row,
  Rows,
  Stack,
  Tiles,
  useBreakpointComparators,
  useDebugStyle,
  useResponsiveProp,
  useSpacingHelpers
});
