import { useState } from "react";
import styled, { css } from "styled-components";

const categorys = [
  {
    categoryId: 1,
    categoryName: "React",
  },
  {
    categoryId: 2,
    categoryName: "JavaScript",
  },
  {
    categoryId: 3,
    categoryName: "CSS",
  },
  {
    categoryId: 4,
    categoryName: "HTML",
  },
  {
    categoryId: 5,
    categoryName: "Node Js",
  },
  { categoryId: 6, categoryName: "Spring" },
  {
    categoryId: 7,
    categoryName: "Java",
  },
  {
    categoryId: 8,
    categoryName: "Kotlin",
  },
];

export default function CategoryField({
  label,
  value,
  error,
  onAdd,
  onRemove,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleCategory = () => setIsOpen(!isOpen);

  const onCheckCategory = (e, item) => {
    //이미 배열에 원소가 있을 때...
    if (value.includes(item)) {
      onRemove(e, item);
    }

    // 그렇지 않는 경우...
    else {
      onAdd(e, item);
    }
  };

  return (
    <StCategoryField>
      <CategoryFieldLabel>
        {label} <b>*</b>
      </CategoryFieldLabel>
      <CategoryFieldBox>
        <FieldTrigger onClick={onToggleCategory}>
          {value.join(", ") || "카테고리 없음"}
        </FieldTrigger>
        {isOpen && (
          <FieldMenu>
            {categorys.map(({ categoryName, categoryId }) => (
              <FieldItem
                key={categoryId}
                $active={value.includes(categoryName)}
                onClick={(e) => {
                  onCheckCategory(e, categoryName);
                  onToggleCategory();
                }}
              >
                {categoryName}
              </FieldItem>
            ))}
          </FieldMenu>
        )}
      </CategoryFieldBox>
      <CategoryFieldError>{error}</CategoryFieldError>
    </StCategoryField>
  );
}

const StCategoryField = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

const CategoryFieldLabel = styled.label`
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
`;

const CategoryFieldBox = styled.div`
  width: 300px;
  height: auto;
  border: 2px solid #d7e0e6;
  background: #fff;
  border-radius: 8px;
  z-index: 100;
`;

const FieldTrigger = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  line-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const FieldMenu = styled.ul`
  padding: 12px 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FieldItem = styled.li`
  padding: 14px 6px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  cursor: pointer;

  &:hover {
    background: #efefef;
  }

  ${(props) =>
    props.$active &&
    css`
      border: 1px solid rgb(102, 103, 171, 0.8);
      color: rgb(102, 103, 171, 1);
    `}
`;

const CategoryFieldError = styled.h5`
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 300;
  color: red;
`;
