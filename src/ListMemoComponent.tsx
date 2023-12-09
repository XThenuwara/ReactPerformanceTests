import React, { useMemo, useCallback } from "react";

interface NewListComponentProps {
  list: number[];
}

const ListMemoComponent: React.FC<NewListComponentProps> = React.memo(
  ({ list }) => {
    return (
      <div>
        {list.map((item) => {
          console.log("Memo Component", item);
          return <div key={item}>{item}</div>;
        })}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the 'list' prop changes
    return prevProps.list === nextProps.list;
  }
);

export default ListMemoComponent;
