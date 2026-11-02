import * as React from 'react';
import { View, ViewProps, ColorValue, DimensionValue, ViewStyle } from 'react-native';
import { UnistylesBreakpoints } from 'react-native-unistyles';

type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;
type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, OwnProps & {
    readonly as?: E;
}>>;
interface ForwardRefComponent<DefaultComponentType, OwnProps = {}> extends ForwardRefExoticComponent<DefaultComponentType, OwnProps> {
    /**
     * When `as` prop is passed, use this overload.
     * Merges original own props (without DOM props) and the inferred props
     * from `as` element with the own props taking precendence.
     *
     * We explicitly avoid `React.ElementType` and manually narrow the prop types
     * so that events are typed when using JSX.IntrinsicElements.
     */
    <As = DefaultComponentType>(props: As extends React.ComponentType<infer P> ? Merge<P, OwnProps & {
        readonly as: As;
    }> : never): React.ReactElement | null;
}

interface StacksBreakpoints {
}
type Breakpoint = keyof StacksBreakpoints | keyof UnistylesBreakpoints;
type AxisX = 'left' | 'center' | 'right';
type AxisY = 'top' | 'center' | 'bottom';
type Stretch = 'stretch';
type Space = 'between' | 'around' | 'evenly';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'wrap' | 'no-wrap' | 'wrap-reverse';
type OutlineStyle = 'solid' | 'dotted' | 'dashed';
type PointerEvent = 'auto' | 'box-none' | 'box-only' | 'none';
type Overflow = 'visible' | 'hidden';
type Flex = 'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5';
type ResponsiveProp<T> = T | readonly T[];

type BoxProps$8 = Omit<ViewProps, 'pointerEvents'> & {
    readonly alignX?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
    readonly alignY?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
    readonly gap?: ResponsiveProp<number>;
    readonly rowGap?: ResponsiveProp<number>;
    readonly columnGap?: ResponsiveProp<number>;
    readonly padding?: ResponsiveProp<number>;
    readonly paddingX?: ResponsiveProp<number>;
    readonly paddingY?: ResponsiveProp<number>;
    readonly paddingTop?: ResponsiveProp<number>;
    readonly paddingBottom?: ResponsiveProp<number>;
    readonly paddingLeft?: ResponsiveProp<number>;
    readonly paddingRight?: ResponsiveProp<number>;
    readonly paddingEnd?: ResponsiveProp<number>;
    readonly paddingStart?: ResponsiveProp<number>;
    readonly margin?: ResponsiveProp<number>;
    readonly marginX?: ResponsiveProp<number>;
    readonly marginY?: ResponsiveProp<number>;
    readonly marginTop?: ResponsiveProp<number>;
    readonly marginBottom?: ResponsiveProp<number>;
    readonly marginLeft?: ResponsiveProp<number>;
    readonly marginRight?: ResponsiveProp<number>;
    readonly marginStart?: ResponsiveProp<number>;
    readonly marginEnd?: ResponsiveProp<number>;
    readonly direction?: ResponsiveProp<Direction>;
    readonly wrap?: ResponsiveProp<Wrap>;
    readonly flex?: ResponsiveProp<Flex>;
    readonly reverse?: ResponsiveProp<boolean>;
    readonly backgroundColor?: ResponsiveProp<ColorValue>;
    readonly borderRadius?: ResponsiveProp<number>;
    readonly borderTopLeftRadius?: ResponsiveProp<number>;
    readonly borderTopRightRadius?: ResponsiveProp<number>;
    readonly borderBottomLeftRadius?: ResponsiveProp<number>;
    readonly borderBottomRightRadius?: ResponsiveProp<number>;
    readonly borderWidth?: ResponsiveProp<number>;
    readonly borderTopWidth?: ResponsiveProp<number>;
    readonly borderRightWidth?: ResponsiveProp<number>;
    readonly borderBottomWidth?: ResponsiveProp<number>;
    readonly borderLeftWidth?: ResponsiveProp<number>;
    readonly borderColor?: ResponsiveProp<ColorValue>;
    readonly width?: ResponsiveProp<DimensionValue>;
    readonly height?: ResponsiveProp<DimensionValue>;
    readonly outlineColor?: ResponsiveProp<ColorValue>;
    readonly outlineStyle?: ResponsiveProp<OutlineStyle>;
    readonly outlineOffset?: ResponsiveProp<number>;
    readonly outlineWidth?: ResponsiveProp<number>;
    readonly opacity?: ResponsiveProp<number>;
    readonly pointerEvents?: ResponsiveProp<PointerEvent>;
    readonly overflow?: ResponsiveProp<Overflow>;
    readonly debuggable?: ResponsiveProp<boolean>;
};
type PolymorphicBox = ForwardRefComponent<typeof View, BoxProps$8>;
declare const Box: PolymorphicBox;

type BoxProps$7 = Omit<React.ComponentProps<typeof Box>, 'margin' | 'marginX' | 'marginY' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'marginStart' | 'marginEnd'>;
type BleedProps = BoxProps$7 & {
    readonly space?: ResponsiveProp<number>;
    readonly horizontal?: ResponsiveProp<number>;
    readonly vertical?: ResponsiveProp<number>;
    readonly top?: ResponsiveProp<number>;
    readonly right?: ResponsiveProp<number>;
    readonly bottom?: ResponsiveProp<number>;
    readonly left?: ResponsiveProp<number>;
    readonly start?: ResponsiveProp<number>;
    readonly end?: ResponsiveProp<number>;
};
declare const Bleed: {
    (props: BleedProps): React.JSX.Element;
    displayName: string;
};

type ColumnProps = Omit<BoxProps$8, 'backgroundColor' | 'borderRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderWidth' | 'borderTopWidth' | 'borderRightWidth' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderColor' | 'outlineColor' | 'outlineStyle' | 'outlineWidth' | 'outlineOffset'>;
declare const Column: {
    (_props: ColumnProps): JSX.Element;
    from: <T extends React.FC<any>>(Component: T) => T;
    displayName: string;
};

type BoxProps$6 = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'gap' | 'rowGap' | 'columnGap' | 'backgroundColor' | 'borderRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderWidth' | 'borderTopWidth' | 'borderRightWidth' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderColor' | 'outlineColor' | 'outlineStyle' | 'outlineWidth' | 'outlineOffset'>;
type ColumnsProps = BoxProps$6 & {
    readonly space?: ResponsiveProp<number>;
    readonly defaultFlex?: ResponsiveProp<Flex>;
    readonly alignX?: ResponsiveProp<AxisX | Space>;
    readonly alignY?: ResponsiveProp<AxisY>;
    readonly collapseBelow?: Breakpoint;
};
declare const Columns: {
    (props: ColumnsProps): React.JSX.Element;
    displayName: string;
};

type BoxProps$5 = React.ComponentProps<typeof Box>;
type FloatBoxProps = Omit<BoxProps$5, 'flex'> & {
    readonly top?: ResponsiveProp<DimensionValue>;
    readonly right?: ResponsiveProp<DimensionValue>;
    readonly bottom?: ResponsiveProp<DimensionValue>;
    readonly left?: ResponsiveProp<DimensionValue>;
    readonly offset?: ResponsiveProp<DimensionValue>;
};
declare const FloatBox: {
    (props: FloatBoxProps): React.JSX.Element;
    displayName: string;
};

type GridProps = {
    readonly gutter?: ResponsiveProp<number>;
    readonly margin?: ResponsiveProp<number>;
    readonly columns?: ResponsiveProp<number>;
    readonly opacity?: ResponsiveProp<number>;
    readonly color?: ResponsiveProp<string>;
};
declare const Grid: {
    (props: GridProps): React.JSX.Element;
    displayName: string;
};

type HiddenProps = React.PropsWithChildren<{
    readonly above?: Breakpoint;
    readonly below?: Breakpoint;
}>;
declare const Hidden: (_props: HiddenProps) => JSX.Element;

type BoxProps$4 = Omit<React.ComponentProps<typeof Box>, 'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY' | 'direction' | 'wrap'>;
type InlineProps = BoxProps$4 & {
    readonly space?: ResponsiveProp<number>;
    readonly spaceX?: ResponsiveProp<number>;
    readonly spaceY?: ResponsiveProp<number>;
    readonly alignX?: ResponsiveProp<AxisX | Space>;
    readonly alignY?: ResponsiveProp<AxisY>;
    readonly collapseBelow?: Breakpoint;
};
declare const Inline: {
    (props: InlineProps): React.JSX.Element;
    displayName: string;
};

type BoxProps$3 = Omit<React.ComponentProps<typeof Box>, 'padding' | 'paddingX' | 'paddingY' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft' | 'paddingStart' | 'paddingEnd'>;
type InsetProps = BoxProps$3 & {
    readonly space?: ResponsiveProp<number>;
    readonly horizontal?: ResponsiveProp<number>;
    readonly vertical?: ResponsiveProp<number>;
    readonly top?: ResponsiveProp<number>;
    readonly right?: ResponsiveProp<number>;
    readonly bottom?: ResponsiveProp<number>;
    readonly left?: ResponsiveProp<number>;
    readonly start?: ResponsiveProp<number>;
    readonly end?: ResponsiveProp<number>;
};
declare const Inset: {
    (props: InsetProps): React.JSX.Element;
    displayName: string;
};

declare const Row: {
    (_props: BoxProps$8): JSX.Element;
    from: <T extends React.FC<any>>(Component: T) => T;
    displayName: string;
};

type BoxProps$2 = Omit<React.ComponentProps<typeof Box>, 'direction' | 'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY'>;
type RowProps = React.ComponentProps<typeof Row>;
type RowsProps = BoxProps$2 & {
    readonly space?: ResponsiveProp<number>;
    readonly defaultFlex?: ResponsiveProp<Flex>;
    readonly alignX?: ResponsiveProp<AxisX>;
    readonly alignY?: ResponsiveProp<AxisY | Space>;
};
declare const Rows: {
    (props: RowsProps): React.JSX.Element;
    displayName: string;
};

type BoxProps$1 = Omit<React.ComponentProps<typeof Box>, 'direction' | 'alignX' | 'alignY' | 'rowGap' | 'columnGap'>;
type StackProps = BoxProps$1 & {
    readonly space?: ResponsiveProp<number>;
    readonly horizontal?: ResponsiveProp<boolean>;
    readonly align?: ResponsiveProp<AxisX | AxisY>;
    readonly divider?: React.ReactElement;
};
declare const Stack: {
    (props: StackProps): React.JSX.Element;
    displayName: string;
};

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'gap' | 'rowGap' | 'columnGap' | 'direction' | 'alignX' | 'alignY'>;
type TilesProps = BoxProps & {
    readonly columns?: ResponsiveProp<number>;
    readonly space?: ResponsiveProp<number>;
    readonly spaceX?: ResponsiveProp<number>;
    readonly spaceY?: ResponsiveProp<number>;
    readonly fill?: ResponsiveProp<boolean>;
    readonly alignY?: ResponsiveProp<AxisY | Space>;
};
declare const Tiles: {
    (props: TilesProps): React.JSX.Element;
    displayName: string;
};

type SpacingHelper = {
    (value: number): number;
    (value: number | undefined): number | undefined;
};
declare const useSpacingHelpers: () => {
    multiply: SpacingHelper;
    divide: SpacingHelper;
};

declare const useDebugStyle: () => ViewStyle | undefined;

declare const useBreakpointComparators: () => {
    isBelow: (breakpoint?: Breakpoint) => boolean;
    isAbove: (breakpoint?: Breakpoint) => boolean;
};

declare const useResponsiveProp: () => <T>(value: ResponsiveProp<T>) => T;

export { type AxisX, type AxisY, Bleed, type BleedProps, Box, type BoxProps$8 as BoxProps, type Breakpoint, Column, type ColumnProps, Columns, type ColumnsProps, type Direction, type Flex, FloatBox, type FloatBoxProps, Grid, type GridProps, Hidden, type HiddenProps, Inline, type InlineProps, Inset, type InsetProps, type OutlineStyle, type Overflow, type PointerEvent, type ResponsiveProp, Row, type RowProps, Rows, type RowsProps, type Space, Stack, type StackProps, type StacksBreakpoints, type Stretch, Tiles, type TilesProps, type Wrap, useBreakpointComparators, useDebugStyle, useResponsiveProp, useSpacingHelpers };
