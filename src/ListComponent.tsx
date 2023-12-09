import React, { useMemo, useCallback } from 'react';

interface NewListComponentProps {
  list: number[];
}

const ListComponent: React.FC<NewListComponentProps> = ({ list }) => {
  
  return (
    <div>
      {
        list.map((item) => {
          console.log("Normal Component", item);
          return <div key={item}>{item}</div>;
        })
      }
    </div>
  )
}

export default ListComponent;
