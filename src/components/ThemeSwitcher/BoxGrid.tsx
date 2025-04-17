import React, { memo } from "react";
import Box from "./Box";

const BoxGrid = memo(({ theme }: { theme: string }) => {
  const boxes = Array.from({ length: 1000 }).map((_, i) => (
    <Box key={i} level={4} theme={theme} />
  ));

  return <div className="grid grid-cols-4 gap-4">{boxes}</div>;
});

BoxGrid.displayName = "BoxGrid";

export default BoxGrid;
