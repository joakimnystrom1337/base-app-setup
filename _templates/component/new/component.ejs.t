---
to: src/Components/Atoms/<%= name %>/<%= name %>.tsx
---
import React from 'react';

interface <%= name %>Props {
}

export const <%= name %> = ({
  ...props
}: <%= name %>Props) => {
  return (
    <div {...props} >
      {label}
    </div>
  );
};
