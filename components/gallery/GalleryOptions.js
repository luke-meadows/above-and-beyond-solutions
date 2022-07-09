import styled from 'styled-components';
import GalleryOption from './GalleryOption';
export default function GalleryOptions({
  activeOption,
  setActiveOption,
  setPagination,
}) {
  return (
    <StyledGalleryOptions>
      <GalleryOption
        tag="all"
        title="All"
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        setPagination={setPagination}
      />
      <GalleryOption
        tag="brand-activations"
        title="Brand Activations"
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        setPagination={setPagination}
      />
      <GalleryOption
        tag="exhibitions"
        title="Exhibitions"
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        setPagination={setPagination}
      />
      <GalleryOption
        tag="live-events"
        title="Live Events"
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        setPagination={setPagination}
      />
    </StyledGalleryOptions>
  );
}

const StyledGalleryOptions = styled.div`
  display: flex;
`;
