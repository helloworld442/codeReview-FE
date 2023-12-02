import CategoryHead from "../components/Category/CategoryHead";
import CategoryList from "../components/Category/CategoryList";
import CategoryTemplate from "../components/Category/CategoryTemplate";
import CategoryLayout from "../layout/CategoryLayout";

export default function CategoryPage() {
  return (
    <CategoryLayout>
      <CategoryTemplate>
        <CategoryHead />
        <CategoryList />
      </CategoryTemplate>
    </CategoryLayout>
  );
}
