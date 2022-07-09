import styled from 'styled-components';
export default function GalleryOption({
  title,
  tag,
  activeOption,
  setActiveOption,
  setPagination,
}) {
  function handleCategoryChange(tag) {
    setPagination(12);
    if (tag === 'all') {
      setActiveOption(undefined);
    } else {
      setActiveOption(tag);
    }
  }
  return (
    <StyledOption
      className={
        activeOption === tag
          ? 'button-active'
          : tag === 'all' && activeOption === undefined
          ? 'button-active'
          : ''
      }
      data-value={tag}
      onClick={() => handleCategoryChange(tag)}
    >
      {title}
    </StyledOption>
  );
}

const StyledOption = styled.button`
  background: none;
  padding: 0.5rem 0;
  min-width: fit-content;
  text-align: left;
  margin-right: 2rem;
  color: var(--pink);
  &.button-active {
    color: var(--black);
  }
`;
