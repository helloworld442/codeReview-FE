import styled from "styled-components";
import { device } from "../../utils/media";
import CategoryItem from "./CategoryItem";

const categorys = [
  {
    categoryId: 1,
    categoryName: "React",
    categoryDesc: "프론트엔드의 근본인",
  },
  {
    categoryId: 2,
    categoryName: "JavaScript",
    categoryDesc: "웹 개발자에게 필수인",
  },
  {
    categoryId: 3,
    categoryName: "CSS",
    categoryDesc: "스타일링의 근본인",
  },
  {
    categoryId: 4,
    categoryName: "HTML",
    categoryDesc: "많은 사람들에게 알려진",
  },
  {
    categoryId: 5,
    categoryName: "Node Js",
    categoryDesc: "요즘 핫하게 뜨고 있는",
  },
  { categoryId: 6, categoryName: "Spring", categoryDesc: "백엔드의 근본인" },
  {
    categoryId: 7,
    categoryName: "Java",
    categoryDesc: "백엔드라면 꼭 알아야 할",
  },
  {
    categoryId: 8,
    categoryName: "Kotlin",
    categoryDesc: "안드라드라면 꼭 알아야 할",
  },
];

export default function CategoryList() {
  const newCategorys = categorys.reduce((acc, _, index) => {
    if (index % 2 === 0) {
      acc.push(categorys.slice(index, index + 2));
    }
    return acc;
  }, []);

  return (
    <CategoryListBox>
      {newCategorys.map((categorys, i) => (
        <StCategoryList>
          {categorys.map((category, j) => (
            <CategoryItem key={i + j} category={category} />
          ))}
        </StCategoryList>
      ))}
    </CategoryListBox>
  );
}

const CategoryListBox = styled.div`
  width: 900px;
  margin: 72px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 14px;

  @media ${device.tablet} {
    width: 600px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:nth-child(2n) {
    position: relative;
    top: 108px;
  }

  @media ${device.tablet} {
    &:nth-child(2n) {
      position: relative;
      top: 0;
    }

    &:nth-child(3n + 2) {
      position: relative;
      top: 108px;
    }
  }
`;
