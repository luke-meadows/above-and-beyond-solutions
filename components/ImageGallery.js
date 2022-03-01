import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function ImageGallery({ imgs }) {
  const [pagination, setPagination] = useState(12);
  const [visibleImgs, setVisibleImgs] = useState([]);
  useEffect(() => {}, [pagination]);

  return <div></div>;
}
