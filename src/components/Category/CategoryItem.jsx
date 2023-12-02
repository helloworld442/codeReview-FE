import styled from "styled-components";

export default function CategoryItem({ category }) {
  const { categoryId, categoryName, categoryDesc } = category;

  return (
    <StCategoryItem>
      <a href={"/posts/" + categoryId}>
        <CategoryItemDesc>{categoryDesc}</CategoryItemDesc>
        <CategoryItemTitle>{categoryName}</CategoryItemTitle>
      </a>
    </StCategoryItem>
  );
}

const StCategoryItem = styled.li`
  width: 100%;
  height: 230px;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: rgb(102, 103, 171, 0.8);

  &:nth-child(2) {
    background: rgb(64, 58, 107, 0.8);
  }

  &:hover {
    transform: scale(1.05);
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

const CategoryItemDesc = styled.h4`
  margin-bottom: 6px;
  font-size: 0.75rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #f8f8f8;
  line-height: 1rem;
`;

const CategoryItemTitle = styled.h3`
  margin-top: 6px;
  font-size: 1.6rem;
  font-weight: 300;
  color: #f8f8f8;
`;
