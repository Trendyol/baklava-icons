import React, { lazy, Suspense } from "react";
import icons from "../index";
import { IconGallery, IconItem } from "@storybook/blocks";
import synonyms from "../synonyms";
import debounce from "./utils/debounce";

import flexsearch, { type IndexSearchResult } from "flexsearch";

const searchIndex = new flexsearch.Index({
  tokenize: "full",
});

for (const icon of icons) {
  let searchable = icon;
  if (synonyms[icon]) {
    searchable += ` ${synonyms[icon]}`;
  }
  searchIndex.addAsync(icon, searchable);
}

type BlInputProps = {
  value: string;
  onInput?: (value: string) => void;
  style?: React.CSSProperties;
};
function BlInput({ value, onInput, ...props }: BlInputProps) {
  const ref = React.useRef<HTMLElement>();

  React.useLayoutEffect(() => {
    const handleInput = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      onInput?.(detail);
    };

    const { current } = ref;
    if (!current) return;

    current.addEventListener("bl-input", handleInput);

    return () => current.removeEventListener("bl-input", handleInput);
  }, [ref]);

  return (
    // @ts-ignore
    <bl-input
      ref={ref}
      placeholder="Search icons..."
      type="search"
      value={value}
      {...props}
    />
  );
}

type IconSvgProps = {
  name: string;
};
const SvgMap = new Map<string, any>();
export function IconSvg({ name }: IconSvgProps) {
  const Svg = SvgMap.has(name)
    ? SvgMap.get(name)
    : lazy(() => import(`../icons/${name}.svg`));

  SvgMap.set(name, Svg);

  return (
    <Suspense>
      <Svg />
    </Suspense>
  );
}

export function IconList() {
  const [keys, setKeys] = React.useState<IndexSearchResult | null>(null);
  const [query, setQuery] = React.useState<string>("");

  const updateSearchResults = React.useMemo(
    () =>
      debounce((value) => {
        if (value === "") {
          setKeys(null);
        } else {
          searchIndex.searchAsync(value, { limit: 3000 }).then((results) => {
            setKeys(results);
          });
        }
      }, 300),
    []
  );

  const listedIcons = React.useMemo(
    () => (keys === null ? icons : keys),
    [keys]
  );

  React.useEffect(() => {
    updateSearchResults(query);
    return () => {
      updateSearchResults.clear();
    };
  }, [query, updateSearchResults]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BlInput
        value={query}
        onInput={setQuery}
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "var(--bl-size-s) auto var(--bl-size-2xl) auto",
        }}
      />

      <IconGallery>
        {listedIcons.map((iconName) => (
          <IconItem key={iconName} name={iconName}>
            <IconSvg name={iconName} />
          </IconItem>
        ))}
      </IconGallery>
    </div>
  );
}
