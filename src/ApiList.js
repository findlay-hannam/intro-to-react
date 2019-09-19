import React, { useEffect } from 'react';

export default function ApiList({ data, fetchData }) {
  useEffect(() => { fetchData() }, [fetchData]);
  return (
    <ul>
      {data.map(({ title, thumbnailUrl }) => <li key={title}><h2>{title}</h2><img src={thumbnailUrl} /></li>)}
    </ul>
  );
}
